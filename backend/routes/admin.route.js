import express from 'express';
const router = express.Router();
import {modifyQuestion,deleteQuestion,addQuestion,getQuestionsByCategory,getCategories,addCategory,deleteCategory } from '../controllers/admin.controller.js';
import { protect } from '../middlewares/protect.middleware.js';

router.get('/categories', protect, getCategories);
router.get('/questions/:id', protect, getQuestionsByCategory);
router.post('/add-category', protect, addCategory);
router.post('/add-question', protect, addQuestion);
router.put('/modify-question/:id', protect, modifyQuestion);
router.delete('/delete-question/:id', protect, deleteQuestion);
router.delete('/delete-category/:id', protect, deleteCategory);

export default router;