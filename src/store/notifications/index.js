import { atom, useRecoilState } from 'recoil';

import * as effects from 'store/effects';

import { notifications as notificationsDefaults } from 'config';

const notificationsState = atom({
  key: 'notificationsState',
  default: [],
});

function useNotifications() {
  const [notifications, setNotifications] = useRecoilState(notificationsState);

  function push(notification) {
    setNotifications(notifications => [...notifications, {
      ...notification,
      dismissed: false,
      options: {
        ...notificationsDefaults.options,
        ...notification.options,
        key: effects.genUUID(),
      },
    }]);
  }

  function close(key, dismissAll = !key) {
    setNotifications(notifications => notifications.map(
      notification => (dismissAll || notification.options.key === key)
        ? { ...notification, dismissed: true }
        : { ...notification }
    ));
  }

  function remove(key) {
    setNotifications(notifications => notifications.filter(
      notification => notification.options.key !== key,
    ));
  }

  return [notifications, { push, close, remove }];
}

export default useNotifications;
