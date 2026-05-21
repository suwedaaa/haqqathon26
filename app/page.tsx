import BackgroundLayers from "@/components/BackgroundLayers/BackgroundLayers";
import SiteShell from "@/components/SiteShell/SiteShell";
import About from "@/sections/About/About";
import Countdown from "@/sections/Countdown/Countdown";
import Timeline from "@/sections/Timeline/Timeline";
import Speakers from "@/sections/Speakers/Speakers";
import VideoPlayer from "@/sections/VideoPlayer/VideoPlayer";
import MapLocation from "@/sections/MapLocation/MapLocation";
import Faq from "@/sections/Faq";
import Testimonials from "@/sections/Testimonials/Testimonials";
import Sponsors from "@/sections/Sponsors/Sponsors";

export default function Home() {
  return (
    <BackgroundLayers>
      <SiteShell
        left={
          <>
            <About />
            <Speakers />
          </>
        }
        right={
          <>
            <Countdown />
            <Timeline />
            <Testimonials />
          </>
        }
        middleFull={<VideoPlayer />}
        middleLeft={<MapLocation />}
        middleRight={<Faq />}
        bottom={<Sponsors />}
      />
    </BackgroundLayers>
  );
}
