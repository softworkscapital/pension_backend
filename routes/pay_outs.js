const express = require("express");
const PayOutRouter = express.Router();
const PayOutsDbOperations = require("../cruds/pay_outs");

PayOutRouter.post("/", async (req, res, next) => {
  try {
    let postedValues = req.body;
    let {
        pay_out_id,
        member_id,
        product_id,
        member_principal_balance,
        propertyid,
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
        customerid,
        sync_status
    } = postedValues;

    let results = await PayOutsDbOperations.postPayOut(
        pay_out_id,
        member_id,
        product_id,
        member_principal_balance,
        propertyid,
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
        customerid,
        sync_status
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

PayOutRouter.get("/", async (req, res, next) => {
  try {
    let results = await PayOutsDbOperations.getPayOuts();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

PayOutRouter.get("/:id", async (req, res, next) => {
  try {
    let pay_out_id = req.params.id;
    let result = await PayOutsDbOperations.getPayOutById(pay_out_id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

PayOutRouter.put("/:pay_out_id", async (req, res) => {
  const pay_out_id = req.params.pay_out_id; // Ensure this matches the route
  const updatedValues = req.body;

  try {
    const result = await PayOutsDbOperations.updatePayOut(
      pay_out_id,
      updatedValues
    );
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

PayOutRouter.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let result = await PayOutsDbOperations.deletePayOut(id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = PayOutRouter;
