const express = require('express');
const router = express.Router();
<<<<<<< HEAD
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
=======
const data = require('../models/dishModel');


// GET Routes for /dishes with optional filtering
router.get('/dishes', (req, res) => {
    const {category, price, name, isVegetarian} = req.query;

    let filteredDishes = data
    .filter(
        (dish) =>
            !category || dish.category.toLowerCase() === category.toLowerCase()
    )
    .filter(
        (dish) =>
            !price || dish.price <= parseFloat(price))
    .filter(
        (dish) =>
            !name || dish.name.toLowerCase().includes(name.toLowerCase()))
    .filter(
        (dish) =>
            isVegetarian === undefined || dish.isVegetarian === (isVegetarian === 'true'),

    );

    return filteredDishes.length === 0
        ? res.status(404).json({ status: 404, message: 'No dishes found matching the criteria.'})
        : res.status(200).json({status: 200, message: 'Dishes retrieved successfully', data: filteredDishes,});
});

//POST Routes for /dishes
router.post('/dishes', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({status: 400, message: 'Bad request: Name and Price are required',});
    }

    const newItem = { id : data.length + 1 , ...req.body};
    data.push(newItem);
    res.status(201).json({
        status: 201,
        message: 'Dish created successfully',
        data: newItem,


    });
});
    
//PUT Routes for /dishes/:id
router.put('/dishes/:id', (req, res) => {
    const { id } = req.params;
    const Index = data.findIndex((d) => d.id === id);
    if (Index === -1) {
        return res.status(404).json({
            status: 404,
            message: `Dish with id ${id} not found.`,
        });
    }

    data[Index] = { ...data[Index], ...req.body };
    return res.status(200).json({
        status: 200,
        message: 'Dish updated successfully',
        data: data[Index],
    });
});
        

//DELETE Routes for /dishes/:id
router.delete('/dishes/:id', (req, res) => {
    const  id  = parseInt(req.params.id);  
    const index = data.findIndex((d) => d.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: `Dish with id ${id} not found.`,
        });
    }
    data.splice(index, 1);
    return res.status(203).json({
        status: 203,
        message: 'Dish deleted successfully',
    });
});

module.exports = router;

>>>>>>> e0cba2e09c143d475ea54578aaeb740caf7a424b
