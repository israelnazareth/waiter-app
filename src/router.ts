import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProducts } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// Delete category
router.delete('/categories/:categoryId', deleteCategory);

// List products
router.get('/products', listProducts);

// Create products
router.post('/products', createProducts);

// Get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
