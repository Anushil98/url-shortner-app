import BannerCarousel from "@/component/banner/BannerCarousel.component";
import { HeaderLogo } from "@/component/header/logo.component";

export default function Home() {
  return (
    <>
      <header>
        <HeaderLogo></HeaderLogo>
      </header>
      <main>
        <BannerCarousel></BannerCarousel>
      </main>
      <footer></footer>
    </>
  );
}
