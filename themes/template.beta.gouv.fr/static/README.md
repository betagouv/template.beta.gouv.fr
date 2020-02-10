# template.beta.gouv.fr

template.beta.gouv.fr est la nouvelle version de [template.data.gouv.fr](https://template.data.gouv.fr)
Il s’agit d’une bibliothèque CSS ayant pour but d’aider de nouveaux projets à se lancer en proposant des éléments génériques.

## Tokens

Il est fait usage de [design tokens](https://css-tricks.com/what-are-design-tokens/), permettant d’extraire certaines propriétés comme les couleurs ou les marges dans des fichiers indépendants (ici dans du json dans le dossier `tokens`).
Il n’est pas encore très clair de la pertinence de ce fonctionnement dans ce projet. Si ce n’est pas satisfaisant, il sera peut-être considéré de repasser directement sur des `CSS custom properties`.

Ces tokens peuvent être édités selon vos goûts.
Le fichier `aliases.json` contient toutes les valeurs brutes utilisées dans le projet.
Pour être facilement identifiables, nous utilisons [](https://www.color-blindness.com/color-name-hue/) pour les nommer.

Ces valeurs sont ensuite utilisées pour définir les attributs des éléments qui seront utlisés dans le projet.

Une fois définis (ou redéfinis), la commande `yarn build` permettra de regénérer un fichier `app.custom-properties.css`.
