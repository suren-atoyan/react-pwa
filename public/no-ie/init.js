var state = {
  language: 'en'
};

function setState(update) {
  // Okay, it's not what you expect, but
  // we are not going to implement
  // object spread/assign or deep merge
  // for ie
  state = update;

  render();
}

var translations = {
  en: {
    name: 'En',
    title: 'You are using Internet Explorer "browser"',
    content_info: 'Fortunately or unfortunately we don\'t support that browser',
    content_request: 'We kindly ask you to update your browser to be able to visit this site',
  },
  ru: {
    name: 'Рус',
    title: 'Вы используете "браузер" Internet Explorer',
    content_info: 'К счастью или к сожалению, мы не поддерживаем этот браузер',
    content_request: 'Мы просим вас обновить браузер, чтобы иметь возможность посещать этот сайт',
  },
  hy: {
    name: 'Հայ',
    title: 'Դուք օգտագործում եք Internet Explorer «զննարկիչ»',
    content_info: 'Բարեբախտաբար, թե դժբախտաբար մենք չենք աջակցում տվյալ զննարկիչը',
    content_request: 'Խնդրում ենք թարմացնել ձեր զննարկիչը, որպեսզի հնարավորություն ունենաք այցելել տվյալ կայքը',
  }
};

function handleToggleLanguage(ev) {
  setState({
    language: ev.target.value
  });
}

function render() {
  var title = document.getElementById('ie_title');
  var content_info = document.getElementById('ie_content_info');
  var content_request = document.getElementById('ie_content_request');

  title.innerText = translations[state.language].title;

  content_info.innerText = translations[state.language].content_info;

  content_request.innerText = translations[state.language].content_request;
}

function initialRender() {
  var container = document.createElement('div');
  container.id = 'ie_container';

  var box = document.createElement('div');
  box.id = 'ie_box';

  // Language select
  var lang_select = document.createElement('select');
  lang_select.id = 'ie_language_select';
  var supported_languages = [];
  for (var lang in translations) { // because Object.keys has started to be supported from ie9
    supported_languages.push(lang);
  }

  for (var i = 0; i < supported_languages.length; i++) {
    var current_language = supported_languages[i];
    var select_option = document.createElement('option');
    select_option.value = current_language;
    select_option.innerHTML = translations[current_language].name;
    lang_select.appendChild(select_option);
  }
  lang_select.onchange = handleToggleLanguage;

  // Title
  var title = document.createElement('h2');
  title.id = 'ie_title';

  var hr = document.createElement('hr');

  // Content
  var content_info = document.createElement('h3');
  content_info.id = 'ie_content_info';

  var content_request = document.createElement('h3');
  content_request.id = 'ie_content_request';

  // Footer
  var footer = document.createElement('div');
  footer.id = 'ie_footer';

  var copyright = document.createElement('div');
  copyright.innerHTML = 'copyright &copy;';

  var hr_footer = document.createElement('hr');
  footer.appendChild(hr_footer);
  footer.appendChild(copyright);

  box.appendChild(lang_select);
  box.appendChild(title);
  box.appendChild(hr);
  box.appendChild(content_info);
  box.appendChild(content_request);
  box.appendChild(footer);
  container.appendChild(box);

  document.body.appendChild(container);

  render();
}

initialRender();
