import { UpperTitle } from "./maintitle";
import MainNavbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import MainContent1 from "./maincontent1";
import { MainContent2, MainContent3 } from "./maincontent2";

function MainPage() {
  return (
    <div className="flex justify-center items-center flex-col w-full"></div>
  );
}

function MainTitle() {
  return (
    <div className="upper-content-wrapper">
      <div className="geist-wrapper">
        <MainNavbar />
      </div>
      <div className="flex flex-col justify-center items-center">
        <UpperTitle />
        <MainContent1 />
        <div className="h-px w-full border border-b-gray-100"></div>
        <MainContent2 />
        <div className="h-px w-full border border-b-gray-100"></div>
        <MainContent3 />
        <div className="h-px w-full border border-b-gray-100"></div>
      </div>
      <div className="geist-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export { MainPage, MainTitle };
