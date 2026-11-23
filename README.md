# Movie App

Application web de recherche de films et de gestion de favoris, construite avec React et l'API TMDB.

![Aperçu de l'application](./docs/image.png)

## Fonctionnalités

- Liste des films populaires
- Recherche de films par titre
- Ajout et retrait de favoris, sauvegardés dans le navigateur (localStorage)
- Gestion des états de chargement et d'erreur
- Interface responsive

## Stack technique

React 19 · Vite · React Router · Context API · API TMDB

## Installation

```bash
git clone https://github.com/AYA-AMMI/react-movie-app.git
cd react-movie-app
npm install
cp .env.example .env
npm run dev
```

## Variables d'environnement

| Variable            | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| `VITE_TMDB_API_KEY` | Clé API gratuite, à créer sur [themoviedb.org](https://www.themoviedb.org/settings/api) |

## Scripts

| Commande        | Action                            |
| --------------- | --------------------------------- |
| `npm run dev`   | Lance le serveur de développement |
| `npm run build` | Génère la version de production   |
| `npm run lint`  | Vérifie le code avec ESLint       |

## Structure du projet

```
src/
├── components/   # MovieCard, NavBar
├── contexts/     # MovieContext (hook), MovieProvider (favoris)
├── pages/        # Home, Favorites
├── services/     # api.js (appels TMDB)
└── css/          # Styles
```

## Améliorations prévues

- Page de détail d'un film
- Pagination et recherche avec debounce

## À propos

Projet réalisé à partir d'un tutoriel React, puis personnalisé : design et palette de couleurs, gestion des erreurs, refactoring des appels API, séparation du contexte et du provider.

## Crédits

Ce produit utilise l'API TMDB mais n'est ni approuvé ni certifié par TMDB.
