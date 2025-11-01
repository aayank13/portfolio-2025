import AboutMe from "./components/AboutMe";
import RecentBlogs from "./components/RecentBlogs";
import RecentProjects from "./components/RecentProjects";

export default function Home() {
  return (
    <main className="pt-4 pb-10 px-6">
      <div className="max-w-6xl mx-0 lg:mx-12 lg:px-5 xl:mx-auto">
        {/* About Me Section */}
        <AboutMe />

        <hr className="my-8 border-t border-gray-300" />

        {/* Recent Projects and Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <RecentProjects />
          <RecentBlogs />
        </div>
      </div>
    </main>
  );
}
