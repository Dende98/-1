## Упражнения на объекты
В этих заданиях тебе предстоит вспомнить как взаимодействовать с объектами в Javascript.

### Задание 1. Поиск фильмов в объекте

Напишите функцию `findMovieByTitle`, которая ищет фильмы в объекте по названию фильма и возвращает путь.

```javascript
function findMovieByTitle(moviesObj, title) {
  // ваш код здесь
}
```

Пример структуры объекта ниже:
```javascript
const movies = {
  action: {
    'Mission Impossible': '/action/mission_impossible.mp4',
    'Die Hard': '/action/die_hard.mp4',
  },
  comedy: {
    'The Hangover': '/comedy/the_hangover.mp4',
    'Superbad': '/comedy/superbad.mp4',
  },
  drama: {
    'The Shawshank Redemption': '/drama/shawshank_redemption.mp4',
    'Forrest Gump': '/drama/forrest_gump.mp4',
  },
  fantasy: {
    'Harry Potter': '/fantasy/harry_potter.mp4',
    'The Lord of the Rings': '/fantasy/lotr.mp4',
  },
};
```

### Задание 2. Подсчет количества свойств для вложенных объектов.

Напишите функцию `deepCountProperties`, которая принимает объект и возвращает количество всех свойств объекта, включая вложенные объекты.

```javascript
function deepCountProperties(obj, property) {
  // ваш код здесь
}
```

Пример структуры объекта ниже:
```javascript
const whyYouDoThisObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: {
        a: 3,
        b: 4,
        c: {
          c: 5,
        },
      },
    },
  },
  f: 6,
};
```