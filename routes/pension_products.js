const express = require('express');
const  PensionProductRouter = express.Router();
const  PensionProductsDbOperations = require('../cruds/pension_products');



PensionProductRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            pension_product_id,
            currency,
            contribution_amount,
            contribution_variance,
            contribution_frequency,
            product_name,
            product_description,
            pension_product_type,
            minimum_contribution,
            pension_entity_type,
            entity_contribution,
            estimate_payout,
            contributions_holding_account,
            sub_account1,
            sub_account2,
            sub_account3,
            product_id,
            date_for,
            time_for,
            company_id,
            fin_acc_investment_fund_details_id
        } = postedValues;

        let results = await PensionProductsDbOperations.postPensionProduct(
            pension_product_id,
            currency,
            contribution_amount,
            contribution_variance,
            contribution_frequency,
            product_name,
            product_description,
            pension_product_type,
            minimum_contribution,
            pension_entity_type,
            entity_contribution,
            estimate_payout,
            contributions_holding_account,
            sub_account1,
            sub_account2,
            sub_account3,
            product_id,
            date_for,
            time_for,
            company_id,
            fin_acc_investment_fund_details_id
        );

        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});




PensionProductRouter.get('/', async (req, res, next) => {
    try {
        let results = await  PensionProductsDbOperations.getPensionProducts();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


PensionProductRouter.get('/:id', async (req, res, next) => {
    try {
        let pension_product_id = req.params.id;
        let result = await  PensionProductsDbOperations.getPensionProductById(pension_product_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


PensionProductRouter.put('/:pension_product_id', async (req, res) => {
    const pension_product_id = req.params.pension_product_id; // Ensure this matches the route
    const updatedValues = req.body;

    try {
        const result = await PensionProductsDbOperations.updatePensionProduct(pension_product_id, updatedValues);
        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Error updating customer admin chat:", error);
        return res.status(500).json({
            status: "500",
            message: "Internal Server Error",
            error: error.message,
        });
    }
});


  PensionProductRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await  PensionProductsDbOperations.deletePensionProduct(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = PensionProductRouter;
