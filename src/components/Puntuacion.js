import { useContext } from "react";
import CardContext from "../context/CardContext";





const Puntuacion = () => {

  const { handleClick, active, msg } = useContext(CardContext);


  return (
    <section className='puntuacion'>
      <input type="button" value="1" name="1" onClick={handleClick}
        className={`circle ${active.id === "1" && "selected"} 
        ${msg && "crecer-element"}`} />
      <input type="button" value="2" name="2" onClick={handleClick}
        className={`circle ${active.id === "2" && "selected"} 
        ${msg && "crecer-element"}`} />
      <input type="button" value="3" name="3" onClick={handleClick}
        className={`circle ${active.id === "3" && "selected"} 
        ${msg && "crecer-element"}`} />
      <input type="button" value="4" name="4" onClick={handleClick}
        className={`circle ${active.id === "4" && "selected"} 
        ${msg && "crecer-element"}`} />
      <input type="button" value="5" name="5" onClick={handleClick}
        className={`circle ${active.id === "5" && "selected"}
        ${msg && "crecer-element"}`} />
    </section>
  );
}

export default Puntuacion;