import fetch from 'isomorphic-fetch';

export default class DictionariesClient {

  async getCountries(filters = {}) {
    const queryParams = this.makeQueryParams({ ...filters, parentCode: 'COUNTRY' });

    return this.getData(queryParams);
  }

  async getFmsUnits(filters) {
    const queryParams = this.makeQueryParams({ ...filters, parentCode: 'FMS' });

    return this.getData(queryParams);
  }

  async getSuggestions(filters) {
    const queryParams = this.makeQueryParams(filters);

    return this.getData(queryParams);
  }

  makeQueryParams(filters) {
    return new URLSearchParams({ ...filters }).toString();
  }

  async getData(queryParams) {
    const response = await fetch(`https://broker.avclick.ru/dictionaries/api/dictionaries?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    return this.handleResponse(response);
  }

  async handleResponse(response) {
    if (response.ok) {
      const body = await response.json();

      return body.map((item) => ({ code: item.code, name: item.name }));
    } else {
      const errorText = await response.text();
      console.error('Error request to dictionaries. Status: ' + response.status + ' Response: ' + errorText);
      return [];
    }
  }
}