import { permanentRedirect } from "next/navigation";

export default async function BestTimeToVisitRedirect({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  permanentRedirect(`/${lang}/travel-info/best-time-to-visit-greece`);
}
