const title = 'React PWA';

const email = 'auther-email@gmail.com';

const repository = 'https://github.com/suren-atoyan/react-pwa';

const dateFormat = 'MMMM DD, YYYY';

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Starter kit for modern web applications',
};

export { loader, dateFormat, repository, email, title, defaultMetaTags };
