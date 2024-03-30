import { Link } from "react-router-dom";
interface LandingNavProps {
  currentPage?: "signup" | "login";
}

export default function LandingNav({ currentPage }: LandingNavProps) {
  // Function to determine button text and link based on the current page
  const getButtonTextAndLink = () => {
    switch (currentPage) {
      case "signup":
        return { text: "Log In", link: "/login" };
      case "login":
        return { text: "Sign Up", link: "/signup" };
      default:
        return { text: "Sign Up", link: "/signup" };
    }
  };

  // Get button text and link based on the current page
  const { text, link } = getButtonTextAndLink();
  // scroll inside landing page
  const scrollToEl = (section: string) => {
    const Section = document.getElementById(section);
    if (Section) {
      Section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToFeatures = () => {
    scrollToEl("features");
  };
  const scrollToAbout = () => {
    scrollToEl("about");
  };
  const scrollToHelp = () => {
    scrollToEl("contact");
  };
  return (
    <nav className="bg-white">
      <div className="container m-auto px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-end">
          <span className="text-rose-600 font-extrabold text-4xl">Z</span>
          <span className="text-gray-800 font-semibold text-3xl">enith</span>
        </Link>
        {/* Navigation Links */}
        <div className="flex items-center space-x-5">
          <Link
            to="/"
            className="hidden sm:flex text-gray-500 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            to="#about"
            onClick={scrollToAbout}
            className="hidden sm:flex text-gray-500 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            to="#features"
            onClick={scrollToFeatures}
            className="hidden sm:flex text-gray-500 hover:text-gray-900"
          >
            Features
          </Link>

          <Link
            to="/#contact"
            onClick={scrollToHelp}
            className="hidden sm:flex text-gray-500 hover:text-gray-900"
          >
            Contact
          </Link>
          {/* Dynamic Button */}
          <Link
            to={link}
            className="bg-rose-500 text-white font-semibold px-4 py-[5px] rounded-xl transition duration-300 shadow-md transform hover:scale-105 hover:bg-rose-600"
          >
            {text}
          </Link>
        </div>
      </div>
    </nav>
  );
}
