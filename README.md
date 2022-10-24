# Dictionaries client

## Установка
```
npm i @ilb/dictionariesclient
```

## Использование

### Инициализация клиента:
```
const client = new DictionariesClient();
```

### Получение списка стран:
```
const countries = await client.getCountries();
```

### Получение списка FMS:
```
const countries = await client.getFmsUnits();
```

### Получение списка FMS отфильтрованного по коду:
```
const countries = await client.getFmsUnits({ code: "020-020" });
```
