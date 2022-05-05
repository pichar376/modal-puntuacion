import { useState } from "react";

const initialActive = {
  activo: false,
  id: "",
}



const Puntuacion = ({ setSelect, select, setMsg }) => {
  const [active, setActive] = useState(initialActive);
  const handleClick = (e) => {
    setSelect({
      ...select,
      name: e.target.name,
    })
    setActive({
      ...active,
      id: e.target.name
    })
    setMsg(false)
    console.log(select.name)

  }




  return (
    <section className="puntuacion">
      <input type="button" value="1" name="1" onClick={handleClick}
        className={`circle ${active.id === "1" && "selected"}`} />
      <input type="button" value="2" name="2" onClick={handleClick}
        className={`circle ${active.id === "2" && "selected"}`} />
      <input type="button" value="3" name="3" onClick={handleClick}
        className={`circle ${active.id === "3" && "selected"}`} />
      <input type="button" value="4" name="4" onClick={handleClick}
        className={`circle ${active.id === "4" && "selected"}`} />
      <input type="button" value="5" name="5" onClick={handleClick}
        className={`circle ${active.id === "5" && "selected"}`} />
    </section>
  );
}

export default Puntuacion;