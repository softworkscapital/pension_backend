require("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

crudsObj.postPayOut = (
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
  ) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO pay_outs (
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
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
         , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?
         ,?,?,?,?,?)`,
        [
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
          sync_status,
        ],
        (err, result) => {
          if (err) {
            console.error("Error inserting data:", err); // Log the error
            return reject(err);
          }
          return resolve({ status: "200", message: "Saving successful", result });
        }
      );
    });
  };

crudsObj.getPayOuts = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM pay_outs", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

crudsObj.getPayOutById = (pay_out_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM pay_outs WHERE pay_out_id = ?",
      [pay_out_id], // Use the correct parameter here
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

crudsObj.updatePayOut = (pay_out_id, updatedValues) => {
    const {
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
        sync_status,
    } = updatedValues;

    console.log("Updated values:", updatedValues);

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE pay_outs SET 
                member_id = ?, 
                product_id = ?, 
                member_principal_balance = ?, 
                propertyid = ?, 
                project = ?, 
                daterec = ?, 
                timerec = ?, 
                datefor = ?, 
                description = ?, 
                quantity = ?, 
                combined_receipt_total_quantity = ?, 
                amntrec = ?, 
                amntrec_credit = ?, 
                interest = ?, 
                principal = ?, 
                deposit = ?, 
                balance = ?, 
                receipt_ref_dispatch_locked = ?, 
                feesdue = ?, 
                username = ?, 
                confirmed_by = ?, 
                authorized_by = ?, 
                branch = ?, 
                dispatch_status = ?, 
                dispatch_by = ?, 
                dispatch_date = ?, 
                dispatch_time = ?, 
                dispatched_quantity = ?, 
                undispatched_quantity_remaining = ?, 
                undispatched_inventory_release_date = ?, 
                dispatch_sales_shift_id = ?, 
                sales_shifts_id = ?, 
                folio = ?, 
                pmode = ?, 
                currency = ?, 
                price = ?, 
                usd_price = ?, 
                usd_cost_per_unit = ?, 
                credit_repayment_currency_price = ?, 
                ref = ?, 
                vat_rate_charged = ?, 
                vat_invoice_no = ?, 
                discount_requisition_id = ?, 
                discount_amount = ?, 
                discount_cost = ?, 
                monthsbehind = ?, 
                movementafterpayment = ?, 
                suspencebal = ?, 
                suspencedr = ?, 
                suspencecr = ?, 
                suspencenarration = ?, 
                marketing_media_sale_origin = ?, 
                marketing_loyalty_structure_id = ?, 
                customerid = ?, 
                sync_status = ?
            WHERE pay_out_id = ?`,
            [
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
                sync_status,
                pay_out_id // last parameter for the WHERE clause
            ],
            (err, result) => {
                if (err) {
                    console.error("Error updating pay out:", err);
                    return reject(err);
                }
                if (result.affectedRows === 0) {
                    return resolve({
                        status: "404",
                        message: "Pay out not found or no changes made",
                    });
                }
                return resolve({ status: "200", message: "Update successful", result });
            }
        );
    });
};

crudsObj.deletePayOut = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM pay_outs WHERE pay_out_id = ?",
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = crudsObj;
