export function groupBy<T = Map<string, string>>(table: T[], key: keyof T) {
  return table.reduce(
    // @ts-ignore
    (groups, curr) => ({ ...groups, [curr[key]]: [...(groups[curr[key]] || []), curr] }),
    {} as { [key: string]: T[] }
  )
}
