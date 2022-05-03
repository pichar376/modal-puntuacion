import { useState } from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";

const ContainerModals = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      {modal ? <Modal2 setModal={setModal} /> : <Modal setModal={setModal} />}
    </div>
  );
}

export default ContainerModals;