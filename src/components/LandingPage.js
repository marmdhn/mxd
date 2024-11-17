import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

function LandingPage({ onNext }) {
  const [text, setText] = useState("Hai, Botol Yakult wkwk");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("eh, Dea");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-white">
      <div className="text-center mt-5 mx-3">
        <motion.h1
          key={text}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="fw-bold mb-3"
        >
          {text}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Aku ada yang mau aku omongin, berhubungan sama yg kamu minta tanya
          langsung itu sii, <br />
          tapi bingung gimana jadi ku sampein dari web aja yah karna aku kan
          role FE hehehe...
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="btn btn-primary mt-3"
          onClick={onNext}
        >
          Apa tuh?
        </motion.button>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
