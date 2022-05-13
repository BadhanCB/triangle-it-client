import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
    const form = useRef();
    const [isSendingEmail, setIsSendingEmail] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSendingEmail(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID,
                process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAIL_PUBLIC_KEY
            )
            .then(
                (result) => {
                    alert(`${result.text}\nYour Email is send`);
                    setIsSendingEmail(false);
                },
                (error) => {
                    alert(error.text);
                    setIsSendingEmail(false);
                }
            )
            .catch((e) => {
                alert(e);
                setIsSendingEmail(false);
            });
    };

    return (
        <section className="container my-5 row mx-auto">
            <div className="bg-secondary col-12 col-md-4 p-5">
                <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    className="email-icon mx-auto d-block"
                />
                <h3 className="mx-auto text-center mt-3 text-light fw-light">
                    If you have questions or just want to get in touch, use the
                    form below. We look forward to hearing from you!
                </h3>
            </div>
            <div className="col-12 col-md-8 p-5 bg-white">
                <h1 className="text-center">Contact Us</h1>
                <form ref={form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        className="input-field"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className="input-field"
                    />
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        className="input-field"
                    ></textarea>
                    <button type="submit" id="send-btn">
                        {isSendingEmail ? (
                            <>
                                <span
                                    class="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                Sending...
                            </>
                        ) : (
                            "Send"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
