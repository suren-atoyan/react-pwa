import { atom, useRecoilState } from 'recoil';
import state from 'state-local';

import { noop } from 'utils';
import * as effects from 'store/effects';

const [getSWActions, setSWActions] = state.create({
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
    effects.sw.saveRegistration(registration);
  }

  function update() {
    effects.sw.update();
  }

  setSWActions({ handleSuccess, handleUpdate, update });

  return [sw, { handleSuccess, handleUpdate, update }];
}

export { getSWActions };

export default useSW;
