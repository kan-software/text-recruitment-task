import type { MouseEvent, FC, HTMLAttributes } from 'react';

import { cx } from '@emotion/css';
import { Text } from '@livechat/design-system-react-components';

import * as styles from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
  onClick(event: MouseEvent): void;
  disabled?: boolean;
  as?: string;
}

export const FakeLink: FC<Props> = ({ className = '', as = 'span', ...props }) => (
  <Text
    as={as}
    role="link"
    className={cx(styles.fakeLink, { [styles.disabledFakeLink]: props.disabled }, className)}
    {...props}
  />
);
