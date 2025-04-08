import { useCallback, useEffect, useRef, type RefObject } from 'react';
import { KeyCodeEnum } from './constants';

type UseClickOutside = (
  onClose: () => void,
  preventClose?: (node: Node, ref: RefObject<HTMLDivElement>) => boolean,
) => { wrapperRef: RefObject<HTMLDivElement> };

export const useClickOutside: UseClickOutside = (onClose, preventClose) => {
  const refObject = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      if (
        (refObject.current && refObject.current.contains(e.target as Node)) ||
        (preventClose && preventClose(e.target as Node, refObject))
      ) {
        return;
      }

      onClose();
    },
    [onClose, preventClose, refObject],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.keyCode as KeyCodeEnum) === KeyCodeEnum.Esc) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return { wrapperRef: refObject };
};
