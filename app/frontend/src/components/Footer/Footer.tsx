import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer bg-black text-gray-200 mt-10" id="contact">
      <div className="container m-auto px-3 flex sm:gap-4 items-center flex-col-reverse sm:flex-row justify-center">
        <div className="flex flex-col justify-between pt-11">
          <div className="about-web">
            <h2 className="text-4xl font-extrabold text-rose-500">Zenith</h2>
            <p className="py-3">
              Reach out to us directly via our contact form below. Whether you
              have questions, suggestions, or just want to say hello, we're here
              to listen and assist you on your journey to new heights
            </p>
            <button className="text-rose-500 px-3 py-1 border-rose-500 rounded-xl border-2 btn-tomap">
              <Link to="/map">Explore our Map</Link>
            </button>
            <div className="space-x-6 text-3xl py-5">
              {/* TODO: set up social media for zenith */}
              <a href="https://instagram.com">
                <FontAwesomeIcon
                  className="media ig"
                  icon={["fab", "instagram"]}
                ></FontAwesomeIcon>
              </a>
              <a href="https://facebook.com">
                <FontAwesomeIcon
                  className="media fb"
                  icon={["fab", "facebook-f"]}
                ></FontAwesomeIcon>
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon
                  className="media tw"
                  icon={["fab", "x-twitter"]}
                ></FontAwesomeIcon>
              </a>
              <a href="https://linkedin.com">
                <FontAwesomeIcon
                  className="media in"
                  icon={["fab", "linkedin"]}
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
        <div className="contact">
          <h2 className="text-white text-3xl font-bold">Get In Touch!</h2>
          {/* TODO: set from action */}
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="area h-44 w-80"
              name="message"
              id="msg"
              placeholder="Send a message..."
              defaultValue="Hi!"
            ></textarea>
            <input className="submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div className="rights">
        <p>
          Copyright &copy; 2024 All Rights Reserved by
          <a
            href="https://github.com/chingu-voyages/Zenith"
            target="_blank"
            rel="noreferrer"
            className="text-rose-500"
          >
            &nbsp;Zenith
          </a>
        </p>
      </div>
    </div>
  );
}
