const express = require('express');
const MemberProductRouter = express.Router();
const MemberProductsDbOperations = require('../cruds/member_products');

// Member Products CRUD Operations
MemberProductRouter.post('/', async (req, res) => {
    try {
        const { membership_id, pension_product_id } = req.body;
        const results = await MemberProductsDbOperations.postMemberProduct(
            membership_id,
            pension_product_id
        );
        res.json(results);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

MemberProductRouter.get('/', async (req, res) => {
    try {
        const results = await MemberProductsDbOperations.getMemberProducts();
        res.json(results);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

MemberProductRouter.get('/:id', async (req, res) => {
    try {
        const member_product_id = req.params.id;
        const result = await MemberProductsDbOperations.getMemberProductById(member_product_id);
        res.json(result);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});


MemberProductRouter.get('/product-plan/:id', async (req, res) => {
    try {
        const membership_id = req.params.id;
        const result = await MemberProductsDbOperations.getMemberProductPlanById(membership_id);
        res.json(result);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});




MemberProductRouter.put('/:member_product_id', async (req, res) => {
    const member_product_id = req.params.member_product_id;
    const updatedValues = req.body;

    try {
        const result = await MemberProductsDbOperations.updateMemberProduct(member_product_id, updatedValues);
        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Error updating member product:", error);
        return res.status(500).json({
            status: "500",
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

MemberProductRouter.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await MemberProductsDbOperations.deleteMemberProduct(id);
        res.json(result);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

// Pension Products CRUD Operations
MemberProductRouter.post('/pension', async (req, res) => {
    try {
        const productDetails = req.body;
        const result = await MemberProductsDbOperations.createPensionProduct(productDetails);
        res.json(result);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

MemberProductRouter.get('/pension', async (req, res) => {
    try {
        const results = await MemberProductsDbOperations.getAllPensionProducts();
        res.json(results);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

MemberProductRouter.get('/pension/:id', async (req, res) => {
    try {
        const pension_product_id = req.params.id;
        const result = await MemberProductsDbOperations.getPensionProductById(pension_product_id);
        res.json(result);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

MemberProductRouter.put('/pension/:id', async (req, res) => {
    const pension_product_id = req.params.id;
    const updatedValues = req.body;

    try {
        const result = await MemberProductsDbOperations.updatePensionProduct(pension_product_id, updatedValues);
        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Error updating pension product:", error);
        return res.status(500).json({
            status: "500",
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

MemberProductRouter.delete('/pension/:id', async (req, res) => {
    try {
        const pension_product_id = req.params.id;
        const result = await MemberProductsDbOperations.deletePensionProduct(pension_product_id);
        res.json(result);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

module.exports = MemberProductRouter;