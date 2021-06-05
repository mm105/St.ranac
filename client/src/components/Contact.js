import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import axios from "axios";

export const Contact = () => {
    const [formData, setformData] = useState({ name: "", email: "", msg: "" });

    const { name, email, msg } = formData;

    const onChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(
            "http://localhost:5000/st-ranac/europe-west1/api/contact",
            { name, email, message: msg }
        );

        setformData({ name: "", email: "", msg: "" });
        document.getElementById("alert-msg").innerHTML = res.data.msg;
        document.getElementById("alert").style.display = "block";

        setTimeout(() => {
            document.getElementById("alert").style.display = "none";
        }, 5000);
    };
    return (
        <Fragment>
            <Navbar />
            <div className="contact container d-flex flex-column justify-content-center align-items-center">
                <h1 className="main-heading">Contact us</h1>
                <div className="row no-gutters contact-form d-flex flex-column ">
                    <form
                        onSubmit={(e) => {
                            onSubmit(e);
                        }}
                        className="d-flex flex-column form"
                    >
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            required
                            onChange={(e) => onChange(e)}
                            placeholder="Name and surname"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            required
                            onChange={(e) => onChange(e)}
                            placeholder="Email"
                        />
                        <textarea
                            name="msg"
                            id="msg"
                            rows="10"
                            value={msg}
                            placeholder="Message"
                            required
                            onChange={(e) => onChange(e)}
                        ></textarea>
                        <button className="send-btn">Send</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
