import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import'./promotion.css'
import {
    faCheck,
    faShippingFast,
    faExchangeAlt,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
const Promotion = () => {
    return (
        <section className="promotion">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4 p-5">
                            <FontAwesomeIcon icon={faCheck}
                                size="3x" color="blue" />
                            <h5 className="font-weight-semi-bold m-0 ml-3">
                                Sản phẩm chất lượng
                            </h5>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4 p-5">
                            <FontAwesomeIcon icon={faShippingFast}
                                size="3x" color="blue" />
                            <h5 className="font-weight-semi-bold m-0 ml-3">
                                Miễn phí giao hàng
                            </h5>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4 p-5">
                            <FontAwesomeIcon icon={faExchangeAlt}
                                size="3x" color="blue" />
                            <h5 className="font-weight-semi-bold m-0 ml-3">
                                7 ngày hoàn trả
                            </h5>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12 pb- 1"><div className="d-flex align-items-center bg-light mb-4 p-5">
                        <FontAwesomeIcon icon={faPhoneVolume}
                            size="3x" color="blue" />
                        <h5 className="font-weight-semi-bold m-0 ml-3">Hỗ trợ 24/7</h5>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Promotion;