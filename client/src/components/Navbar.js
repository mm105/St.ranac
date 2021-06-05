import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ scrollActive }) => {
    useEffect(() => {
        const nav = document.querySelector("nav");
        if (nav !== null) {
            if (scrollActive && window.innerWidth > 992) {
                nav.classList.add("scrolling-active");
                window.addEventListener("scroll", () => {
                    if (nav !== null) {
                        nav.classList.toggle(
                            "scrolling-active",
                            window.scrollY < 100 && window.innerWidth > 991
                        );
                    }
                });

                return () => {
                    window.removeEventListener("scroll", () => {});
                };
            } else if (scrollActive !== true && window.innerWidth < 992) {
                nav.classList.remove("scrolling-active");
            }
        }

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, [scrollActive]);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => {
                const ismobile = window.innerWidth < 991;
                if (ismobile !== isMobile) {
                    setIsMobile(ismobile);
                    const nav = document.querySelector("nav");
                    if (nav !== null) {
                        nav.classList.remove("scrolling-active");
                    }
                }
            },
            false
        );
    }, [isMobile]);

    return (
        <Fragment>
            <nav
                className={` ${
                    isMobile
                        ? "navbar navbar-expand-lg fixed-top"
                        : "navbar navbar-expand-lg main-nav"
                }`}
            >
                <button
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#collapse_target"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="collapse_target"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link link">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
