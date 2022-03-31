# tutorial-frontend

Example VueX application crud frontend

## prerequisites

NodeJS have been Installed

**Install VueCLI**
```bash
npm install -g @vue/cli
```

## Init Project

**create project in current dir**

then select > Default (Vue 3) ([Vue 3] babel, eslint) 

```bash
vue create .

? Generate project in current directory? (Y/n) Y

Vue CLI v4.5.15
? Please pick a preset: 
> Manually select features

? Check the features needed for your project: 
 (*) Choose Vue version
 (*) Babel      
 (*) Router
 (*) Vuex
 (*) Linter / Formatter
 (*) Unit Testing
  
? Choose a version of Vue.js that you want to start the project with 
> 3.x

? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)

? Pick a linter / formatter config: 
> ESLint with error prevention only 

? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save

? Pick a unit testing solution: 
> Jest

? Where do you prefer placing config for Babel, ESLint, etc.? 
> In package.json

? Save this as a preset for future projects? (y/N) y
```

## Install Dependencies

**axios**

```bash
npm install axios
```

## Run

app running on port :8080

**run on development**
```bash
npm run serve
```

## Build

**build on production**
```bash
npm run build
```

## Unittest

**Jest**
```bash
npm run test:unit
```

jest config coverage report **package.json**
```json
{
  "jest": {
    "preset": "@vue/cli-plugin-unit-jest",
    "transform": {
      "^.+\\.vue$": "vue-jest"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
      "src/**/*.{js,vue}",
      "!src/main.js"
    ]
  }
}
```

## Configurations

set backend api
```
VUE_APP_ENPOINT_API_BACKEND=http://localhost:8089/api
```

