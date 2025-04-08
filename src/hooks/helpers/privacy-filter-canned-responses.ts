import { CannedResponse } from '../../types/canned-responses';
import { CannedResponseFilterType } from '../../types/filter-type';

export const privacyFilterCannedResponses = (
  cannedResponses: CannedResponse[],
  filter: CannedResponseFilterType,
): CannedResponse[] => {
  let filteredTags: CannedResponse[] = [];

  switch (filter) {
    case 'shared':
      filteredTags = cannedResponses.filter((cannedResponse) => !cannedResponse.isPrivate);
      break;
    case 'private':
      filteredTags = cannedResponses.filter((cannedResponse) => cannedResponse.isPrivate);
      break;
    default:
      return cannedResponses;
  }

  return filteredTags;
};
