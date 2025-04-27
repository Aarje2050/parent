import Founders from '@/components/founders/Founders';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Zobli Innovations',
  description: 'Learn about Zobli Innovations, our mission, vision, values, and the team driving technological innovation.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-900/20 to-dark-900 pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Zobli Innovations
            </h1>
            <p className="text-xl text-gray-300">
              Empowering businesses through innovative technology solutions since 2013.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl aspect-video">
              <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                <div className="text-gray-400 text-xl">
                  About Image
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
                Our Story
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pioneering the Future of Technology
              </h2>
              
              <p className="text-gray-300 mb-6">
                Founded in 2013, Zobli Innovations began with a simple yet powerful vision: to make cutting-edge technology accessible to businesses of all sizes. What started as a small team of passionate technologists has grown into a global company with a presence in over 15 countries.
              </p>
              
              <p className="text-gray-300 mb-6">
                Our journey has been driven by a commitment to innovation, excellence, and client success. We've evolved our offerings to meet the changing needs of the digital landscape, always staying ahead of the curve with emerging technologies like AI, cloud computing, and IoT.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
                  <p className="text-gray-300">
                    To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
                  <p className="text-gray-300">
                    To be the global leader in technology innovation, shaping the future of business in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16 md:py-24 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xl font-medium text-primary-400 mb-2 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Guiding Principles
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our core values define who we are and guide everything we do, from how we develop our solutions to how we interact with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value 1 */}
            <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 rounded-lg bg-primary-500/10 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Innovation
                  </h4>
                  <p className="text-gray-300">
                    We constantly push the boundaries of what's possible, embracing new technologies and approaches to solve complex problems.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Value 2 */}
            <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 rounded-lg bg-primary-500/10 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Excellence
                  </h4>
                  <p className="text-gray-300">
                    We are committed to delivering the highest quality solutions and services, exceeding expectations in everything we do.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Value 3 */}
            <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 rounded-lg bg-primary-500/10 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Integrity
                  </h4>
                  <p className="text-gray-300">
                    We operate with transparency, honesty, and ethical principles in all our interactions with clients, partners, and team members.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Value 4 */}
            <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 rounded-lg bg-primary-500/10 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Collaboration
                  </h4>
                  <p className="text-gray-300">
                    We believe in the power of teamwork, fostering a culture of cooperation and knowledge sharing to achieve our collective goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <Founders/>
      
      {/* Stats section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900/20 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Clients Worldwide</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}