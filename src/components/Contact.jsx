// rafce
import { motion } from "framer-motion";
const Contact = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="contact"
      className="flex flex-col min-h-[600px] w-full felx-col items-center justify-center gap-16 md:gap-32"
    >
      <div className="h-auto p-0 m-0 text-center">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl pb-10 font-light text-white md:text-6xl"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center text-gray-500 text-lg font-semibold"
        >
          You can reach out to me using the contact information provided below.
          Don't hesitate—making your job easier is just a message away. Contact
          me now!
        </motion.p>
      </div>
      <motion.a
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        href=""
        className="text-nowrap raounded-lg border border-indigo-600 bg-black px-5 py-5 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
      >
        Contact Me
      </motion.a>
    </div>
  );
};

export default Contact;
