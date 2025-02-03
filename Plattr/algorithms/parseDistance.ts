// parseDistance.ts
export function parseDistance(distanceStr: string): number {
    // Example: distanceStr might be "1.2 mi" or "800 m"
    // You might have to handle different units and formats.
  
    // Simple approach: remove non-digit/decimal characters
    const numericPart = distanceStr.replace(/[^\d\.]/g, '');
    const distanceNum = parseFloat(numericPart);
  
    // If parsing fails, default to a large number to avoid ranking it at top
    if (isNaN(distanceNum)) {
      return Number.MAX_SAFE_INTEGER;
    }
  
    // If your distances always come in miles, this might be enough
    // If you have a mix of meters/miles, you'd need a uniform conversion
    return distanceNum;
  }
  