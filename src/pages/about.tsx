import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
      <Header />
      <Navbar />
      <main className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Priyansh Singh</h1>
        <div className="space-y-4 text-lg">
          <p>
            Hey there 👋, I'm a passionate software developer with a focus on
            creating high-quality, open-source tools for the development
            community. I have honed my skills in frontend and backend
            development with my experience at various projects and internships.
          </p>
          <p>
            One of my biggest passions is open-source software, and I have
            contributed to a number of projects over the years. I am
            particularly proud of my contributions to several open-source
            projects that I created to help developers build better
            applications.
          </p>
          <p>
            Apart from these, I have also contributed to various styling
            libraries and created a bunch of open- source tools for developers,
            most prominent of them is my work with CSS-in-JS libraries.
          </p>
          <p>
            In addition to my open-source work, I also have a solid foundation
            in frontend and backend development. I specialize in React and have
            experience with Bundlers, Babel plugins, Node.js, Express, and
            Next.js. My experience with these technologies allows me to build
            scalable, maintainable, and performant applications that meet the
            needs of clients and end-users alike.
          </p>
          <p>
            When I'm not coding, I enjoy playing guitar, singing, and gaming. I
            find that these hobbies help me to unwind and stay creative, which
            in turn makes me a better developer. I am also passionate about
            contributing to the development community and love to share my
            knowledge and expertise with others.
          </p>
          <p>
            Overall, I am a dedicated and passionate software developer with a
            focus on open-source software and creating high-quality
            applications. Whether I'm building new tools or contributing to
            existing projects, I am committed to making a positive impact on the
            development community.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
