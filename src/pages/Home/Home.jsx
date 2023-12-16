import AboutMenu from "../../components/AboutMenu/AboutMenu";
import Features from "../../components/Features/Features";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hotel-name">
          <h3>TRUNK(HOTEL)</h3>
          <h4>YOYOGI PARK</h4>
        </div>
        <div className="hotel-moto">
          <h1>Urban</h1>
          <h1>Recharge</h1>
        </div>
      </div>
      <div className="section1">
        <div className="section1-container">
          <div className="section1-title">
            <h1>Urban Recharge</h1>
          </div>
          <div className="section1-content">
            <div className="content-1">
              <p>
                Finding both solace and stimulus in the heart of the city,
                forging a path to enduring vitality.
              </p>
            </div>
            <div className="content-2">
              <h3>「Urban Recharge」</h3>
              <p>
                それは、都会のくつろぎと刺激を同時に愉しみ、
                明日のエネルギーへとつなぐこと。 TRUNK(HOTEL)YOYOGI PARKは
                緑あふれる代々木公園の目の前で、気心の知れた仲間と賑わい、
                日々の活力を満たすブティックホテルを目指します。
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutMenu />
      <Features />
      <div className="section2">
        <div className="city-name">
          <p>Tomigaya</p>
        </div>
        <div className="image-div">
          <div className="image-content">
            <div className="section2-heading">
              <h1>About Tomigaya</h1>
            </div>
            <img
              src="https://yoyogipark.trunk-hotel.com/_nuxt/mask-area-image.17193c05.jpg"
              alt=""
              height={300}
              width={600}
            />
            <div className="section2-japanese">
              <p>
                {" "}
                奥渋、富ヶ谷。
                <br /> 都会と自然の空気感が交差する
                <br /> 独自のミックスカルチャーが息づく街
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="city-name city-name2">
          <p>Tokyo</p>
        </div>
      </div>
    </>
  );
};

export default Home;
