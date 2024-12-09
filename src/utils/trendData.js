export const generateTrendData = (count) => {
  const data = [];
  const now = Date.now();
  
  for (let i = 0; i < count; i++) {
    data.push({
      timestamp: new Date(now - (count - i) * 5000).toISOString(),
      value: 6.5 + Math.random() * 2,
    });
  }
  
  return data;
};