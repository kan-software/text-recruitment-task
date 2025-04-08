import { People, Person } from '@livechat/design-system-icons';
import { Icon, type SegmentedControlProps } from '@livechat/design-system-react-components';

const sharedIcon = <Icon source={People} />;
const privateIcon = <Icon source={Person} />;

export const CANNED_RESPONSES_BUTTONS: SegmentedControlProps['buttons'] = [
  { id: 'all', label: 'All' },
  { id: 'shared', label: 'Shared', icon: sharedIcon },
  { id: 'private', label: 'Private', icon: privateIcon },
];
