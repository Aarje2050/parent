import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/shared/AnimatedSection';

// Service data (replace with actual services)
const services = [
  {
    id: 'custom-web-development',
    title: 'Custom Web Development',
    description: 'Modern, scalable websites and apps built using React, Next.js, and other cutting-edge frameworks.',
    customcta: 'Future-proof your web presence',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    description: 'SEO-optimized, lightning-fast WordPress websites tailored for blogs, businesses, and eCommerce.',
    customcta: 'From blog to business-ready',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a8 8 0 100 15.292 8 8 0 000-15.292z" />
      </svg>
    ),
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Full-funnel strategies via Digital Darpan — social ads, search ads, funnels, and performance tracking.',
    customcta: 'Maximize every click',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V3m12 10h-6" />
      </svg>
    ),
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    description: 'Dominate your niche with white-hat, AI-powered SEO strategies via Immortal SEO.',
    customcta: 'Rank higher, faster',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-12H3l9 12z" />
      </svg>
    ),
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Automation',
    description: 'Tools like our llms.txt generator & domain checker help optimize SEO & automate tasks with AI.',
    customcta: 'Built to save time & unlock growth',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'growth-consulting',
    title: 'Growth Strategy Consulting',
    description: 'Leverage 15+ years of experience to get clarity, direction, and a digital growth game plan.',
    customcta: 'Book a free strategy session',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m-4-8a8 8 0 100 16 8 8 0 000-16z" />
      </svg>
    ),
  },
];
``

export default function FeaturedServices() {
  return (
    <Section bgColor="gradient" id="services">
      <div className="text-center mb-16">
        <AnimatedSection animationType="fade-in">
          <div className="text-center mb-16">
            <span className="text-xl font-medium text-primary-400 mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transforming Ideas Into Reality
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From idea to impact — Everything your brand needs to succeed online.
            </p>
          </div>
          
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedSection
            key={service.id}
            animationType="slide-up"
            delay={100 * index}
          >
            <Card variant="hover" className="h-full">
              <div className="flex flex-col h-full">
                <div className="mb-6 p-3 rounded-lg bg-primary-500/10 w-fit">
                  <div className="text-primary-400">
                    {service.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h4>
                
                <p className="text-gray-400 mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Button
                  variant="ghost"
                  href={`/services#${service.id}`}
                  className="mt-auto self-start"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                  iconPosition="right"
                >
                  {service.customcta}
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <AnimatedSection animationType="fade-in" delay={300}>
          <Button
            variant="secondary"
            size="lg"
            href="/services"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            }
            iconPosition="right"
          >
            View All Services
          </Button>
        </AnimatedSection>
      </div>
    </Section>
  );
}