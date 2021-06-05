import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

export const Instagram = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);
    const [images, setImages] = useState();

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => {
                const ismobile = window.innerWidth < 991;
                if (ismobile !== isMobile) setIsMobile(ismobile);
            },
            false
        );
    }, [isMobile]);

    useEffect(() => {
        setImages([
            require("../Images/inst/img1.jpg").default,
            require("../Images/inst/img2.jpg").default,
            require("../Images/inst/img3.jpg").default,
            require("../Images/inst/img4.jpg").default,
            require("../Images/inst/img5.jpg").default,
        ]);
    }, []);

    const [index, setIndex] = useState(0);
    const slideRight = () => {
        setIndex((index + 1) % images.length);
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(nextIndex);
        }
    };

    return (
        <Fragment>
            {images && (
                <Fragment>
                    {isMobile ? (
                        <Fragment>
                            <div className="justify-content-center">
                                <h2 className="inst-heading">
                                    Latest{" "}
                                    <a
                                        href="https://www.instagram.com/st.ranac/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>{" "}
                                    posts
                                </h2>
                                <div className="d-flex flex-row justify-content-center align-items-center ">
                                    <button
                                        onClick={slideLeft}
                                        className="inst-btn"
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                    <div className="inst-img-wrap justify-content-center">
                                        <a
                                            href="https://www.instagram.com/st.ranac/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src={images[index]}
                                                alt="Loading"
                                                className="posts-img"
                                            />
                                            <div className="inst-overlay">
                                                <i className="far fa-heart"></i>
                                                <p>Like</p>
                                            </div>
                                        </a>
                                    </div>
                                    <button
                                        onClick={slideRight}
                                        className="inst-btn"
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h2 className="inst-heading">
                                Latest{" "}
                                <a
                                    href="https://www.instagram.com/st.ranac/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Instagram
                                </a>{" "}
                                posts
                            </h2>
                            <div className="posts row">
                                <div className="inst-img-wrap  ">
                                    <a
                                        href="https://www.instagram.com/st.ranac/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={images[0]}
                                            alt=""
                                            className="posts-img"
                                        />
                                        <div className="inst-overlay">
                                            <i className="far fa-heart"></i>
                                            <p>Like</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="inst-img-wrap  ">
                                    <a
                                        href="https://www.instagram.com/st.ranac/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={images[1]}
                                            alt=""
                                            className="posts-img"
                                        />
                                        <div className="inst-overlay">
                                            <i className="far fa-heart"></i>
                                            <p>Like</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="inst-img-wrap  ">
                                    <a
                                        href="https://www.instagram.com/st.ranac/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={images[2]}
                                            alt=""
                                            className="posts-img"
                                        />
                                        <div className="inst-overlay">
                                            <i className="far fa-heart"></i>
                                            <p>Like</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="inst-img-wrap  ">
                                    <a
                                        href="https://www.instagram.com/st.ranac/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={images[3]}
                                            alt=""
                                            className="posts-img"
                                        />
                                        <div className="inst-overlay">
                                            <i className="far fa-heart"></i>
                                            <p>Like</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="inst-img-wrap  ">
                                    <a
                                        href="https://www.instagram.com/st.ranac/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={images[4]}
                                            alt=""
                                            className="posts-img"
                                        />
                                        <div className="inst-overlay">
                                            <i className="far fa-heart"></i>
                                            <p>Like</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <a
                                href="https://www.instagram.com/st.ranac/"
                                target="_blank"
                                rel="noreferrer"
                                id="follow-btn"
                            >
                                Follow us on Instagram{" "}
                                <i className="fab fa-instagram inst-icon"></i>
                            </a>
                        </Fragment>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
