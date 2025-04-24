import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers at Zobli Innovations',
  description: 'Explore job openings and career opportunities at Zobli Innovations.',
};

export default function CareersPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Careers at Zobli Innovations</h1>
      <p className="mb-4 text-lg">
        Join a team that’s passionate about innovation and creativity. At Zobli Innovations, we're always looking for talented individuals to help shape the future.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Current Openings 🚀</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>
            <span className="font-medium">SEO Executive</span> – Experience: 1+ years
          </li>
          <li>
            <span className="font-medium">Digital Marketing Manager</span> – Experience: 2+ years
          </li>
          <li>
            <span className="font-medium">Graphic Designer</span> – Experience: 5+ years
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
        <p className="mb-2">
          Interested in any of these roles? Send your resume and portfolio (if applicable) to{' '}
          <a href="mailto:careers@zobli.com" className="text-indigo-600 underline">careers@zobli.com</a>
        </p>
        <p>
          For questions or more info, feel free to{' '}
          <Link href="/contact" className="text-indigo-600 underline">reach out to us</Link>.
        </p>
      </section>
    </main>
  );
}
