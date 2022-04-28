import { useState } from "react";
import Puntuacion from "./Puntuacion";

const Modal = () => {
  const [puntuacion, setPuntuacion] = useState("");
  return (
    <div className="modal-content">
      <article className="modal">
        <span className="circle-star"> <article className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg>

        </article>
        </span>
        <span className="how">How did we do?</span>
        <p>please let us know how we did with your support <br />
          request.All feed back is appreciated to help us<br />improve our offering!</p>

        <form>

          <Puntuacion />
          <nav>
            <input type="submit" value="submit" />
          </nav>
        </form>



      </article >
    </div >

  );
}

export default Modal;