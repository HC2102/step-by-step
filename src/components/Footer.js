import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <section className="footer mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <p className="copyright">Copyright @ 2023 AnhTTV20 </p>
                    </div>
                    <div className="col-2" onClick={scrollToTop}>
                        <div className="back-to-top">
                            <FontAwesomeIcon icon={faUpLong} color="blue" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Footer;