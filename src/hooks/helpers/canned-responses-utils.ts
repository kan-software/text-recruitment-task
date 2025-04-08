import { CannedResponse } from '../../types/canned-responses';
import { CannedResponseFilterType } from '../../types/filter-type';

export const sortCannedResponses = (cannedResponses: CannedResponse[]): CannedResponse[] => {
  return [...cannedResponses].sort((first, second) => second.modificationTimestamp - first.modificationTimestamp);
};

export const searchCannedResponses = (cannedResponses: CannedResponse[], search: string): CannedResponse[] => {
  if (!search) return cannedResponses;

  const lowerSearchText = search.toLowerCase();
  return cannedResponses.filter(
    (cannedResponse) =>
      (!cannedResponse.isPrivate && cannedResponse.createdBy?.toLowerCase().includes(lowerSearchText)) ||
      cannedResponse.text.toLowerCase().includes(lowerSearchText) ||
      cannedResponse.tags.some((tag) => tag.toLowerCase().includes(lowerSearchText)),
  );
};

export const groupCannedResponsesByFilterType = (
  cannedResponses: CannedResponse[],
): Record<CannedResponseFilterType, CannedResponse[]> => ({
  all: [...cannedResponses],
  private: cannedResponses.filter((response) => response.isPrivate),
  shared: cannedResponses.filter((response) => !response.isPrivate),
});
