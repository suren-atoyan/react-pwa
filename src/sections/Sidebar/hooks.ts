import { useCallback } from 'react';

import { useAtom } from 'jotai';

import { isSidebarOpenState } from './atoms';

function useSidebar() {
  const [isOpen, setIsOpen] = useAtom(isSidebarOpenState);

  const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  const open = useCallback(() => setIsOpen(true), [setIsOpen]);

  return {
    isOpen,
    toggle,
    close,
    open,
  };
}

export { useSidebar };
