import Community from "@/pages/Community";
import Feature from "@/pages/Feature";
import LandingPage from "@/pages/LandingPage";
import Testimonial from "@/pages/Testimonial";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <Feature />
      <Testimonial />
      <Community />
    </div>
  );
}
