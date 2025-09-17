import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="container text-center ">
      <h2 className="text text-warning-emphasis mt-4">What Our Clients Say</h2>

      {/* Stars */}
      <div className="mb-3 mt-3">
        <FontAwesomeIcon icon={faStar} style={{ color: "gold", margin: "0 4px" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "gold", margin: "0 4px" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "2rem", margin: "0 4px" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "2rem", margin: "0 4px" }} />
        <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: "gold", fontSize: "2rem", margin: "0 4px" }} />
      </div>



      {/* Testimonials */}
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col-md-4 p-4">
          <div className="testimonial">
            <p>
              "Tent House Paradise made my wedding day truly special. Their
              attention to detail and personalized service were outstanding."
            </p>
            <p>
              <em>- John Doe</em>
            </p>
          </div>
        </div>

        <div className="col-md-4 p-4">
          <div className="testimonial">
            <p>
              "The team's creativity and professionalism exceeded my
              expectations. I highly recommend them for any event!"
            </p>
            <p>
              <em>- Jane Smith</em>
            </p>
          </div>
        </div>

        <div className="col-md-4 p-4">
          <div className="testimonial">
            <p>
              "Tent Haven's attention to detail, flexibility, and creative setup
              made our wedding reception a magical experience."
            </p>
            <p>
              <em>- Alex Johnson</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
