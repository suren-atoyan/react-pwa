const email = 'super-email-of-the-auther@gmail.com';
const domain = 'my-domain.com'

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
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'Hey bro? What are you looking for?',
};

const copyright = {
  title: 'copyright © ',
  link: domain,
};

const cancelationMessage = 'operation is manually canceled';

const dateFormat = 'MMMM DD, YYYY';

const appTitle = 'React PWA';

const themePair = ['dark', 'light'];

export {
  messages,
  cancelationMessage,
  dateFormat,
  copyright,
  domain,
  appTitle,
  themePair,
};
