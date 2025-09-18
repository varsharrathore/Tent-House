import Faq from "../Components/Faq";
import Testimonials from "../Components/Testimonials";
import Styles from '../Styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMedal, faHandshake } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <>
      <div className={Styles.containerBg}
        style={{
          backgroundImage: "url('/Pictures/wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container bg-black opacity-75 text-warning-emphasis">
          <h1 className={Styles.display4}>Welcome to Vintage Tent Rentals</h1>
          <h3>Creating Magical Moments with Elegant Tents</h3>
        </div>
      </div>
      {/* Intro + Experience Section */}
      <div className="container">
        <div className="row">
          <div className="col text-center mt-3 d-md-none">
            <h2 className={`${Styles.display6} text-warning-emphasis`}>
              Welcome to Vintage Tent Rentals
            </h2>
          </div>

          <div className="col-lg-6 left-paragraph text-left p-4">
            <p className="border border-2 border-warning p-4">
              "Experience the magic of events with our premium tent house services.
              Elevate your special occasions with exquisite tents that combine elegance
              and comfort. From weddings to corporate gatherings, we transform spaces
              into captivating experiences. Our extensive range of stylish tents caters
              to diverse themes, ensuring your event stands out. Impeccable
              craftsmanship, attention to detail, and personalized setups make us your
              trusted partner. Create unforgettable memories under enchanting canopies
              that reflect your unique style. Embrace seamless event planning, quality
              materials, and a commitment to exceeding expectations. Let us bring your
              dream event to life, one exquisite tent at a time."
            </p>
          </div>

          <div className="col text-right p-5 d-none d-md-block">
            <h2 className={`${Styles.display5} text-warning-emphasis`}>
              Welcome to Vintage Tent Rentals
            </h2>
            <h4 className="text text-warning-emphasis opacity-75">
              Creating Magical Moments with Elegant Tents
            </h4>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row row-cols-1 row-cols-md-3 g-4 pb-4">
        {/* Card 1 */}
        <div className="col d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faUsers} className={Styles.faUsersGear} />
          <div className="card flex-grow-1 w-100">
            <div className="card-body border border-success">
              <h5 className="card-title text-success text-center">Authenticity</h5>
              <hr className="border border-success" />
              <p className="card-text">
                "Transparent communication, efficient logistics, trained staff, and adaptability
                for dependable tent house services and lasting client trust."
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faMedal} className={Styles.faMedal} />
          <div className="card flex-grow-1 w-100">
            <div className="card-body border border-success">
              <h5 className="card-title text-success text-center">Quality</h5>
              <hr className="border border-success" />
              <p className="card-text">
                "Exceed expectations with premium tents, impeccable accessories, and meticulous
                service. Quality defines our tent house business."
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faHandshake} className={Styles.faHandshake} />
          <div className="card flex-grow-1 w-100">
            <div className="card-body border border-success">
              <h5 className="card-title text-success text-center">Experience</h5>
              <hr className="border border-success" />
              <p className="card-text">
                "Craft unforgettable moments with our tent house expertise. Years of experience
                ensure flawless events, leaving cherished memories."
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <div className={Styles.containerBgl}
        style={{
          backgroundImage: "url('/Pictures/tent.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h3 className={`${Styles.display5} text-warning-emphasis`}>Our Services</h3>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col p-2">
              <div className="card border-warning opacity-75 border-4">
                <div className="card-body">
                  <a className="card-title text-decoration-none" href="/Services#marquee-tents">Marquee Tents</a>
                </div>
              </div>
            </div>
            <div className="col p-2">
              <div className="card border-warning opacity-75 border-4">
                <div className="card-body">
                  <a className="card-title text-decoration-none" href="/Services#decor">Decor</a>
                </div>
              </div>
            </div>
            <div className="col p-2">
              <div className="card border-warning opacity-75 border-4">
                <div className="card-body">
                  <a className="card-title text-decoration-none" href="/Services#table-chair">Table And Chair</a>
                </div>
              </div>
            </div>
            <div className="col p-2">
              <div className="card border-warning opacity-75 border-4">
                <div className="card-body">
                  <a className="card-title text-decoration-none" href="/Services">Something else here</a>
                </div>
              </div>
            </div>
          </div>
          <a className="btn btn-dark border-warning text-warning opacity-75 mt-2 px-2 py-2" href="/Book" role="button">Book Now</a>
        </div>
      </div>
      <Testimonials />
      <Faq />
    </>
  );
};


export default Home;

