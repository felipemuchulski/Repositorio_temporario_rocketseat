export function extractQueryParams(queryString: string): Record<string, string> {
  if (!queryString) return {};

  const query = queryString.startsWith("?")
    ? queryString.substring(1)
    : queryString;

  if (query.trim() === "") return {};

  return query.split("&").reduce<Record<string, string>>((acc, param) => {
    const [rawKey, rawValue = ""] = param.split("=");

    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue);

    if (key) acc[key] = value;

    return acc; // <-- ESSENCIAL
  }, {}); // <-- ESSENCIAL (valor inicial)
}
