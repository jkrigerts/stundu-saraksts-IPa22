import Diena from "./Diena";
function App() {
  const tresdienasStundas = [
    "Datortīkli",
    "Datortīkli",
    "Sistēmu prog",
    "Sistēmu prog",
  ];
  const ceturdienasStundas = [
    "Sistēmu prog",
    "Matemātika",
    "Latviešu valoda",
    "Vēl viena latviešu valoda + kultūra wtf lol",
  ];
  //kaut kādā veidā varbūt mapīti izmantot
  // kaiut kādu const map
  // Pieliec, lūdzu, vēl vienu dienu:
  const visuDienuStunduSaraksts = [
    {
      diena: "Trešdiena",
      stundas: ["Datortīkli", "Datortīkli", "Sistēmu prog", "Sistēmu prog"],
    },
    {
      diena: "Ceturtdiena",
      stundas: [
        "Programmēšana again",
        "Matemātika",
        "Latviešu valoda",
        "Kultūra",
      ],
    },
    {
      diena: "Piektdiena",
      stundas: ["Programmēšana", "Gribu mājās", "Eju mājās"],
    },
  ];

  // Izmantojot piemēru no Diena.js, izmanto
  // visuDienuStunduSaraksts un .map()!
  const visaSarakstaJSX = visuDienuStunduSaraksts.map((diena) => {
    return (
      <Diena
        key={diena.diena}
        nosaukums={diena.diena}
        stundas={diena.stundas}
      />
    );
  });
  return (
    <>
      <h1>Hi mom</h1>
      {visaSarakstaJSX}
    </>
  );
}

export default App;

// Pieliec trešdienai visas pārstundas
