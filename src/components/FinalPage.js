import React from "react";
import { motion } from "framer-motion";

function FinalPage() {
  return (
    <motion.div
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1>Terima Kasih</h1>
      <p>Kamu telah menerima aku sebagai bagian dari hidupmu!</p>

      <footer className="footer position-absolute bottom-0">
        <hr />
        <p>
          <i>Hope</i> <span>we'll be fine together</span>
        </p>
      </footer>
    </motion.div>
  );
}

export default FinalPage;
