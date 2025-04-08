import type { ReactElement, ReactNode, FC } from 'react';

import { cx } from '@emotion/css';
import { Heading, Icon } from '@livechat/design-system-react-components';

import * as styles from './styles';
import { MoodEmpty } from '@livechat/design-system-icons';

interface Props {
  icon?: boolean;
  title?: string;
  description?: ReactNode;
  button?: ReactElement;
  footer?: ReactElement;
  className?: string;
  titleStyles?: string;
  testId?: string;
}

export const EmptyState: FC<Props> = ({ icon, title, titleStyles, description, button, footer, className }) => (
  <div className={cx(styles.container, className)}>
    {icon && <Icon size="large" source={MoodEmpty} className={styles.icon} />}
    {title && (
      <Heading size="xs" className={cx(styles.title, titleStyles)}>
        {title}
      </Heading>
    )}
    {description && <div className={styles.description}>{description}</div>}
    {button && <div className={styles.button}>{button}</div>}
    {footer && <div className={styles.footer}>{footer}</div>}
  </div>
);
