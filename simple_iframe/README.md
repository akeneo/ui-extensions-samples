# Simple iframe & simple buttons example

This mini application allows to display several screens in a PIM.

By default, it is accessible in `http://localhost:8090`

This application is separated into 2 parts:

### A React server

The role of the React server is to display React elements. It displays 4 pages:
- The homepage (`/`)
- The create page (`/new`)
- The content of the Edit Product Tab (`/edit_product_tab`)
- The content of the Edit Category Tab (`/edit_category_tab`)

### An Express server

The role of the Express server is to listen for calls coming from React server, then call the PIM API, and finally return the result to the React server.
Indeed, the PIM API cannot be used to directly be called by a browser (i.e. this is a server-to-server API), so we need to add some bridges.

Here is a non-exhaustive list of the endpoints:
- Get attributes (`/getAttributes?codes=sku,description`)
- Get product (`/getProduct?uuid=this-is-a-uuid`)
- ...

If this server never authenticate, a first call is done to get an access_token.

> [!WARNING]  
> There is no API authorization token retry process; once the auth_token is done (after 1 hour), you need to stop and run the Express server to clear cache.

# Install

```
npm install
```

Then create a new Connection in your PIM, then fill the `env.js` file.

Build the React app
```
npm run build
```

# Deploy

Init gcloud then follow the process and choose on which project you want to deploy your app (only 1 time):
```
gcloud init
```

Deploy the application
```
gcloud app deploy
```

## Local setup

Build the React app
```
npm run build
```

Start the express server
```
npm start
```
