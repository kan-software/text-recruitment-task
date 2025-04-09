import { useState, type SetStateAction, type Dispatch, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { CannedResponseFilterType } from '../types/filter-type';
import { CannedResponse } from '../types/canned-responses';
import { getCannedResponses } from '../store/selectors';
import {
  groupCannedResponsesByFilterType,
  searchCannedResponses,
  sortCannedResponses,
} from './helpers/canned-responses-utils';
import { SegmentedControlProps } from '@livechat/design-system-react-components';
import { getCannedResponsesButtons } from './helpers/canned-responses-buttons-utils';
import { useDebounce } from './use-debounce';

interface UseCannedResponses {
  cannedResponses: CannedResponse[];
  isEmpty: boolean;
  filter: CannedResponseFilterType;
  inputSearch: string;
  cannedResponsesButtons: SegmentedControlProps['buttons'];
  setFilter: Dispatch<SetStateAction<CannedResponseFilterType>>;
  setInputSearch: Dispatch<SetStateAction<string>>;
  setTag: (value: string) => void;
}

export const useCannedResponses = (): UseCannedResponses => {
  const [filter, setFilter] = useState<CannedResponseFilterType>('all');
  const [inputSearch, setInputSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useDebounce(inputSearch);
  const cannedResponsesKeyMap = useSelector(getCannedResponses);

  const searchedResponsesByFilter = useMemo(() => {
    const cannedResponses = Object.values(cannedResponsesKeyMap);
    const sortedResponses = sortCannedResponses(cannedResponses);
    const searchedResponses = searchCannedResponses(sortedResponses, debouncedSearch);
    return groupCannedResponsesByFilterType(searchedResponses);
  }, [cannedResponsesKeyMap, debouncedSearch]);

  const cannedResponsesButtons = useMemo(
    () => getCannedResponsesButtons(searchedResponsesByFilter),
    [searchedResponsesByFilter],
  );

  const cannedResponses = searchedResponsesByFilter[filter];
  const isEmpty = cannedResponses.length === 0;

  const setTag = (value: string) => {
    setInputSearch(value);
    setDebouncedSearch(value);
  };

  return {
    cannedResponses,
    cannedResponsesButtons,
    isEmpty,
    filter,
    inputSearch,
    setFilter,
    setInputSearch,
    setTag,
  };
};
