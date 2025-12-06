import { useCallback } from 'react';
import { useQuery } from 'convex/react';
import { api } from './convex/_generated/api'; // adjust path to your generated api

interface Store {
  _id: string;
  name: string;
  cover_image?: string;
  address?: string;
  description?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  created_at?: number;
  updated_at?: number;
  is_online?: boolean;
  profile_image?: string;
  rating_count?: bigint;
  rating?: number;
  is_featured?: boolean;
  type?: string;
  section?: Record<string, unknown>;
  is_pending?: boolean;
}

export function useStores(zipCode: string) {
  const stores = useQuery(api.store.getStores);

  const filterFeaturedStores = useCallback(() => {
    if (!stores) return [];
    return stores.filter(
      (store: Store) => store.is_featured == true && !store.is_pending
    );
  }, [stores]);

  const filterShopStores = useCallback(() => {
    if (!stores) return [];
    return stores.filter((store: Store) => store.type === 'shop');
  }, [stores]);

  const filterRestaurants = useCallback(() => {
    if (!stores) return [];
    return stores.filter(
      (store: Store) =>
        store.type === 'restaurant' && !store.is_pending && !store.is_featured
    );
  }, [stores]);

  const filterServices = useCallback(() => {
    if (!stores) return [];
    return stores.filter(
      (store: Store) => store.type === 'service' && !store.is_featured
    );
  }, [stores]);

  const getPending = useCallback(() => {
    if (!stores) return [];
    return stores.filter(
      (store: Store) => store.is_pending && !store.is_featured
    );
  }, [stores]);

  const filterVerifiedBusinesses = useCallback(() => {
    if (!stores) return [];
    return stores.filter((store: Store) => !store.is_pending);
  }, [stores]);

  return {
    featured: filterFeaturedStores(),
    shops: filterShopStores(),
    restaurants: filterRestaurants(),
    services: filterServices(),
    allBusiness: stores,
    pendingBusinesses: getPending(),
    verifiedBusinesses: filterVerifiedBusinesses(),
  };
}
