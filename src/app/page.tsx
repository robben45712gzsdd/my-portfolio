"use client";
import Squares from "@/components/Backgrounds/Squares/Squares";
import FloatingElements from "@/components/FloatingElements/FloatingElements";
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
import SplashCursor from "@/components/Animations/SplashCursor/SplashCursor";
import LightRays from "@/components/Backgrounds/LightRays/LightRays";
import ScrollToRead from "@/components/ScrollToRead/ScrollToRead";
import SpotlightCard from "@/components/Components/SpotlightCard/SpotlightCard";
import { motion } from "framer-motion";
import Orb from "@/components/Backgrounds/Orb/Orb";
import ProfileCard from "@/components/Components/ProfileCard/ProfileCard";

export default function Home() {
  return (
    <>
      <BackToTop />
      <div className="relative bg-[#040209] bg-opacity-100 w-full h-full min-h-screen overflow-hidden text-white">
        {/* Cursor & Utilities */}
        <SplashCursor />
        <FloatingElements />
{/* Global Backgrounds */}
        <div className="z-1 absolute inset-0">
          {/* Squares làm nền chung */}
          <Squares
            speed={0.6}
            squareSize={100}
            direction="diagonal"
            borderColor="rgba(255, 255, 255, 0.1)"
            hoverFillColor="#222"
          />
        </div>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="z-10 relative flex flex-col justify-start items-center space-y-[60px] min-h-screen">
          {/* Hero Section */}
          <div className="relative flex items-center w-screen h-screen">
            <div className="flex-1 px-6 w-full">
              <div className="-z-10 absolute inset-0">
                <Squares
                  speed={0.4}
                  squareSize={50}
                  direction="diagonal"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  hoverFillColor="#222"
                />
              </div>
              {/* Light Rays */}
              <div className="-z-1 absolute inset-0">
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#00ffff"
                  raysSpeed={1.7}
                  lightSpread={5}
                  rayLength={3}
                  followMouse={true}
                  mouseInfluence={0.5}
                  noiseAmount={0.1}
                  distortion={0.05}
                  className="custom-rays"
                />
              </div>
              <Hero />
              <ScrollToRead />
            </div>
            <div className="hidden z-1000 md:flex flex-1 justify-center items-center self-center h-screen">
              {/* Profile Card */}
              <ProfileCard
                name="Duong Van Manh"
                title="Frontend Developer (Fullstack-capable)"
                handle="manhduong2953"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/textures/my-profile.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() =>
                  window.open(
                    "https://www.facebook.com/manhduong2953/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <About />
            </SpotlightCard>
          </motion.div>

          {/* Services Section */}
          <Services />

          {/* Skills Section */}
          <Skills />

          {/* Process Section */}
          <Process />

          {/* Timeline Section với Orb riêng */}
          <div className="relative w-full min-h-screen overflow-hidden">
            <div className="-z-10 absolute inset-0">
              <Orb
                hoverIntensity={0.1}
                rotateOnHover={false}
                hue={0}
                forceHoverState={false}
              />
            </div>
            <Timeline />
          </div>

          {/* Enhanced Project Showcase */}
          <ProjectShowcase />

          {/* Contact Section */}
          <div className="mx-auto py-20 w-full h-screen">
            <Contact />
          </div>
        </main>

        {/* Footer */}
      </div>
      <Footer />
    </>
  );
}
