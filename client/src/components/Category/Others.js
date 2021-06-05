import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

import cek1 from "../../Images/others/other1/img1.jpg";
import cek2 from "../../Images/others/other2/img1.jpg";

const Bags = () => {
    return (
        <Fragment>
            <Navbar scrollActive={false} />
            <div className="container-fluid category-wrap d-flex justify-content-center flex-column">
                <h2 className="main-heading">Other products</h2>
                <div className="category-products row d-flex justify-content-center mx-0">
                    <Link
                        to="/other/1"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={cek1} alt="Loading" />
                        <h5>Leather fanny pack</h5>
                        <p>29.00 BAM</p>
                    </Link>

                    <Link
                        to="/other/2"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={cek2} alt="Loading" />
                        <h5>Linen kimono robe</h5>
                        <p>49.00 BAM</p>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bags);
