import { defaultExcludeAttributesType } from '../utils/flags';

export interface AddressAttributes {
  addressUid: string;
  line1?: string;
  line2?: string;
  line3?: string;
  city?: string;
  stateProvince?: string;
  postalCode?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

 export interface AddressResponse extends Omit<AddressAttributes, defaultExcludeAttributesType> {}
