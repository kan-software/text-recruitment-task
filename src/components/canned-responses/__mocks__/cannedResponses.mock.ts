import { WithCannedResponsesState } from '../../../store/selectors';

export const cannedResponesInitialState: WithCannedResponsesState = {
  entities: {
    cannedResponses: {
      allIds: ['438bfee6-19d4-416c-995d-136847bcd50b', '421ec799-1a08-4638-9724-bb565efdb873'],
      byIds: {
        '438bfee6-19d4-416c-995d-136847bcd50b': {
          id: '438bfee6-19d4-416c-995d-136847bcd50b',
          modificationTimestamp: 1676203744459,
          tags: ['priority', 'troubleshooting'],
          text: 'private lorem ipsum text',
          createdBy: 'Jacquelyn Corkery',
          isPrivate: true,
          avatarUrl: 'https://avatars.githubusercontent.com/u/20947819',
        },
        '421ec799-1a08-4638-9724-bb565efdb873': {
          id: '421ec799-1a08-4638-9724-bb565efdb873',
          modificationTimestamp: 1606582113852,
          tags: ['priority', 'payment', 'billing', 'troubleshooting'],
          text: 'shared lorem ipsum text',
          createdBy: 'Alek Borer',
          avatarUrl: 'https://avatars.githubusercontent.com/u/1995272',
        },
      },
    },
  },
};
