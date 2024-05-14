import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Image from 'next/image';
import contactPhoto from '@/assets/img/jeju.jpg';

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
                <Image src={contactPhoto} alt="myPhoto" className="postIt contact__photo"></Image>
                <div className="postIt contact__text">안녕하세요 협업을 좋아하는 개발자입니다.</div>
                <div className="contact__wrap">
                    <h3 className="title">Contact Me</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
