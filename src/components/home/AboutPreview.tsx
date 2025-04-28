import Image from 'next/image';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/shared/AnimatedSection';

const keyStats = [
  {
    value: '15+',
    label: 'Years of Excellence',
    description: 'A decade of delivering innovative solutions',
  },
  {
    value: '50+',
    label: 'Team Members',
    description: 'Talented professionals across the globe',
  },
  {
    value: '15+',
    label: 'Countries',
    description: 'Serving clients worldwide',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Committed to excellence in every project',
  },
];

export default function AboutPreview() {
  return (
    <Section id="about-preview">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column with image */}
        <AnimatedSection animationType="slide-right">
          <div className="relative">
            <div className="aspect-[4/3] w-full relative overflow-hidden rounded-2xl">
              {/* Replace with your actual about image */}
              <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                <div className="text-gray-400">
                <Image
      src="/images/about-section.png"
      alt="Zobli Hero"
      layout="fill" // Make it cover the div
      objectFit="cover"
      className="rounded-xl"
      priority // Add priority for the LCP image
    />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 -right-8 bg-dark-800/90 p-4 rounded-xl border border-primary-500/30 shadow-glow">
              <div className="flex flex-col items-center">
                <div className="text-primary-500 font-bold text-2xl mb-1">5.0</div>
                <div className="flex text-primary-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-400">Client Rating</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right column with text content */}
        <AnimatedSection animationType="slide-left">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            We Are Zobli Innovations Pvt. Ltd.
          </span>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Engineering Growth. Empowering Businesses.
          </h2>

          <p className="text-gray-300 mb-4">
            Founded by <strong>Rajesh Jat</strong> & <strong>Manish Lamrod</strong>, Zobli Innovations is a Chittorgarh-based digital powerhouse with a bold mission — to transform businesses through powerful technology, honest marketing, and future-ready strategies.
          </p>

          <p className="text-gray-300 mb-4">
            Through our specialized arms — <strong>Digital Darpan</strong> (for digital marketing) and <strong>Immortal SEO</strong> (for SEO mastery) — we offer ROI-focused growth frameworks rooted in deep technical expertise and a relentless commitment to our clients' success.
          </p>

          <p className="text-gray-300 mb-4">
            Whether you're a startup dreaming big, an SMB aiming to scale, or an enterprise looking for strategic innovation — we speak your growth language.
          </p>

          <p className="text-gray-300 mb-6">
            Since 2008, we’ve helped hundreds of brands evolve and thrive in a digitally driven world, building trust one pixel, one campaign, and one conversion at a time.
          </p>

          {/* Key stats grid */}
          <div className="grid grid-cols-2 gap-6 my-10">
            {keyStats.map((stat, index) => (
              <div key={index} className="card-gradient p-4">
                <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="primary"
            href="/about"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            }
            iconPosition="right"
          >
            Learn More About Us
          </Button>
        </AnimatedSection>
      </div>
    </Section>
  );
}
