# Node Workout

Practice repository for Node.js, Express.js, TypeScript and backend development skills.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create your environment file:
   ```bash
   cp .env.example .env
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: http://localhost:3000

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the server with hot-reload (ts-node-dev) |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Start the compiled server in production mode |
| `npm test` | Run tests |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/health` | Health check |
| GET | `/api/hello/:name` | Greeting example |

## Project Structure

```
node-workout/
├── src/
│   └── index.ts        # Main entry point
├── dist/               # Compiled JavaScript (after build)
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## Next Steps

As you practice, you can expand this project by:

- [ ] Adding more routes in separate files (`src/routes/`)
- [ ] Creating controllers (`src/controllers/`)
- [ ] Adding middleware (`src/middleware/`)
- [ ] Defining types/interfaces (`src/types/`)
- [ ] Connecting to a database (MongoDB, PostgreSQL, etc.)
- [ ] Adding authentication (JWT, sessions)
- [ ] Writing tests with Jest or Mocha
- [ ] Adding input validation (Zod, class-validator)

Happy coding!
