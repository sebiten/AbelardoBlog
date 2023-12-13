export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("Es-us", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
