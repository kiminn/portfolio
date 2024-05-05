import React from 'react';
import Image from 'next/image';

import { introText } from '@/constants';

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h2 className="intro__title">{introText.title}</h2>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro__text">
                    <a
                        className="text"
                        href="https://rainy-engine-976.notion.site/Development-Together-87f9157c66f24ed08b3cb94bc7306ac0?pvs=74"
                    >
                        <div className="resume">{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </a>
                    <div className="img">
                        <Image
                            src={introText.img}
                            alt="kimi"
                            width={500}
                            height={500}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Intro;
