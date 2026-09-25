import FeaturedCourses from "@/app/components/FeaturedCourses";
import HeroSection from "@/app/components/HeroSection";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import TestimonialCards from "@/app/components/TestimonialCards";
import UpcomingWebinars from "@/app/components/UpcomingWebinars";
import InstructorTootip from "./components/InstructorTootip";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <InstructorTootip/>
      <Footer/>
    </main>
  );
}
