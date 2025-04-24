import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/home/Hero';
import FeaturedServices from '@/components/home/FeaturedServices';
import AboutPreview from '@/components/home/AboutPreview';
import Testimonials from '@/components/home/Testimonials';
import CtaSection from '@/components/home/CtaSection';

export default function Home() {
  return (
    <>
    <Hero />
    <FeaturedServices/>
    <AboutPreview/>
    <Testimonials/>
    <CtaSection/>
      
    </>
  );
}