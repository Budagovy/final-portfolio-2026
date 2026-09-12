import { SplashScreen, type SplashData } from "@/components/SplashScreen";
import { HeroPlaceholder, type HeroPlaceholderData } from "@/components/HeroPlaceholder";
import splash from "../../content/splash.json";
import hero from "../../content/hero.json";

/* The composition. Swap HeroPlaceholder for the real hero when it exists;
   the splash does not need to know what it is showing. */
export default function Home() {
  return (
    <main>
      <SplashScreen data={splash as SplashData} id="top">
        <HeroPlaceholder data={hero as HeroPlaceholderData} />
      </SplashScreen>
    </main>
  );
}
