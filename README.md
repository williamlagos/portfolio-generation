## Getting Started

This project was bootstrapped with Create Next App package, and uses a stack comprised of Next.js for the frontend and backend, Prisma as the data abstraction layer, and for keeping things simple, SQLite as the data provider. The commits follow the standard in Conventional Commits, and I tried to stick to Standard JS/TS code style as much as possible.

If you want to run it locally, make sure that this env var is set up (in an local .env file or in the general environment setup):

```bash
DATABASE_URL="file:./dev.db"
```

Then execute the development server:

```bash
$ npm run dev
```

If Docker would be a better option for you, I've done a Dockerfile that build a single container with the next server and prisma connector:

```bash
$ docker build . -t portfolio
# After built, then run in the background
$ docker run -it -p 3000:3000 -d portfolio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. For getting the results, just type the required tons on the application bar and hit the send button. There's a small but comprehensive test suite for verifying the functions more individually and in an integrated manner, that can be executed with these commands:

```bash
# For the unit testing and integration testing
$ npx jest
# For the end to end testing
$ npx cypress run
```

## Development

Since it was a simple application with an ellaborate algorithm (which took quite some time to figure that out and make sure that it was working as expected with testing), I didn't feel the need on relying on more robust solutions regarding state management (like Redux / RTK Query) than the default one connected into a React application, neither a more fully-fledged backend solution (like FastAPI / Express / NestJS) - but if those requirements change, that would be definitely be important to consider.

## Next Steps

What I would like to improve if there were more time certainly would be the test coverage, better error handling and add a more professional data provider, e.g. a MongoDB one, that could be integrated with Prisma later with not that much effort. Regarding to appearance, if I had more time, I would try to align better the grid with the description different sizes on each item, and would put a placeholder in the center of the application - whenever the list was empty, and last but not least, I would add more responsiveness to the submit button by inserting the loading state. Looking retrospectively, I could have put a better enforcement into the codestyle, like having a prettier and a more active eslint configurations.