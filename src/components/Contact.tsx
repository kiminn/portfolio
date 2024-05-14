import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Image from 'next/image';
import contactProfile from '@/assets/img/profile.png';

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                (response: EmailJSResponseStatus) => {
                    console.log('SUCCESS!');
                },
                (error: EmailJSResponseStatus) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <section id="contact">
            <div className="contact__inner">
                <div className="card__wrap">
                    <div className="necklace left" />
                    <div className="necklace right" />
                    <div className="square" />
                    <div className="connection" />
                    <div className="card">
                        <div className="card__hole" />
                        <div className="card__text">
                            <div className="t1">김 가 영</div>
                            <div className="t2">Kim KaYoung</div>
                        </div>
                        <div className="profile__box">
                            <Image src={contactProfile} alt="profile" className="profile" />
                        </div>
                    </div>
                </div>
                <div className="contact__form">
                    <h3 className="title">Contact Me</h3>
                    <div className="form__wrap">
                        <div className="contact__line" />
                        <form ref={form} onSubmit={sendEmail} className="contact__form">
                            <label>Name</label>
                            <input type="text" name="user_name" className="input" />
                            <label>Email</label>
                            <input type="email" name="user_email" className="input" />
                            <label>Message</label>
                            <textarea name="message" className="message" />
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
