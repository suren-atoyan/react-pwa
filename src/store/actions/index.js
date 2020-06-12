import { themePair } from 'config';

const theme = {
  toggle({ effects, state }) {
    const mode = state.theme.mode === themePair[0] ? themePair[1] : themePair[0];
    state.theme.mode = mode;
    effects.theme.lsSave(mode);
  },
};

const sw = {
  handleSuccess({ state }) {
    state.sw.isInitialized = true;
  },
  handleUpdate({ effects, state }, registration) {
    state.sw.isUpdated = true;
    effects.sw.saveRegistration(registration);
  },
  update({ effects, state }) {
    effects.sw.update();
  },
};

export {
  theme,
  sw,
};
