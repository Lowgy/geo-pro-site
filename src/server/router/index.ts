// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { countryRouter } from './countries';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('country.', countryRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
