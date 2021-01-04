import { createClient } from 'urql';

export const urqlClient = createClient({
  url: 'http://localhost:4000/',
});
