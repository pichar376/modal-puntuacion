



const Puntuacion = ({ setModal }) => {
  const handleClick = (e) => {
    e.preventDefault()
    setModal(true)
  }
  return (
    <section className="puntuacion">


      <button className="circle" onClick={handleClick}
      >1</button><button className="circle">2</button><button className="circle">3</button><button className="circle">4</button><button className="circle">5</button>


    </section>
  );
}

export default Puntuacion;