# SDK script for External Data Source UI-Extension

## Local

### Installation

```
npm install
```

### Development

```
npm run dev
```

When tested locally, the script use the data returned by fakePIM.js

fakePIM.js mock the SDK methods available in the PIM, you can 

All available SDK methods in the PIM have to be declared in the global.d.ts file for the compilation to work properly.


### Build

```
npm run build
```

The file in `dist/demo.js` is the built External Data Source UI Extension
