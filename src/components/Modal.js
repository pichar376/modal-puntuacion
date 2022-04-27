const Modal = () => {
  return (
    <div className="modal-content">

      <article className={"modal"}>
        <span>logo</span>
        <span className="how">How did we do?</span>
        <p>please let us know how we did with your support <br />
          request.All feed back is appreciated to help us<br />improve our offering!</p>
        <section className="puntuacion">
          <span class="circle">1</span><span class="circle">2</span><span class="circle">3</span><span class="circle">4</span><span class="circle">5</span>
        </section>
        <nav>
          <input type="submit" value="enviar" />
        </nav>

      </article >
    </div>

  );
}

export default Modal;