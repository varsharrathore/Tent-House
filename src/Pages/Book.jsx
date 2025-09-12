import Styles from '../Styles/Book.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Book = () => {
  return (
    <>
      <div className={Styles.containerB}>
        <div className="row">
          {/* Left Content */}
          <div className="col-md-6 p-5 text-left">
            <h2 className={`display-4 text-warning-emphasis ${Styles.heading}`}>
              Welcome to Vintage Tent Rentals
            </h2>
            <h2 className="text-warning-emphasis opacity-75">
              Creating Magical Moments with Elegant Tents
            </h2>
            <h2 className={`${Styles.contactHeading} p-3`}>Contact Us</h2>
            <p className="text fs-5"><FontAwesomeIcon icon={faPhone} className={Styles.faPhone} /> Tele:</p>
            <p className="text fs-5"><FontAwesomeIcon icon={faEnvelope} className={Styles.faEnvelope} /> Email: contact@example.com</p>
            <p className="text fs-5"><FontAwesomeIcon icon={faLocationDot} className={Styles.faLocationDot} /> Address: 123 Main St, Vancover, Canada,123456</p>
          </div>

          {/* Right Form */}
          <div className={`col-md-6 col-lg-4 ${Styles.formContainer}`}>
            <h2 className={`text-center text-black opacity-50 py-3 ${Styles.formHeading}`}>
              Booking Form
            </h2>
            <form>
              <div className={Styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Yashikaa Rathore" required />
              </div>

              <div className={Styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="contact@example.com" required />
              </div>

              <div className={Styles.formGroup}>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" className="form-control" id="phone" name="phone" placeholder="+1 1234578900" required />
              </div>

              <div className={Styles.formGroup}>
                <label htmlFor="address">Address:</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="Address" required />
              </div>

              <div className={Styles.formGroup}>
                <label htmlFor="event_type">Event Type:</label>
                <select className="form-control" id="event_type" name="event_type">
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="party">Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={Styles.formGroup}>
                <label htmlFor="event_date">Event Date:</label>
                <input type="date" className="form-control" id="event_date" name="event_date" required />
              </div>

              <div className={Styles.formGroup}>
                <label htmlFor="additional_info">Additional Information:</label>
                <textarea className="form-control" id="additional_info" name="additional_info" placeholder="Write additional details..." rows="4"></textarea>
              </div>

              <button
                type="button"
                className="btn btn-dark border-warning text-warning opacity-75 mt-3 fs-5"
                onClick={() => alert("This is a static form and won't actually submit data.")}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
