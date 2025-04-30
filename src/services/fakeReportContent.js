const { faker } = require('@faker-js/faker');

function getFakeReportData() {
    return {
        title: 'User Report',
        name: faker.person.fullName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        company: faker.company.name(),
        bio: faker.lorem.paragraphs(2),
        createdAt: new Date().toLocaleString(),
    };
}

module.exports = { getFakeReportData };
