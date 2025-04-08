import { CannedResponse } from '../../types/canned-responses';

export const searchCannedResponses = (cannedResponses: CannedResponse[], search: string): CannedResponse[] => {
  if (!search) return cannedResponses;

  const lowerSearchText = search.toLowerCase();
  return cannedResponses.filter(
    (cannedResponse) =>
      cannedResponse.createdBy?.includes(lowerSearchText) ||
      cannedResponse.text.includes(lowerSearchText) ||
      cannedResponse.tags.some((tag) => tag.includes(lowerSearchText)),
  );
};
