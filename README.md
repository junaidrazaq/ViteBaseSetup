# React + TypeScript + Vite + Tailwind + TwinMacro + StyledComponents + ESLint

#### This repository provides a robust starting point for new projects, pre-configured with React, TypeScript, Vite, Tailwind CSS, TwinMacro, StyledComponents, and ESLint.

### Steps to Create a New Project
1. Clone the Repository
Begin by cloning this repository to your local machine:

```
git clone https://github.com/your-username/viteBaseSetup.git your-new-project-name
cd your-new-project-name
```

2. Install Dependencies
Navigate to the project directory and install the required dependencies:
```
npm install
```

3. Add ESLint Configuration
Create an .eslintrc.json file in the root of your project directory, and include the following configuration:
```
{
  "extends": "react-app"
}
```

4. Add .gitignore
Create an .gitignore file in the root of your project directory, and include the following configuration:
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local
.env
.env.production
tsconfig.node.tsbuildinfo

# Editor directories and files
.vscode
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

5. Remove Existing Git History
To start fresh with your project’s version control, remove the existing Git history:
```
rm -rf .git
```

Then, initialize a new Git repository:
```
git init
```

6. Set Up a New GitHub Repository
  - Create a new repository on GitHub.
  - Add the new repository as a remote:
```
git remote add origin https://github.com/your-username/your-new-project-repo.git
```

  - Stage, commit, and push the initial files:
```
git add .
git commit -m "Initial commit based on viteBaseSetup"
git push -u origin main
```


7. Build the Project
O7nce your setup is complete, build the project to ensure everything is configured correctly:
```
npm run build
```


8. Start Development
You’re now ready to start development. Run the following command to start the development server:
```
npm run dev
```

Your new project is now up and running!
