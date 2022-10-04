### Steps to run locally

#### With docker

```bash
# build the image
docker build -t tc-react:latest .

# run the image
docker run -p 80:80 tc-react:latest
```

Now visit [http://localhost](http://localhost)

#### Without docker

```bash
# install packages
yarn install

# start dev server
yarn dev

# or build for and serve
yarn build

# once built, serve the dist/ folder
npx serve -s dist
```
