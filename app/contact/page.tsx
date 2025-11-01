export default function ContactPage() {
  return (
    <main className="pt-4 pb-10 px-6">
      <div className="max-w-6xl mx-0 lg:mx-12 lg:px-5 xl:mx-auto">
        {/* Title Section */}
        <div className="mb-6 lg:grid lg:grid-cols-2">
          <div>
            <div className="mb-4">
              <h2
                className="inline text-[2rem] font-semibold italic"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                <span>Connect with me!</span>
              </h2>
            </div>

            <div className="space-y-3 text-lg leading-relaxed text-(--color-text-primary)">
              <p>
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-t border-gray-300" />

        {/* Contact Methods */}
        <div className="space-y-8">
          {/* Email */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-(--color-text-black)">
              Email
            </h3>
            <a
              href="mailto:your.email@example.com"
              className="text-(--color-primary-blue) hover:underline text-lg"
            >
              aayank1306@gmail.com
            </a>
            <p className="mt-2 text-(--color-text-primary)">
              Best for professional inquiries and collaborations.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-(--color-text-black)">
              Social Media
            </h3>
            <ul className="space-y-2 list-disc ml-8 text-base">
              <li>
                <a
                  href="https://github.com/aayank13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-primary-blue) hover:underline"
                >
                  GitHub
                </a>
                <span className="text-(--color-text-primary) ml-2">
                  - Check out my code and projects
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aayank13/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-primary-blue) hover:underline"
                >
                  LinkedIn
                </a>
                <span className="text-(--color-text-primary) ml-2">
                  - Let&apos;s connect professionally
                </span>
              </li>
              <li>
                <a
                  href="https://x.com/aayank_13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-primary-blue) hover:underline"
                >
                  Twitter
                </a>
                <span className="text-(--color-text-primary) ml-2">
                  - Follow for updates and thoughts
                </span>
              </li>
            </ul>
          </div>

          {/* Location (Optional) */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-(--color-text-black)">
              Location
            </h3>
            <p className="text-(--color-text-primary) leading-relaxed">
              Based in Delhi, India
            </p>
            <p className="text-(--color-text-primary) text-sm mt-1">
              Available for work and collaborations worldwide
            </p>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-300" />

        {/* Call to Action */}
        <div className="text-center py-6">
          <p className="text-lg text-(--color-text-primary) mb-4">
            Looking forward to hearing from you!
          </p>
          <a
            href="mailto:aayank1306@gmail.com"
            className="inline-block px-6 py-3 bg-(--color-primary-red) text-white text-lg font-extrabold rounded-md hover:opacity-90 transition-opacity"
          >
            Send me an email
          </a>
        </div>
      </div>
    </main>
  );
}