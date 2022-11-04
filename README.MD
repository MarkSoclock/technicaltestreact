# Test technique React - Ekwateur

Bienvenue à toi cher.e candidat.e.

Tu trouveras ci-dessous les informations nécessaires pour te lancer dans ce test technique.
Si certaines parties de l'exercice ne te paraissent pas claires ou que tu as des questions, nous sommes là pour y répondre.
Nous t'encourageons même à les poser plutôt que de rester bloqué.e et de ne pas être sûr.e de ce qui t'est demandé.


## L'application et ses fonctionnalités 


L'application utilise React et Material UI. Il y a déjà plusieurs composants utilisés qui sont dans le dossier `/components`.

L'application doit permettre d'afficher des photos de chiens.

Il faut pouvoir choisir:
  - plusieurs races de chien
  - plusieurs nombres d'images à afficher 
  - le nombre de colonnes de la grille d'images.


## Objectif

L'objectif de l'exercice est de remplacer les éléments en dur par des éléments provenant de l'api `Dog API`.

L'immense majorité du travail se concentre sur la partie fonctionnelle et non UI/UX.

Tu peux consulter les 2 screenshots qui sont dans le projet pour te donner une idée du résultat final attendu.


## Ce que l'on attend de toi

📣 L'essentiel du travail peut se faire dans `App.jsx` mais tu peux aussi créer des nouveaux fichiers si tu le souhaites, afin de découper ton code et le rendre plus facilement maintenable.

📣 Dans `App.jsx` tu trouveras quelques indications afin de détailler un peu plus les points à réaliser.

1. 📌 Dropdown 1: Choisir une race de chien
2. 📌 Dropdown 2: Choisir le nombre d'images à récupérer dans le call et à afficher
3. 📌 Dropdown 3: Choisir un nombre de column pour la grille d'image
4. 📌 Dans la carte a droite des Dropdown afficher l'image d'un chien de la race choisie et afficher le nom de la race en dessous

🐶 - Tu peux utiliser directement les composants dans `/components` sans avoir à les modifier.

🐶 - CHOSEN_BREED_URL = https://dog.ceo/api/breed/{breedName}/images/random/{?num}


**Et bien sûr:**

Bon courage :) 

## Lecture

- [Dog API](https://dog.ceo/dog-api/documentation/)
- [Dog API random images](https://dog.ceo/dog-api/documentation/random)
- [Dog API By Breed random images](https://dog.ceo/dog-api/documentation/breed)

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Proptypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

- [Material UI](https://mui.com/material-ui/getting-started/overview/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)