import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { Principal } from '../components/Principal';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Learning } from '../components/Learning';
import { Footer } from '../components/Footer';

export const Portfolio = () => (
  <Layout title='Portfolio | Jesus Ramirez'>
    <Header />
    <Principal />
    <About />
    <Experience />
    <Projects />
    <Learning />
    <Footer />
  </Layout>
);
