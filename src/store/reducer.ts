import { StoreState } from './selectors';

const defaultState: StoreState = {
  entities: {
    cannedResponses: {
      byIds: {},
      allIds: [],
    },
  },
};

export const reducer = (state: StoreState = defaultState): StoreState => {
  return state;
};
