import React, { Fragment } from "react";
import { connect } from "react-redux";

//components
import ProductsGrid from "./CategoriesGrid";
import Instagram from "./Instagram";
import Newsletter from "./Newsletter";
import Navbar from "./Navbar";

export const Home = () => {
    return (
        <Fragment>
            <Navbar scrollActive={true} />
            <div className="header">
                <div className="quote-wrap">
                    <h1 className="quote ">
                        Good things happen when you meet strangers
                    </h1>
                </div>
            </div>
            <section className="sec-products">
                <h2 className="main-heading">Our products</h2>
                <ProductsGrid />
            </section>
            <section className="instagram">
                <Instagram />
            </section>
            <section className="newsletter">
                <Newsletter />
            </section>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
