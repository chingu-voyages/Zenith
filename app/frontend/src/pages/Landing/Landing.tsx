import LandingNav from "../../components/LandingNav/LandingNav";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Landing.scss";
import headerMap from "./../../assets/header-map.png";
import feat1 from "./../../assets/discover-peak.jpg";
import feat2 from "./../../assets/terrain-difficulty.jpeg";
import feat3 from "./../../assets/peak-group.jpg";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <Parallax pages={6}>
        {/* Navbar component */}
        <LandingNav />

        <div className="landing container m-auto px-3 relative">
          {/* header */}
          <div className="py-3 m-auto text-center space-y-8 md:w-[700px] min-h-[600px] flex justify-center flex-col items-center">
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
            <div className="relative w-full h-1">
              <ParallaxLayer offset={0.1} speed={0.5}>
                <div className="rounded-2xl ">
                  <img
                    className="w-full h-96 object-cover rounded-2xl m-auto"
                    src={headerMap}
                    alt="Google Map Image"
                  />
                </div>
              </ParallaxLayer>
            </div>
          </div>

          {/* Features */}
          <div id="features">
            {/* feature 1 */}
            <ParallaxLayer
              offset={1.3}
              speed={0.7}
              className="flex justify-end w-full max-w-96 p-3 md:p-5 ml-auto"
            >
              <img
                className="w-full object-cover h-[500px]"
                src={feat1}
                alt="Discover Elevation Anywhere"
              />
            </ParallaxLayer>
            <ParallaxLayer offset={1.1}>
              <div className="flex justify-start w-full max-w-[500px] flex-col p-3 md:p-5 space-y-5 bg-white bg-opacity-80 rounded-2xl">
                <h2 className="text-rose-600 text-3xl font-bold ">
                  Discover Elevation Anywhere
                </h2>
                <p>
                  Click, select, and uncover the highest elevation in any area
                  with Zenith. Whether you're planning your next hike or
                  exploring new terrain, effortlessly access elevation data to
                  make informed decisions and conquer new heights.
                </p>
              </div>
            </ParallaxLayer>
            {/* feature 2 */}
            <ParallaxLayer
              offset={2}
              speed={0.4}
              className="flex justify-end w-full max-w-96 p-3 md:p-5 ml-auto"
            >
              <img
                className="w-full object-cover h-[400px]"
                src={feat2}
                alt="Plan Your Adventures with Precision"
              />
            </ParallaxLayer>
            <ParallaxLayer offset={2.1}>
              <div className="flex justify-start w-full max-w-[500px] flex-col p-3 md:p-5 space-y-5 bg-white bg-opacity-80 rounded-2xl">
                <h2 className="text-rose-600 text-3xl font-bold ">
                  Plan Your Adventures with Precision
                </h2>
                <p>
                  With Zenith, precision planning is at your fingertips.
                  Pinpoint the highest peaks, assess terrain difficulty, and
                  chart your course with confidence. Empower your outdoor
                  adventures with detailed elevation insights and seamless
                  navigation.
                </p>
              </div>
            </ParallaxLayer>
            {/* feature 3 */}
            <ParallaxLayer
              offset={2.9}
              speed={0.5}
              className="flex justify-end w-full max-w-96 p-3 md:p-5 ml-auto"
            >
              <img
                className="w-full object-cover h-[500px]"
                src={feat3}
                alt="Community Exploration"
              />
            </ParallaxLayer>
            <ParallaxLayer offset={2.9}>
              <div className="flex justify-start w-full max-w-[500px] flex-col p-3 md:p-5 space-y-5 bg-white bg-opacity-80 rounded-2xl">
                <h2 className="text-rose-600 text-3xl font-bold ">
                  Seamless Sharing, Endless Exploration
                </h2>
                <p>
                  Share your discoveries and inspire others with Zenith's
                  seamless sharing features. Export shareable links that open
                  directly in popular mapping apps, allowing you to share your
                  favorite peaks and routes effortlessly. Join a community of
                  explorers and embark on endless adventures together.
                </p>
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </Parallax>
    </>
  );
}
