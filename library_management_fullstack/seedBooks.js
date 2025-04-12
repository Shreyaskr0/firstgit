
const { Book } = require('./models');
const sequelize = require('./utils/database');

const addSampleBooks = async () => {
  try {
    await sequelize.sync();

    const books = [
      { name: 'JavaScript: The Good Parts', takenAt: '2025-04-10T08:00:00', returnAt: '2025-04-10T18:00:00' },
      { name: 'Eloquent JavaScript', takenAt: '2025-04-10T12:00:00', returnAt: '2025-04-11T12:00:00' },
      { name: 'Clean Code', takenAt: '2025-04-09T10:00:00', returnAt: '2025-04-10T10:00:00' },
      { name: 'You Don’t Know JS', takenAt: '2025-04-08T15:00:00', returnAt: '2025-04-09T15:00:00' },
      { name: 'Learn Python the Hard Way', takenAt: '2025-04-11T09:00:00', returnAt: '2025-04-12T09:00:00' },
      { name: 'Python Crash Course', takenAt: '2025-04-05T14:00:00', returnAt: '2025-04-06T14:00:00' },
      { name: 'Design Patterns', takenAt: '2025-04-06T10:00:00', returnAt: '2025-04-07T10:00:00' },
      { name: 'Refactoring', takenAt: '2025-04-10T10:00:00', returnAt: '2025-04-11T10:00:00' },
      { name: 'Cracking the Coding Interview', takenAt: '2025-04-12T07:00:00', returnAt: '2025-04-13T07:00:00' },
      { name: 'Effective Java', takenAt: '2025-04-01T09:00:00', returnAt: '2025-04-02T09:00:00' }
    ];

    await Book.bulkCreate(books);
    console.log(' 10 sample coding books inserted!');
    process.exit(0);
  } catch (err) {
    console.error(' Error seeding books:', err);
    process.exit(1);
  }
};

addSampleBooks();
