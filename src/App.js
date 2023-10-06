import Diena from "./Diena";
function App() {
  const tresdienasStundas = [
    "Datortīkli",
    "Datortīkli",
    "Sistēmu prog",
    "Sistēmu prog"
  ];
  const ceturdienasStundas = [
    "Sistēmu prog",
    "Matemātika",
    "Latviešu valoda",
    "Vēl viena latviešu valoda + kultūra wtf lol"
  ];
  //kaut kādā veidā varbūt mapīti izmantot
  // kaiut kādu const map
  // Kas ir katrai dienai? Stundas, Dienas Nosaukums
  const visuDienuStunduSaraksts = [
   {
    diena: "Trešdiena",
    stundas: [
      "Datortīkli",
    "Datortīkli",
    "Sistēmu prog",
    "Sistēmu prog"
    ]
   }
  ]
  return (
    <>
      <h1>Hi mom</h1>
      <Diena nosaukums="trešdiena" stundas={tresdienasStundas}/>
      <Diena nosaukums="ceturtdiena" stundas={ceturdienasStundas}/>
    </>
  );
}

export default App;


// Pieliec trešdienai visas pārstundas