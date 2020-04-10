const faker = require('faker');

const MAX_SEED = 100000;
const MIN_SEED = 1;
const PRODUCTS_COUNT = 10;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

module.exports = () => {
    faker.seed(getRandomIntInclusive(MIN_SEED, MAX_SEED));
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    return {
        randomPerson : {
            name: {
                first: firstName,
                last: lastName,
                prefix: faker.name.prefix(),
                suffix: faker.name.suffix()
            },
            address: {
                streetAddress: faker.address.streetAddress(true),
                city: faker.address.city(),
                zipCode: faker.address.zipCode(),
                state: faker.address.state(true),
                country: faker.address.country(),
            },
            profile: {
                username: faker.internet.userName(firstName, lastName),
                email: faker.internet.email(firstName, lastName),
                avatar: faker.internet.avatar()
            }
        },
        randomProducts: Array.from({length: PRODUCTS_COUNT}, () => {
            faker.seed(getRandomIntInclusive(MIN_SEED, MAX_SEED));
            return {
                color: faker.commerce.color(),
                department: faker.commerce.department(),
                productName: faker.commerce.productName(),
                price: faker.commerce.price(),
                productAdjective: faker.commerce.productAdjective(),
                productMaterial: faker.commerce.productMaterial(),
                product: faker.commerce.product()
            }
        })
    }
};