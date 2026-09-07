// Minimal `cn` (class-name join) — supports strings, arrays and {class: boolean} maps.
// Kept dependency-free on purpose; the island stays tiny.
type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | Record<string, boolean | undefined | null>
  | ClassValue[];

export function cn(...args: ClassValue[]): string {
  const out: string[] = [];
  const walk = (a: ClassValue) => {
    if (!a) return;
    if (typeof a === 'string' || typeof a === 'number') out.push(String(a));
    else if (Array.isArray(a)) a.forEach(walk);
    else if (typeof a === 'object') {
      for (const k in a) if (a[k]) out.push(k);
    }
  };
  args.forEach(walk);
  return out.join(' ');
}
