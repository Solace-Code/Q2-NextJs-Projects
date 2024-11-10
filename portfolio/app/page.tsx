import Image from 'next/image';
import profile from '../public/profile5.png'
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className='port-container'>
      <section className='navbar-section'>
        <Navbar />
      </section>
      <section className='home-section'>
        <div className='left-side-content'>
          <div className='name'>
            <h1 className='name-heading-1'>Hi, i&apos;m</h1>
            <h1 className='name-heading'>Ahmed</h1>
          </div>
          <div className='aspiring'>
            <h1 className='aspiring-1'>Aspiring Gen Ai Engineer</h1>
            <h1 className='aspiring-2'>Passionate About Robotics</h1>
          </div>
        </div>
        <div className='right-side-content'>
          <div className='dp-container'>
          <Image src={profile} alt='img' layout='fill' objectFit='cover' className='profile-img'/>
          </div>
        </div>
      </section>
    </div>
  );
}
