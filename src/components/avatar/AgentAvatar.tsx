import type { FC } from 'react';

import { Avatar as DSAvatar } from '@livechat/design-system-react-components';

import type { DSAvatarProps } from './types';

interface Props extends Omit<DSAvatarProps, 'color' | 'shape' | 'status' | 'type'> {
  status?: undefined;
}

export const AgentAvatar: FC<Props> = ({ src, status, text, size, className, alt, withRim }) => {
  return (
    <DSAvatar
      size={size}
      type={src ? 'image' : 'text'}
      src={src}
      status={status}
      text={text}
      className={className}
      alt={alt}
      withRim={withRim}
    />
  );
};
