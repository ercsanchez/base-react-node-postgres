const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const seededUser = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  });

  const foundUser = await prisma.user.findUnique({
    where: { email: 'alice@prisma.io' },
  });

  console.log('Seeded user: ', seededUser);
  console.log('Found user: ', foundUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
