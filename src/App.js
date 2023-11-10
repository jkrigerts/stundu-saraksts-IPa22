import { useEffect, useState } from "react";

import Diena from "./Diena";
import style from "./App.module.css";
function App() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    async function getData() {
      // Sūtīt pieprasījumu
      const response = await fetch(
        "https://cheese-cake.onthewifi.com/api/lessons"
      );
      const data = await response.json();
      // Konsolē vēlos redzēt tikai
      // IPa22 stundas un visu
      console.log(data.IPa22);

      const preparedData = [
        { diena: "Pirmdiena", stundas: data.IPa22[0].classes },
        { diena: "Otrdiena", stundas: data.IPa22[1].classes },
        { diena: "Trešdiena", stundas: data.IPa22[2].classes },
        { diena: "Ceturtdiena", stundas: data.IPa22[3].classes },
        { diena: "Piektiena", stundas: data.IPa22[4].classes },
        { diena: "Pirmdiena", stundas: data.IPa22[5].classes },
        { diena: "Otrdiena", stundas: data.IPa22[6].classes },
        { diena: "Trešdiena", stundas: data.IPa22[7].classes },
        { diena: "Ceturtdiena", stundas: data.IPa22[8].classes },
        { diena: "Piektiena", stundas: data.IPa22[9].classes },
      ];
      // Kas pietrūkst, lai JSX varētu attēlot datus?
      setLessons(preparedData);
      setLoading(false); // Uztaisīt JSX šo loading state...
    }
    getData();
  }, []);

  // Kur atrodas tava kursa stundas tajā API?

  // Izmantojot piemēru no Diena.js, izmanto
  // visuDienuStunduSaraksts un .map()!
  const visaSarakstaJSX = lessons.map((diena) => {
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
      <h1 className={style.hello}>Hi mom</h1>
      {loading ? <p>Loading...</p> : visaSarakstaJSX}
    </>
  );
}

export default App;

// Pieliec trešdienai visas pārstundas
