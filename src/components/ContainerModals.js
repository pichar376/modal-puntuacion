import { useContext } from "react";
import CardContext from "../context/CardContext";
import Message from "./Message";
import Modal from "./Modal";
import Modal2 from "./Modal2";

const ContainerModals = () => {
  const { msg, modal } = useContext(CardContext);
  return (
    <div>
      {modal ? <Modal2 /> : <Modal />}
      <br />
      <article className={`${msg ? "active-msg" : "desactive-msg"}`}>
        {<Message />}
      </article>
    </div>

  );
}

export default ContainerModals;