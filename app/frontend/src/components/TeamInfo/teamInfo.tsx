import "./teamInfo.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import clara from "./../../assets/clara.png";
import tris from "./../../assets/tris.png";
import tishtanya from "./../../assets/tishtanya.png";
import arky from "./../../assets/arky.png";
import suzuna from "./../../assets/suzuna.jpeg";
import jonah from "./../../assets/jonah.png";

function TeamInfo() {
  return (
    <div className="container">
      <h2 className="text-gray-900 text-4xl text-center font-bold">Our Team</h2>
      <div className="members">
        <Swiper
          freeMode={true}
          grabCursor={true}
          className="mySwiper"
          width={200}
          loop={true}
          spaceBetween={30}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            reverseDirection: true,
            pauseOnMouseEnter: true,
          }}
        >
          <SwiperSlide className="member">
            <div className="blurdiv">
              <img src={clara} alt="woman work our web designer" />
            </div>
            <h4>Clara</h4>
            <div className="job">Product Owner</div>
            <div className="desc">chingu member description...</div>
          </SwiperSlide>
          <SwiperSlide className="member">
            <div className="blurdiv">
              <img src={tris} alt="woman work our web designer" />
            </div>
            <h4>Tris Bouden</h4>
            <div className="job">Full-stack Developer</div>
            <div className="desc">chingu member description...</div>
          </SwiperSlide>
          <SwiperSlide className="member">
            <div className="blurdiv">
              <img src={arky} alt="man work our plant designer" />
            </div>
            <h4>Arky Asmal</h4>
            <div className="job">Backend Developer</div>
            <div className="desc">chingu member description...</div>
          </SwiperSlide>
          <SwiperSlide className="member">
            <div className="blurdiv">
              <img src={tishtanya} alt="man work our creator" />
            </div>
            <h4>Tishtanya Shaw</h4>
            <div className="job">Full-stack Developer</div>
            <div className="desc">chingu member description...</div>
          </SwiperSlide>
          <SwiperSlide className="member">
            <div className="blurdiv">
              <img src={suzuna} alt="woman work our managment" />
            </div>
            <h4>Sushmita Ghosh</h4>
            <div className="job">Frontend Developer</div>
            <div className="desc">chingu member description...</div>
          </SwiperSlide>
          <SwiperSlide className="member">
            <div className="blurdiv">
              <img src={jonah} alt="man work our boss" />
            </div>
            <h4>Jonah</h4>
            <div className="job">Data Scientist</div>
            <div className="desc">chingu member description...</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TeamInfo;
