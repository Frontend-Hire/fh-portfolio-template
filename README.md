# Frontend Hire: Free Portfolio Template

You can also get the [free design template from Figma](https://www.figma.com/community/file/1422686512545576315/frontend-hire-portfolio-template).

## Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## SITE CONFIGURATION

Update the `src/site-config.ts` file to configure your site.

These features are enabled by default and can be disabled using the `enableDarkMode` and `enableTags` flags.

- `enableDarkMode` - Enables the dark mode toggle in the header.
- `enableTags` - Adds a tag list to each post.

## Guide: Removing `/blog` and `/learnings` Routes

This guide will walk you through the process of completely removing the `/blog` and `/learnings` routes from your project.

## 1. Remove Route Folders

Given the folder structure:

```
src/
└── pages/
    ├── blog/
    │   ├── index.astro
    │   └── [slug]/
    │       └── index.astro
    └── learnings/
        ├── index.astro
        └── [slug]/
            └── index.astro
```

Follow these steps to manually remove the blog and learnings routes:

1. Open your project folder in your file explorer or IDE.

2. Navigate to the `src/pages/` directory.

3. Find the `blog` / `learnings` folder and delete it.

Remember, removing these folders will delete all the Astro components and any other files contained within them. Make sure you've backed up any content you want to keep before proceeding with the deletion.

## 2. Update Navigation

1. Open the `src/components/` directory.
2. Locate the `navigation.astro` file.
3. Remove the `/blog` or `/learnings` nav links as needed.

```astro
---
import NavLink from "./NavLink.astro";
---

<nav>
  <ul class='flex flex-wrap gap-3'>
    <li><NavLink url='/'>Timeline</NavLink></li>
    <li><NavLink url='/contact'>Contact</NavLink></li>
    <!-- Both blog and learnings nav links are removed here -->
  </ul>
</nav>
```

4. Save the file after making these changes and ensure your site is functioning correctly without these features.

By following these steps, you will have successfully removed the `/blog` and `/learnings` routes from your project and updated all necessary files.

## Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
