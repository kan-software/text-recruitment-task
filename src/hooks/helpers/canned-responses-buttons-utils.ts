import { SegmentedControlProps } from '@livechat/design-system-react-components';
import { CANNED_RESPONSES_BUTTONS } from '../../components/canned-responses-buttons/configuration';
import { CannedResponse } from '../../types/canned-responses';
import { CannedResponseFilterType } from '../../types/filter-type';

export const getCannedResponsesButtons = (
  cannedResponesByFilterType: Record<CannedResponseFilterType, CannedResponse[]>,
): SegmentedControlProps['buttons'] =>
  CANNED_RESPONSES_BUTTONS.map((button) => ({
    ...button,
    label: `${button.label} (${cannedResponesByFilterType[button.id as CannedResponseFilterType].length})`,
  }));
