const express = require('express');
const  ContributionTransactionsRouter = express.Router();
const  ContributionTransactionsDbOperations = require('../cruds/contribution_transactions');

ContributionTransactionsRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            contribution_transaction_id,
            property_id,
            project,
            daterec,
            timerec,
            datefor,
            description,
            quantity,
            combined_receipt_total_quantity,
            amntrec,
            amntrec_credit,
            interest,
            principal,
            deposit,
            balance,
            receipt_ref_dispatch_locked,
            feesdue,
            username,
            confirmed_by,
            authorized_by,
            branch,
            dispatch_status,
            dispatch_by,
            dispatch_date,
            dispatch_time,
            dispatched_quantity,
            undispatched_quantity_remaining,
            undispatched_inventory_release_date,
            dispatch_sales_shift_id,
            sales_shifts_id,
            folio,
            pmode,
            currency,
            price,
            usd_price,
            usd_cost_per_unit,
            credit_repayment_currency_price,
            ref,
            vat_rate_charged,
            vat_invoice_no,
            discount_requisition_id,
            discount_amount,
            discount_cost,
            monthsbehind,
            movementafterpayment,
            suspencebal,
            suspencedr,
            suspencecr,
            suspencenarration,
            marketing_media_sale_origin,
            marketing_loyalty_structure_id,
            member_id,
            comment,
            sync_status,

            } = postedValues;

            let results = await  ContributionTransactionsDbOperations.postContributionTransaction(
                contribution_transaction_id,
                property_id,
                project,
                daterec,
                timerec,
                datefor,
                description,
                quantity,
                combined_receipt_total_quantity,
                amntrec,
                amntrec_credit,
                interest,
                principal,
                deposit,
                balance,
                receipt_ref_dispatch_locked,
                feesdue,
                username,
                confirmed_by,
                authorized_by,
                branch,
                dispatch_status,
                dispatch_by,
                dispatch_date,
                dispatch_time,
                dispatched_quantity,
                undispatched_quantity_remaining,
                undispatched_inventory_release_date,
                dispatch_sales_shift_id,
                sales_shifts_id,
                folio,
                pmode,
                currency,
                price,
                usd_price,
                usd_cost_per_unit,
                credit_repayment_currency_price,
                ref,
                vat_rate_charged,
                vat_invoice_no,
                discount_requisition_id,
                discount_amount,
                discount_cost,
                monthsbehind,
                movementafterpayment,
                suspencebal,
                suspencedr,
                suspencecr,
                suspencenarration,
                marketing_media_sale_origin,
                marketing_loyalty_structure_id,
                member_id,
                comment,
                sync_status,
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

ContributionTransactionsRouter.get('/', async (req, res, next) => {
    try {
        let results = await  ContributionTransactionsDbOperations.getContributionTransactions();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


ContributionTransactionsRouter.get('/:id', async (req, res, next) => {
    try {
        let contribution_transaction_id = req.params.id;
        let result = await  ContributionTransactionsDbOperations.getContributionTransactionById(contribution_transaction_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


ContributionTransactionsRouter.put('/:contribution_transaction_id', async (req, res) => {
    const contribution_transaction_id = req.params.contribution_transaction_id; // Ensure this matches the route
    const updatedValues = req.body;

    try {
        const result = await ContributionTransactionsDbOperations.updateContributionTransaction(contribution_transaction_id, updatedValues);
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


  ContributionTransactionsRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await  ContributionTransactionsDbOperations.deleteContributionTransaction(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = ContributionTransactionsRouter;
