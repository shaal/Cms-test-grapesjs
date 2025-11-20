# GrapesJS CMS with Astro and Lit 3

A modern, visual CMS built with Astro, GrapesJS, and custom Lit 3 web components.

## Features

- **Visual Editor**: Drag-and-drop page builder powered by GrapesJS
- **Custom Web Components**: Built with Lit 3 for modern, encapsulated components
- **Responsive Design**: Mobile-first approach with responsive preview modes
- **Image Upload**: Direct image upload functionality
- **File-based Storage**: Content saved as JSON files for easy version control

## Custom Components

### Hero Component
Full-width hero section with:
- Customizable background image
- Main heading and description
- Adjustable overlay opacity
- Configurable text alignment and minimum height

### Side-by-Side Component
Flexible two-column layout with:
- Image and text content
- Layout options: media-first or media-second (desktop)
- Automatic image-first layout on mobile
- Customizable background color
- 50/50 split design

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then visit:
- `http://localhost:4321/` - Public-facing homepage
- `http://localhost:4321/editor` - GrapesJS editor

### Building for Production

```bash
npm run build
npm run preview
```

## Usage Workflow

1. **Create Content**
   - Visit `/editor` to access the GrapesJS visual editor
   - Drag custom components from the sidebar into your page
   - Customize component properties in the Settings panel
   - Upload images using the asset manager

2. **Save Content**
   - Click the "💾 Save" button in the editor
   - Content is saved to `content/pages/index.json`
   - Uploaded images are stored in `public/uploads/`

3. **View Published Content**
   - Visit the homepage `/` to see your published content
   - Content is automatically loaded from saved files

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── hero-component.ts         # Lit 3 Hero component
│   │   └── side-by-side-component.ts # Lit 3 Side-by-Side component
│   ├── layouts/
│   │   └── Layout.astro              # Base layout
│   ├── pages/
│   │   ├── index.astro               # Public homepage
│   │   ├── editor.astro              # GrapesJS editor
│   │   └── api/
│   │       ├── save.ts               # Save content endpoint
│   │       ├── load.ts               # Load content endpoint
│   │       └── upload.ts             # Image upload endpoint
├── public/
│   └── uploads/                      # Uploaded images
├── content/
│   └── pages/                        # Saved page content
└── package.json
```

## API Endpoints

- `POST /api/save` - Save page content (HTML, CSS, components)
- `GET /api/load` - Load saved page content
- `POST /api/upload` - Upload image files

## Technologies

- **[Astro](https://astro.build/)** - Static site builder
- **[GrapesJS](https://grapesjs.com/)** - Web builder framework
- **[Lit 3](https://lit.dev/)** - Modern web components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## Customization

### Adding New Components

1. Create a new Lit component in `src/components/`
2. Define the component type in `editor.astro`
3. Add a block definition to the Block Manager
4. Configure traits for component customization

### Styling

- Lit components use Shadow DOM with CSS custom properties
- Tailwind CSS available for global styling
- GrapesJS style manager for visual customization

## License

MIT
