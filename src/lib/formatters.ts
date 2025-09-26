export function formatCurrency(
  amount: number,
  {
    currency = "MYR", // change to "USD", "EUR", etc. depending on the desired currency
    locale = "en-MY", // "en-MY" shows "RM"; e.g. "en-US" shows "$"
    maximumFractionDigits = 2,
  }: {
    currency?: string;
    locale?: string;
    maximumFractionDigits?: number;
  } = {}
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits,
    minimumFractionDigits: maximumFractionDigits,
  }).format(Number.isFinite(amount) ? amount : 0);
}
