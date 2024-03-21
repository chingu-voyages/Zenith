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
              <Link to="/map">Get Started!</Link>
            </button>
            <div className="relative w-full h-1">
              <ParallaxLayer offset={0.1} speed={0.5} className="z-10">
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
          <div id="features" className="mt-60">
            {/* feature 1 */}
            <div className=" my-20 flex flex-wrap sm:flex-nowrap">
              <div className="items-center flex justify-start w-full max-w-[500px] sm:w-3/5 flex-col p-3 md:p-5 space-y-5 bg-white">
                <h2 className="text-rose-600 text-4xl font-bold ">
                  Discover Elevation Anywhere
                </h2>
                <p className="text-gray-600 text-lg leading-7">
                  Click, select, and uncover the highest elevation in any area
                  with Zenith. Whether you're planning your next hike or
                  exploring new terrain, effortlessly access elevation data to
                  make informed decisions and conquer new heights.
                </p>
              </div>

              <div className="relative h-[400px] flex-1 min-w-64">
                <ParallaxLayer
                  offset={0.15}
                  speed={0.1}
                  className="flex justify-end w-full p-3 md:p-5"
                >
                  <img
                    className="object-cover rounded-lg h-[300px] min-w-[80%]"
                    src={feat1}
                    alt="Discover Elevation Anywhere"
                  />
                </ParallaxLayer>
              </div>
            </div>
            {/* feature 2 */}
            <div className=" my-20 flex flex-wrap sm:flex-nowrap">
              <div className="flex items-center justify-start w-full max-w-[500px] sm:w-3/5 flex-col p-3 md:p-5 space-y-5 bg-white">
                <h2 className="text-rose-600 text-4xl font-bold ">
                  Plan Your Adventures with Precision
                </h2>
                <p className="text-gray-600 text-lg leading-7">
                  With Zenith, precision planning is at your fingertips.
                  Pinpoint the highest peaks, assess terrain difficulty, and
                  chart your course with confidence. Empower your outdoor
                  adventures with detailed elevation insights and seamless
                  navigation.
                </p>
              </div>

              <div className="relative h-[400px] flex-1 min-w-64">
                <ParallaxLayer
                  offset={0.19}
                  speed={0.1}
                  className="flex justify-end w-full p-3 md:p-5 mt-5 sm:mt-0"
                >
                  <img
                    className="object-cover rounded-lg h-[400px] lg:h-[50%] min-w-[80%]"
                    src={feat2}
                    alt="Plan Your Adventures with Precision"
                  />
                </ParallaxLayer>
              </div>
            </div>
            {/* feature 3 */}
            <div className=" my-20 flex flex-wrap sm:flex-nowrap">
              <div className="flex items-center justify-start w-full max-w-[500px] sm:w-3/5 flex-col p-3 md:p-5 space-y-5 bg-white">
                <h2 className="text-rose-600 text-4xl font-bold ">
                  Seamless Sharing, Endless Exploration
                </h2>
                <p className="text-gray-600 text-lg leading-7">
                  Share your discoveries and inspire others with Zenith's
                  seamless sharing features. Export shareable links that open
                  directly in popular mapping apps, allowing you to share your
                  favorite peaks and routes effortlessly. Join a community of
                  explorers and embark on endless adventures together.
                </p>
              </div>

              <div className="relative h-[400px] flex-1 min-w-64">
                <ParallaxLayer
                  offset={0.34}
                  speed={0.1}
                  className="flex justify-end w-full p-3 md:p-5"
                >
                  <img
                    className="object-cover rounded-lg h-[350px] min-w-[80%]"
                    src={feat3}
                    alt="Community Exploration"
                  />
                </ParallaxLayer>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
}
