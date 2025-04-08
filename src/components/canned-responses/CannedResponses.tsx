import { type FC } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { SearchInput, SegmentedControl } from '@livechat/design-system-react-components';
import { CannedResponseItem } from './CannedResponseItem';
import { EmptyState } from '../empty-state/EmptyState';
import { CannedResponseFilterType } from '../../types/filter-type';
import { useCannedResponses } from '../../hooks/use-canned-responses';
import * as styles from './styles';

export const CannedResponses: FC = () => {
  const { cannedResponses, isEmpty, filter, search, cannedResponsesButtons, setFilter, setSearch } =
    useCannedResponses();

  return (
    <div className={styles.wrapper}>
      <div className={styles.actionBar}>
        <div className={styles.barContainer}>
          <>
            <div className={styles.segmentedControllButtonTopSpace}></div>
            <SegmentedControl
              initialId="all"
              currentId={filter}
              className={styles.segmentedControlButton}
              buttons={cannedResponsesButtons}
              onButtonClick={(id) => setFilter(id as CannedResponseFilterType)}
            />
          </>
        </div>
        <SearchInput onChange={setSearch} value={search} className={styles.searchBar} />
      </div>

      <div className={styles.list}>
        {isEmpty ? (
          <EmptyState
            icon={true}
            title="No canned responses"
            description="Save frequently used responses under a simple shortcut"
            className={styles.emptyState}
          />
        ) : (
          <Virtuoso
            totalCount={cannedResponses.length}
            itemContent={(index) => (
              <CannedResponseItem item={cannedResponses[index]} search={search} onSelectTag={setSearch} />
            )}
          />
        )}
      </div>
    </div>
  );
};
