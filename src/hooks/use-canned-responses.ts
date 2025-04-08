import { useState, type SetStateAction, type Dispatch, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { CannedResponseFilterType } from '../types/filter-type';
import { CannedResponse } from '../types/canned-responses';
import { getCannedResponses } from '../store/selectors';
import { privacyFilterCannedResponses } from './helpers/privacy-filter-canned-responses';
import { searchCannedResponses } from './helpers/search-canned-responses';
import { useDebounce } from './use-debounce';

interface UseCannedResponses {
  cannedResponses: CannedResponse[];
  isEmpty: boolean;
  filter: CannedResponseFilterType;
  search: string;
  setFilter: Dispatch<SetStateAction<CannedResponseFilterType>>;
  setSearch: Dispatch<SetStateAction<string>>;
}

const getFilteredAndSortedResponses = (
  responses: CannedResponse[],
  filter: CannedResponseFilterType,
  search: string,
): CannedResponse[] => {
  if (responses.length === 0) return [];

  return searchCannedResponses(privacyFilterCannedResponses(responses, filter), search).sort(
    (first, second) => second.modificationTimestamp - first.modificationTimestamp,
  );
};

export const useCannedResponses = (): UseCannedResponses => {
  const [filter, setFilter] = useState<CannedResponseFilterType>('all');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const cannedResponses = useSelector(getCannedResponses);
  const isEmpty = cannedResponses.length === 0;
  const filteredCannedResponses = useMemo(
    () => getFilteredAndSortedResponses(cannedResponses, filter, debouncedSearch),
    [cannedResponses, filter, debouncedSearch],
  );

  return {
    cannedResponses: filteredCannedResponses,
    isEmpty,
    filter,
    search,
    setFilter,
    setSearch,
  };
};
