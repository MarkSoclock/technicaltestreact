import { Container } from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useEffect, useState } from "react";
import DogCard from "./components/DogCard";
import DogList from "./components/DogList";
import Dropdown from "./components/Dropdown";

import "./styles.css";



// ✋ augmenter le nombre de race dispo
const dogBreedlist = ["labrador"];

// ✋ augmenter le nombre de choix dispo
const dogCountChoices = [5];

// ✋ augmenter le nombre de column dispo
const columnChoices = [1, 2, 3, 4, 5, 6];

// 🔫 à supprimer
const dogImageUrl =
  "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_4972.jpg";

// 🔫 à supprimer
const dogList = [
  dogImageUrl,
  dogImageUrl,
  dogImageUrl,
  dogImageUrl,
  dogImageUrl
];

export default function App() {
  // 🔫 à modifier
  const defaultDogBreed = "bullterrier";
  
  /* 📣 Intégrer tout ce qui permet de faire les call API,
  stocker les résultats des calls, et de faire fonctionner les dropdowns */
  const [data, setData] = useState([]);
  const [currentValue, setCurrentValue] = useState([]);


  const fetchData = async (url) => {
    const response =  await fetch(url);
    const list = await response.json();

    console.log(list.message);
      
    setData(list.message);
  };

  
  // console.log(data)
  useEffect(() =>{
    fetchData("https://dog.ceo/api/breeds/list/all");
  }, []);
  

  return (
    <main className="App">
      <Container>
        <h1>Choose your dog</h1>
        <div>
          <ul>

          {console.log(data)}
          </ul>
        </div>
        
        <div className="App_head">
          <div className="App_head_dropdowns">
            <Dropdown
              // 📣 Ici permettre de changer de race de chien
              // 📣 Augmenter le nombre de choix dispo
              onChange={(event) => event}
              label="Choose dog"
              values={dogBreedlist}
              currentValue=""
            />
            <Dropdown
              // 📣 Ici permettre de choisir nombre d'images à afficher
              // 📣 Augmenter le nombre de choix dispo
              
              onChange={(event) => event}
              label="How many dogs"
              values={dogCountChoices}
              currentValue=""
            />
            <Dropdown
              // 📣 Ici permettre de choisir le nombre de column à affiche dans la liste d'image             
              // 📣 Augmenter le nombre de choix dispo
              // valeur envoyé aux composant
              onChange={(event) => event}
              label="How many columns"
              values={columnChoices}
              currentValue=""
            />
          </div>
          {/* 📣 Ici récupérer les éléments à afficher depuis l'API */}
          <DogCard
            url={dogImageUrl}
            alt={defaultDogBreed}
            text={defaultDogBreed}
          />
        </div>
        {/* 📣 Ici récupérer les éléments à afficher depuis l'API */}
        <DogList itemData={dogList} cols={3} />
      </Container>
    </main>
  );
}
