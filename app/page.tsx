import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"

export default function HomePage() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <SkillsSection />
    </div>
  )
}
