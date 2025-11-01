import Link from 'next/link';

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const currentYear = new Date().getFullYear();

const FOOTER_SECTIONS: Record<string, FooterSection> = {
  writings: {
    title: 'Writings and Building',
    links: [
      { name: 'Blogs', href: '/blogs' },
      { name: 'Projects', href: '/projects' },
    ],
  },
  legal: {
    title: 'Other Information',
    links: [
      { name: 'About me', href: '/about-me' },
      { name: 'Contact Me', href: '/contact' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] mt-8">
      <div className="max-w-6xl mx-0 lg:mx-12 xl:mx-auto px-6 py-12">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.values(FOOTER_SECTIONS).map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-600 mb-4 text-base">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-(--color-text-black) hover:text-(--color-primary-blue) transition-colors text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href="https://github.com/aayank13"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 rounded hover:border-gray-400 transition-colors text-base"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aayank13/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 rounded hover:border-gray-400 transition-colors text-base"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/aayank_13"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 rounded hover:border-gray-400 transition-colors text-base"
          >
            Twitter
          </a>
        </div>

        {/* Copyright */}
        <div className="text-left text-base text-gray-600">
          <p>© Aayan Khan, {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
