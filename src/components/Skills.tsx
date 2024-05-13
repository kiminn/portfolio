import React, { FC } from 'react';

import { communicationText, frontEndText, libraryText, styleSheetText } from '../constants';

const Skill: FC = () => {
    return (
        <section id="skill">
            <h2 className="skill__title">My skills</h2>
            <div className="skill__container">
                <div className="skill__inner s1">
                    <div className="inner__title">FrontEnd</div>
                    <div className="skill__desc">
                        {frontEndText.map((skills, index: number) => (
                            <div key={index} className="skillBox">
                                <span>{skills.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skill__inner s2">
                    <div className="inner__title">Library</div>
                    <div className="skill__desc">
                        {libraryText.map((librarys, index: number) => (
                            <div key={index} className="skillBox">
                                <span>{librarys.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skill__inner s3">
                    <div className="inner__title">StyleSheet</div>
                    <div className="skill__desc">
                        {styleSheetText.map((librarys, index: number) => (
                            <div key={index} className="skillBox">
                                <span>{librarys.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skill__inner s4">
                    <div className="inner__title">Communication</div>
                    <div className="skill__desc">
                        {communicationText.map((librarys, index: number) => (
                            <div key={index} className="skillBox">
                                <span>{librarys.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
