import { API_URL } from '@/const';
import { useEffect, useState } from 'react';

// This function is needed because Chrome doesn't accept a base64 encoded string
// as value for applicationServerKey in pushManager.subscribe yet
// https://bugs.chromium.org/p/chromium/issues/detail?id=802280
function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const createSubscriber = (registration: ServiceWorkerRegistration) =>
  function subscribeToPush(event: any) {
    const payload = event.data?.text() ?? 'no payload';
    console.log('received push notification', payload);
    event.waitUntil(
      registration?.showNotification('ServiceWorker Cookbook', {
        body: payload,
      }),
    );
  };

export const usePushNotifications = ({
  registration,
}: {
  registration: ServiceWorkerRegistration | undefined;
}) => {
  const [subscription, setSubscription] = useState<PushSubscription>();

  useEffect(() => {
    let subscriber: ReturnType<typeof createSubscriber> | undefined = undefined;
    if (subscription && registration) {
      console.log('adding push listener');
      subscriber = createSubscriber(registration);
      self.addEventListener('push', subscriber);
      console.log('added push listener');
    }
    return () => {
      if (subscriber) {
        console.log('removed push listener');
        self.removeEventListener('push', subscriber);
      }
    };
  }, [registration, subscription]);

  useEffect(() => {
    const subscribeToPush = async (registration: ServiceWorkerRegistration) => {
      let subscription = await registration.pushManager.getSubscription();

      if (!subscription) {
        const response = await fetch(`${API_URL}/vapidPublicKey`);
        const vapidPublicKey = await response.json();
        // Chrome doesn't accept the base64-encoded (string) vapidPublicKey yet
        // urlBase64ToUint8Array() is defined in /tools.js
        const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

        // Otherwise, subscribe the user (userVisibleOnly allows to specify that we don't plan to
        // send notifications that don't have a visible effect for the user).
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidKey,
        });
      }
      await fetch(`${API_URL}/subscribe`, {
        method: 'POST',
        body: JSON.stringify({ subscription }),
      });
      setSubscription(subscription);
    };

    if (registration) {
      void subscribeToPush(registration);
    }
  }, [registration]);

  return { subscription };
};
