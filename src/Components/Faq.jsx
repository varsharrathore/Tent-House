const Faq = () => {
  return (
    <div className="body" style={{ backgroundColor: "bisque", padding: "2%" }}>
      <div className="container">
        <h2 className="text-center text-warning-emphasis mb-3">FAQs</h2>
        <div className="accordion bg-black rounded" id="faqAccordion">

          {/* FAQ Item 1 */}
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What types of tents do you offer?
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="card-body">
                We offer a variety of tents including traditional pole tents, frame tents, and canopy tents. Each type comes in various sizes to accommodate different events and group sizes.
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How can I make a reservation?
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="card-body">
                You can make a reservation by visiting our website and filling out the reservation form. Alternatively, you can give us a call and our team will assist you with the booking process.
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can I customize the tent decorations?
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="card-body">
                Yes, we offer customization options for tent decorations to match the theme of your event. Our team can work with you to create a personalized look for your event space.
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What is the rental duration?
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="card-body">
                Our standard rental duration is for 24 hours. However, we can discuss extended rental options based on your event needs.
              </div>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="card">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <button
                  className="btn collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Do you provide setup and takedown services?
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#faqAccordion"
            >
              <div className="card-body">
                Yes, our team provides both setup and takedown services to ensure your event space is prepared and dismantled properly.
              </div>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div className="card">
            <div className="card-header" id="headingSix">
              <h2 className="mb-0">
                <button
                  className="btn collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Can I rent additional equipment along with the tent?
                </button>
              </h2>
            </div>
            <div
              id="collapseSix"
              className="collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#faqAccordion"
            >
              <div className="card-body">
                Absolutely! We offer a range of rental equipment including tables, chairs, lighting, and more to complement your event needs.
              </div>
            </div>
          </div>

          {/* FAQ Item 7 */}
          <div className="card">
            <div className="card-header" id="headingSeven">
              <h2 className="mb-0">
                <button
                  className="btn collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  What areas do you serve in Surrey, Canada?
                </button>
              </h2>
            </div>
            <div
              id="collapseSeven"
              className="collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#faqAccordion"
            >
              <div className="card-body">
                We provide tent rental services in various areas of Surrey, Canada. Please contact us to inquire about availability in your specific location.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Faq;
