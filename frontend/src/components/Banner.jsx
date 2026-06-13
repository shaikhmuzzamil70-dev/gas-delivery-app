import heroImage from "../assets/hero.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={heroImage} alt="Hero Banner" />
    </div>
  );
}

export default Banner;