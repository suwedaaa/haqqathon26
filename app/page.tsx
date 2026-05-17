import BackgroundLayers from "@/components/BackgroundLayers/BackgroundLayers";
import SiteShell from "@/components/SiteShell/SiteShell";
import About from "@/sections/About/About";
import Countdown from "@/sections/Countdown/Countdown";
import Timeline from "@/sections/Timeline/Timeline";
import Sponsors from "@/sections/Sponsors/Sponsors";
import Faq from "@/sections/Faq";

export default function Home() {
  return (
    <BackgroundLayers>
      <SiteShell
        left={<About />}
        right={
          <>
            <Countdown />
            <Timeline />
          </>
        }
        bottom={<Sponsors />}
        footer={<Faq />}
      />
    </BackgroundLayers>
  );
}
