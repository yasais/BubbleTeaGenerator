# BUBBLE TEA GENERATOR 🧋

[![](https://test.ublo.immo/assets/design.svg)](https://test.ublo.immo)

## LE CHALLENGE

L'objectif de ce challenge est de créer un configurateur graphique de Bubble Tea.

La stack technique est [React](https://fr.reactjs.org) + [SVG](https://developer.mozilla.org/fr/docs/Web/SVG) et tous les modules qui vous sembleront nécessaires. (et bien sûr, HTML et CSS)

Vous allez manipulez du JSX qui permet de faire des variables réactives au sein d'un fichier vectoriel.

L'aspect visuel doit se structurer de la manière suivante (mais rendez ça joli !)

[![](https://test.ublo.immo/assets/wireframe.svg)](https://test.ublo.immo/assets/wireframe.svg)

_⚠️ ceci est un [wireframe](https://fr.wikipedia.org/wiki/Wireframe_\(design\)), l'aspect graphique du livrable est à votre libre inspiration !_

- Les aperçus du bas permettent de montrer les différents parties du Bubble Tea
- L'interface centrale présente le Bubble Tea assemblé en fonction des paramètres
- Le menu de droite HTML permet de sélectionner les différents paramètres grâce à un formulaire

Au delà du pré-requis de la configuration, le challenger est libre d'organiser ses options comme il le souhaite.

### JUNIOR

- mettre en place un vrai setup React via [create-react-app](https://fr.reactjs.org/docs/create-a-new-react-app.html)
- faire des composants pour chaque élément vectoriel (gobelet, liquide, tapioca...)
- menu de droite avec les différentes options de composition
- pouvoir changer le nom du Bubble Tea avec un nom sympa
- jouer avec des sets de couleurs prédéfinis comme dans l'exemple
- jouer avec la taille via transform / viewBox dans le SVG ou via CSS

### SENIOR

- toute la partie **JUNIOR**
- nom du Bubble Tea avec plusieurs fonts
- générer aléatoirement les positions des bubbles
- l'affichage du tapioca via le modèle simple ou modèle design (gamme de couleur)
- taux de remplissage du Bubble Tea (via un clipPath ou autre)
- faire une animation sur le Bubble Tea

Remarque : les juniors peuvent piocher chez les seniors.

## SOURCE D'INSPIRATION [test.ublo.immo](https://test.ublo.immo)

L'exemple est disponible dans [les fichiers](https://code.ublo.immo/ublo/bubbletea/-/tree/master/src). Il utilise [Preact](https://preactjs.com), une version allégée de React.

- `src/index.html` fichier racine d'appel des scripts
- `src/main.js` fonction de rendu
- `src/BubbleTea.js` composant réactif pour la personnalisation d'un Bubble Tea
- `vendor/*` source de preact (disponible sur [unpkg.com](https://unpkg.com))

Ceci est purement à titre indicatif pour vous donner quelques pistes de constructions...

## DESIGN

- `assets/design.svg` plusieurs designs avec ombres etc
- `assets/simple.svg` version simplifié d'un Bubble Tea
- `assets/wireframe.svg` maquette de la proposition d'interface

Réutilisez, modifiez et adaptez les éléments du design à votre code. (via Inkscape, Figma ou Illustrator)

## RESSOURCES

- [Inkscape](https://inkscape.org)
- [Figma](https://www.figma.com/)
- [SVG](https://developer.mozilla.org/fr/docs/Web/SVG)
- [React](https://fr.reactjs.org/docs/create-a-new-react-app.html)

Have fun!

# 🧋
# BubbleTeaWolfox
