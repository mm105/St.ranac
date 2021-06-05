import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

import back1 from "../../Images/backpacks/backpack1/img1.jpg";
import back3 from "../../Images/backpacks/backpack3/img1.jpg";
import back2 from "../../Images/backpacks/backpack2/img1.jpg";
import back4 from "../../Images/backpacks/backpack4/img1.jpg";
import back5 from "../../Images/backpacks/backpack5/img1.jpg";

const Backpacks = () => {
    return (
        <Fragment>
            <Navbar scrollActive={false} />
            <div className="container-fluid category-wrap d-flex justify-content-center flex-column">
                <h2 className="main-heading">St.ranac backpacks</h2>
                <div className="category-products row d-flex justify-content-center mx-0">
                    <Link
                        to="/backpack/1"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={back1} alt="Loading" />
                        <h5>BLACK LEATHER ST.RANAC</h5>
                        <p>99.00 BAM</p>
                    </Link>
                    <Link
                        to="/backpack/2"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={back2} alt="Loading" />
                        <h5>Croc effect st.ranac</h5>
                        <p>99.00 BAM</p>
                    </Link>
                    <Link
                        to="/backpack/3"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={back3} alt="Loading" />
                        <h5>Pollock st.ranac</h5>
                        <p>99.00 BAM</p>
                    </Link>
                    <Link
                        to="/backpack/4"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={back4} alt="Loading" />
                        <h5>GRAY LEATHER ST.RANAC</h5>
                        <p>99.00 BAM</p>
                    </Link>
                    <Link
                        to="/backpack/5"
                        className="category-product col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                    >
                        <img src={back5} alt="Loading" />
                        <h5>VINTAGE LEATHER ST.RANAC</h5>
                        <p>99.00 BAM</p>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Backpacks);
