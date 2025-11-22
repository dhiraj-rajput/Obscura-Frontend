import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useState } from "react";

export default function AnimatedTestimonials({ testimonials = [] }) {
  const items = testimonials;

  if (!items || items.length === 0) {
    return <div className="text-center text-gray-400 py-16">No items to display</div>;
  }

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const dragX = useMotionValue(0);

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleDragEnd = (_, info) => {
    const threshold = window.innerWidth > 768 ? 60 : 40;
    const velocity = info.velocity.x;

    if (info.offset.x < -threshold || velocity < -300) next();
    else if (info.offset.x > threshold || velocity > 300) prev();

    dragX.set(0);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 120, damping: 20 },
        opacity: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 120, damping: 20 },
        opacity: { duration: 0.3, ease: "easeIn" },
        scale: { duration: 0.3, ease: "easeIn" },
      },
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-10 py-16 ">
      <div className="w-full max-w-6xl overflow-hidden">

        {/*Draggable wrapper → replaced with smooth version */}
        <div className="relative w-full">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={items[active].name}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileDrag={{ cursor: "grabbing" }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 min-h-[400px] md:pl-[160px] cursor-grab touch-pan-y"
            >
              <motion.div className="relative h-[340px] w-[340px] md:h-[380px] md:w-[380px] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 ">
                <img
                  src={items[active].src}
                  alt={items[active].name}
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>

              <motion.div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg w-full max-w-lg flex-shrink-0 select-none">
                <h3 className="text-3xl text-white leading-tight font-semibold">
                  {items[active].name}
                </h3>
                <p className="text-sm text-gray-400 mt-1 mb-5">
                  {items[active].designation}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {items[active].quote}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${i === active
                ? "w-8 h-2 bg-cyan-400"
                : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
