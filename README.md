# Introduction à la CI/CD

Ce projet est vraiment vraiment super.

Ce dépôt Git a pour objectif de servir d'introduction à la CI/CD (Intégration Continue / Déploiement Continue).

Il est composé d'une petite application javascript qui affiche un compteur avec la possibilité de l'incrémenter et le décrémenter.
Quelques tests (unitaires et de bout en bout), ainsi qu'un pipeline CI/CD sont implémentés pour s'assurer du fonctionnement du code.

## Utilisation de l'application localement

**Prérequis** :

- Installer [Git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)
- Installer [NodeJS](https://nodejs.org/fr/download/)

### Lancer l'application

Dans un terminal :

```sh
# Cloner ce dépôt localement sur votre ordinateur
git clone https://github.com/this-is-tobi/introduction-cicd.git

# Se rendre dans le dossier précédemment cloné
cd ./introduction-cicd

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

### Tester l'application

Dans un terminal :

```sh
# Cloner ce dépôt localement sur votre ordinateur (si pas déjà fait)
git clone https://github.com/this-is-tobi/introduction-cicd.git

# Se rendre dans le dossier précédemment cloné
cd ./introduction-cicd

# Installer les dépendances (si pas déjà fait)
npm install

# Lancer les tests unitaires
npm run test

# Lancer les tests de bout en bout (e2e) avec interface graphique
npm run test:e2e

# Lancer les tests de bout en bout (e2e) sans interface graphique
npm run test:e2e-ci
```

## Utilisation de la CI/CD

**Prérequis** :

- Créer un [compte GitHub](https://github.com/signup)
- Avoir accès au dépôt en tant que collaborateur

### GitHub Actions

La liste des pipelines du dépôt est disponible [ici](<https://github.com/this-is-tobi/introduction-cicd/actions>).

Il est possible de déclencher un nouveau pipeline :

- En le lançant manuellement en [cliquant ici](https://github.com/this-is-tobi/introduction-cicd/actions/workflows/ci.yml) puis en sélectionnant `run workflow`.

- En modifiant un fichier du dépôt (par exemple la documentation en [cliquant ici](<https://github.com/this-is-tobi/introduction-cicd/edit/main/README.md>)).

_**Notes :**_ Chaque modification d'un fichier dans le dépôt déclenchera automatiquement un nouveau pipeline.
