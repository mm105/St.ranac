import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

//components
import CategoriesGrid from "./CategoriesGrid";
import Navbar from "./Navbar";

export const Categories = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fragment>
            <Navbar scrollActive={false} />
            <div className="container-fluid products-page justify-content-center">
                <h2 className="main-heading">Choose product category</h2>
                <div className="">
                    <CategoriesGrid />
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
