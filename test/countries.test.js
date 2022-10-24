import { DictionariesClient } from '../src/index.js';

test('Countries', async () => {
  const client = new DictionariesClient();
  const countries = await client.getCountries({ code: '040' });
  expect(countries).toEqual([ { code: '040', name: 'АВСТРИЙСКАЯ РЕСПУБЛИКА' } ]);
});