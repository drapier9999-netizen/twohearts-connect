/** Small date helpers used across TwoHearts. */

export function parseDate(value?: string | null): Date | null {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function daysBetween(a: Date, b: Date) {
  const ms = startOfDay(b).getTime() - startOfDay(a).getTime();
  return Math.round(ms / 86_400_000);
}

export function startOfDay(d: Date) {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function addDays(d: Date, days: number) {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + days);
  return copy;
}

export function formatDate(value?: string | Date | null, opts?: Intl.DateTimeFormatOptions) {
  const d = value instanceof Date ? value : parseDate(value ?? undefined);
  if (!d) return "";
  return d.toLocaleDateString(undefined, opts ?? { day: "numeric", month: "short", year: "numeric" });
}

/** "2 years, 3 months, 14 days" style breakdown for the relationship counter. */
export function durationSince(start: Date, now = new Date()) {
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days, totalDays: Math.max(0, daysBetween(start, now)) };
}

/** Next occurrence of a recurring date (birthday/anniversary). */
export function nextAnnualOccurrence(iso: string, from = new Date()) {
  const base = parseDate(iso);
  if (!base) return null;
  const candidate = new Date(from.getFullYear(), base.getMonth(), base.getDate());
  if (startOfDay(candidate) < startOfDay(from)) candidate.setFullYear(from.getFullYear() + 1);
  return candidate;
}
