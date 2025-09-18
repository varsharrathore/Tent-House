import Testimonials from "../Components/Testimonials";
import Styles from '../Styles/Services.module.css';

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <img
              src="/Pictures/wedding2.jpg"
              className={Styles.imageTag}
              alt="Wedding Tent"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6 right-paragraph text-left p-4">
            <h2 className="text-warning-emphasis text-center">
              Wedding and Event Tents
            </h2>

            <ul className={Styles.customList}>
              <li>Wedding Tents</li>
              <li>Cooking Tents</li>
            </ul>

            <ul className={Styles.customList}>
              <li>Maxiframe Tents</li>
            </ul>

            <p>
              Elevate your event with our exquisite wedding tents, designed to
              combine elegance with practicality. Our cooking tents provide a
              convenient space for culinary delights, ensuring your guests enjoy a
              delectable feast. Maxiframe tents offer versatile options for
              creating customized event spaces that perfectly suit your vision.
              Let us transform your outdoor setting into an unforgettable venue
              with our exceptional range of tents.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col p-5 d-md-none">
            <img
              src="/Pictures/marquee tent 2.jpg"
              className={Styles.imageTag}
              alt="Marquee Tent" />
          </div>
          <div className="col-lg-6 left-paragraph text-left p-4" id="marquee-tents">
            <h2 className="text-warning-emphasis text-center">Marquee Tents </h2>
            <p>
              Marquee tents are the epitome of versatility and elegance in event hosting. These spacious and stylish structures offer a blank canvas for your imagination, allowing you to create unforgettable gatherings, from weddings to corporate functions. With their sturdy construction and weather-resistant features, marquee tents ensure your event is sheltered from the elements without compromising on aesthetics. Their airy interiors and open design provide ample room for creativity in layout and decor, making them the ideal choice for crafting unique and memorable experiences. Elevate your event with the timeless charm and adaptability of our marquee tents.</p>
          </div>
          <div className="col p-5 d-none d-md-block">
            <img
              src="/Pictures/marquee tent 2.jpg"
              className={Styles.imageTag}
              alt="Marquee Tent" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <img
              src="/Pictures/decor1.jpg"
              className={Styles.imageTag}
              alt="Lighting and Decor" />
          </div>
          <div className="col-lg-6 right-paragraph text-left p-4" id="decor">
            <h2 className="text-warning-emphasis text-center">Lighting, Sound and Decor</h2>
            <p>
              In the world of tent house business, our expertise extends beyond mere structures. We specialize in transforming spaces through impeccable lighting, immersive sound, and captivating decor. Our lighting designs enhance the ambiance, creating a magical atmosphere that captivates guests. With our state-of-the-art sound systems, every word spoken and note played is crystal clear, elevating the experience. From elegant drapery to personalized decor, we infuse creativity into every corner, ensuring your event is a masterpiece of sight and sound.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col p-5 d-md-none">
            <img
              src="/Pictures/stage2.jpg"
              className={Styles.imageTag}
              alt="Stage Decor" />
          </div>
          <div className="col-lg-6 left-paragraph text-left p-4">
            <h2 className="text-warning-emphasis text-center">Flooring and Staging</h2>
            <ul className={Styles.customList}>
              <li>LED Dance Floors</li>
              <li>Wooden Floors</li>
            </ul>
            <p>
              At our tent house, we understand that the foundation of any remarkable event lies in the details. Our flooring and staging options, including stunning LED dance floors and elegant wooden floors, are designed to transform your venue into a dynamic and visually captivating space. Whether you're looking to create a vibrant dance floor experience with our LED flooring or enhance the ambiance with the timeless appeal of wooden floors, our offerings cater to your unique vision. Elevate your event with our exquisite flooring and staging solutions, where every step is a statement of style and sophistication.</p>
          </div>
          <div className="col p-5 d-none d-md-block">
            <img
              src="/Pictures/stage2.jpg"
              className={Styles.imageTag}
              alt="Stage Decor" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <img
              src="/Pictures/chair2.webp"
              className={Styles.imageTag}
              alt="Table and Chair" />
          </div>
          <div className="col-lg-6 right-paragraph text-left p-4" id="table-chair">
            <h2 className="text-warning-emphasis text-center">Table and Chair</h2>
            <ul className={Styles.customList}>
              <li>Plastic Chairs</li>
              <li>Padded Chairs</li>
            </ul>
            <ul className={Styles.customList}>
              <li>Cocktail Tables</li>
              <li>Tables(Round & Rectangular)</li>
            </ul>
            <p>
              In our tent house business, we take great pride in offering a diverse range of seating and table options to meet the unique needs of every event. Our selection includes durable plastic chairs, providing a practical and budget-friendly seating solution. For added comfort and elegance, we offer padded chairs that exude sophistication. Whether you prefer round or rectangular tables, we have you covered, and our cocktail tables are perfect for creating intimate gathering spaces. With our versatile tables and chairs, we ensure that your event seating is not just functional but also stylish and comfortable.</p>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Services;
