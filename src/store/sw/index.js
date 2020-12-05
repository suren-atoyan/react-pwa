import { atom, useRecoilState } from 'recoil';
import state from 'state-local';

import noop from 'utils/noop';
import effects from './effects';

const [getActions, setActions] = state.create({
  handleSuccess: noop,
  handleUpdate: noop,
  update: noop,
});

const swState = atom({
  key: 'swState',
  default: {
    isInitialized: false,
    isUpdated: false,
    registration: null,    
  },
});

function useSW() {
  const [sw, setSW] = useRecoilState(swState);

  function handleSuccess() {
    setSW(state => ({ ...state, isInitialized: true }));
  }

  function handleUpdate(registration) {
    setSW(state => ({ ...state, isUpdated: true }));
    effects.storeRegistration(registration);
  }

  function update() {
    effects.update();
  }

  setActions({ handleSuccess, handleUpdate, update });

  return [sw, { handleSuccess, handleUpdate, update }];
}

export { getActions };

export default useSW;
