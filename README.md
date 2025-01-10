Blank Template for TypeScript Projects

ts-node-dev - will auto build from src to lib
npm run dev - runs the typescript code directly without building
npm run build - deletes the lib folder and compiles ts (src) to js (lib)
nom run start - runs above build and then starts the javascript

Runs Production one
Removes all of the TS and Dev Dependencies, does not do hot reload
docker-compose up -d

Runs Development
Allows for hot reload for project changes
docker-compose -f docker-compose.dev.yml up -d --build