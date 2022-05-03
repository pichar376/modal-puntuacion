
import styledComponents from "styled-components";
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
const BarraSelected = styledComponents.article`
  background-color:hsl(207, 11%, 20%);
  widht:110%;
  border-radius:15px;
p{
  padding:5px 20px;
  margin:0;
  color:#ffa50099;
  
}
`
const MyModal2 = styledComponents.article`
display:flex;
flex-direction:column;
align-items:center;
width: 85%;
height: 40%;
color:rgb(177, 179, 185);
`
const Modal2 = ({ setModal }) => {
  const back = () => {
    setModal(false)
  }
  return (

    <MyContent>
      <MyModal2>
        <ThankYou />
        <BarraSelected>
          <p>you selected 4 out of 5</p>
        </BarraSelected>

      </MyModal2 >
      <h1 className="how hand" onClick={back} >Thank you!</h1>
      <p style={{ textAlign: "center" }}>We appreciate you taking the time to give a <br /> rating. If you ever need more support, don’t <br /> hesitate to get in touch!</p>
    </MyContent>
  );
}

export default Modal2;