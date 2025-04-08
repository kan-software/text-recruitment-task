import { type ComponentProps } from 'react';

import { type Avatar as DSAvatar } from '@livechat/design-system-react-components';

export type DSAvatarProps = ComponentProps<typeof DSAvatar>;

export type AvatarSize = DSAvatarProps['size'];
