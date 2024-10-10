// rafce
import { motion } from "framer-motion";
import projects1 from "/public/projects1.jpg";
import projects2 from "/public/projects2.jpg";
import projects3 from "/public/projects3.jpg";
import projects4 from "/public/projects4.jpg";
import projects5 from "/public/projects5.jpg";
import projects6 from "/public/projects6.jpg";
import projects7 from "/public/projects7.jpg";
import projects8 from "/public/projects8.jpg";

const Projects = () => {
  // const projectData = [
  //   {
  //     image: projects1,
  //     title: "Aplikasi Web",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga dicta beatae ipsa error esse reprehenderit maxime. Eum, quam. Reprehenderit, nostrum ipsum.",
  //     technologies: ["HTML", "CSS", "Javascript", "Tailwind CSS", "Laravel"],
  //   },
  //   {
  //     image: projects2,
  //     title: "Aplikasi Web",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga dicta beatae ipsa error esse reprehenderit maxime. Eum, quam. Reprehenderit, nostrum ipsum.",
  //     technologies: ["HTML", "CSS", "Javascript", "Tailwind CSS", "Laravel"],
  //   },
  //   {
  //     image: projects3,
  //     title: "Aplikasi Web",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga dicta beatae ipsa error esse reprehenderit maxime. Eum, quam. Reprehenderit, nostrum ipsum.",
  //     technologies: ["HTML", "CSS", "Javascript", "Tailwind CSS", "Laravel"],
  //   },
  //   {
  //     image: projects4,
  //     title: "Aplikasi Web",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga dicta beatae ipsa error esse reprehenderit maxime. Eum, quam. Reprehenderit, nostrum ipsum.",
  //     technologies: ["HTML", "CSS", "Javascript", "Tailwind CSS", "Laravel"],
  //   },
  //   {
  //     image: projects5,
  //     title: "Aplikasi Web",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga dicta beatae ipsa error esse reprehenderit maxime. Eum, quam. Reprehenderit, nostrum ipsum.",
  //     technologies: ["HTML", "CSS", "Javascript", "Tailwind CSS", "Laravel"],
  //   },
  //   {
  //     image: projects6,
  //     title: "Aplikasi Web",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga dicta beatae ipsa error esse reprehenderit maxime. Eum, quam. Reprehenderit, nostrum ipsum.",
  //     technologies: ["HTML", "CSS", "Javascript", "Tailwind CSS", "Laravel"],
  //   },
  // ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center min-h-screen gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        My Projects
      </motion.h1>
      <div className="flex flex-col w-full mix-w-[1000px] gap-16 text-white">
        {/* my card  */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-24 "
        >
          <img
            src={projects1}
            alt=""
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">Study Web</div>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              distinctio? Obcaecati tenetur dolorem, earum dolore distinctio ad
              fugit asperiores sunt tempore quia? Exercitationem accusantium
              repudiandae officiis porro? Ducimus, cumque ipsum.
            </p>
            <div className="flex flex-wrap gap-5 ">
              <span className="rounded-lg bg-black p-3">HTML</span>
              <span className="rounded-lg bg-black p-3">CSS</span>
              <span className="rounded-lg bg-black p-3">Javascript</span>
              <span className="rounded-lg bg-black p-3">Tailwind CSS</span>
              <span className="rounded-lg bg-black p-3">Laravel</span>
            </div>
          </div>
        </motion.div>
        {/* end my card */}
        {/* my card  */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-24 "
        >
          <img
            src={projects2}
            alt=""
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">Design Web Modern</div>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              distinctio? Obcaecati tenetur dolorem, earum dolore distinctio ad
              fugit asperiores sunt tempore quia? Exercitationem accusantium
              repudiandae officiis porro? Ducimus, cumque ipsum.
            </p>
            <div className="flex flex-wrap gap-5 ">
              <span className="rounded-lg bg-black p-3">HTML</span>
              <span className="rounded-lg bg-black p-3">CSS</span>
              <span className="rounded-lg bg-black p-3">Figma</span>
            </div>
          </div>
        </motion.div>
        {/* end my card */}
        {/* my card  */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-24 "
        >
          <img
            src={projects3}
            alt=""
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">Study UI/UX Modern</div>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              distinctio? Obcaecati tenetur dolorem, earum dolore distinctio ad
              fugit asperiores sunt tempore quia? Exercitationem accusantium
              repudiandae officiis porro? Ducimus, cumque ipsum.
            </p>
            <div className="flex flex-wrap gap-5 ">
              <span className="rounded-lg bg-black p-3">HTML</span>
              <span className="rounded-lg bg-black p-3">CSS</span>
              <span className="rounded-lg bg-black p-3">Javascript</span>
              <span className="rounded-lg bg-black p-3">Figma</span>
            </div>
          </div>
        </motion.div>
        {/* end my card */}
        {/* my card  */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-24 "
        >
          <img
            src={projects4}
            alt=""
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">Latest web design</div>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              distinctio? Obcaecati tenetur dolorem, earum dolore distinctio ad
              fugit asperiores sunt tempore quia? Exercitationem accusantium
              repudiandae officiis porro? Ducimus, cumque ipsum.
            </p>
            <div className="flex flex-wrap gap-5 ">
              <span className="rounded-lg bg-black p-3">Figma</span>
            </div>
          </div>
        </motion.div>
        {/* end my card */}
        {/* my card  */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-24 "
        >
          <img
            src={projects5}
            alt=""
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">
                Web Design HTML CSS & JS Display
              </div>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              distinctio? Obcaecati tenetur dolorem, earum dolore distinctio ad
              fugit asperiores sunt tempore quia? Exercitationem accusantium
              repudiandae officiis porro? Ducimus, cumque ipsum.
            </p>
            <div className="flex flex-wrap gap-5 ">
              <span className="rounded-lg bg-black p-3">HTML</span>
              <span className="rounded-lg bg-black p-3">CSS</span>
              <span className="rounded-lg bg-black p-3">Javascript</span>
            </div>
          </div>
        </motion.div>
        {/* end my card */}
        {/* my card  */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-24 "
        >
          <img
            src={projects6}
            alt=""
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">
                Web Display Using Popular Framewoek
              </div>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              distinctio? Obcaecati tenetur dolorem, earum dolore distinctio ad
              fugit asperiores sunt tempore quia? Exercitationem accusantium
              repudiandae officiis porro? Ducimus, cumque ipsum.
            </p>
            <div className="flex flex-wrap gap-5 ">
              <span className="rounded-lg bg-black p-3">Figma</span>
              <span className="rounded-lg bg-black p-3">Javascript</span>
              <span className="rounded-lg bg-black p-3">Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
        {/* end my card */}
        {/* my card  */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-24 "
        >
          <img
            src={projects7}
            alt=""
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">
                Cool Application Appearance
              </div>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              distinctio? Obcaecati tenetur dolorem, earum dolore distinctio ad
              fugit asperiores sunt tempore quia? Exercitationem accusantium
              repudiandae officiis porro? Ducimus, cumque ipsum.
            </p>
            <div className="flex flex-wrap gap-5 ">
              <span className="rounded-lg bg-black p-3">HTML</span>
              <span className="rounded-lg bg-black p-3">CSS</span>
              <span className="rounded-lg bg-black p-3">Javascript</span>
              <span className="rounded-lg bg-black p-3">Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
        {/* end my card */}
        {/* my card  */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-24 "
        >
          <img
            src={projects8}
            alt=""
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">
                Cool Application Appearance
              </div>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              distinctio? Obcaecati tenetur dolorem, earum dolore distinctio ad
              fugit asperiores sunt tempore quia? Exercitationem accusantium
              repudiandae officiis porro? Ducimus, cumque ipsum.
            </p>
            <div className="flex flex-wrap gap-5 ">
              <span className="rounded-lg bg-black p-3">HTML</span>
              <span className="rounded-lg bg-black p-3">CSS</span>
              <span className="rounded-lg bg-black p-3">Javascript</span>
              <span className="rounded-lg bg-black p-3">Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
        {/* end my card */}
      </div>
    </div>
  );
};

export default Projects;
