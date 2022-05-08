export interface IProfileDataResponse {
  age: number;
  sex: string;
  racial: string[];
  bedShared: string | string[];
  handDominance: string;
  fitbitWorn: string;
  city: string;
  addressLine1: string;
  addressLine2?: string;
  state: string;
  zip: string;
}

export type ProfileDataStatus = null | 'loading' | 'loaded';
