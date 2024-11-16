import React, { useState } from "react";
import { motion } from "framer-motion";

function CheckListModal({ onConfirm }) {
  const [checked, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [closeAttempted, setCloseAttempted] = useState(false);

  const handleCheck = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const handleCloseAttempt = () => {
    setCloseAttempted(true);
    setTimeout(() => setCloseAttempted(false), 500); // Reset after animation
  };

  const isAllChecked = checked.every((item) => item);

  const handleConfirm = () => {
    localStorage.setItem("accepted", true);
    onConfirm();
  };

  return (
    <motion.div
      className="modal-backdrop-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="modal show d-block"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
      >
        <motion.div
          className="modal-dialog modal-dialog-centered modal-xl text-black-50"
          animate={closeAttempted ? { x: [-20, 10, -20, 0] } : { x: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mx-auto">
                Nyaman & sayang sama kamu...
              </h5>
              <div>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseAttempt}
                ></button>
              </div>
            </div>
            <div className="modal-body px-4">
              <p className="text-center fw-semibold fst-italic">
                Tapi aku takut sebenernya buat ngungkapinnyaa, tapi gamau juga
                menggantung terlalu lama hehehe, tapi aku tau kok kalau...
              </p>
              <ul style={{ listStyle: "none" }} className="ps-0">
                <li>
                  <input type="checkbox" onChange={() => handleCheck(0)} /> Aku
                  banyak kekurangan
                </li>
                <li>
                  <input type="checkbox" onChange={() => handleCheck(1)} />{" "}
                  Mungkin hubungan kita ga akan selamanya mulus
                </li>
                <li>
                  <input type="checkbox" onChange={() => handleCheck(2)} />{" "}
                  Mungkin akan banyak rintangan di depan sana, nth yang
                  berhubungan dari masa lalu aku atau kamu
                </li>
                <li>
                  <input type="checkbox" onChange={() => handleCheck(3)} /> Aku
                  gatau harus nulis apa lagi hahaha
                </li>
                <li>
                  <input type="checkbox" onChange={() => handleCheck(4)} />{" "}
                  Oiyaa maap yahh aku bikin ini malam hehehe pas aku bilang aku
                  bobo juga sama kamu aku lagi bikin ini
                </li>
                <li>
                  <input type="checkbox" onChange={() => handleCheck(5)} /> Tapi
                  aku harap kita bisa hadapin semua itu sama sama tanpa harus
                  mengucakan kata yang ga seharusnya kita ucapkan hehe
                </li>
              </ul>
              <p className="text-center fw-semibold fst-italic">
                Dengan kamu centang semua ceklis di atas aku harap kita bisa
                sama sama bersama dan upgrade hubungan kita yang sekarang
              </p>
            </div>
            <div className="modal-footer">
              <div className="w-100 d-flex justify-content-center align-items-center gap-2">
                <motion.button
                  className="btn btn-success"
                  disabled={!isAllChecked}
                  whileHover={{ scale: 1.1 }}
                  onClick={handleConfirm}
                >
                  Terima
                </motion.button>
                <button className="btn btn-danger" disabled>
                  Belum Bisa
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default CheckListModal;
