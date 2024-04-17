'use client';

import About from '@/components/About';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Test from '@/components/Test';
import lenis from '@/utils/lenis';
import link from '@/utils/links';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        lenis();
        link();
    }, []);

    return (
        <>
            <Header />
            <main id="main" role="main">
                <Intro />
                <Skills />
                <Projects />
                <About />
                <Test />
            </main>
            <Footer />
        </>
    );
}
