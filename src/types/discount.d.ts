// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

declare enum DiscountType {
  Fixed = 'fixed',
  Percentage = 'percentage',
}

export interface Discount {
  id: string,
  code: string,
  type: DiscountType,
  value: number,
  limit_quantity: boolean,
  quantity: number,
  description: string,
  expires_on: number | null,
  created: number,
  meta: any,
}
