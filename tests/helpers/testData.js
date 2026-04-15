export function uniqueSuffix() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function buildEmployeeData() {
  const suffix = uniqueSuffix();
  return {
    staffId: suffix.slice(-5),
    firstName: 'Moshiur',
    middleName: 'Rahman',
    lastName: 'Rana',
    identificationNumber: `EMP-${suffix.slice(-6)}`,
    officialEmail: `moshiur+${suffix}@example.com`,
    street: 'Dhaka',
    zip: '1212',
  };
}

export function buildStockData() {
  const suffix = uniqueSuffix();
  return {
    stockName: `stock-${suffix}`,
    category: 'Electronics',
    location: 'Dhaka',
  };
}
