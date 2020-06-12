import React from 'react';

import { createOvermind } from 'overmind';
import { createHook, Provider } from 'overmind-react';

import { initialState } from './state';
import * as actions from './actions';
import * as effects from './effects';

export const store = createOvermind({
  state: { ...initialState },
  actions,
  effects,
}, {
  devtools: false,
  logProxies: true,
  name: 'mainStore',
});

export const useStore = createHook(store);

export const StoreProvider = ({ children }) => <Provider value={store}>{children}</Provider>;

export default store;
