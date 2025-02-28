import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'jotai';

import ThemeProvider from '@/theme/Provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <Provider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </StrictMode>,
  );
}

export default render;
