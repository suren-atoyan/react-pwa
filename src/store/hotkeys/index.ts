import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';

import type { Actions } from './types';

const hotKeysDialogState = atom<boolean>({
  key: 'hotkeys-dialog-state',
  default: false,
});

function useHotKeysDialog(): [boolean, Actions] {
  const [isOpen, setIsOpen] = useRecoilState(hotKeysDialogState);

  const toggle = useCallback(() => {
    setIsOpen((isOpen: boolean) => !isOpen);
  }, [setIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const open = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const memoizedActions = useMemo(() => ({ toggle, close, open }), [toggle, close, open]);

  return [isOpen, memoizedActions];
}

export default useHotKeysDialog;
