type TimeUnits =
  | "short"
  | "long"
  | "numeric"
  | "narrow"
  | "2-digit"
  | undefined;

export function convertToDate(
  timezone: number,
  dt: number,
  weekdayFormat: "short" | "long"
): string {
  const utc_time = new Date(dt * 1000);
  const local_time = new Date(utc_time.getTime() + timezone * 1000);

  const options: Record<string, TimeUnits> = {
    weekday: weekdayFormat,
    day: "numeric",
    month: "long"
  };
  const dateFormatter = new Intl.DateTimeFormat("UTC", options);

  return dateFormatter.format(local_time);
}
