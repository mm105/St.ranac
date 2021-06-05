import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar";
import axios from "axios";

export const Backpack = ({ match: { params }, history }) => {
    const [images, setImages] = useState();
    const [name, setname] = useState();
    const [description, setdescription] = useState();
    useEffect(() => {
        //fake backend
        switch (params.id) {
            case "1":
                setImages([
                    require("../../Images/backpacks/backpack1/img1.jpg")
                        .default,
                    require("../../Images/backpacks/backpack1/img2.jpg")
                        .default,
                    require("../../Images/backpacks/backpack1/img3.jpg")
                        .default,
                    require("../../Images/backpacks/backpack1/img4.jpg")
                        .default,
                ]);
                setname("Black leather St.ranac");
                setdescription(
                    <Fragment>
                        <ul>
                            <li>•Hand made item</li>
                            <li>
                                •Material:Genuine Durable Leather, metal buckets{" "}
                            </li>
                            <li>•Soft padded adjustable leather straps</li>
                            <li>•Made to order</li>
                            <li>•Color: black</li>
                            <ul>
                                •Dimensions:
                                <li>32 cm broad</li>
                                <li>45 cm tall rolled up</li>
                                <li>55 cm tall (open)</li>
                            </ul>
                        </ul>
                    </Fragment>
                );
                break;
            case "2":
                setImages([
                    require("../../Images/backpacks/backpack2/img1.jpg")
                        .default,
                    require("../../Images/backpacks/backpack2/img2.jpg")
                        .default,
                ]);
                setname("Croc effect St.ranac");
                setdescription(
                    <Fragment>
                        <ul>
                            <li>•Hand made item</li>
                            <li>
                                •Material:croc effect eco leather, metal
                                buckets, fabric lining
                            </li>
                            <li>•Soft padded adjustable leather straps</li>
                            <li>• Inside pocket</li>
                            <li>•Hidden back pocket</li>
                            <li>•Made to order</li>
                            <li>•Color: black and animal print</li>
                            <ul>
                                •Dimensions:
                                <li>32 cm broad</li>
                                <li>45 cm tall rolled up</li>
                                <li>55 cm tall (open)</li>
                            </ul>
                        </ul>
                    </Fragment>
                );
                break;
            case "3":
                setImages([
                    require("../../Images/backpacks/backpack3/img1.jpg")
                        .default,
                    require("../../Images/backpacks/backpack3/img2.jpg")
                        .default,
                ]);
                setname("Pollock St.ranac");
                setdescription(
                    <Fragment>
                        <ul>
                            <li>•Hand made item</li>
                            <li>
                                •Material: Genuine Durable Leather and canvas,
                                metal buckets
                            </li>
                            <li>•Soft padded adjustable leather straps</li>

                            <li>•Made to order</li>
                            <ul>
                                •Dimensions:
                                <li>32 cm broad</li>
                                <li>45 cm tall rolled up</li>
                                <li>55 cm tall (open)</li>
                            </ul>
                        </ul>
                    </Fragment>
                );
                break;

            case "4":
                setImages([
                    require("../../Images/backpacks/backpack4/img1.jpg")
                        .default,
                    require("../../Images/backpacks/backpack4/img2.jpg")
                        .default,
                ]);
                setname("Gray leather St.ranac");
                setdescription(
                    <Fragment>
                        <ul>
                            <li>•Hand made item</li>
                            <li>
                                •Material: Suade Durable Leather, metal buckets
                            </li>
                            <li>•Soft padded adjustable leather straps</li>

                            <li>•Made to order</li>
                            <ul>
                                •Dimensions:
                                <li>32 cm broad</li>
                                <li>45 cm tall rolled up</li>
                                <li>55 cm tall (open)</li>
                            </ul>
                        </ul>
                    </Fragment>
                );
                break;
            case "5":
                setImages([
                    require("../../Images/backpacks/backpack5/img1.jpg")
                        .default,
                    require("../../Images/backpacks/backpack5/img2.jpg")
                        .default,
                    require("../../Images/backpacks/backpack5/img3.jpg")
                        .default,
                ]);
                setname("Vintage leather St.ranac");
                setdescription(
                    <Fragment>
                        <ul>
                            <li>•Hand made item</li>
                            <li>
                                •Material: Genuine Durable Leather, metal
                                buckets
                            </li>
                            <li>•Soft padded adjustable leather straps</li>
                            <li>•Color : brown</li>
                            <li>•Made to order</li>
                            <ul>
                                •Dimensions:
                                <li>32 cm broad</li>
                                <li>45 cm tall rolled up</li>
                                <li>55 cm tall (open)</li>
                            </ul>
                        </ul>
                    </Fragment>
                );
                break;
            default:
                history.push("/backpacks");
                break;
        }
    }, [params.id, history]);

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

    const [orderForm, setorderForm] = useState(false);

    const showOrderForm = () => {
        setorderForm(true);
    };

    const seeDescription = () => {
        setorderForm(false);
    };

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        address: "",
    });

    const { firstName, lastName, email, phone, city, address } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(
            "http://localhost:5000/st-ranac/europe-west1/api/order",
            { product: name, firstName, lastName, email, phone, city, address }
        );

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            address: "",
        });
        document.getElementById("alert-msg").innerHTML = res.data.msg;
        document.getElementById("alert").style.display = "block";

        setTimeout(() => {
            document.getElementById("alert").style.display = "none";
        }, 5000);
    };

    return (
        <Fragment>
            {images && (
                <Fragment>
                    <Navbar scrollActive={false} />
                    <div className="product-wrap container">
                        <div className="row d-flex justify-content-around align-items-start mx-0">
                            <div
                                className="product-image d-flex align-items-center 
                            justify-content-center col-12 col-lg-8 col-xl-7 px-0 my-3"
                            >
                                <button onClick={slideLeft}>{"<"}</button>
                                <img src={images[index]} alt={index} />
                                <button onClick={slideRight}>{">"}</button>
                            </div>
                            <div className="product-desc col-8 col-lg-4 col-xl-5 px-0 my-3">
                                <h3> {name} </h3>
                                <h5>Price: 99.00 BAM</h5>
                                {!orderForm ? (
                                    <Fragment>
                                        <h5>Description:</h5>
                                        <div>{description}</div>

                                        <button
                                            onClick={showOrderForm}
                                            className="product-buy-btn"
                                        >
                                            Order
                                        </button>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <div className="order">
                                            <h5>Plese fill form below</h5>
                                            <form
                                                onSubmit={(e) => onSubmit(e)}
                                                className="d-flex flex-column"
                                                id="order-form"
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="First name"
                                                    name="firstName"
                                                    value={firstName}
                                                    onChange={(e) =>
                                                        onChange(e)
                                                    }
                                                    required
                                                    id="order-name"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Last name"
                                                    name="lastName"
                                                    value={lastName}
                                                    onChange={(e) =>
                                                        onChange(e)
                                                    }
                                                    required
                                                    id="order-last"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) =>
                                                        onChange(e)
                                                    }
                                                    required
                                                    id="order-email"
                                                />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        onChange(e)
                                                    }
                                                    required
                                                    id="order-phone"
                                                    placeholder="Phone Number"
                                                />
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={city}
                                                    onChange={(e) =>
                                                        onChange(e)
                                                    }
                                                    required
                                                    placeholder="City, Country"
                                                    id="order-city"
                                                />
                                                <input
                                                    type="text"
                                                    name="address"
                                                    value={address}
                                                    onChange={(e) =>
                                                        onChange(e)
                                                    }
                                                    required
                                                    placeholder="Address"
                                                    id="order-address"
                                                />
                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="product-buy-btn"
                                                    >
                                                        Send
                                                    </button>
                                                    <button
                                                        onClick={seeDescription}
                                                        className="go-to-desc"
                                                    >
                                                        See description
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Backpack);
