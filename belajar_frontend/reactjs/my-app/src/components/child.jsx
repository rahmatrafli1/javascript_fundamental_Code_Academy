import React from "react";

const Child = ({ nm, nmbunga, fungsi }) => {
  return (
    <div>
      <h2>Proses kirim data antar komponen</h2>
      <h3>
        Nama Bunga yang dikirim {nm} adalah Bunga {nmbunga}
      </h3>
      <input
        type="text"
        name="bunga"
        value={nmbunga}
        onChange={(e) => fungsi(e.target.value)}
      />
    </div>
  );
};

export default Child;
