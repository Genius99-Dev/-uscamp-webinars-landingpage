import Hero from "@/components/Hero";
import TopicsAndAudience from "@/components/TopicsAndAudience";
import Speakers from "@/components/Speakers";
import SocialProof from "@/components/SocialProof";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";
import { resolveHeroVariant } from "@/data/hero-variants";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const raw = params.utm_content;
  const utmContent = Array.isArray(raw) ? raw[0] : raw;
  const variant = resolveHeroVariant(utmContent);

  return (
    <main className="bg-black min-h-screen">
      <Hero variant={variant} />
      <TopicsAndAudience />
      <Speakers />
      <SocialProof />
      <RegistrationForm />
      <FAQ />
      <StickyCTA />
    </main>
  );
}
