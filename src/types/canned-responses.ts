export interface CannedResponse {
  id: string;
  modificationTimestamp: number;
  tags: string[];
  text: string;
  createdBy?: string;
  modifiedBy?: string;
  avatarUrl?: string;
  isPrivate?: boolean;
}
