import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

export const Newsletter = () => {
    const [email, setemail] = useState("");

    const onChange = (e) => {
        setemail(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(
            "http://localhost:5000/st-ranac/europe-west1/api/newsletter",
            { email }
        );

        setemail("");
        document.getElementById("alert-msg").innerHTML = res.data.msg;
        document.getElementById("alert").style.display = "block";

        setTimeout(() => {
            document.getElementById("alert").style.display = "none";
        }, 5000);
    };

    return (
        <Fragment>
            <div className="row justify-content-center m-0">
                <div className="col-xm-11">
                    <h3 className="main-heading">Newsletter</h3>
                    <div className="news-form">
                        <p>
                            To be notified on the latest news from{" "}
                            <b>St.ranac</b>, please fill your email below.
                        </p>
                        <form
                            onSubmit={(e) => {
                                onSubmit(e);
                            }}
                            className="dfc"
                            id="newsletter-form"
                        >
                            <input
                                type="email"
                                name="email"
                                id="news-email"
                                value={email}
                                placeholder="john@gmail.com"
                                required
                                onChange={(e) => {
                                    onChange(e);
                                }}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
