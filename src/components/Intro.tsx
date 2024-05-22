'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { introText } from '@/constants';
const Intro = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % introText.img.length);
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [introText.img.length, 3000]);
    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="intro__title">
                    <div>{introText.title[0]}</div>
                    <div>{introText.title[1]}</div>
                    <div className="fallText">Collavorative</div>
                    <div>{introText.title[2]}</div>
                    <div className="close"></div>
                    <div className="intro__buttons">
                        <a
                            target="_blank"
                            href="https://rainy-engine-976.notion.site/Development-Together-87f9157c66f24ed08b3cb94bc7306ac0?pvs=74"
                        >
                            <button className="btn resume">Resume On Click</button>
                        </a>
                        <a href="#contact">
                            <button className="btn contact">Contact Me</button>
                        </a>
                    </div>
                </div>

                <div className="intro__circles">
                    <div className="img">
                        <Image src={introText.img[currentIndex]} alt={`slide-${currentIndex}`} className="circle" />
                    </div>
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
