import { type MouseEvent, useState } from 'react';
import { ChevronDown, ChevronUp } from '@livechat/design-system-icons';
import { type IconSource } from '@livechat/design-system-react-components';
import { format } from 'date-fns';
import { getExtractedText } from './helpers';
import { DateFormat } from '../../constants/date-format';
import useToggle from '../../hooks/use-toggle';
import { CannedResponse } from '../../types/canned-responses';

interface UseCannedResponseItemProps {
  item: CannedResponse;
}

interface UseCannedResponseItem {
  authorName: string;
  avatarUrl: string;
  content: string;
  foldButtonContent: string;
  foldButtonIcon: IconSource | null;
  handleOnCancelClick: () => void;
  handleOnRemoveIconClick: (event: MouseEvent<HTMLButtonElement>) => void;
  lastAction: string;
  lastDate: string;
  showConfirmOverlay: boolean;
  justModified: boolean;
  toggleFolded: () => void;
}

const maxTextLength = 150;

export const useCannedResponseItem = ({ item }: UseCannedResponseItemProps): UseCannedResponseItem => {
  const { createdBy, modifiedBy, isPrivate, avatarUrl, text, modificationTimestamp } = item;
  const [isFolded, toggleFolded] = useToggle(true);
  const [showConfirmOverlay, setShowConfirmOverlay] = useState(false);
  const performedAction = modifiedBy ? 'Modified' : 'Added';
  const lastAction = isPrivate ? performedAction.toLocaleLowerCase() : performedAction;
  const isTextTooLong = text?.length > maxTextLength;
  const foldButtonContent = isFolded ? 'Show more ' : 'Show less ';
  const foldButtonIcon = isFolded ? ChevronDown : ChevronUp;
  const content = isTextTooLong && isFolded ? getExtractedText(text, maxTextLength) : text;
  const handleOnRemoveIconClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    setShowConfirmOverlay(true);
  };
  const handleOnCancelClick = (): void => {
    setShowConfirmOverlay(false);
  };
  const justModified = modificationTimestamp > new Date().getTime() - 5e3;

  return {
    authorName: createdBy || '',
    avatarUrl: avatarUrl || '',
    content,
    foldButtonContent: isTextTooLong ? foldButtonContent : '',
    foldButtonIcon: isTextTooLong ? foldButtonIcon : null,
    handleOnCancelClick,
    handleOnRemoveIconClick,
    lastAction,
    lastDate: format(modificationTimestamp, DateFormat.LongDate),
    showConfirmOverlay,
    toggleFolded,
    justModified,
  };
};
