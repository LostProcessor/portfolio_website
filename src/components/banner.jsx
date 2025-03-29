import { motion } from "framer-motion";

const Banner = () => {
  const items = ["React","MongoDb","Postgresql","Javascript","Python","REST API","Express","Nodejs","Redux"];

  return (
    <div className="fixed top-0 left-0 w-full overflow-hidden bg-gray-900 text-white py-2">
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex space-x-8 whitespace-nowrap w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ display: "flex" }}
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="px-4 py-2 bg-blue-500 rounded-lg shadow-md min-w-[150px]">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;