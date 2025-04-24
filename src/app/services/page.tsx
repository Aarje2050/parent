import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Zobli Innovations',
  description: 'Explore the comprehensive range of innovative technology solutions offered by Zobli Innovations.',
};

const services = [
  {
    id: 'custom-web-development',
    title: 'Custom Web Development',
    description: 'Modern, scalable web apps using React, Next.js & more.',
    longDescription:
      'We build future-ready, high-performance websites and applications using modern frameworks like React and Next.js. Whether it’s a SaaS platform, e-commerce site, or business dashboard — we craft scalable, SEO-friendly, blazing-fast digital experiences tailored to your goals.',
    features: [
      'React & Next.js app development',
      'Custom UI/UX design systems',
      'Progressive Web Apps (PWAs)',
      'Full-stack architecture & API integration',
      'Responsive & mobile-first design',
      'Speed and Core Web Vitals optimization',
      'Ongoing support and maintenance',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197 2.6 1.45-6.635 5.197-2.6-1.45 6.635z" />
      </svg>
    ),
  },
  {
    id: 'wordpress-websites',
    title: 'WordPress Websites',
    description: 'Fast, secure, SEO-optimized WordPress websites built to convert.',
    longDescription:
      'From simple blogs to complex business websites, our WordPress solutions combine speed, security, and elegant design. We optimize every page for SEO, integrate powerful tools, and ensure an intuitive experience for admins and visitors alike.',
    features: [
      'Custom WordPress theme development',
      'Lightning-fast performance',
      'SEO best practices implemented',
      'WooCommerce integration',
      'Mobile-first & accessible design',
      'Blog and CMS customization',
      'Security, caching, and speed optimization',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l4-4-4-4m8 0l-4 4 4 4" />
      </svg>
    ),
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing (via Digital Darpan)',
    description: 'Performance-focused ad campaigns, social strategy, and funnels.',
    longDescription:
      'Through our partner brand Digital Darpan, we run strategic digital marketing campaigns designed to convert. From Google Ads to Instagram reels, we build full-funnel experiences that amplify your message and grow your audience.',
    features: [
      'Google & Meta Ads management',
      'Lead generation funnels',
      'Landing page optimization',
      'Email marketing & automation',
      'Analytics & conversion tracking',
      'Influencer & content strategy',
      'Social media growth campaigns',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    id: 'seo-services',
    title: 'SEO Services (via Immortal SEO)',
    description: 'Rank higher, faster — with white-hat, AI-enhanced SEO techniques.',
    longDescription:
      'We blend modern SEO expertise with AI insights to craft winning search strategies. Immortal SEO helps brands rank on Google with long-lasting, algorithm-friendly techniques that attract and convert your ideal audience.',
    features: [
      'Technical SEO audits',
      'AI-enhanced keyword clustering',
      'On-page SEO optimization',
      'Content strategy and planning',
      'Link building & outreach',
      'Local SEO & Google Business',
      'Monthly reports & growth tracking',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7-7 7-7-7zm0 0v12" />
      </svg>
    ),
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Tools',
    description: 'Like our llms.txt generator or domain availability checker.',
    longDescription:
      'We build smart tools powered by AI and automation to help you save time, reduce costs, and scale faster. From language model-powered apps to scraping, analysis, and integration bots — we love solving business bottlenecks with intelligent software.',
    features: [
      'Custom AI tool development',
      'GPT-based assistants and generators',
      'Task automation and bots',
      'Zapier-like backend automations',
      'Data scraping and processing',
      'Custom dashboards & visualizations',
      'OpenAI / HuggingFace integrations',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m0 0v6m0-6h-6" />
      </svg>
    ),
  },
  {
    id: 'growth-strategy',
    title: 'Growth Strategy Consulting',
    description: '15+ years of digital wisdom to scale your startup or SMB.',
    longDescription:
      'With a proven background in SEO, tech, and product marketing, we offer actionable consulting to help startups and small businesses unlock growth. Get one-on-one guidance on product-market fit, SEO, sales funnels, and go-to-market planning.',
    features: [
      'Digital business roadmap design',
      'Startup & SaaS advisory',
      'Customer journey mapping',
      'Funnel strategy & optimization',
      'Marketing-tech stack consulting',
      'Founder mentorship sessions',
      'Free strategy consultation calls',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ServicesPage()  {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-900/20 to-dark-900 pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Innovative technology solutions to help your business thrive in the digital age.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 hover:shadow-glow"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services list */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service) => (
              <div 
                key={service.id}
                id={service.id} 
                className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="p-4 rounded-lg bg-primary-500/10 h-fit">
                    {service.icon}
                  </div>
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-300 mb-6">
                      {service.longDescription}
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/contact?service=${service.id}`}
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 hover:shadow-glow"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900/20 to-dark-900 relative overflow-hidden mb-16">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10">
              Contact us today to discuss how our services can help your business innovate and grow.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 hover:shadow-glow"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}