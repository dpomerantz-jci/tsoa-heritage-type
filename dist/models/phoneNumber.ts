import { defaultExcludeAttributesType } from '../utils/flags';

export interface PhoneNumberAttributes {
  phoneNumberId: string;
  countryCode: string;
  areaCode: string;
  digits: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type PhoneNumberResponse = Omit<PhoneNumberAttributes, defaultExcludeAttributesType>;
