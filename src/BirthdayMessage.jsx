import { motion } from 'framer-motion';

export default function BirthdayMessage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-rose-100 to-pink-200 px-4 py-12 font-[cursive] text-center">
      <motion.div
        className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10 max-w-2xl border border-rose-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-rose-600 mb-6 animate-pulse">
          🎉 Happy 20th Birthday, My Love! 🎂
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          You are the most beautiful part of my life. <br />
          May this year bring you endless joy, love, and laughter. <br />
          I'm so lucky to have you. <span className="text-pink-500 text-2xl">💖</span>
        </p>
      </motion.div>
    </div>
  );
}
