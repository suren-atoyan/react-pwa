import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// from MUI's toolpad we use only Notifications
import { NotificationsProvider } from '@toolpad/core/useNotifications';
import { Provider } from 'jotai';

import ThemeProvider from '@/theme/Provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <Provider>
        <ThemeProvider>
          <NotificationsProvider>
            <App />
          </NotificationsProvider>
        </ThemeProvider>
      </Provider>
    </StrictMode>,
  );
}

export default render;
