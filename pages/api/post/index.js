import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  console.log(req.body);

  const session = await getSession({ req });
  const result = await prisma.recipe.create({
    data: {
      title: req.body.title,
      ingredients: req.body.ingredients,
      steps: req.body.steps,
      tags: req.body.tags,
      public: req.body.public,
      user: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
