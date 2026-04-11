import Hero from "@/components/Hero";
import TopicsAndAudience from "@/components/TopicsAndAudience";
import Speakers from "@/components/Speakers";
import SocialProof from "@/components/SocialProof";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <TopicsAndAudience />
      <Speakers />
      <SocialProof />
      <RegistrationForm />
      <FAQ />
      <StickyCTA />
    </main>
  );
}
