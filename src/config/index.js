import isMobile from 'utils/isMobile';

/* set your data here */
const email = 'super-email-of-the-auther@gmail.com';
const domain = 'your-project-domain.com'
/* ***************** */

const repository = 'https://github.com/suren-atoyan/react-pwa';

const messages = {
  app: {
    crash: {
      title: 'Oooops... Sorry, I guess, something went wrong. You can:',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea',
  },
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'Hey bro? What are you looking for?',
};

const copyright = {
  title: 'copyright © ',
  link: domain,
};

const themes = {
  light: {
    palette: {
      type: 'light',
      background: {
        default: '#fafafa',
        paper: '#fff',
      },
      primary: {
        light: '#7986cb',
        main: '#3f51b5',
        dark: '#303f9f',
        contrastText: '#fff',
      },
    },
  },

  dark: {
    palette: {
      type: 'dark',
      background: {
        default: '#111',
        paper: '#171717',
      },
      primary: {
        light: '#7986cb',
        main: '#333',
        dark: '#303f9f',
        contrastText: '#fff',
      },
    },
  },
};

const cancelationMessage = 'operation is manually canceled';

const dateFormat = 'MMMM DD, YYYY';

const title = 'React PWA';

const themePair = ['dark', 'light'];

const notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 3000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const giphy404 = 'https://giphy.com/embed/8L0Pky6C83SzkzU55a';

export {
  messages,
  cancelationMessage,
  dateFormat,
  copyright,
  email,
  domain,
  repository,
  loader,
  title,
  themePair,
  giphy404,
  notifications,
  themes,
};
