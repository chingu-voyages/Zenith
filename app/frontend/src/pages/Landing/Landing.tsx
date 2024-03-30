import LandingNav from "../../components/LandingNav/LandingNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Landing.scss";
import headerMap from "./../../assets/header-map.png";
import feat1 from "./../../assets/discover-peak.jpg";
import feat2 from "./../../assets/terrain-difficulty.jpeg";
import feat3 from "./../../assets/peak-group.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import TeamInfo from "../../components/TeamInfo/teamInfo";
export default function Landing() {
  return (
    <>
      {/* Navbar component */}
      <LandingNav />

      <div className="landing container m-auto px-3 relative">
        {/* header */}
        <div className="py-3 m-auto mt-10 sm:mt-28 text-center space-y-8 md:w-[700px] min-h-[600px] flex justify-center flex-col items-center">
          <h1 className="text-gray-900 text-5xl font-bold">
            Climb To New Heights With{" "}
            <span className="text-rose-600 font-bold">Zenith</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Your Ultimate Companion for Peak Exploration! Whether you're an avid
            adventurer, nature enthusiast, or simply seeking breathtaking views,
            Zenith helps you discover and conquer the highest points wherever
            you roam.
          </p>
          <button className="text-rose-600 px-3 py-2 border-rose-600 rounded-xl border-2 btn-tomap">
            <Link to="/map">Get Started!</Link>
          </button>
          <div className="relative w-full">
            <div className="rounded-2xl ">
              <img
                className="w-full h-96 object-cover rounded-2xl m-auto"
                src={headerMap}
                alt="Google Map Image"
              />
            </div>
          </div>
        </div>

        {/* About */}
        <div id="about" className="mt-20">
          {/* about 1 */}
          <div className=" my-20 flex flex-wrap sm:flex-nowrap min-h-[70vh]">
            <div className="items-center flex justify-start w-full max-w-[500px] sm:w-3/5 flex-col p-3 md:p-5 space-y-5 bg-white">
              <h2 className="text-rose-600 text-4xl font-bold ">
                Discover Elevation Anywhere
              </h2>
              <p className="text-gray-600 text-lg leading-7">
                Click, select, and uncover the highest elevation in any area
                with Zenith. Whether you're planning your next hike or exploring
                new terrain, effortlessly access elevation data to make informed
                decisions and conquer new heights.
              </p>
            </div>

            <div className="relative min-h-[400px] 2xl:h-[65vh] flex-1 min-w-64">
              <div className="flex justify-end w-full p-3 md:p-5">
                <img
                  className="object-cover rounded-lg h-[400px] 2xl:h-[65vh] max-h-[600px] min-w-[80%]"
                  src={feat1}
                  alt="Discover Elevation Anywhere"
                />
              </div>
            </div>
          </div>
          {/* about 2 */}
          <div className=" my-20 flex flex-wrap sm:flex-nowrap min-h-[70vh]">
            <div className="flex items-center justify-start w-full max-w-[500px] sm:w-3/5 flex-col p-3 md:p-5 space-y-5 bg-white">
              <h2 className="text-rose-600 text-4xl font-bold ">
                Plan Your Adventures with Precision
              </h2>
              <p className="text-gray-600 text-lg leading-7">
                With Zenith, precision planning is at your fingertips. Pinpoint
                the highest peaks, assess terrain difficulty, and chart your
                course with confidence. Empower your outdoor adventures with
                detailed elevation insights and seamless navigation.
              </p>
            </div>

            <div className="relative min-h-[400px] 2xl:h-[65vh] flex-1 min-w-64">
              <div className="flex justify-end w-full p-3 md:p-5 mt-5 sm:mt-0">
                <img
                  className="object-cover rounded-lg h-[400px] 2xl:h-[65vh] max-h-[600px] min-w-[80%]"
                  src={feat2}
                  alt="Plan Your Adventures with Precision"
                />
              </div>
            </div>
          </div>
          {/* about 3 */}
          <div className=" my-20 flex flex-wrap sm:flex-nowrap min-h-[70vh]">
            <div className="flex items-center justify-start w-full max-w-[500px] sm:w-3/5 flex-col p-3 md:p-5 space-y-5 bg-white">
              <h2 className="text-rose-600 text-4xl font-bold ">
                Seamless Sharing, Endless Exploration
              </h2>
              <p className="text-gray-600 text-lg leading-7">
                Share your discoveries and inspire others with Zenith's seamless
                sharing features. Export shareable links that open directly in
                popular mapping apps, allowing you to share your favorite peaks
                and routes effortlessly. Join a community of explorers and
                embark on endless adventures together.
              </p>
            </div>

            <div className="relative min-h-[400px] 2xl:h-[65vh] flex-1 min-w-64">
              <div className="flex justify-end w-full p-3 md:p-5">
                <img
                  className="object-cover rounded-lg h-[400px] 2xl:h-[65vh] max-h-[600px] min-w-[80%]"
                  src={feat3}
                  alt="Community Exploration"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}

        <div id="features" className="text-center">
          <h1 className="text-gray-900 text-4xl text-center font-bold">
            Explore Zenith's Key Features
          </h1>
          <div className="my-20 grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-2 md:grid-rows-3 gap-6">
            <div className="feature-item flex flex-col items-center justify-center shadow-md hover:shadow-lg border border-gray-200 rounded-lg p-4">
              <FontAwesomeIcon
                icon={["fas", "location-dot"]}
                className="icons"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Save Highest Points
              </h3>
              <p className="text-gray-500 pt-3 text-center">
                Pin and save coordinates of the highest elevations or preferred
                locations.
              </p>
            </div>
            <div className="feature-item flex flex-col items-center justify-center shadow-md hover:shadow-lg border border-gray-200 rounded-lg p-4">
              <FontAwesomeIcon icon={["far", "map"]} className="icons p-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Set Map Perimeters
              </h3>
              <p className="text-gray-500 pt-3 text-center">
                Easily set circle perimeters on the map and obtain elevation
                values.
              </p>
            </div>
            <div className="feature-item flex flex-col items-center justify-center shadow-md hover:shadow-lg border border-gray-200 rounded-lg p-4">
              <FontAwesomeIcon
                icon={["fas", "person-hiking"]}
                className="icons"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Define Elevation Limits
              </h3>
              <p className="text-gray-500 pt-3 text-center">
                Set elevation limits to focus on peaks within preferred ranges.
              </p>
            </div>
            <div className="feature-item flex flex-col items-center justify-center shadow-md hover:shadow-lg border border-gray-200 rounded-lg p-4">
              <FontAwesomeIcon
                icon={["fas", "mountain-sun"]}
                className="icons p-3"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Learn Terrain Tips
              </h3>
              <p className="text-gray-500 pt-3 text-center">
                Access educational resources on handling terrain difficulty and
                altitude challenges.
              </p>
            </div>
            <div className="feature-item flex flex-col items-center justify-center shadow-md hover:shadow-lg border border-gray-200 rounded-lg p-4">
              <FontAwesomeIcon icon={["fas", "tag"]} className="icons" />
              <h3 className="text-xl font-semibold text-gray-900">
                Add Location Tags
              </h3>
              <p className="text-gray-500 pt-3 text-center">
                Customize saved locations with personalized tags for easy
                organization.
              </p>
            </div>
            <div className="feature-item flex flex-col items-center justify-center shadow-md hover:shadow-lg border border-gray-200 rounded-lg p-4">
              <FontAwesomeIcon
                icon={["far", "paper-plane"]}
                className="icons p-3"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Share Peak Points
              </h3>
              <p className="text-gray-500 pt-3 text-center">
                Export shareable links for peak coordinates in navigation apps.
              </p>
            </div>
          </div>
        </div>
        <TeamInfo></TeamInfo>
      </div>

      <Footer></Footer>
    </>
  );
}
