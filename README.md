:construction: Ce dépôt n’est plus maintenu et a été remplacé par https://template.incubateur.net (https://github.com/betagouv/template-design-system-de-l-etat) :construction:

# Template.beta.gouv.fr

**Qu'est ce que c'est :** un template CSS ouvert à tous, à destination des équipes betagouv & friends.

[![npm version](https://badgen.net/npm/v/template.beta.gouv.fr)](https://www.npmjs.com/package/template.beta.gouv.fr)

## Utiliser template.beta.gouv

### Télécharger les fichier plats

Vous pouvez télécharger les sources du template minifiées [ici](dist/).

### Faire un import HTML

Vous pouvez faire des imports HTML du template en ajoutant ces liens entre les balises `<head>` de votre fichier `index.html` :

```html
<!-- main CSS -->
<link href="https://unpkg.com/template.beta.gouv.fr@latest/dist/template.min.css" rel="stylesheet">
```

### Installer le paquet npm

Vous pouvez installer le paquet npm sur votre projet :
```bash
  npm install --save template.beta.gouv.fr
```

Puis importer le fichier dans votre projet :
```
  import 'template.data.gouv.fr/dist/css/template.css'
```

## Construire votre propre version du template

Vous êtes bien entendu libres (et encouragés !) de cloner ce dépôt, le modifier et d’y contribuer !

### Structure du repos
```
site : les fichiers du site vitrine de template
dist : les fichiers du template minifiés
src : le code source non minifié
```

### Générer les fichiers template

Pour build le template :
```bash
  npm run build
```

### Contribuer

N'hésitez pas a passer un coup de linter et à corriger les erreurs si il y en a :
```bash
  npm run lint
```

Une fois votre code propre, ouvrez une PR sur ce dépôt.

## Licence

2020 DINUM

Cette application est publiée sous [licence MIT](LICENSE).
