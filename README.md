# Open Practice Library
![Pull Requests](https://github.com/openpracticelibrary/opl-fe/workflows/Pull%20Requests/badge.svg)
![FE Dev Build](https://github.com/openpracticelibrary/opl-fe/workflows/FE%20Dev%20Build/badge.svg)

This is the repository for the Open Practice Library web application.

![Mobius Loop](https://d33wubrfki0l68.cloudfront.net/57dbd09220d511e83b5f6a880c05448b4664f3a9/7845e/images/loop-labels-path.svg)

## Local Development

### OPL's Back-end Services

To run locally, you will need a connection to a GraphQL server that holds the schema for the Open Practice Library. You can choose to run all of the following services locally, which can be something of a challenge, or you can use the `local/docker-compose.yaml` file in this repository to spin up the services you need. The only caveats to running the backend services in containers are:

1. You will not be able to make any changes to backend services and test how they affect the frontend.
2. You will not be able to run the API Gateway service in a container. If you want to use it, though, with the other services in containers, that is possible (it is a fairly simple service to run).

Here are the backend services at the current stage of development:

- [opl-content-api](https://github.com/openpracticelibrary/opl-content-api) runs a headless CMS with a GraphQL endpoint at `/graphql` on port 1337.
- [opl-media-service](https://github.com/openpracticelibrary/opl-media-service) runs a small Apollo Server that takes image uploads, compresses them, and sends them on to the `opl-media` repository. Runs on port 4002.
- [opl-api-gateway](https://github.com/openpracticelibrary/opl-api-gateway) runs an Apollo Federation Gateway, which stitches the schemas of it's component services together to create one graph for our frontend to interact with. Runs on port 4000.

There is also a `mongo` database that starts up to back opl-content-api. You may wish to simply stop the services, rather than removing them completely, if you run these applications in containers, which will keep any data you may have stored in the mongo database available the next time you start the services back up.

### Running this application locally

Once you've started the backend services, or at least are able to connect at `localhost:1337/graphql`, create a `.env.local` file (will be ignored by git, but will override any other environment variables), and input:
```
REACT_APP_GRAPHQL_ENDPOINT="http://localhost:4000/graphql"

** OR ** if you are not running the opl-api-gateway,

REACT_APP_GRAPHQL_ENDPOINT="http://localhost:1337/graphql"
```
After that, the process is the same as every other React application:
```
npm install
npm start
```
Happy Hacking! :nerd_face:

## Further Reading

The [wiki](https://github.com/openpracticelibrary/opl-docs/wiki), which will contain contribution guidelines, open source design documents, non-technical information about the Open Practice Library, and much more is under construction!

