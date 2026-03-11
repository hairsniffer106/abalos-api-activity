const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const userController = require('../controllers/userController');





const {
    getAllTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction

} = transactionController;

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.patch('/users/:id', userController.updateUser);
router.put('/users/:id', userController.updateUser);




router.get('/transactions', getAllTransactions);
router.post('/transactions', createTransaction);
router.get('/transactions/:id', getTransactionById);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction);  


module.exports = router;
