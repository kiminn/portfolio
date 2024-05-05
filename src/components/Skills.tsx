import React, { FC } from 'react';

import { communicationText, frontEndText, libraryText, styleSheetText } from '../constants';

const Skill: FC = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">FrontEnd</h2>
                <div className="skill__desc">
                    {frontEndText.map((skills, index: number) => (
                        <div key={index}>
                            <span>{skills.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="skill__inner">
                <h2 className="skill__title">Library</h2>
                <div className="skill__desc">
                    {libraryText.map((librarys, index: number) => (
                        <div key={index}>
                            <span>{librarys.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="skill__inner">
                <h2 className="skill__title">UI/style</h2>
                <div className="skill__desc">
                    {styleSheetText.map((librarys, index: number) => (
                        <div key={index}>
                            <span>{librarys.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="skill__inner">
                <h2 className="skill__title">Communication</h2>
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
