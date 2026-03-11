const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');

// Import your transaction controller functions
const {
  getAllTransactions,
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction
} = require('../controllers/transactionController');

// ANY authenticated user can view transactions
router.get('/', protect, getAllTransactions);

// ONLY Admins and Managers can create transactions
router.post('/', protect, authorize('admin', 'manager'), createTransaction);

// ONLY Admins and Managers can update transactions
router.put('/:id', protect, authorize('admin', 'manager'), updateTransaction);

// ONLY Admins can delete transactions
router.delete('/:id', protect, authorize('admin'), deleteTransaction);

// ANY authenticated user can view a single transaction
router.get('/:id', protect, getTransactionById);

module.exports = router;
