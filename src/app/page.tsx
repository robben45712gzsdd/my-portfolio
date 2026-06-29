"use client";

import BackToTop from "@/components/BackToTop/BackToTop";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import Process from "@/components/Process/Process";
import Timeline from "@/components/Timeline/Timeline";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollToRead from "@/components/ScrollToRead/ScrollToRead";
import Squares from "@/components/Backgrounds/Squares/Squares";
import LightRays from "@/components/Backgrounds/LightRays/LightRays";
import SmoothSplashCursor from "@/components/Animations/SplashCursor/SmoothSplashCursor";
import ProfileCard from "@/components/Components/ProfileCard/ProfileCard";
import { motion } from "motion/react";
import { profile } from "@/lib/portfolio-content";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <BackToTop />
      <div className="relative min-h-screen w-full overflow-hidden bg-[#05070b] text-white">
        <SmoothSplashCursor />
        <div className="pointer-events-none fixed inset-0 opacity-40">
          <Squares
            speed={0.18}
            squareSize={96}
            direction="diagonal"
            borderColor="rgba(255, 255, 255, 0.07)"
            hoverFillColor="transparent"
          />
        </div>

        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_32rem),linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]" />

        <Navbar />

        <main className="relative z-10 flex min-h-screen flex-col items-center justify-start space-y-12 px-4 sm:px-6">
          <div className="relative flex min-h-screen w-full max-w-6xl items-center overflow-hidden">
            <div className="pointer-events-none absolute inset-x-[-24vw] inset-y-0 -z-10 opacity-55">
              <Squares
                speed={0.12}
                squareSize={56}
                direction="diagonal"
                borderColor="rgba(125, 211, 252, 0.12)"
                hoverFillColor="transparent"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-[-18vw] top-0 -z-10 hidden h-[62vh] opacity-45 lg:block">
              <LightRays
                raysOrigin="top-center"
                raysColor="#67e8f9"
                raysSpeed={0.35}
                lightSpread={3}
                rayLength={1.8}
                followMouse={false}
                mouseInfluence={0}
                noiseAmount={0.02}
                distortion={0.01}
              />
            </div>
            <div className="w-full flex-1">
              <Hero />
              <ScrollToRead />
            </div>
            <div className="z-10 hidden flex-1 items-center justify-center md:flex">
              <ProfileCard
                name={profile.name}
                title={profile.role}
                handle={profile.handle}
                status="Online"
                contactText={t.common.contactMe}
                avatarUrl="/textures/my-profile.png"
                showUserInfo
                enableTilt={false}
                enableMobileTilt={false}
                onContactClick={() => window.open(`mailto:${profile.email}`, "_blank")}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-8"
          >
            <About />
          </motion.div>

          <Services />
          <Skills />
          <Process />
          <Timeline />
          <ProjectShowcase />

          <div className="mx-auto min-h-screen w-full py-12">
            <Contact />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
