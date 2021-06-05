import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

import cek1 from "../../Images/bags/bag1/img1.jpg";
import cek2 from "../../Images/bags/bag2/img1.jpg";
import cek3 from "../../Images/bags/bag3/img1.jpg";

const Bags = () => {
    return (
        <Fragment>
            <Navbar scrollActive={false} />
            <div className="container-fluid category-wrap d-flex justify-content-center flex-column">
                <h2 className="main-heading">St.ranac bags</h2>
                <div className="category-products row d-flex justify-content-center mx-0">
                    <Link
                        to="/bag/1"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={cek1} alt="Loading" />
                        <h5>Jute tote bag</h5>
                        <p>39.00 BAM</p>
                    </Link>

                    <Link
                        to="/bag/2"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={cek2} alt="Loading" />
                        <h5>Black tote bag</h5>
                        <p>39.00 BAM</p>
                    </Link>
                    <Link
                        to="/bag/3"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={cek3} alt="Loading" />
                        <h5>Fur Black&#38;white tote bag</h5>
                        <p>39.00 BAM</p>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bags);
