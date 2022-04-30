import { useState } from "react";
import styledComponents from "styled-components";
import Puntuacion from "./Puntuacion";
import ThankYou from "./ThankYou";


const MyContent = styledComponents.div`
display:flex;
flex-direction:column;

border-radius: 15px;
  background-color: hsl(213, 19%, 18%);
  height:380px;
  width: 350px;
  overflow-y: scroll;
`
const MyModal2 = styledComponents.article`
display:flex;
flex-direction:column;
align-items:center;
width: 85%;
height: 40%;
color:rgb(177, 179, 185);
border:thin solid gray;
`
const Modal2 = () => {
  const [puntuacion, setPuntuacion] = useState("");
  return (
    <MyContent>
      <MyModal2>
        <ThankYou />
        <article>
          you selected 4 out of 5
        </article>
      </MyModal2 >
      <h1 className="how">Thank you!</h1>
    </MyContent>
  );
}

export default Modal2;