import React, { useState } from "react";
import { motion } from "framer-motion";
import CheckListModal from "./CheckListModal";
import Footer from "./Footer";

function MainPage({ onNext, onForeignConfirm }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-white mx-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        Aku gatau ini waktu yang tepat atau enggk yaah, dan aku jg tau ini belum
        lama hehe
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        tapi aku...
      </motion.p>

      <motion.div
        className="mt-3 fw-bold"
        whileHover={{ scale: 1.2, rotate: 2 }}
        whileTap={{ scale: 1, rotate: 0 }}
        style={{
          display: "inline-block",
          background: "pink",
          padding: "20px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={() => setShowModal(true)}
      >
        <span className="text-black-50">apa tuh?</span>
      </motion.div>

      {showModal && (
        <CheckListModal
          onForeignConfirm={onForeignConfirm}
          onConfirm={onNext}
        />
      )}
      <Footer />
    </motion.div>
  );
}

export default MainPage;
