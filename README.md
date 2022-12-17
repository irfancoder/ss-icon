# ss-icon

Icon component library. Contains scripts to convert SVGs into usable React component.

## Getting started

### Prerequisites

The package is hosted at GitHub NPM Package registry. (Not the default NPM registry). Some npm config is required to use this package.

- Create a `.npmrc` file at the root folder of your project. Make sure to replace `PERSONAL_ACCESS_TOKEN` with own PAT from GitHub

        @irfancoder:registry=https://npm.pkg.github.com
        //npm.pkg.github.com/:_authToken=PERSONAL_ACCESS_TOKEN

- Thats it.

### Installing

Now you can install the package as usual.

    # NPM
    npm install @irfancoder/ss-icon

    # Yarn
    yarn add @irfancoder/ss-icon

### Usage

- For outline icons: `@irfancoder/ss-icon/outline`
- For bold icons: `@irfancoder/ss-icon/bold`

Example:

```jsx
import { Add } from '@irfancoder/ss-icon/outline'
import { User } from '@irfancoder/ss-icon/bold'

<Add className="" size={20} color="#000"  ... />
<User className="" size={20} color="#000"  ... />
```

## Development

This section is for package development.

### Commands to know

    yarn install    -   Install dependencies
    yarn manifest   -   Create collection of SVG contents in JSON from 'src/icons'
    yarn generate   -   Generate the React icon components
    yarn build      -   Builds the package
