export const enum DateFormat {
  // Standard date formats
  ISO8601Date = 'yyyy-MM-dd',
  ISO8601DateTime = 'yyyy-MM-dd HH:mm:ss',
  ISO8601DateTimeWithMillisAndTimezone = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
  ISO8601DateTimeWithMicrosAndTimezone = "yyyy-MM-dd'T'HH:mm:ss.SSS'000'XXX",
  ISO8601YearMonth = 'yyyy-MM',

  // Short date formats
  ShortDate = 'd MMM yyyy',
  ShortDateWithoutYear = 'dd MMM',
  ShortDateWithDayOfWeek = 'eee, d MMM yyyy',
  ShortDateWithDayOfWeekAndTime = 'eee, d MMM yyyy, hh:mm aaa',

  // Long date formats
  LongDate = 'd MMMM yyyy',
  LongDateWithDayOfWeek = 'eee MM/dd/yyyy',

  // Time formats
  Time12Hour = 'hh:mm:ss aaa',
  Time12HourWithoutSeconds = 'hh:mm aaa',
  Time24Hour = 'HH:mm:ss',
  Time24HourWithoutSeconds = 'HH:mm',

  // Specialized formats
  DayOfMonth = 'dd',
  DayOfWeekWithMonth = 'eee, d MMM',
  DayOfWeek = 'eee',
  DateWithoutDayOfTheWeek = 'dd MMM yyyy',
  GoogleUTC = "yyyyMMdd'T'HHmmss",
  ChartDailyLabel = 'd MMM',
  ChartLegendDate = "dd MMM''yy",
  ChartMonthlyLabel = "MMM''yy",
  InvoiceDateFormat = 'dd MMM, yyyy',
  ExpirationDateFormat = 'd MMM, yyyy',
  ReportTime24Hour = "dd MMM yyyy 'at' HH:mm:ss",
  ReportTime12Hour = "dd MMM yyyy 'at' hh:mm:ss a",
  UsedSinceDate = 'MMM d, yyyy',
  TrialEndDate = 'MMM dd, yyyy',
}
