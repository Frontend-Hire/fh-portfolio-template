# Frontend Hire: Free Portfolio Template

You can also get the [free design template from Figma](https://www.figma.com/community/file/1422686512545576315/frontend-hire-portfolio-template).

## Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

##Content guidelines:  Differentiating "Blogs" and "Learnings" Sections

## Purpose
This guide explains the differences between the "Blogs" and "Learnings" sections, helping you decide the appropriate category for your content.

---

## What Are "Blogs"?
The "Blogs" section is ideal for long-form, detailed content on various topics, such as:
  - Technical tutorials or guides
  - Project case studies
  - Detailed personal reflections or experiences

### Use Cases
1. **Tutorials and Guides**  
   Use this section to write comprehensive, step-by-step instructions for solving a problem or implementing a feature.
   *Example:*  
   - Title: *"How to Set Up Dark Mode in Astro Projects"*  
   - Content: Includes detailed steps, code snippets, and images.

2. **Detailed Personal Reflection or experiences**  
   Share your insights, predictions, or opinions on industry trends.  
   *Example:*  
   - Title: *"Exploring Advanced Git Workflows"*  
   - Content: Shares personal experiences and insights gained from working with advanced Git workflows in collaborative settings.

3. **Case Studies**  
   Document a project’s journey, challenges, solutions, and measurable results.
   *Example:*  
   - Title: *"Improving Website Performance: A Case Study with Astro"*  
   - Content: Highlights optimization techniques and measurable results.

---

## What Are "Learnings"?
The "Learnings" section is best for short, informal, and reflective content that focus on personal development insights, daily learning experiences, or quick updates.This section could include:
  - Tools and Resources Discovered
  - Personal goals and progress
  - Quick coding challenges or small experiments

### Use Cases
1. **Tools and Resources Discovered**  
   Share tools, libraries, or resources that helped you and explain their benefits.
   *Example:*  
   - Title: *"Supercharging My Workflow with Astro’s CLI"*  
   - Content: I discovered Astro’s astro add command, which makes installing integrations seamless. It saved me hours of manual configuration.

2. **Personal goals**  
   Discuss your goals and share updates on how you’re achieving them. 
   *Example:*  
   - Title: *"First Steps Toward Creating APIs"*  
   - Content: My goal this week was to understand REST APIs. I successfully set up a simple Node.js server and created a /hello route that returns a greeting in JSON format.

3. **Quick coding challenges**  
   Provide practical solutions to small problems or share experimental findings.  
   *Example:*  
   - Title: *"A Fun Challenge: Reverse a String in Python"*  
   - Content: I solved a LeetCode challenge to reverse a string using slicing. My one-liner solution: reversed_string = string[::-1].

---

## Comparison Table

| Feature          | Blogs                            | Learnings                       |
|------------------|----------------------------------|---------------------------------|
| **Length**       | 500+ words                      | Under 500 words                |
| **Tone**         | Formal, detailed                | Casual, reflective             |
| **Examples**     | Tutorials, thought pieces       | Tips, insights, milestones     |
| **Use Cases**    | Case studies, in-depth guides   | Personal reflections, updates  |

---

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
