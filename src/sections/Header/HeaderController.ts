import { languageState } from '@/store/language';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const HeaderController = () => {
  const [lang, setLang] = useRecoilState(languageState);
  const router = useNavigate();

  const handleClickLogo = () => {
    router('/');
  };

  const handleClickLink = (path: string) => {
    router(path);
  };

  const handleOpenChatBot = () => {};

  const handleSetLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as 'english' | 'spanish');
  };

  return {
    language: lang,
    handleClickLogo,
    handleOpenChatBot,
    handleClickLink,
    handleSetLanguage,
  };
};
