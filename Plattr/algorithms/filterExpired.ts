// filterExpired.ts
import { DealCardProps, DealType } from '@/types/deals';

export function filterExpiredDeals(deal: DealCardProps): boolean {
  if (deal.dealType === DealType.REDEEMABLE && deal.expirationDate) {
    const now = new Date().getTime();
    const expirationTime = new Date(deal.expirationDate).getTime();
    return expirationTime > now; // keep only if not expired
  }
  // For informational deals or redeemable deals without an expirationDate, keep them
  return true;
}
