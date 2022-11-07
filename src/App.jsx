import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import DogCard from "./components/DogCard";
import DogList from "./components/DogList";
import Dropdown from "./components/Dropdown";

import "./styles.css";


// ✋ augmenter le nombre de column dispo
const columnChoices = [1, 2, 3, 4, 5, 6];


export default function App() {

  /* 📣 Intégrer tout ce qui permet de faire les call API,
  stocker les résultats des calls, et de faire fonctionner les dropdowns */

  const [col, setCol] = useState(1);
  const [dogNb, setDogNb] = useState(1);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [currentBreed, setCurrentBreed] = useState("");
  const [currentBreedImg, setCurrentBreedImg] = useState("");
  const [currentListImg, setCurrentListImg] = useState([]);
  const [nbImg, setNbImg] = useState([]);
  const [indexLimit, setIndexLimit] = useState([]);
  

  // fetch une image pour la breed
  const fetchBreedsList = async (url) => {
    const response =  await fetch(url);
    const list = await response.json();
    const breedsList = Object.keys(list.message);

    setDogBreeds(breedsList);
  };
  
  // fetch une image pour la breed
  const fetchDog = async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    const imgList = data.message;
    if (data.status === "success") {
      fetchDogImages(`https://dog.ceo/api/breed/${currentBreed}/images/random/${data.message.length}`)

    }

    setCurrentBreedImg(data.message);
  };

  // fetch un nombre d'images pour la breed
  const fetchDogImages = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    
    setIndexLimit(data.message)
    setCurrentListImg(data.message);
    dogImagesCount(data.message.length);
  };

  // function pour récuperer le nombre d'image d'une breed
  function dogImagesCount (imgLength) {

    let dogCountChoices = []; 
    for (let i=1; i < imgLength + 1; i++) {
      dogCountChoices.push(i);

    }
    
    setNbImg(dogCountChoices);
  };


  useEffect(() =>{
    if(dogBreeds.length < 1) {
      fetchBreedsList("https://dog.ceo/api/breeds/list/all");

    }
    
  }, []);

  useEffect(() =>{
    if(currentBreed!==""){
      fetchDog(`https://dog.ceo/api/breed/${currentBreed}/images/random`);

    }

  }, [currentBreed]);

// On modifie l'index pour n'afficher que le nombre d'image sélectionné dans le dropdown 
useEffect(() => {
  setIndexLimit(currentListImg.splice(0, dogNb))

}, [dogNb]); 

  return (
    <main className="App">
      <Container>
        <h1>Choose your dog</h1>
        <div className="App_head">
          <div className="App_head_dropdowns">
            <Dropdown
              // 📣 Ici permettre de changer de race de chien
              // 📣 Augmenter le nombre de choix dispo
              onChange={setCurrentBreed}
              label="Choose dog"
              values={dogBreeds}
              currentValue={currentBreed}
            />
            {
              nbImg.length > 1 && 
            
            <Dropdown
              // 📣 Ici permettre de choisir nombre d'images à afficher
              // 📣 Augmenter le nombre de choix dispo      
              onChange={setDogNb}
              label="How many dogs"
              values={nbImg}
              currentValue={dogNb}
            />
            }
            <Dropdown
              // 📣 Ici permettre de choisir le nombre de column à affiche dans la liste d'image             
              // 📣 Augmenter le nombre de choix dispo
              onChange={setCol}
              label="How many columns"
              values={columnChoices}
              currentValue={col}
            />
          </div>
          {/* 📣 Ici récupérer les éléments à afficher depuis l'API */}
          <DogCard
            url={currentBreedImg}
            alt={"defaultDogBreed"}
            text={currentBreed}
          />
        </div>
        {/* 📣 Ici récupérer les éléments à afficher depuis l'API */}
        <DogList itemData={indexLimit} cols={col} />
      </Container>
    </main>
  );
}
