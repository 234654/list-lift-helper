
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9e40b75e-cd89-4de3-8c55-38b35ac02849

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9e40b75e-cd89-4de3-8c55-38b35ac02849) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages Deployment

To deploy this project to GitHub Pages:

1. Create a new repository on GitHub.
2. In your terminal, inside the project folder, run:
   ```sh
   git init
   git remote add origin https://github.com/YOUR_USERNAME/list-lift-helper.git
   git branch -M main
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

3. Build the project:
   ```sh
   npm install
   npm run build
   ```

4. Deploy to GitHub Pages:
   ```sh
   git checkout --orphan gh-pages
   git rm -rf .
   mv dist/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push -f origin gh-pages
   git checkout main
   ```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select 'gh-pages' as the branch
   - Your site will be available at: https://YOUR_USERNAME.github.io/list-lift-helper/

### Lovable Deployment

Alternatively, simply open [Lovable](https://lovable.dev/projects/9e40b75e-cd89-4de3-8c55-38b35ac02849) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
