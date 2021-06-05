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
                    require("../../Images/bags/bag1/img1.jpg").default,
                    require("../../Images/bags/bag1/img2.jpg").default,
                ]);
                setname("Jute tote bag");
                setdescription(
                    <Fragment>
                        <ul>
                            <li>•Made to order</li>
                            <li>•Dimensions: B28xH38xW14</li>
                        </ul>
                    </Fragment>
                );
                break;
            case "2":
                setImages([
                    require("../../Images/bags/bag2/img1.jpg").default,
                    require("../../Images/bags/bag2/img2.jpg").default,
                    require("../../Images/bags/bag2/img3.jpg").default,
                ]);
                setname("Black tote bag");
                setdescription(
                    <Fragment>
                        <ul>
                            <li>•Hand made item</li>
                            <li>
                                •Material: durable water-resistant eco leather,
                                impregnated fabric
                            </li>
                            <li>•Inside pocket</li>
                            <li>•Made to order</li>
                            <li>•Color: black</li>
                            <li>•Dimensions: B30xH40xW14</li>
                        </ul>
                    </Fragment>
                );
                break;
            case "3":
                setImages([
                    require("../../Images/bags/bag3/img1.jpg").default,
                    require("../../Images/bags/bag3/img2.jpg").default,
                ]);
                setname("Fur Black&white tote bag");
                setdescription(
                    <Fragment>
                        <ul>
                            <li>•Hand made item</li>
                            <li>
                                •Material: faux fur fabric, inside impregnated
                                fabric
                            </li>
                            <li>•Soft padded adjustable leather straps</li>
                            <li>•Inside pocket</li>
                            <li>•Made to order</li>
                            <li>•Color: black and white</li>
                            <li>•Dimensions: B30xH40xW14</li>
                        </ul>
                    </Fragment>
                );
                break;
            default:
                history.push("/bags");
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
                                <h5>Price: 39.00 BAM</h5>
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
                                                />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        onChange(e)
                                                    }
                                                    required
                                                    id=""
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
