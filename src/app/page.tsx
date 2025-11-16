import Image from "next/image";
import Link from "next/link";

type Case = {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
};

export default function Home() {
  const cases: Case[] = [
    {
      id: "project-1",
      title: "Resume",
      description: "My resume on Next.js.",
      image: "/images/project-1.jpg",
      github: "https://github.com/ValeriyVinn/valeriyvinn.github.io",
      live: "https://valeriyvinn-github-io.vercel.app/uk",
    },
    {
      id: "project-2",
      title: "My Parish",
      description: "A way to thank the community for our shared prayers.",
      image: "/images/project-2.jpg",
      github: "#",
      live: "https://parish-ten.vercel.app/",
    },

    {
      id: "project-3",
      title: "Notary",
      description: "Project for a notary office.",
      image: "/images/project-3.jpg",
      github: "#",
      live: "https://notary-five.vercel.app/",
    },

    // {
    //   id: "project-4",
    //   title: "Exercises",
    //   description:
    //     "Pet project for fullstack practice: frontend (React on Github) + backend (Node.js, Express on Render).",
    //   image: "/images/project-4.jpg",
    //   github: "https://github.com/ValeriyVinn/exercises",
    //   live: "https://valeriyvinn.github.io/exercises/",
    // },
    {
      id: "project-4",
      title: "Startups",
      description:
        "A personal idea vault for future startups — capture, refine, and revisit your next big thing.",
      image: "/images/project-7.jpg",
      github: "https://github.com/ValeriyVinn/from-behind-the-line",
      live: "https://from-behind-the-line.vercel.app/en",
    },

    {
      id: "project-5",
      title: "Hi-Words",
      description: "Pet project on learning English vocabulary.",
      image: "/images/project-5.jpg",
      github: "https://github.com/ValeriyVinn/hi-words",
      live: "https://valeriyvinn.github.io/hi-words/",
    },
    {
      id: "project-6",
      title: "Fonetic",
      description: "Pet project for practicing English phonetics.",
      image: "/images/project-6.jpg",
      github: "https://github.com/ValeriyVinn/phonetic",
      live: "https://phonetic-alpha.vercel.app/",
    },
  ];

  return (
    <div className="">
      <header className=""></header>

      <main className="min-h-screen">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-blue-700 text-5xl font-bold text-center">
            My portfolio
          </h1>
          {/* <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            Кілька відібраних проєктів, які демонструють мій стек, підхід до
            архітектури та увагу до деталей.
          </p> */}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 -> 2 -> 3 в ряд */}
            {cases.map((item) => (
              <article
                key={item.id}
                className="group bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600 flex-1">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-100"
                    >
                      GitHub
                    </Link>
                    <Link
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      Live
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className=""></footer>
    </div>
  );
}
