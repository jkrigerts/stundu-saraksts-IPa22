import Stunda from "./Stunda";

function Diena(props) {
  const stunduSarakstsJSX = props.stundas.map((stunda, indekss) => {
    return <Stunda key={indekss} name={stunda} />;
  });

  return (
    <>
      <p>Šodien ir {props.nosaukums}</p>
      <ol>{stunduSarakstsJSX}</ol>
    </>
  );
}

export default Diena;

// Uztaisīt stundai komponenti

// Lai ar props
// tiek padots stundas nosaukums,

// Vajadzīgas arī pirmdienas, otrdienas
//stundas, bet jaunu komponeti netaisīsim.
// Ko darīt?

// .map() - iet cauri visiem masiva
// elementiem, bet arī atgriež
// to, ko prasa
// .forEach() - iet cauri visiem
// masiva elementiem, bet neko
// neatgriež
