import { DictionariesClient } from '../src/index.js';

test('Countries', async () => {
  // TODO: remove hardcoded URL
  const client = new DictionariesClient({ dictionariesUrl: 'https://broker.avclick.ru/dictionaries'});
  const countries = await client.getCountries({ code: '040' });
  expect(countries).toEqual([ { code: '040', name: 'АВСТРИЙСКАЯ РЕСПУБЛИКА' } ]);
});