import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
	return (
		<main className="min-h-screen bg-black/95 antialiased bg-grid-white/[0.05]">
			<HeroSection />
			<FeaturedCourses />
			<WhyChoseUs />
			<TestimonialCards />
			<UpcomingWebinars />
			<Instructors />
		</main>
	);
}
