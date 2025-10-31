
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
      <p className="text-lg mb-16">
        Explore my projects, blog posts, and get in touch!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p>Check out some of my latest work and projects.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <p>Read my thoughts on web development and technology.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Get in touch with me for collaborations or inquiries.</p>
        </div>
      </div>
    </main>
  );
}
