import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  store: defineTable({
    name: v.string(),
    cover_image: v.optional(v.string()),
    address: v.optional(v.string()),
    description: v.optional(v.string()),
    city: v.optional(v.string()),
    state: v.optional(v.string()),
    zip_code: v.optional(v.string()),

    // Since Convex doesn't have a built-in timestamp type,
    // store created / updated times as numbers (ms since epoch)
    created_at: v.optional(v.number()),
    updated_at: v.optional(v.number()),

    is_online: v.optional(v.boolean()),
    profile_image: v.optional(v.string()),

    rating_count: v.optional(v.number()),
    rating: v.optional(v.number()), // float

    is_featured: v.optional(v.boolean()),
    type: v.optional(v.string()),

    section: v.optional(v.record(v.string(), v.any())),

    is_pending: v.optional(v.boolean()),
  }),
});
