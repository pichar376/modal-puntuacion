import { useState } from "react";
import Message from "./Message";
import Modal from "./Modal";
import Modal2 from "./Modal2";
const initialSelect = {
  name: ""
}
const ContainerModals = () => {
  const [msg, setMsg] = useState(false);
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState(initialSelect);
  return (
    <div>
      {modal ? <Modal2 setModal={setModal} initialSelect={initialSelect} setSelect={setSelect} select={select} /> : <Modal setModal={setModal} setSelect={setSelect} select={select} initialState={initialSelect} msg={msg} setMsg={setMsg} />}
      <br />
      <article className={`${msg ? "active-msg" : "desactive-msg"}`}>
        {<Message />}
      </article>
    </div>

  );
}

export default ContainerModals;