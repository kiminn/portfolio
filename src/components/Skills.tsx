import React, { FC } from 'react';

import { communicationText, frontEndText, libraryText, styleSheetText } from '../constants';

const Skill: FC = () => {
    return (
        <section id="skill">
            <h2 className="skill__title">skills</h2>
            <div className="skill__inner">
                <div className="inner__title">
                    <span className="highlight">FrontEnd</span>
                </div>
                <div className="skill__desc">
                    {frontEndText.map((skills, index: number) => (
                        <div key={index}>
                            <span>{skills.text}</span>
                        </div>
                    ))}
                </div>
                <div className="inner__title">
                    <span className="highlight">Library</span>
                </div>
                <div className="skill__desc">
                    {libraryText.map((librarys, index: number) => (
                        <div key={index}>
                            <span>{librarys.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="skill__inner">
                <div className="inner__title">
                    <span className="highlight">StyleSheet</span>
                </div>
                <div className="skill__desc">
                    {styleSheetText.map((librarys, index: number) => (
                        <div key={index}>
                            <span>{librarys.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="skill__inner">
            <div className="inner__title">
                    <span className="highlight">Communication</span>
                </div>
                <div className="skill__desc">
                    {communicationText.map((librarys, index: number) => (
                        <div key={index}>
                            <span>{librarys.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
