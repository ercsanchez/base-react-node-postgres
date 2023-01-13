const { PrismaClient } = require('@prisma/client');

const sampleUser = require('../data/seedData');

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here

  // check if table User is already seeded
  const countUserTableRows = await prisma.user.count();
  if (countUserTableRows === 0) {
    const seededUser = await prisma.user.upsert({
      where: { email: sampleUser.email },
      update: {},
      create: {
        name: sampleUser.name,
        email: sampleUser.email,
        posts: { create: sampleUser.posts },
        profile: { create: sampleUser.profile },
      },
    });

    console.log('Seeded user: ', seededUser);
    return;
  }

  const foundUser = await prisma.user.findUnique({
    where: { email: sampleUser.email },
    include: {
      posts: true,
      profile: true,
    },
  });

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
