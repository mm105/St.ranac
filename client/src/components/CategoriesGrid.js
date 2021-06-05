import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//images
import img1 from "../Images/categories/img1.jpg";
import img2 from "../Images/categories/img2.jpg";
import img3 from "../Images/categories/img3.jpg";

const CategoriesGrid = () => {
    return (
        <Fragment>
            <div className="products row justify-content-center m-0">
                <Link
                    to="/backpacks"
                    className="col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                >
                    {" "}
                    <div>
                        <img src={img1} alt="Loading" />
                        <h3>St.ranac Backpacks</h3>

                        <button className="shopnow">Buy now</button>
                    </div>
                </Link>

                <Link
                    to="/bags"
                    className="col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                >
                    {" "}
                    <div>
                        <img src={img2} alt="Loading" />
                        <h3>St.ranac Bags</h3>

                        <button className="shopnow">Buy now</button>
                    </div>
                </Link>

                <Link
                    to="/others"
                    className="col-sm-10 col-md-4 col-lg-4 col-xl-3 m-4 "
                >
                    <div>
                        <img src={img3} alt="Loading" />
                        <h3>Other products</h3>

                        <button className="shopnow">Buy now</button>
                    </div>
                </Link>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesGrid);
