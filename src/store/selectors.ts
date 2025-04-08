import { CannedResponse } from '../types/canned-responses';
import { KeyMap } from '../types/types';

export interface EntitiesState {
  cannedResponses: CannedResponsesState;
}

export interface StoreState {
  entities: EntitiesState;
}

export interface CannedResponsesState {
  byIds: KeyMap<CannedResponse>;
  allIds: string[];
}

export interface WithCannedResponsesState {
  entities: {
    cannedResponses: CannedResponsesState;
  };
}

export function getCannedResponses(state: WithCannedResponsesState): KeyMap<CannedResponse> {
  return state.entities.cannedResponses.byIds;
}
