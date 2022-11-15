import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    if (!categoryId) {
      return res.status(400).json({
        error: 'Category not found',
      });
    }

    await Category.findByIdAndDelete(categoryId);

    res.status(201).send({ message: 'Category deleted!' });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
