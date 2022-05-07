import { createContext, useState } from "react";


const initialSelect = {
  name: ""
}
const initialActive = {
  activo: false,
  id: "",
}
const CardContext = createContext()

const CardProvider = ({ children }) => {
  const [msg, setMsg] = useState(false);
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState(initialSelect);
  const [active, setActive] = useState(initialActive)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!select.name) {
      setMsg(true)
      setTimeout(() => {
        setMsg(false)
      }, 2000);
    } else {
      setModal(true)

    }
    setActive(initialActive)
  }
  const handleClick = (e) => {
    setSelect({
      name: e.target.name,
    })
    setActive({
      id: e.target.name
    })
    setMsg(false)
    console.log(select.name)

  }
  const back = () => {
    setModal(false)
    setSelect(initialSelect)
  }

  const data = {
    handleClick,
    msg,
    setMsg,
    modal,
    setModal,
    select,
    setSelect,
    handleSubmit,
    back,
    active,
    setActive,
  }
  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;


}
export { CardProvider }
export default CardContext;