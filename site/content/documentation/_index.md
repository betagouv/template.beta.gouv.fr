---
title: "Documentation"
weight: 1
hero: true
layout: single
heroclass: "tpl-bg--gradient"
---


<section class="tpl-section documentation-index">
  <div class="tpl-container">

## template.beta.gouv.fr
**Qu'est ce que c'est :** un template CSS ouvert à tous, à destination des équipes betagouv & friends.

### Utiliser template.beta.gouv pour les développeur·euse·s

{{< notification type="tpl--danger" content="Si vous utilisiez template.data.gouv.fr, cette nouvelle version risque de casser vos styles actuels">}}

#### Voir les styles

* [Élements](documentation/elements)
* [Composants](documentation/components)
* [Layouts](documentation/layouts)
* [Icônes](documentation/icons)

#### Télécharger les fichier plats

Vous pouvez télécharger les sources du template minifiées [ici](dist/).

#### Faire un import HTML

Vous pouvez faire des imports HTML du template en ajoutant ces liens entre les balises `<head>` de votre fichier `index.html` :

```html
<!-- main CSS -->
<link href="https://unpkg.com/template.beta.gouv.fr@latest/dist/template.min.css" rel="stylesheet">
```

#### Installer le paquet npm

Vous pouvez installer le paquet npm sur votre projet :
```bash
  npm install --save template.beta.gouv.fr
```

Puis importer le fichier dans votre projet :
```bash class="tpl-pre"
  import 'template.data.gouv.fr/dist/css/template.css'
```

### Construire votre propre version du template

Vous êtes bien entendu libres (et encouragés !) de cloner ce dépôt, le modifier et d’y contribuer !

#### Structure du repos

<dl class="tpl-description-list">
  <dt>site :</dt><dd>les fichiers du site vitrine de template</dd>
  <dt>dist :</dt><dd>les fichiers du template minifiés</dd>
  <dt>src :</dt><dd>le code source non minifié</dd>
</dl>

#### Générer les fichiers template

Pour build le template :
```bash
  npm run build
```

#### Contribuer

N'hésitez pas a passer un coup de linter et à corriger les erreurs si il y en a :
```bash
  npm run lint
```

Une fois votre code propre, ouvrez une PR sur ce dépôt.

### Licence

2020 DINUM

Cette application est publiée sous [licence MIT](LICENSE).
