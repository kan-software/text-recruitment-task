import type { FC, MouseEvent } from 'react';

import { Button } from '@livechat/design-system-react-components';

import { REMOVE_RESPONSE_BUTTON_TEXT } from './constants';

import * as styles from './styles';
import { FakeLink } from '../fake-link/FakeLink';
import { useClickOutside } from '../../hooks/use-click-outside';

interface Props {
  onConfirmClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  onCancelClick: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export const ConfirmationOverlay: FC<Props> = ({ onCancelClick, onConfirmClick }) => {
  const { wrapperRef } = useClickOutside(onCancelClick);

  return (
    <div ref={wrapperRef} className={styles.confirmationOverlay}>
      <div>
        <Button onClick={onConfirmClick} kind={'destructive'}>
          {REMOVE_RESPONSE_BUTTON_TEXT}
        </Button>
        {' or '}
        <FakeLink onClick={() => onCancelClick()}>cancel</FakeLink>
      </div>
    </div>
  );
};
