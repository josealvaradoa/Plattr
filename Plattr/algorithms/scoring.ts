// scoring.ts
import { DealCardProps, DealType } from '@/types/deals';
import { parseDistance } from './parseDistance';

export function computeDealScore(deal: DealCardProps): number {
  let score = 0;

  // 1. Boost by rating (e.g., 3 points per star)
  score += (deal.rating || 0) * 3;

  // 2. Boost by review count (e.g., 1 point per 50 reviews)
  score += Math.floor((deal.reviewCount || 0) / 50);

  // 3. Penalize by distance (the farther away, the bigger the penalty)
  //    For example: -2 points per mile
  const distanceValue = parseDistance(deal.distance || '');
  score -= distanceValue * 2;

  // 4. Deal-specific logic
  if (deal.dealType === DealType.REDEEMABLE) {
    // Handle expiration
    if (deal.expirationDate) {
      const now = new Date().getTime();
      const expirationTime = new Date(deal.expirationDate).getTime();
      const timeToExpire = expirationTime - now;

      // If timeToExpire is in the future, the deal is valid
      // Example: If within 48 hours, add +5 points to highlight urgency
      if (timeToExpire > 0 && timeToExpire < 48 * 60 * 60 * 1000) {
        score += 5;
      }

      // If it’s already expired, we can demote heavily (or filter out entirely)
      if (timeToExpire <= 0) {
        score -= 100; // or filter out completely in the next step
      }
    }

    // Optionally, factor in how many redemptions are remaining vs. max
    if (deal.maxRedemptions && deal.remainingRedemptions !== undefined) {
      // Example: If a lot of redemptions remain, highlight it
      const redemptionRatio = deal.remainingRedemptions / deal.maxRedemptions;
      score += redemptionRatio * 5; // scale up a bit
    }

  } else if (deal.dealType === DealType.INFORMATIONAL) {
    // For informational deals, if happening now, give a strong boost
    if (deal.happeningNow) {
      score += 10;
    }
  }

  return score;
}
