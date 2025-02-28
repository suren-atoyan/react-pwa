import { BrowserRouter } from 'react-router';

import Header from './sections/Header';
import Sidebar from './sections/Sidebar';
import Pages from './routes/Pages';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
