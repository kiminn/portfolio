import React, { FC } from 'react';

import { projectsText } from '@/constants';
import Image, { StaticImageData } from 'next/image';

const Projects = () => {
    return (
        <section id="project">
            <div className="project__inner">
                <h2 className="project__title">my projects</h2>
                <div className="project__wrap">
                    {projectsText.map((project, key) => (
                        <article className={`project__item s${key + 1}`} key={key}>
                            <span className="num">{key + 1}.</span>
                            <h3 className="title">{project.title}</h3>
                            <a href={project.code} target="_blank" className="img">
                                <Image
                                    src={project.img as StaticImageData}
                                    alt={project.title}
                                    layout="responsive"
                                    quality={100}
                                />
                                <div className="view">view code</div>
                            </a>

                            <div className="stack">
                                <span>{project.stack[0]}</span>
                                <span>{project.stack[1]}</span>
                                <span>{project.stack[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
