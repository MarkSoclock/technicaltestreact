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


// ✋ augmenter le nombre de column dispo
const columnChoices = [1, 2, 3, 4, 5, 6];


export default function App() {
  // 🔫 à modifier
  // const defaultDogBreed = "bullterrier";
  
  /* 📣 Intégrer tout ce qui permet de faire les call API,
  stocker les résultats des calls, et de faire fonctionner les dropdowns */
  const [data, setData] = useState([]);
  const [arrLength, setArrlength]= useState([]);
  const [col, setCol] = useState(0);
  const [dogs, setDogs] = useState(1);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [currentBreed, setCurrentBreed] = useState("");
  const [currentBreedImg, setCurrentBreedImg] = useState("");
  const [currentListImg, setCurrentListImg] = useState([]);
  const [nbImg, setNbImg] = useState([]);

  console.log("imgcount",nbImg)
  const fetchDogsList = async (url) => {
    const response =  await fetch(url);
    const list = await response.json();
    const arr = Object.keys(list.message);

    setData(list.message);
    setDogBreeds(arr);
  };
  

  // fetch une image pour la breed
  const fetchDogs = async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    const imgList = data.message;
    
    setCurrentBreedImg(imgList);
  };


  // fetch un nombre d'images pour la breed
  const fetchDogImages = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
  
    if(data.status==="success"){
      
      
    };

    console.log(`data= ${data.message}`);

    setCurrentListImg(data.message);
  };


  function dogImagesCount () {
    console.log("test",currentListImg.length)
    let dogCountChoices = []; 
    for (let i=1; i < currentListImg.length; i++) {
      dogCountChoices.push(i);

      console.log("i",`${i}`)
      console.log("index",dogCountChoices)


    }
    setNbImg(dogCountChoices)
  };


  useEffect(() =>{
    fetchDogsList("https://dog.ceo/api/breeds/list/all");
  }, []);


  useEffect(() =>{
    if(currentBreed!==""){

      fetchDogs(`https://dog.ceo/api/breed/${currentBreed}/images/random`);
      fetchDogImages(`https://dog.ceo/api/breed/${currentBreed}/images/random/10`);
      
    }
    dogImagesCount();
  }, [currentBreed]);




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
            <Dropdown
              // 📣 Ici permettre de choisir nombre d'images à afficher
              // 📣 Augmenter le nombre de choix dispo             
              onChange={setDogs}
              label="How many dogs"
              values={nbImg}
              currentValue={dogs}
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
