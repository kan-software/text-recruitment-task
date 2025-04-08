import type { FC } from 'react';
import { cx } from '@emotion/css';
import { ContentCopyFilled, DeleteFilled, EditFilled } from '@livechat/design-system-icons';
import { Icon, Tooltip } from '@livechat/design-system-react-components';
import { ConfirmationOverlay } from './ConfirmationOverlay';
import { CANNED_COPY_LABEL, CANNED_EDIT_LABEL, CANNED_REMOVE_LABEL } from './constants';
import { useCannedResponseItem } from './use-canned-response-item';
import { CannedResponse } from '../../types/canned-responses';
import { iconButton } from './styles';
import { FakeLink } from '../fake-link/FakeLink';
import { AgentAvatar } from '../avatar/AgentAvatar';

import * as styles from './styles';
interface Props {
  item: CannedResponse;
}

export const CannedResponseItem: FC<Props> = ({ item }) => {
  const {
    authorName,
    avatarUrl,
    content,
    foldButtonContent,
    foldButtonIcon,
    lastAction,
    lastDate,
    showConfirmOverlay,
    toggleFolded,
    justModified,
  } = useCannedResponseItem({ item });
  const { id, isPrivate } = item;

  const userInfo = isPrivate ? (
    <div className={styles.modifiedText}>
      Private, {lastAction} {lastDate}
    </div>
  ) : (
    <div className={styles.modifiedText}>
      <AgentAvatar src={avatarUrl} size="xxsmall" className={styles.avatar} /> {lastAction} by {authorName}, {lastDate}
    </div>
  );

  return (
    <div className={cx(styles.item, { justModified })} key={`item-${id}`}>
      <div className={styles.itemHeader}>
        <div className={styles.tags}>
          <ul>
            {item.tags.map((tag) => (
              <li
                className={cx(styles.sharedItemHandle, { [styles.privateItemHandle]: isPrivate })}
                key={tag}
                data-testid={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="controls">
          <Tooltip
            theme="invert"
            placement="top"
            triggerRenderer={() => (
              <button className={iconButton} aria-label={CANNED_EDIT_LABEL}>
                <Icon source={EditFilled} size="small" />
              </button>
            )}
          >
            <span>{CANNED_EDIT_LABEL}</span>
          </Tooltip>
          <Tooltip
            theme="invert"
            placement="top"
            triggerRenderer={() => (
              <button className={iconButton} aria-label={CANNED_COPY_LABEL}>
                <Icon source={ContentCopyFilled} size="small" />
              </button>
            )}
          >
            <span>{CANNED_COPY_LABEL}</span>
          </Tooltip>
          <Tooltip
            theme="invert"
            placement="top"
            className={styles.tooltip}
            triggerRenderer={() => (
              <button className={styles.iconButton} aria-label={CANNED_REMOVE_LABEL}>
                <Icon source={DeleteFilled} size="small" />
              </button>
            )}
          >
            <span>{CANNED_REMOVE_LABEL}</span>
          </Tooltip>
        </div>
      </div>

      <div data-testid="canned-message" className={cx({ [styles.content]: false })}>
        {content}
      </div>

      <div className={styles.footer}>
        <div>{userInfo}</div>
        {foldButtonContent && foldButtonIcon && (
          <FakeLink className={cx(styles.foldContent, 'foldButton')} onClick={toggleFolded}>
            <span>{foldButtonContent}</span>
            <Icon source={foldButtonIcon} size="xsmall" />
          </FakeLink>
        )}
      </div>

      {showConfirmOverlay && <ConfirmationOverlay onCancelClick={() => {}} onConfirmClick={() => {}} />}
    </div>
  );
};
