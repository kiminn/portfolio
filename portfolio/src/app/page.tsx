import About from '@/components/About';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Test from '@/components/Test';

export default function Home() {
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
    </>;
}
