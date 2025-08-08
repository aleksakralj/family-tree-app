# Family Tree Application

This repository contains a full‑stack family tree application built with **Next.js** for the frontend, **NestJS** for the backend, **GraphQL** for the API layer and **Neo4j** as a graph database.  The application allows users to register and log in, create people, connect them via parent/child relationships and visualise those relationships in an interactive graph.

## Features

- **Graph database backend:** Uses Neo4j to store people and parent/child relationships.  Graph databases make multi‑hop queries like “show all descendants of this person” fast and efficient.
- **GraphQL API:** The backend exposes a GraphQL schema for CRUD operations on people and relationships.  Authenticated clients can create, update and delete people, link parents and children, and query existing data.
- **Authentication:** Basic registration and login are implemented using hashed and salted passwords with bcrypt and JWT tokens for sessions.  The foundations for more advanced security, such as multi‑factor authentication and WebAuthn, are laid out in the auth module.
- **Interactive graph UI:** The frontend renders the family tree using Cytoscape.js.  Nodes represent people and directed edges represent parent/child relationships.  Users can pan, zoom and explore their family tree interactively.
- **Import/export stubs:** A module for GEDCOM import/export has been scaffolded so you can extend the system to interoperate with genealogy standards.
- **Docker‑based deployment:** A `docker-compose.yml` file defines services for Neo4j, the backend API and the Next.js frontend.  You can run the entire stack locally with a single command.

## Running locally

Make sure you have Docker and Docker Compose installed.  Then clone this repository and run:

```sh
docker compose up
```

The frontend will be available at `http://localhost:3000`, the GraphQL API at `http://localhost:4000/graphql` and Neo4j Browser at `http://localhost:7474`.

During development you can also start the backend and frontend separately without Docker:

```sh
# In one terminal
cd backend
npm install
npm run start:dev

# In another terminal
cd frontend
npm install
npm run dev
```

## Future improvements

- Implement GEDCOM import/export in the `gedcom` module.
- Add MFA and WebAuthn support in the auth module.
- Expand the person schema with additional attributes (spouses, adoption, notes, photos).
- Improve the graph visualisation with filters, different layouts and editing tools.
- Add role‑based access control and audit logging for enterprise use.
