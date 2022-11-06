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
  // Déclaration des hooks
  const [col, setCol] = useState(1);
  const [dogNb, setDogNb] = useState(1);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [currentBreed, setCurrentBreed] = useState("");
  const [currentBreedImg, setCurrentBreedImg] = useState("");
  const [currentListImg, setCurrentListImg] = useState([]);
  const [nbImg, setNbImg] = useState([]);
  const [number, setNumber] = useState(0);

  
  

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

    setNumber(imgList.length)
    setCurrentBreedImg(imgList);
  };

  // fetch un nombre d'images pour la breed
  const fetchDogImages = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(`data= ${data.message}`);

    setCurrentListImg(data.message);
    dogImagesCount(data.message.length);
  };

  // function pour récuperer le nombre d'image d'une breed
  function dogImagesCount (imgLength) {
    console.log("test",imgLength);
    let dogCountChoices = []; 
    for (let i=1; i < imgLength + 1; i++) {
      dogCountChoices.push(i);

    }
    
    setNbImg(dogCountChoices);
  };


  useEffect(() =>{
    if(dogBreeds.length < 1) {
      fetchBreedsList("https://dog.ceo/api/breeds/list/all");
    console.log("Start")
    }
    
  }, []);

  useEffect(() =>{
    if(currentBreed!==""){
      fetchDog(`https://dog.ceo/api/breed/${currentBreed}/images/random`);
      fetchDogImages(`https://dog.ceo/api/breed/${currentBreed}/images/random/${number}`);      
    }
    console.log("number", number)
    // dogImagesCount();
  }, [currentBreed]);


  return (
    <main className="App">
      <Container>
        <h1>Choose your dog</h1>
        <div className="App_head">
          <div className="App_head_dropdowns">
          {console.log("imgcount",nbImg)}
            <Dropdown
              // 📣 Ici permettre de changer de race de chien
              // 📣 Augmenter le nombre de choix dispo
              onChange={setCurrentBreed}
              label="Choose dog"
              values={dogBreeds}
              currentValue={currentBreed}
            />
            <Dropdown
              // 📣 Ici permettre de choisir nombre d'images à afficher
              // 📣 Augmenter le nombre de choix dispo             
              onChange={setDogNb}
              label="How many dogs"
              values={nbImg}
              currentValue={dogNb}
            />
            <Dropdown
              // 📣 Ici permettre de choisir le nombre de column à affiche dans la liste d'image             
              // 📣 Augmenter le nombre de choix dispo
              // valeur envoyé aux composant
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
        <DogList itemData={currentListImg} cols={col} />
      </Container>
    </main>
  );
}
