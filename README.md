# eggshell-membrane

This is a e-commerce website for my school-project.

## Technologies

- Architecture : JAM-Stack (Serverless)
- Language : Typescript
- Frontend : Vanilla HTML/CSS/Javascript (using webpack to bundle all of them)
- Backend : Netlify Serverless Function (Node.js)
- Database : GraphCMS (GraphQL)
- Deployment : Netlify

## Local Development

1. install `netlify-cli` globally via npm:

```bash
$ sudo npm install -g netlify-cli
```

2. setting Environment Variables via `netlify-cli`:

```bash
$ netlify env:set GRAPHQL_ENDPOINT <your-GraphCMS-token>
```

3. build the project:

```bash
$ npm run build-netlify
```

4. run the project via `netlify-cli`:

```bash
$ netlify dev
◈ Netlify Dev ◈
◈ Injected build settings env var: GRAPHQL_ENDPOINT
◈ Ignored general context env var: LANG (defined in process)
◈ Ignored general context env var: LANGUAGE (defined in process)
◈ No app server detected. Using simple static server
◈ Running static server from "eggshell-membrane/assets"
◈ Loaded function brands.
◈ Loaded function carousels.
◈ Loaded function config.
◈ Loaded function eggshell-secret.
◈ Functions server is listening on 35787

◈ Static server listening to 3999

   ┌─────────────────────────────────────────────────┐
   │                                                 │
   │   ◈ Server now ready on http://localhost:8888   │
   │                                                 │
   └─────────────────────────────────────────────────┘
```
