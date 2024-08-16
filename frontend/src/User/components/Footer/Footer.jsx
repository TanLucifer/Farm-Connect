import React from "react";
import "./Footer.css";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
// import googlePlay from "../../../assets/google-play.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
<<<<<<< Updated upstream
    <footer className="footer">
      <div className="footer-top">
        <div className="flex-shrink-0 ">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="VigyBag Logo"
              style={{ height: "12vh", zIndex: "1", marginLeft: "40px" }}
            />
          </Link>

          <div
            className="text-center  md:text-left mb-4 md:mb-0 md:mr-8"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
            }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.vigybag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a73e8] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition duration-300">
              <img
                src=""
                alt="Google Play"
                className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3"
              />
              <span>
                <div className="text-xs">GET IT ON</div>
                <div className="text-base sm:text-lg md:text-xl font-semibold">
                  Google Play
                </div>
              </span>
            </a>
=======
    <>
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">FarmConnect</h4>
              <p className="text-green-200">Connecting farmers and buyers since 2024</p>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="#" className="text-green-200 hover:text-white">Home</Link></li>
                <li><Link to="#" className="text-green-200 hover:text-white">About Us</Link></li>
                <li><Link to="#" className="text-green-200 hover:text-white">Products</Link></li>
                <li><Link to="#" className="text-green-200 hover:text-white">Contact</Link></li>
                <li><Link to="#" className="text-green-200 hover:text-white">faq</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white">Facebook</a>
                <a href="#" className="text-green-200 hover:text-white">Twitter</a>
                <a href="#" className="text-green-200 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p className="text-green-200">&copy; 2024 FarmConnect. All rights reserved.</p>
>>>>>>> Stashed changes
          </div>
        </div>

        <div className="contact-info text-sm">
          <p className="font-thin text-center text-gray-400">QUICK LINKS</p>{" "}
          <hr />
          <br />
          <Link to="/" onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/faq" onClick={scrollToTop}>
            FAQ
          </Link>
          <Link to="/aboutUs" onClick={scrollToTop}>
            About Us
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            Contact us
          </Link>
          
        </div>
        <div className="contact-info text-sm">
          <p className="font-thin text-center text-gray-400">CONSUMER POLICY</p>{" "}
          <hr />
          <br />
          <Link to="/myOrders" onClick={scrollToTop}>
            Order
          </Link>
          <Link to="/help" onClick={scrollToTop}>
            Help
          </Link>
          <Link to="/privacy" onClick={scrollToTop}>
            Privacy Policy
          </Link>
          <Link to="/returnAndCancellation" onClick={scrollToTop}>
            Return and Cancellation
          </Link>
          <Link to="/EPR_Page" onClick={scrollToTop}>
            EPR Compliance
          </Link>
          <Link to="/termsAndCondition" onClick={scrollToTop}>
            Terms & Conditions
          </Link>
          <Link to="/shipping" onClick={scrollToTop}>
            shipping
          </Link>
        </div>
        <div className="flex flex-col justify-items-end items-start md:justify-center">
          <p className="text-center text-gray-400 text-sm md:justify-center underline">
            Registered Office Address:
          </p>{" "}
          <hr />
          <div className="address flex flex-col justify-start items-start text-sm hover:cursor-pointer">
            <a
              href="https://www.google.com/maps?q=Kanpur,+Uttar+Pradesh+208025"
              target="_blank"
              rel="noopener noreferrer">
              <p>
                <lord-icon
                  style={{
                    width: "25px",
                    height: "25px",
                    paddingTop: "0px",
                    paddingLeft: "1px",
                  }}
                  src="https://cdn.lordicon.com/tdtlrbly.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"></lord-icon>{" "}
                Kanpur, Uttar Pradesh 208025
              </p>
            </a>
            <p>
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  paddingTop: "0px",
                  paddingLeft: "1px",
                }}
                src="https://cdn.lordicon.com/xtzvywzp.json"
                trigger="hover"
                colors="primary:#ffffff"></lord-icon>{" "}
              <a href="mailto:Farmconnect@gmail.com">farmconnect@gmail.com</a>
            </p>
            <p>
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  paddingTop: "0px",
                  paddingLeft: "1px",
                }}
                src="https://cdn.lordicon.com/srsgifqc.json"
                trigger="hover"
                colors="primary:#ffffff"></lord-icon>{" "}
              <a href="tel:1234567890">+91 1234567890</a>
            </p>
          </div>
          <br />
          <div className="social-media flex flex-col justify-center items-center">
            <p className="text-sm text-center text-gray-400 sm:items-center underline">
              SOCIALS:
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/vigybag/"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram size={30} style={{ color: "#E4405F" }} />
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer">
                <BsTwitterX size={25} style={{ color: "#ffffff" }} />{" "}
                {/* X color */}
              </a>
              <a
                href="https://www.linkedin.com/posts/codervivek_startup-teamwork-innovation-activity-7211097005408890880-haWJ?"
                target="_blank">
                <lord-icon
                  style={{
                    width: "30px",
                    height: "30px",
                    paddingTop: "0px",
                    paddingLeft: "1px",
                  }}
                  src="https://cdn.lordicon.com/ftgjzwjn.json"
                  trigger="hover"></lord-icon>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61553496839072"
                target="_blank">
                <lord-icon
                  style={{
                    width: "30px",
                    height: "30px",
                    paddingTop: "0px",
                    paddingLeft: "1px",
                  }}
                  src="https://cdn.lordicon.com/nlsfemdg.json"
                  trigger="hover"></lord-icon>
              </a>

              <a href="https://web.whatsapp.com/" target="_blank">
                <lord-icon
                  style={{
                    width: "35px",
                    height: "35px",
                    paddingTop: "0px",
                    paddingLeft: "1px",
                  }}
                  src="https://cdn.lordicon.com/fjuachvi.json"
                  trigger="hover"></lord-icon>
              </a>
              <a
                href="https://discord.com/invite/xujgQevyZ4"
                target="_blank"
                rel="noopener noreferrer">
                <FaDiscord size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="footer-bottom text-sm">
        <p>© {new Date().getFullYear()} VigyBag. All rights reserved</p>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
          alt="Payment methods"></img>
        <nav>
          <Link to="/service" onClick={scrollToTop}>
            Our Services
          </Link>
          <Link to="/gift-card" onClick={scrollToTop}>
            Gift Cards
          </Link>
          <Link to="/payment-page" onClick={scrollToTop}>
            payments
          </Link>
          <Link to="/faq" onClick={scrollToTop}>
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
