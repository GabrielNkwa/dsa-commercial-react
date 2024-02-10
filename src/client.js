import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'ltajmjiu',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});
