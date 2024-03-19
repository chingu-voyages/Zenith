import LandingNav from "../../components/LandingNav/LandingNav";
import "./Landing.scss";
import headerMap from "./../../assets/header-map.png";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <LandingNav />
      <div className="landing container m-auto px-3">
        <header className="w-full h-screen">
          <div className="intro md:py-3 md:rounded-xl space-y-10 lg:w-3/5 md:w-[520px] bg-opacity-80 bg-white">
            <h1 className="text-gray-900 text-5xl font-bold">
              Climb To New Heights With{" "}
              <span className="text-rose-600 font-bold">Zenith</span>
            </h1>
            <p className="text-gray-500 text-lg">
              Your Ultimate Companion for Peak Exploration! Whether you're an
              avid adventurer, nature enthusiast, or simply seeking breathtaking
              views, Zenith helps you discover and conquer the highest points
              wherever you roam.
            </p>
            <button className="text-rose-600 px-3 py-2 border-rose-600 rounded-xl border-2 btn-tomap">
              <Link to="/map">Start Now!</Link>
            </button>
          </div>
          <div className="lg:w-2/5 hidden md:block md:absolute lg:static md:right-0 md:py-8 lg:p-0 md:z-[-1] lg:z-0 w-2/4  h-full rounded-2xl">
            <img
              className="h-full object-cover rounded-2xl"
              src={headerMap}
              alt="Google Map Image"
            />
          </div>
        </header>
      </div>
    </>
  );
}
