import { useState, type FC } from 'react';
import { SearchInput, SegmentedControl } from '@livechat/design-system-react-components';
import { CannedResponseItem } from './CannedResponseItem';
import { EmptyState } from '../empty-state/EmptyState';
import { CannedResponseFilterType } from '../../types/filter-type';
import { useCannedResponses } from '../../hooks/use-canned-responses';
import { CANNED_RESPONSES_BUTTONS } from '../canned-responses-buttons/configuration';
import * as styles from './styles';

export const CannedResponses: FC = () => {
  const { cannedResponses, setFilter, filter, isEmpty } = useCannedResponses();
  const [search, setSearch] = useState('');

  return (
    <div className={styles.wrapper}>
      {!isEmpty && (
        <>
          <div className={styles.actionBar}>
            <div className={styles.barContainer}>
              <>
                <div className={styles.segmentedControllButtonTopSpace}></div>
                <SegmentedControl
                  initialId="all"
                  currentId={filter}
                  className={styles.segmentedControlButton}
                  buttons={CANNED_RESPONSES_BUTTONS}
                  onButtonClick={(id) => setFilter(id as CannedResponseFilterType)}
                />
              </>
            </div>
            <SearchInput onChange={setSearch} value={search} className={styles.searchBar} />
          </div>
        </>
      )}

      <div className={styles.list}>
        {isEmpty && (
          <EmptyState
            icon={true}
            title="No canned responses"
            description="Save frequently used responses under a simple shortcut"
            className={styles.emptyState}
          />
        )}

        {!isEmpty && (
          <>
            {cannedResponses.map((item) => (
              <CannedResponseItem key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
