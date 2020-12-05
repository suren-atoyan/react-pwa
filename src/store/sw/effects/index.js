import resetApp from 'utils/resetApp';
import state from 'state-local';

const [getSW, setSW] = state.create({ registration: null });

function update() {
  const SW = getSW();
  const registrationWaiting = SW.registration?.waiting;

  if (registrationWaiting) {
    registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
    registrationWaiting.onstatechange = function(e) {
      if (e.target.state === 'activated') {
        resetApp();
      }
    };
  }
}

function storeRegistration(registration) {
  setSW({ registration });
}

const effects = { update, storeRegistration }; 

export default effects;
