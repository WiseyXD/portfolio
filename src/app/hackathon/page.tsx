
import HackathonComponent from "@/components/hackathon";
export const metadata = {
  title: "Hackathons",
  description: "Few of my best moments of life.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function HackathonPage() {
  return (
    <HackathonComponent />
  );
}
