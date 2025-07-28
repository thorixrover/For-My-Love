import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Surprise() {
  const [show, setShow] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [showLove, setShowLove] = useState(false);

  const reveal = () => {
    setShow(true);
    generateHearts();
    setTimeout(() => {
      setShowLove(true);
    }, 4000); // muncul setelah pesan cinta
  };

  const generateHearts = () => {
    const tempHearts = [];
    for (let i = 0; i < 30; i++) {
      tempHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        size: Math.random() * 20 + 18,
        emoji: Math.random() > 0.5 ? '💖' : '💕',
      });
    }
    setHearts(tempHearts);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 overflow-hidden px-6 py-12 font-[cursive]">
      {/* Judul */}
      <motion.h1
        className="text-4xl md:text-5xl text-center font-bold text-rose-700 mb-8 drop-shadow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌸 A Magical Surprise Just for You 🌸
      </motion.h1>

      {/* Tombol */}
      {!show && (
        <motion.button
          onClick={reveal}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-r from-rose-500 to-pink-400 text-white text-lg px-8 py-4 rounded-full shadow-lg overflow-hidden transition-all duration-300"
        >
          <span className="z-10 relative">💝 Click here for a surprise</span>
          {/* Sparkle effect */}
          <motion.div
            className="absolute inset-0 bg-white opacity-20 blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      )}

      {/* Pesan Cinta */}
      <AnimatePresence>
        {show && (
          <motion.div
            className="mt-10 w-full max-w-xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-xl px-6 py-10 text-center space-y-6 border border-pink-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
          >
            {/* Animasi ketikan */}
            <TypingText
              text="💐 You make every moment magical."
              delay={0.2}
              className="text-rose-700 text-xl font-semibold"
            />
            <TypingText
              text="💌 Hafiza,
hari ini waktu berhenti sejenak
untuk menyentuh pipimu dengan cahaya usia baru.
Dua puluh tahun—bukan hanya bilangan,
tapi bait demi bait yang telah kau ukir di dunia.

Aku mencintaimu,
bukan dengan cara dunia mengenal cinta.
Bukan sekadar kata, peluk, atau janji.
Tapi seperti hujan mencintai bumi:
diam-diam meresap, setia membasahi,
dan selalu kembali—meski berkali-kali pergi.

Dalam gelap mataku, kau adalah lampu kecil
yang tak pernah lelah menyala,
meski angin dunia berusaha memadamkan.

Kau bukan sekadar kekasih,
kau adalah wangi yang tinggal
meski mawar telah lama gugur.

Jika waktu adalah perjalanan,
maka aku ingin menua bersamamu,
di antara percakapan kecil dan tangan yang saling menggenggam
tanpa banyak alasan—selain cinta itu sendiri.

Selamat ulang tahun,
wahai nyala lembut dalam hidupku.
Semoga usiamu menjadi puisi yang semakin indah dibaca waktu,
dan aku akan selalu menjadi suaranya.
Mendoakanmu…
bukan hanya hari ini,
tapi sampai tak ada lagi kata yang bisa mengeja akhir dari cinta ini.

."
              delay={1}
              className="text-rose-600 text-lg"
            />
            <TypingText
              text="🎶 Play our song"
              delay={2}
              className="text-purple-700 underline hover:text-purple-900 cursor-pointer"
              link="https://youtu.be/2Vv-BfVoq4g?si=c7LlMYtO1QuV_xBz"
            />

            {/* Pesan terakhir */}
            {showLove && (
              <motion.p
                className="text-xl text-pink-700 font-bold mt-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
              >
                💞 I love you now and forever 💞
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animasi Hati */}
      {show &&
        hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute select-none pointer-events-none"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              zIndex: -1,
            }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: '-10vh', opacity: 1 }}
            transition={{
              delay: heart.delay,
              duration: 7,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {heart.emoji}
          </motion.div>
        ))}
    </div>
  );
}

// Komponen ketikan
function TypingText({ text, delay, className, link }) {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 40);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return link ? (
    <a href={link} target="_blank" rel="noreferrer" className={className}>
      {displayText}
    </a>
  ) : (
    <p className={className}>{displayText}</p>
  );
}
