// filterExpired.ts
import { Deal } from '../types/deals';

export function filterExpiredDeals(deal: Deal): boolean {
  if (deal.dealType === 'redeemable' && deal.endDate) {
    const now = new Date().getTime();
    const expirationTime = new Date(deal.endDate).getTime();
    return expirationTime > now; // keep only if not expired
  }
  // For informational deals or redeemable deals without an expirationDate, keep them
  return true;
}
