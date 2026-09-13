/**
 * Formats a number or string into a currency format with commas.
 * @param value - The number to format (e.g., 122678)
 * @param currency - The currency code (e.g., "USD", "NGN")
 */
export const formatCurrency = (value: number | string, currency: string = "USD") => {
  const numericValue = typeof value === "string" ? parseFloat(value.replace(/,/g, "")) : value;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(numericValue);
};
