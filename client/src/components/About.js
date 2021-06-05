import React, { Fragment } from "react";
import { connect } from "react-redux";

//components
import Navbar from "./Navbar";

//images
import img from "../Images/logo_img.jpg";

export const About = () => {
    return (
        <Fragment>
            <Navbar scrollActive={false} />
            <div class="about-wrap container ">
                <div className="row no-gutters justify-content-between ">
                    <div class="about col-lg-7 ">
                        <h1 class="main-heading about-heading">
                            About St.ranac
                        </h1>
                        <p>
                            St.ranac is a brand created quite spontaneously from
                            a personal need for a backpack, according to the
                            architect's idea. Based on the sketches, dimensions
                            and patterns, made after researching the basic
                            ergonomic characteristics of a simple rolltop city
                            backpack, the diligent hands of the tailor turned
                            the ideal design into reality and sewed the backpack
                            from the sketches. As the first sewn backpack was to
                            the delight of friends and acquaintances, the idea
                            for business arose. The St.ranac brand came quite
                            spontaneously, the name itself represents a play on
                            words.
                        </p>
                        <p>
                            St.ranac backpacks are of a characteristic design,
                            designed to fit in with an everyday casual look, but
                            will also fit perfectly for business attire
                            combinations. Equally popular are models of simple
                            one-color design, made of eco-leather, waterproof
                            fabrics, leather, as well as models enriched with
                            colorful patterns.
                        </p>
                        <p>
                            The brand is characterized by handmade products from
                            carefully selected materials, which with their
                            simple and minimalist approach have won the hearts
                            of authentic customers from 18 to 55 years, both
                            teenagers and business people. The brand is intended
                            for students, employees (ages 18 to 55 according to
                            previous sales experience), who are
                            fashion-conscious, but at the same time have a need
                            for a backpack that is useful and functional, and
                            that looks great. Great interest comes from
                            employees in the IT industry, which means that
                            companies have responded positively to backpacks as
                            gifts for employees and / or business partners.
                        </p>
                    </div>
                    <div class="about-img col-lg-4 d-flex flex-column justify-content-center">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
