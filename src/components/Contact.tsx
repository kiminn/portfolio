import React, { useEffect, useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Image from 'next/image';
import contactProfile from '@/assets/img/profile.png';

const Contact: React.FC = () => {
    const contactRef = useRef(null);
    const form = useRef<HTMLFormElement>(null);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFixed(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formElements = form.current!.elements as any;
        const userName = formElements.user_name.value.trim();
        const userEmail = formElements.user_email.value.trim();
        const message = formElements.message.value.trim();

        if (!userName || !userEmail || !message) {
            alert('모든 항목을 입력 후 다시 시도해주세요.');
            return;
        }

        emailjs
            .sendForm('kimmin', 'template_fkklqhg', form.current!, {
                publicKey: '1XV4CBbdVkH5J6m_U',
            })
            .then(
                (response: EmailJSResponseStatus) => {
                    console.log('SUCCESS!');
                    alert('성공적으로 메세지가 전송되었습니다!');
                    form.current?.reset(); // Reset the form fields
                },
                (error: EmailJSResponseStatus) => {
                    console.log('FAILED...', error.text);
                    alert('메세지 전송에 실패하였습니다. 다시 시도해주세요!');
                }
            );
    };

    return (
        <section id="contact" ref={contactRef}>
            <div className={`contact__inner ${isFixed ? 'fixed' : ''}`}>
                <h3 className="title">Contact</h3>
                <div className="v-line" />
                <hr />
                <div className={`card__wrap ${isFixed ? 'fixed' : ''}`}>
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
                <div className="contact__info">
                    <div className="info">
                        <label>name</label>
                        <span>김가영</span>
                    </div>

                    <div className="info">
                        <label>tel</label>
                        <span>01056504491</span>
                    </div>
                    <div className="info">
                        <label>email</label>
                        <span>808010x@gmail.com</span>
                    </div>
                    <button>
                        <a target="_blank" href="https://github.com/kiminn">
                            GitHub
                        </a>
                    </button>
                    <button>
                        <a target="_blank" href="https://velog.io/@kiminn/posts">
                            velog
                        </a>
                    </button>
                </div>
                <div className="contact__form">
                    <div className="form__wrap">
                        <form ref={form} onSubmit={sendEmail} className="contact__form">
                            <label>name</label>
                            <input type="text" name="user_name" className="input" />
                            <label>email</label>
                            <input type="email" name="user_email" className="input" />
                            <label>message</label>
                            <textarea name="message" className="input message" />
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default Contact;
