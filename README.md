# Install Project Dependencies

Before running the yarn scripts below, you'll first need to install project dependencies.

`npm install`

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https:/>/facebook.github.io/create-react-app/docs/deployment>

### `yarn build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>

## Setting up a local development environment

To run the system locally a developer must setup and install 4 additional applications:

- docker
- strapi-mongo
- opl-content-api
- opl-api-gateway

### Install Docker

Goto: <https://docs.docker.com/get-docker/> and install the appropriate version of Docker for your system.

### Run Mongo in Docker container

In a terminal run the following commands:
`docker run -p 27107:27107 --name strapi-mongo mongo`
`docker start strapi-mongo`

This will create a mongo instance named strapi-mongo in a docker container.

### Install opl-content-api

Clone the opl-content-api repo to your system: <https://github.com/openpracticelibrary/opl-content-api>

`git clone https://github.com/openpracticelibrary/opl-content-api.git`

Then cd into the new project:

`cd opl-content-api`

We need to install the dependencies and then update one of these dependencies and then re-install it:

`npm i`

Then edit the package.json *@ node_modules/strapi-plugin-graphql* to add apollo-federation to the top of the dependencies:

`"@apollo-federation": "^0.15.0",`

and then after saving the file run an npm install again:
`npm i`

Then start the server:

`npm run develop`

### Install opl-api-gateway

Next we must install the the opl-api-gateway service.  Clone the repo to your local system:

`git clone https://github.com/openpracticelibrary/opl-api-gateway`

Then cd into the opl-api-gateway directory:

`cd opl-api-gateway`

Open the makefile in your favorite text editor and empty the value for MEDIA_API_ENDPOINT:

`MEDIA_API_ENDPOINT = ""`

Run:

`npm i`
`make start`

This will provide you with a strapi cms interface.  Populate several practices and then hit that endpoint.
