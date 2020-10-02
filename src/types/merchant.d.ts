// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Currency } from './currency';

declare enum MerchantStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export interface Merchant {
  id: number,
  business_name: string,
  business_description: string,
  status: MerchantStatus,
  country: string,
  currency: Currency,
  support_email: string,
  timezone?: string,
  logo?: string,
  logo_shape?: string,
  cover?: string,
  has: {
    logo: boolean,
    cover: boolean,
    analytics: boolean,
    business_description: boolean,
  },
  analytics: {
    google: {
      settings: {
        tracking_id?: string,
        linked_domains?: string[],
      },
    },
  },
}
