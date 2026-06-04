import { permanentRedirect } from "next/navigation";

export default async function ToursRedirect({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  permanentRedirect(`/${lang}/tours/all`);
}
