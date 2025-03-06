// dealsAlgorithm.ts
import { Deal } from '../types/deals';
import { filterExpiredDeals } from './filterExpired';
import { computeDealScore } from './scoring';
export function getProcessedDeals(deals: Deal[]): Deal[] {
  // 1. Filter out invalid/expired deals
  const validDeals = deals.filter(filterExpiredDeals);

  // 2. Compute a score for each deal
  const scoredDeals = validDeals.map(deal => {
    const score = computeDealScore(deal);
    return { ...deal, _score: score };
  });

  // 3. Sort deals by descending score
  const sortedDeals = scoredDeals.sort((a, b) => (b._score || 0) - (a._score || 0));

  // 4. Return deals without the _score prop
  return sortedDeals.map(({ _score, ...deal }) => deal);
}
