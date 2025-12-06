// convex/queries/getStores.ts
import { query } from './_generated/server';
import { v } from 'convex/values';

export const getStoresByZip = query({
  args: { zipCode: v.string() },
  handler: async (ctx, { zipCode }) => {
    // Query the "stores" table
    const stores = await ctx.db
      .query('store')
      .filter((q) => q.eq(q.field('zip_code'), zipCode))
      .collect();

    return stores;
  },
});

export const getStores = query({
  args: {},
  handler: async (ctx) => {
    // Query the "stores" table
    const stores = await ctx.db.query('store').collect();

    return stores;
  },
});
