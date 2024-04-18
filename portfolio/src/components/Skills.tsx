import React, { FC } from 'react';

import { frontEndText } from '../constants';

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
        </section>
    );
};

export default Skill;
