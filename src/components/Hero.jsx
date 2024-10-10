// rafce
import profil from "/public/profil.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[250px] h-[250px] rounded-full overflow-hidden cursor-pointer shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px] md:h-[300px]"
        >
          <img src={profil} alt="" />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col w-[300px] md:w-[650px] items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-2xl transition-all duration-300 hover:opacity-100 md:text-4xl font-light">
            DONIUS DARMANYANTO GIAWA
          </h1>
          <h3 className="bg-gradient-to-r to-blue-500 from-pink-500 bg-clip-text text-transparent opacity-80 text-1xl transition-all duration-300 hover:opacity-100 md:text-2xl font-light">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I am a web developer proficient in HTML, CSS, JavaScript, Tailwind,
            Bootstrap, MySQL, Laravel, and Figma. My focus is on creating clean
            and scalable applications. From front-end design to seamless
            database integration with MySQL, I develop efficient solutions for
            dynamic user experiences. Let’s collaborate to build something
            remarkable together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
