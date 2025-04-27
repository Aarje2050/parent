import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Zobli Innovations',
  description: 'Get in touch with Zobli Innovations for all your technology needs. Contact our team to discuss how we can help transform your business.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-900/20 to-dark-900 pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have a question or want to discuss how Zobli Innovations can help your business? We'd love to hear from you!
            </p>
          </div>
          
          {/* Contact information cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary-500/20 text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">admin@zobli.com</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary-500/20 text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+919928028864</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary-500/20 text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">A9, Pratap nagar market, Chittorgarh, 312001 ,Rajasthan, India </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact form section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Send Us A Message
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We're here to help you navigate the complex world of technology and find the right solutions for your business.
              </p>
              
              <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM EST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Support</h3>
                <p className="text-gray-300 mb-4">
                  Need urgent technical assistance? Our support team is available 24/7.
                </p>
                <div className="flex items-center space-x-2 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>support@zobli.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg p-6">
              {/* Contact Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name <span className="text-primary-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="block w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address <span className="text-primary-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="block w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="block w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject <span className="text-primary-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="block w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Software Development">Software Development</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Cloud Services">Cloud Services</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="IoT Solutions">IoT Solutions</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message <span className="text-primary-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="block w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    name="privacy-policy"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-600 rounded"
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-400">
                    I agree to the <Link href="/privacy-policy" className="text-primary-400 hover:text-primary-300">Privacy Policy</Link> and consent to be contacted regarding my inquiry.
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 hover:shadow-glow"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section (placeholder) */}
      <section className="pb-0 mb-0">
        <div className="w-full h-96 bg-dark-700 flex items-center justify-center text-gray-400 text-xl">
          [Map Placeholder - Google Maps or other map integration would go here]
        </div>
      </section>
    </>
  );
}