import { atom } from 'recoil';

export const languageState = atom<'english' | 'spanish'>({
  key: 'language',
  default: 'english',
});

interface TranslationMap {
  [key: string]: string;
}

interface Translations {
  english: TranslationMap;
  spanish: TranslationMap;
}

export const translate = (key: string, language: 'english' | 'spanish') => {
  const translations: Translations = {
    english: {
      solutions: 'Solutions',
      team: 'Team',
      contact: 'Contact',
      wdyn: 'What do you need?',
    },
    spanish: {
      solutions: 'Soluciones',
      team: 'Equipo',
      contact: 'Contacto',
      wdyn: '¿Qué necesitas?',
    },
  };

  return translations[language][key];
};
