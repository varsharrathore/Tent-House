import { Link } from "react-router-dom";
import Styles from '../Styles/Gallery.module.css';

const Gallery = () => {
  return (
    <>
      <div className={Styles.containerB1}
        style={{
          backgroundImage: "url('/Pictures/tent3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container bg-black opacity-75 text-warning-emphasis">
          <h1 className={Styles.display4}>Welcome to Vintage Tent Rentals</h1>
          <h3>Creating Magical Moments with Elegant Tents</h3>
        </div>
      </div>

      <div className={Styles.containerB2}>
        <div className="row row-cols-1 row-cols-md-3">

          {/* Flooring Gallery */}
          <div className="col p-4">
            <div className="card h-100">
              <img src="/Pictures/stage.png" className="card-img-top" style={{ height: "52vh"}} alt="Flooring" />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <button type="button" className="btn btn-dark border-warning text-warning opacity-75 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#flooringModal">
                  Flooring Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Flooring Modal */}
          <div className="modal fade" id="flooringModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-black">
                <div className="modal-header">
                  <h5 className="modal-title text-warning-emphasis">Flooring Gallery</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className={Styles.imageThumbnails}>
                   <div className={Styles.imageGroup}>
                  <img src="/Pictures/stage 1.jpg" className={Styles.imageThumbnail} alt="Stage 1" />
                  <img src="/Pictures/stage2.jpg" className={Styles.imageThumbnail} alt="Stage 2" />
                     </div>
                      <div className={Styles.imageGroup}>
                  <img src="/Pictures/stage 3.webp" className={Styles.imageThumbnail} alt="Stage 3" />
                  <img src="/Pictures/stage 4.jpg" className={Styles.imageThumbnail} alt="Stage 4" />
                  </div>      
                </div>
              </div>
            </div>
          </div>

          {/* Marquee Tents */}
          <div className="col p-4">
            <div className="card h-100 ">
              <img src="/Pictures/marquee tent 1.jpeg" className="card-img-top" style={{ height: "52vh"}} alt="Marquee" />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <button type="button" className="btn btn-dark border-warning text-warning opacity-75 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#marqueeModal">
                  Marquee Tents
                </button>
              </div>
            </div>
          </div>

          <div className="modal fade" id="marqueeModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-black">
                <div className="modal-header">
                  <h5 className="modal-title text-warning-emphasis">Marquee Tents</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className={Styles.imageThumbnails}>
                   <div className={Styles.imageGroup}>
                  <img src="/Pictures/marquee tent.webp" className={Styles.imageThumbnail} alt="Tent 1" />
                  <img src="/Pictures/marquee tent 2.jpg" className={Styles.imageThumbnail} alt="Tent 2" />
                       </div>
                      <div className={Styles.imageGroup}>
                  <img src="/Pictures/marquee tent 3.jpg" className={Styles.imageThumbnail} alt="Tent 3" />
                  <img src="/Pictures/marquee tent4.jpg" className={Styles.imageThumbnail} alt="Tent 4" />
                   </div>     
                </div>
              </div>
            </div>
          </div>

          {/* Wedding Gallery */}
          <div className="col p-4">
            <div className="card h-100">
              <img src="/Pictures/wedding2.jpg" className="card-img-top" style={{ height: "52vh"}} alt="Wedding" />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <button type="button" className="btn btn-dark border-warning text-warning opacity-75 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#weddingModal">
                  Wedding Gallery
                </button>
              </div>
            </div>
          </div>

          <div className="modal fade" id="weddingModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-black">
                <div className="modal-header">
                  <h5 className="modal-title text-warning-emphasis">Wedding Gallery</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className={Styles.imageThumbnails}>
                   <div className={Styles.imageGroup}>
                  <img src="/Pictures/wedding.jpg" className={Styles.imageThumbnail} alt="Wedding 1" />
                  <img src="/Pictures/wedding2.jpg" className={Styles.imageThumbnail} alt="Wedding 2" />
                        </div>
                      <div className={Styles.imageGroup}>
                  <img src="/Pictures/wedding3.jpeg" className={Styles.imageThumbnail} alt="Wedding 3" />
                  <img src="/Pictures/wedding4.webp" className={Styles.imageThumbnail} alt="Wedding 4" />
                         </div>
                         <div className={Styles.imageGroup}>
                  <img src="/Pictures/wedding5.webp" className={Styles.imageThumbnail} alt="Wedding 5" />
                    </div>       
                </div>
              </div>
            </div>
          </div>

          {/* Birthday Gallery */}
          <div className="col p-4">
            <div className="card h-100">
              <img src="/Pictures/birthday7.jpg" className="card-img-top" style={{ height: "52vh"}} alt="Birthday" />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <button type="button" className="btn btn-dark border-warning text-warning opacity-75 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#birthdayModal">
                  Birthday Gallery
                </button>
              </div>
            </div>
          </div>

          <div className="modal fade" id="birthdayModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-black">
                <div className="modal-header">
                  <h5 className="modal-title text-warning-emphasis">Birthday Gallery</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className={Styles.imageThumbnails}>
                       <div className={Styles.imageGroup}>
                  <img src="/Pictures/birthday1.jpg" className={Styles.imageThumbnail} alt="Birthday 1" />
                  <img src="/Pictures/birthday2.jpg" className={Styles.imageThumbnail} alt="Birthday 2" />
                        </div>
                      <div className={Styles.imageGroup}>
                  <img src="/Pictures/birthday3.jpg" className={Styles.imageThumbnail} alt="Birthday 3" />
                  <img src="/Pictures/birthday4.jpg" className={Styles.imageThumbnail} alt="Birthday 4" />
                          </div>
                        <div className={Styles.imageGroup}>
                  <img src="/Pictures/birthday5.jpg" className={Styles.imageThumbnail} alt="Birthday 5" />
                  <img src="/Pictures/birthday6.webp" className={Styles.imageThumbnail} alt="Birthday 6" />
                           </div>
                            <div className={Styles.imageGroup}>
                  <img src="/Pictures/birthday7.jpg" className={Styles.imageThumbnail} alt="Birthday 7" />
                  <img src="/Pictures/birthday.jpeg" className={Styles.imageThumbnail} alt="Birthday 8" />
                   </div>           
                </div>
              </div>
            </div>
          </div>

          {/* Reception Gallery */}
          <div className="col p-4">
            <div className="card h-100">
              <img src="/Pictures/reception4.jpg" className="card-img-top" style={{ height: "52vh"}} alt="Reception" />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <button type="button" className="btn btn-dark border-warning text-warning opacity-75 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#receptionModal">
                  Reception
                </button>
              </div>
            </div>
          </div>

          <div className="modal fade" id="receptionModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-black">
                <div className="modal-header">
                  <h5 className="modal-title text-warning-emphasis">Reception</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className={Styles.imageThumbnails}>
                   <div className={Styles.imageGroup}>
                  <img src="/Pictures/reception.jpg" className={Styles.imageThumbnail} alt="Reception 1" />
                  <img src="/Pictures/reception1.jpg" className={Styles.imageThumbnail} alt="Reception 2" />
                      </div>
                      <div className={Styles.imageGroup}>
                  <img src="/Pictures/reception2.jpg" className={Styles.imageThumbnail} alt="Reception 3" />
                  <img src="/Pictures/reception3.jpg" className={Styles.imageThumbnail} alt="Reception 4" />
                           </div>
                         <div className={Styles.imageGroup}>
                  <img src="/Pictures/reception4.jpg" className={Styles.imageThumbnail} alt="Reception 5" />
                  <img src="/Pictures/reception5.webp" className={Styles.imageThumbnail} alt="Reception 6" />
                   </div>        
                </div>
              </div>
            </div>
          </div>

          {/* Decor Gallery */}
          <div className="col p-4">
            <div className="card h-100">
              <img src="/Pictures/decor.jpg" className="card-img-top" style={{ height: "52vh"}} alt="Decor" />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <button type="button" className="btn btn-dark border-warning text-warning opacity-75 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#decorModal">
                  Decoration
                </button>
              </div>
            </div>
          </div>

          <div className="modal fade" id="decorModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-black">
                <div className="modal-header">
                  <h5 className="modal-title text-warning-emphasis">Decor</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className={Styles.imageThumbnails}>
                   <div className={Styles.imageGroup}>
                  <img src="/Pictures/decor1.jpg" className={Styles.imageThumbnail} alt="Decor 1" />
                  <img src="/Pictures/decor3.jpg" className={Styles.imageThumbnail} alt="Decor 2" />
                       </div>
                      <div className={Styles.imageGroup}>
                  <img src="/Pictures/decor4.jpg" className={Styles.imageThumbnail} alt="Decor 3" />
                  <img src="/Pictures/decor5.jepg" className={Styles.imageThumbnail} alt="Decor 4" />
                           </div>
                         <div className={Styles.imageGroup}>
                  <img src="/Pictures/decor6.jpg" className={Styles.imageThumbnail} alt="Decor 5" />
                  <img src="/Pictures/decor.jpg" className={Styles.imageThumbnail} alt="Decor 6" />
                  </div>         
                </div>
              </div>
            </div>
          </div>

          {/* Concert Gallery */}
          <div className="col p-4">
            <div className="card h-100">
              <img src="/Pictures/concert4.jpg" className="card-img-top" style={{ height: "52vh"}} alt="Concert" />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <button type="button" className="btn btn-dark border-warning text-warning opacity-75 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#concertModal">
                  Concerts
                </button>
              </div>
            </div>
          </div>

          <div className="modal fade" id="concertModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-black">
                <div className="modal-header">
                  <h5 className="modal-title text-warning-emphasis">Concerts</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className={Styles.imageThumbnails}>
                   <div className={Styles.imageGroup}>
                  <img src="/Pictures/concert1.webp" className={Styles.imageThumbnail} alt="Concert 1" />
                  <img src="/Pictures/concert2.jpg" className={Styles.imageThumbnail} alt="Concert 2" />
                       </div>
                      <div className={Styles.imageGroup}>
                  <img src="/Pictures/concert3.jpg" className={Styles.imageThumbnail} alt="Concert 3" />
                  <img src="/Pictures/concert4.jpg" className={Styles.imageThumbnail} alt="Concert 4" />
                   </div>     
                </div>
              </div>
            </div>
          </div>

          {/* Tables & Chairs */}
          <div className="col p-4">
            <div className="card h-100">
              <img src="/Pictures/chair.jpg" className="card-img-top" style={{ height: "52vh"}} alt="Tables" />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <button type="button" className="btn btn-dark border-warning text-warning opacity-75 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#tablesModal">
                  Tables & Chairs
                </button>
              </div>
            </div>
          </div>

          <div className="modal fade" id="tablesModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-black">
                <div className="modal-header">
                  <h5 className="modal-title text-warning-emphasis">Tables & Chairs</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className={Styles.imageThumbnails}>
                   <div className={Styles.imageGroup}>
                  <img src="/Pictures/chair1.webp" className={Styles.imageThumbnail} alt="Tables 1" />
                  <img src="/Pictures/chair2.webp" className={Styles.imageThumbnail} alt="Tables 2" />
                       </div>
                      <div className={Styles.imageGroup}>
                  <img src="/Pictures/chair3.webp" className={Styles.imageThumbnail} alt="Tables 3" />
                  <img src="/Pictures/chair4.jpeg" className={Styles.imageThumbnail} alt="Tables 4" />
                   </div>     
                </div>
              </div>
            </div>
          </div>

          {/* Miscellaneous */}
          <div className="col p-4">
            <div className="card h-100">
              <img src="/Pictures/tent1.jpg" className="card-img-top" style={{ height: "52vh"}} alt="Tent" />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <button type="button" className="btn btn-dark border-warning text-warning opacity-75 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#miscModal">
                  Miscellaneous
                </button>
              </div>
            </div>
          </div>

          <div className="modal fade" id="miscModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-black">
                <div className="modal-header">
                  <h5 className="modal-title text-warning-emphasis">Miscellaneous</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className={Styles.imageThumbnails}>
                   <div className={Styles.imageGroup}>
                  <img src="/Pictures/tent.jpg" className={Styles.imageThumbnail} alt="Tent 1" />
                  <img src="/Pictures/tent1.jpg" className={Styles.imageThumbnail} alt="Tent 2" />
                      </div>
                      <div className={Styles.imageGroup}>
                  <img src="/Pictures/tent2.jpg" className={Styles.imageThumbnail} alt="Tent 2" />
                  <img src="/Pictures/tent3.jpg" className={Styles.imageThumbnail} alt="Tent 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <h4 className="text text-warning-emphasis d-flex flex-column flex-md-row align-items-center gap-3">
        Creating Magical Moments with Elegant Tents
        <Link className="btn btn-dark border-warning text-warning" to="/book">Book Now</Link>
      </h4>
    </>
  );
};

export default Gallery;

