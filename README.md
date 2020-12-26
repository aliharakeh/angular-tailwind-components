# Angular-Tailwind Components
custom angular components styled with tailwind

# Commands
- `ng new angular-tailwind`
- `ng add ngx-tailwind`
- `npm install dotenv -D`

# Issues
some issues and their possible solution

### 1. No **Purge** is happening to Tailwind CSS
there was an issue with purging and can be solved like this

#### Update `tailwind.config`
```
require('dotenv').config();
const enablePurge = process.env.NODE_ENV || false;

module.exports = {
  purge: {
    enabled: enablePurge,
    content: [
      './src/**/*.html',
      './src/**/*.ts'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

#### Update `package.json`
```
{
    ...
    "scripts": {
        ...    
        "build:prod": "SET NODE_ENV=production & ng build --prod"
    },
    ...
}
```

#### `OR`: Use `cross-env` (cross-platform solution)
```
{
  "scripts": {
     "build:prod": "cross-env NODE_ENV=production ng build --prod"
     ...
  },
  "devDependencies": {
    ...
    "cross-env": "^7.0.3",
  }
}
```
