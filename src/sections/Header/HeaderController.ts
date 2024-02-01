import { useNavigate } from 'react-router-dom';

export const HeaderController = () => {
  const router = useNavigate();

  const handleClickLogo = () => {
    router('/');
  };

  const handleClickLink = (path: string) => {
    router(path);
  };

  const handleOpenChatBot = () => {};

  return {
    handleClickLogo,
    handleOpenChatBot,
    handleClickLink,
  };
};
