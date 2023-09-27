import Stunda from "./Stunda";

function Diena(props) {
  return (
    <>
      <p>Šodien ir {props.nosaukums}</p>
      <ol>
        <Stunda name={props.stundas[0]}/>
        <Stunda name={props.stundas[1]}/>
        <Stunda name={props.stundas[2]}/>
        <Stunda name={props.stundas[3]}/>
      </ol>
    </>
  )
}

export default Diena;



// Uztaisīt stundai komponenti

// Lai ar props
// tiek padots stundas nosaukums,


// Vajadzīgas arī pirmdienas, otrdienas
//stundas, bet jaunu komponeti netaisīsim.
// Ko darīt?