import Image from 'next/image';
import aboutdp from '../../public/profile.jpg'
import aboutimg from '../../public/img2.jpg'
import aboutimg2 from '../../public/img1.jpg'
import Navbar from '@/components/navbar';

export default function About() {
  return (
    <div className='about-container'>
        <section className='navbar-section'>
            <Navbar/>
        </section>
        <section className='about-me-section-header'>
            <div className='about-me-header'>
                <div className='about-me-profile'>
                    <div className='about-me-profile-container'>
                        <Image src={aboutdp} alt='dp' layout='fill' objectFit='cover'/>
                    </div>
                </div>
                <div className='about-me-title'>
                    <h1>About Me</h1>
                    <p className='about-me-p'>Hello! I’m Ahmed, a student currently diving deep into the worlds of Generative AI, 
                    the Metaverse, Web 3.0, and robotics. My journey in this field began with a fascination 
                    for how technology can transform our everyday lives, and now I’m working toward becoming 
                    a Generative AI engineer with a strong grounding in robotics.</p>
                </div>
            </div>
        </section>
        <section className='about-me-section-body'>
            <div className='about-me-section-body-container'>
                <div className='about-me-content-1'>
                    <div className='about-me-content-1-title'>
                        <h1>Why Generative AI and Robotics?</h1>
                    </div>
                    <div className='about-me-content-p'>
                        <p>
                        I believe Generative AI and robotics have the potential to enhance daily life by 
                        automating simple tasks, allowing us to focus on what truly matters. Imagine an AI 
                        that can handle routine tasks—like turning lights on and off, locking doors, or
                         reading out emails—so we can save time and improve productivity. This vision fuels 
                         my interest in building AI solutions that are intuitive and responsive, seamlessly 
                         integrating into our routines.

                         As I look toward the future, I see an exciting opportunity to create intelligent 
                         robots that can interact with the physical world to perform these tasks and more, 
                         improving safety, convenience, and the quality of life in ways we haven’t 
                         yet imagined.
                        </p>
                    </div>
                </div>
                <div className='about-me-content-img-1'>
                    <Image src={aboutimg} alt='abtimg' layout='fixed' width={400} height={400} className='snippet-img'/>
                </div>
            </div>
        </section>
        <section className='about-me-section-body-2'>
            <div className='about-me-section-body-container-2'>
                <div className='about-me-content-2'>
                    <div className='about-me-content-2-title'>
                        <h1>Looking Forward</h1>
                    </div>
                    <div className='about-me-content-p-2'>
                        <p>
                        My goal is to contribute to a future where intelligent systems become our everyday 
                        companions, performing tasks both in virtual environments and the physical world. 
                        I’m excited to be at the forefront of this technological evolution and can’t wait 
                        to see where this path leads.
                        </p>
                    </div>
                </div>
                <div className='about-me-content-img-2'>
                    <Image src={aboutimg2} alt='abtimg2' height={400} width={400} className='snippet-img'/>
                </div>
            </div>
        </section>
    </div>
  );
}
