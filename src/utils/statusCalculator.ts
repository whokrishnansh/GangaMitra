import { MetricStatus } from '../types/waterQuality';

export const calculateStatus = (value: number, type: string): MetricStatus => {
  const thresholds = {
    ph: { good: [6.5, 8.5], moderate: [6.0, 9.0] },
    dissolvedOxygen: { good: 6.0, moderate: 4.0 },
    temperature: { good: [20, 25], moderate: [15, 30] },
    turbidity: { good: 5, moderate: 10 },
    conductivity: { good: 300, moderate: 500 },
    waterLevel: { good: 3, moderate: 2 },
    flowRate: { good: 200, moderate: 150 },
    totalDissolvedSolids: { good: 200, moderate: 300 },
  };

  const getStatusFromRange = (value: number, range: [number, number]): MetricStatus => {
    if (value >= range[0] && value <= range[1]) return 'good';
    return 'poor';
  };

  const getStatusFromThreshold = (value: number, threshold: { good: number; moderate: number }): MetricStatus => {
    if (value >= threshold.good) return 'good';
    if (value >= threshold.moderate) return 'moderate';
    return 'poor';
  };

  switch (type) {
    case 'ph':
      return getStatusFromRange(value, thresholds.ph.good);
    case 'dissolvedOxygen':
      return getStatusFromThreshold(value, thresholds.dissolvedOxygen);
    default:
      return 'moderate';
  }
};