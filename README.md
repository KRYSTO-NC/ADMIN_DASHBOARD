# Admin Dashboard - Application React

Dashboard d'administration moderne construit avec React, Material-UI, Redux Toolkit et React Router.

## 🚀 Fonctionnalités

- ✅ Authentification utilisateur avec JWT
- ✅ Gestion des équipes et utilisateurs
- ✅ Gestion des contacts
- ✅ Gestion des factures
- ✅ Thème sombre/clair dynamique
- ✅ Interface responsive
- ✅ Recherche et filtrage avancés
- ✅ Gestion d'état avec Redux Toolkit
- ✅ Notifications Toast
- ✅ Gestion d'erreurs globale

## 📋 Prérequis

- Node.js >= 14.x
- npm ou yarn

## 🛠️ Installation

1. Cloner le repository
```bash
git clone <repository-url>
cd ADMIN_DASHBOARD
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d'environnement
```bash
cp .env.example .env
```

Modifier le fichier `.env` avec vos propres valeurs :
```env
REACT_APP_BASE_URL=http://localhost:8000
REACT_APP_USERS_URL=/api/users
REACT_APP_DOLIBAR_URL=https://crm.krysto.nc/api/index.php
REACT_APP_DOLIBARR_API_KEY=your_api_key_here
```

4. Démarrer l'application
```bash
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
ADMIN_DASHBOARD/
├── public/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── ErrorBoundary.jsx
│   │   ├── Header.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── StyledDataGrid.jsx
│   │   ├── AdminRoutes.jsx
│   │   └── PrivateRoutes.jsx
│   ├── constants/           # Constantes de l'application
│   │   └── constants.js
│   ├── data/               # Données mockées
│   │   ├── mockData.js
│   │   └── mockGeoFeatures.js
│   ├── hooks/              # Hooks personnalisés
│   │   ├── useAuth.js
│   │   ├── useColorMode.js
│   │   └── useToast.js
│   ├── scenes/             # Pages de l'application
│   │   ├── Login.jsx
│   │   └── private/
│   │       ├── dashboard/
│   │       ├── team/
│   │       ├── contacts/
│   │       ├── invoices/
│   │       └── global/
│   │           ├── Sidebar.jsx
│   │           └── Topbar.jsx
│   ├── slices/             # Redux slices
│   │   ├── apiSlice.js
│   │   ├── authSlice.js
│   │   └── userApiSlice.js
│   ├── utils/              # Utilitaires
│   ├── App.js
│   ├── index.js
│   ├── store.js
│   └── theme.js
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Thème

L'application supporte deux modes de thème :
- Mode sombre (par défaut)
- Mode clair

Le thème peut être basculé via l'icône dans la barre de navigation supérieure.

## 🔐 Authentification

L'application utilise un système d'authentification basé sur JWT. Les tokens sont stockés dans localStorage et gérés via Redux.

### Hooks personnalisés

- `useAuth()` - Gestion de l'authentification
- `useColorMode()` - Gestion du thème
- `useToast()` - Notifications toast

## 📦 Composants réutilisables

### StyledDataGrid
DataGrid MUI stylisé avec configuration par défaut.

```jsx
<StyledDataGrid
  rows={data}
  columns={columns}
  showToolbar={true}
  checkboxSelection={true}
/>
```

### LoadingSpinner
Indicateur de chargement centralisé.

```jsx
<LoadingSpinner message="Chargement des données..." />
```

### ErrorBoundary
Gestion globale des erreurs React.

## 🧪 Scripts disponibles

- `npm start` - Démarre l'application en mode développement
- `npm build` - Crée un build de production
- `npm test` - Lance les tests
- `npm eject` - Éjecte la configuration (irréversible)

## 🔧 Technologies utilisées

- **React** 18.2.0 - Framework UI
- **Material-UI** 5.14.x - Bibliothèque de composants
- **Redux Toolkit** 1.9.x - Gestion d'état
- **React Router** 6.16.x - Routing
- **Formik** & **Yup** - Gestion des formulaires et validation
- **Axios** - Client HTTP
- **React Toastify** - Notifications
- **@nivo** - Graphiques
- **FullCalendar** - Calendrier

## 📝 Améliorations récentes

### Refactorisation majeure du code (Novembre 2024)

- ✅ Création de composants réutilisables (StyledDataGrid, LoadingSpinner, ErrorBoundary)
- ✅ Création de hooks personnalisés (useAuth, useToast, useColorMode)
- ✅ Migration vers variables d'environnement pour la configuration
- ✅ Amélioration de la gestion d'erreurs
- ✅ Refactorisation du système d'authentification
- ✅ Amélioration de la navigation avec react-router
- ✅ Ajout de PropTypes pour la validation des props
- ✅ Nettoyage et suppression des fichiers dupliqués
- ✅ Amélioration de l'UI avec menu dropdown utilisateur
- ✅ Correction de multiples bugs et typos

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est sous licence privée.

## 👤 Auteur

Stoyann Velten
