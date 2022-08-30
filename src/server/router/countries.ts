import { createRouter } from './context';
import { prisma } from '../db/client';
import { z } from 'zod';
import { Input } from 'postcss';

export const countryRouter = createRouter()
  .query('getAllCountries', {
    async resolve({ ctx }) {
      return await ctx.prisma.country.findMany({
        orderBy: [{ name: 'asc' }],
      });
    },
  })
  .query('getCountryByName', {
    input: z.object({ name: z.string() }),
    async resolve({ input, ctx }) {
      const country = await ctx.prisma.country.findFirst({
        where: {
          name: input.name,
        },
      });
      return { country };
    },
  })
  .mutation('create', {
    input: z.object({
      name: z.string(),
      abbreviation: z.string(),
      domain: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.country.create({
        data: {
          name: input.name,
          abbreviation: input.abbreviation,
          domain: input.domain,
        },
      });
    },
  });
