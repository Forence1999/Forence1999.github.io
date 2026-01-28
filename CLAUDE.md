# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## WHY (Purpose)
Academic portfolio website showcasing research publications, blog posts, and professional experience.

## WHAT (Tech Stack)
- **Framework**: Hugo v0.154.2 (extended)
- **Styling**: Tailwind CSS v4.1.12
- **Package Manager**: pnpm v10.14.0
- **Template**: HugoBlox Academic CV
- **Search**: Pagefind v1.4.0
- **Languages**: Bilingual (English/Chinese)

## HOW (Development)

### Core Commands
**Hugo-based development and build workflow:**
```bash
# Development (using Hugo server)
pnpm run dev                    # Wrapper for: hugo server --disableFastRender
hugo server --disableFastRender # Direct Hugo command (http://localhost:1313)

# Production build (using Hugo compiler)
pnpm run build                  # Wrapper for: hugo --minify && pnpm run pagefind
hugo --minify                   # Direct Hugo build command

# Search index generation
pnpm run pagefind               # Generate Pagefind search index

# Version check
hugo version                    # Check Hugo version (requires v0.154.2+extended)
```

### Project Structure
- `content/`: Markdown content (publications, blog, projects, courses)
  - `content/publications/`: Research papers with frontmatter metadata
  - `content/authors/me/`: Personal profile and bio
  - `content/zh/`: Chinese language content
- `config/_default/`: Hugo configuration (hugo.yaml, params.yaml, menus.yaml, languages.yaml)
- `layouts/_partials/hooks/`: Custom HTML hooks for head-end and body-end
- `assets/`: Static assets (JS, SCSS, images, icons)
- `data/authors/`: Author metadata in YAML

### Content Conventions
- Publications use frontmatter with: title, authors, date, publication_types, abstract, tags
- Author references use `me` for the site owner
- Featured images named `featured.jpg` in publication folders
- Custom WeChat modal integration via [layouts/_partials/hooks/body-end/wechat-modal.html](layouts/_partials/hooks/body-end/wechat-modal.html)

### Deployment
- Auto-deploys to GitHub Pages on push to `main` branch
- Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- Build workflow: [.github/workflows/build.yml](.github/workflows/build.yml)

### Styling Guidelines
**IMPORTANT**: Prefer configuration over custom styles
- Use Hugo/HugoBlox configuration files (`config/_default/params.yaml`) when possible
- Only use custom SCSS when configuration options are insufficient
- Tailwind utility classes are preferred over custom CSS

### Customization
- Custom SCSS: [assets/scss/custom.scss](assets/scss/custom.scss)
- Custom fonts: [layouts/_partials/hooks/head-end/custom-fonts.html](layouts/_partials/hooks/head-end/custom-fonts.html)
- WeChat integration: [assets/js/wechat-modal.js](assets/js/wechat-modal.js)
