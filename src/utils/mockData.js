const faker = require("faker");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const boolean = [true, false];

function buildAnimalDatabase() {
  const animalBreedsGenerators = {
    dog: faker.animal.dog,
    cat: faker.animal.cat,
    snake: faker.animal.snake,
    horse: faker.animal.horse,
    bird: faker.animal.bird,
    rabbit: faker.animal.rabbit
  };

  const animalTypes = Object.keys(animalBreedsGenerators);

  const animals = [];

  animalTypes.forEach((type) => {
    const breedGenerator = animalBreedsGenerators[type];
    const numberOfBreeds = getRandomInt(1, 10);

    for (let i = 0; i < numberOfBreeds; i++) {
      const breed = breedGenerator();

      const numberOfAnimals = getRandomInt(5, 15);

      for (let i = 0; i < numberOfAnimals; i++) {
        const booelanIndex = getRandomInt(0, boolean.length - 1);

        const newAnimal = {
          name: faker.name.firstName(),
          age: getRandomInt(1, 20),
          type,
          breed,
          microchip: boolean[booelanIndex]
        };

        animals.push(newAnimal);
      }
    }
  });

  return animals;
}

function buildBooksDatabase() {
  const numberOfFictionAuthors = getRandomInt(20, 30);
  const fictionAuthors = [];

  for (let i = 0; i < numberOfFictionAuthors; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const fullName = `${firstName} ${lastName}`;

    fictionAuthors.push(fullName);
  }

  const numberOfNonFictionAuthors = getRandomInt(20, 30);
  const nonFictionAuthors = [];

  for (let i = 0; i < numberOfNonFictionAuthors; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const fullName = `${firstName} ${lastName}`;

    nonFictionAuthors.push(fullName);
  }

  const fictionTopics = [
    "literary fiction",
    "thriller",
    "fantasy",
    "mystery",
    "historical",
    "romance",
    "western",
    "science fiction",
    "dystopian",
    "horror"
  ];

  const nonFictionTopics = [
    "history",
    "biography",
    "travel guide",
    "philosophy",
    "self-help",
    "how to manual",
    "business",
    "humour"
  ];

  const books = [];

  fictionAuthors.forEach((author) => {
    const numberOfBooks = getRandomInt(1, 3);

    const topicIndex = getRandomInt(0, fictionTopics.length - 1);
    const topic = fictionTopics[topicIndex];

    for (let i = 0; i < numberOfBooks; i++) {
      const titleLength = getRandomInt(2, 6);
      const title = faker.lorem.words(titleLength);

      const randomDate = faker.date.past(20);

      const newBook = {
        title,
        type: "Fiction",
        author,
        topic,
        publicationDate: randomDate
      };

      books.push(newBook);
    }
  });

  nonFictionAuthors.forEach((author) => {
    const numberOfBooks = getRandomInt(1, 3);

    const topicIndex = getRandomInt(0, nonFictionTopics.length - 1);
    const topic = nonFictionTopics[topicIndex];

    for (let i = 0; i < numberOfBooks; i++) {
      const titleLength = getRandomInt(2, 6);
      const title = faker.lorem.words(titleLength);

      const randomDate = faker.date.past(20);

      const newBook = {
        title,
        type: "Non-Fiction",
        author,
        topic,
        publicationDate: randomDate
      };

      books.push(newBook);
    }
  });

  return books;
}

module.exports = {
  buildBooksDatabase,
  buildAnimalDatabase
};
