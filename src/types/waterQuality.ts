export interface WaterQualityData {
  location: string;
  ph: number;
  dissolvedOxygen: number;
  temperature: number;
  turbidity: number;
  conductivity: number;
  timestamp: string;
  waterLevel: number;
  flowRate: number;
  totalDissolvedSolids: number;
}

export interface LocationData {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  riverSection: string;
  description: string;
}

export interface TrendData {
  timestamp: string;
  value: number;
}

export type MetricStatus = 'good' | 'moderate' | 'poor';