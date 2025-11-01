import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="my-6">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-8 lg:gap-12">
        <div className="md:flex-1">
          <h1
            className="text-[2.5rem] font-semibold leading-tight mb-6 italic"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Hey, I am Aayan
          </h1>

          <h3
            className="text-2xl mb-6 italic text-(--color-primary-red) font-semibold "
            style={{ fontFamily: "var(--font-lora)" }}
          >
            builder, thinker, and explorer
          </h3>

          {/* Main Content */}
          <div className="mb-6 space-y-4 text-lg leading-relaxed">
            <p>
              I am a software engineer passionate about bridging the gap between
              systems programming and artificial intelligence — building
              efficient, scalable, and intelligent systems from the ground up.
              My work spans backend architecture, frontend engineering, and deep
              learning research.
            </p>

            <p>
              I currently work at a startup where I built a production-grade AI
              voice agent using Deepgram&apos;s STT and TTS APIs, reducing
              operational costs by 65% and improving latency by 40%. I focus on
              architecting reliable backends with
              <strong> FastAPI</strong> and crafting modern, interactive
              frontends with
              <strong> Next.js</strong>, ensuring both performance and seamless
              user experience.
            </p>

            <p>
              At the <strong>Software Development Cell, GGSIPU</strong>, I lead
              backend development and system design for university-scale
              platforms used by thousands of students. My work involves
              designing scalable APIs, managing databases, and deploying secure
              infrastructure on VPS environments.
            </p>

            <p>
              Beyond web systems, I actively explore the intersection of{" "}
              <strong>machine learning</strong>, <strong>deep learning</strong>,
              and <strong>natural language processing</strong>. I experiment
              with <strong>large language models</strong>, reinforcement
              learning, and multimodal architectures, constantly pushing my
              understanding of how intelligence can emerge from computation.
            </p>

            <p>
              I&apos;m deeply passionate about <strong>Rust</strong> and systems
              programming — fascinated by its blend of performance and safety. I
              use it to understand how low-level design impacts scalability,
              performance, and the developer experience itself.
            </p>

            <p>
              I love dissecting complex ideas — whether it&apos;s a neural
              architecture or a compiler optimization — and translating them
              into real, working systems. I continuously share my insights and
              learning journeys across my website and socials, driven by the
              belief that engineering is a lifelong process of curiosity and
              creation.
            </p>
          </div>
        </div>

        <div className="md:shrink-0 mb-6 md:mb-0">
          <div className="block relative w-48 md:w-[300px]">
            <Image
              src="/aayankhan.jpeg"
              alt="Aayan Khan"
              width={300}
              height={300}
              className="rounded-lg w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
