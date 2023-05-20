export function inArray(a1: string[], a2: string[]): string[] {
  return a1.filter(word => a2.filter(word2 => word2.includes(word)).length).sort()
}
