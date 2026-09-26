import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="h-screen w-screen bg-primary relative overflow-hidden">

      <motion.div
          aria-hidden="true"
          className="bg-primary -translate-x-12 -translate-y-12 rounded-full absolute top-0 left-0 aspect-square h-1/4 
          shadow-[20px_20px_60px_#1b1c1f,_-20px_-20px_60px_#2f3237]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

      <motion.div
          aria-hidden="true"
          className="bg-primary translate-x-12 translate-y-12 rounded-full absolute bottom-0 right-0 aspect-square h-1/3 
          shadow-[20px_20px_60px_#1b1c1f,_-20px_-20px_60px_#2f3237]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        />

    </div>
  );
};

export default Background;
