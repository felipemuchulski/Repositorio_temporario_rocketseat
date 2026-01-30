export function parseRoutePath(path: string): { regex: RegExp; params: string[]} {
    const params: string[] = []
    
    const pathWithParams = path.replace(/:([a-zA-Z0-9_]+)/g, (_, paramName: string) => {
    params.push(paramName);
    return "([^/]+)";
  });

  const regex = new RegExp(`^${pathWithParams}$`);

  return { regex, params }
}