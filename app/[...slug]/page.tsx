import { notFound } from "next/navigation";
import { DevelopmentPage } from "@/components/development-page";
import { getModule } from "@/lib/modules";

export default async function ModulePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  if (!getModule(slug[0]) || slug.length > 2 || (slug.length === 2 && !(slug[0] === "eventos" && slug[1] === "novo"))) notFound();
  return <DevelopmentPage slug={slug[0]} action={slug[1]} />;
}
