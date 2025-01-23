## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy this app in App engine

Init gcloud then follow the process and choose on which project you want to deploy your app (only 1 time):
```
gcloud init
```

You can be asked to authenticate yourself once a day
```
gcloud auth login
```

Deploy the application
```
gcloud app deploy
```
