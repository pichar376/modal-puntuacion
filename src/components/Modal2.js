
import styledComponents from "styled-components";
import ThankYou from "./ThankYou";


let ret = {
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: "50%",
  backgroundColor: "#00000010",
  position: "absolute",
  bottom: "1rem",
  right: "1rem",
  textAlign: "center",
  lineHeight: "1.7rem",
  color: "#00000020",

}
const MyContent = styledComponents.div`
position:relative;
display:flex;
flex-direction:column;
border-radius: 15px;
background-color: hsl(213, 19%, 18%);
height:70vh;
width: 20em;
overflow-y: scroll;
`
const Selected = styledComponents.article`
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
const Modal2 = ({ setModal, initialSelect, setSelect, select }) => {
  const { name } = select;
  const back = () => {
    setModal(false)
    setSelect(initialSelect)
  }
  return (

    <MyContent>
      <MyModal2>
        <ThankYou />
        <Selected>
          <p>you selected {name} out of 5</p>
        </Selected>

      </MyModal2 >
      <h1 className="how">Thank you!</h1>
      <p style={{ textAlign: "center" }}>We appreciate you taking the time to give a <br /> rating. If you ever need more support, don’t <br /> hesitate to get in touch!</p>
      <span style={ret} onClick={back} className="hand"><i className="fi fi-ss-arrow-left"></i></span>
    </MyContent>
  );
}

export default Modal2;