import HomeIcon from '@mui/icons-material/Home';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  [Pages.Solutions]: {
    component: asyncComponentLoader(() => import('@/pages/Solutions')),
    path: '/solutions',
    title: 'Solutions',
    icon: EmojiObjectsOutlinedIcon,
  },
  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/pages/About')),
    path: '/about',
    title: 'About Us',
    icon: InfoOutlinedIcon,
  },
  // [Pages.Contact]: {
  //   component: asyncComponentLoader(() => import('@/pages/Contact')),
  //   path: '/contact',
  //   title: 'Contact',
  //   icon: TerrainIcon,
  // },
  [Pages.Chat]: {
    component: asyncComponentLoader(() => import('@/pages/Chat')),
    path: '/chat',
    title: "Let's Chat",
    icon: ChatOutlinedIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
