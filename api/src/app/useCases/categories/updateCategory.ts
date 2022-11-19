import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function updateCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { name } = req.body;

    if (!categoryId) {
      return res.status(400).json({
        error: 'Category not found',
      });
    }

    await Category.findByIdAndUpdate(categoryId, { name });

    res.status(200).send({ message: 'Category updated!' });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
