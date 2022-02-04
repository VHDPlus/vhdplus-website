Changes to this repository will be built and uploaded to vhdplus.com every day at 0:00 UTC

[![Node.js CI](https://github.com/VHDPlus/vhdplus-website/actions/workflows/node.js.yml/badge.svg)](https://github.com/VHDPlus/vhdplus-website/actions/workflows/node.js.yml)

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 8.9 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed

## Initialize docusaurus

1. Install requirements

2. Clone repository
```bash
git clone https://github.com/VHDPlus/vhdplus-website.git
```

3. Navigate to cloned directory and install node modules:
```bash
cd vhdplus-website
npm install
```
4. Execute `npm start` to start live preview!

# Editing Content

## Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://docusaurus.io/docs/en/navigation)

## Editing an existing blog post

Edit blog posts by navigating to `website/blog` and editing the corresponding post:

`website/blog/post-to-be-edited.md`
```markdown
---
id: post-needs-edit
title: This Blog Post Needs To Be Edited
---

Edit me...
```

For more information about blog posts, click [here](https://docusaurus.io/docs/en/adding-blog)

# Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebar.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

Full documentation can be found on the [website](https://docusaurus.io/).
