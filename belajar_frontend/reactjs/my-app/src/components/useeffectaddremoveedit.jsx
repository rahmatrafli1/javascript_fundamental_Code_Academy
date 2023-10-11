import React, { useEffect, useState } from "react";

const Useeffectaddremoveedit = () => {
  // eslint-disable-next-line
  const [add, setAdd] = useState();
  // eslint-disable-next-line
  const [remove, setRemove] = useState();
  // eslint-disable-next-line
  const [edit, setEdit] = useState();

  useEffect(() => {
    console.log("Ini tombol create");
  }, [add, edit]);

  return (
    <div>
      <button onClick={() => setAdd(!add)}>Add</button>
      <button onClick={() => setEdit(!edit)}>Update</button>
      <button onClick={() => setRemove(remove)}>Remove</button>
    </div>
  );
};

export default Useeffectaddremoveedit;
