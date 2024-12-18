require("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

crudsObj.postContributionTransaction = (
            contribution_transaction_id,
            property_id ,
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
            suspencecr	,
            suspencenarration,
            marketing_media_sale_origin,
            marketing_loyalty_structure_id,
            member_id,
            comment,
            sync_status	
) => {
  return new Promise((resolve, reject) => {
      pool.query(
          `INSERT INTO contribution_transactions (
            property_id ,
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
            suspencecr	,
            suspencenarration,
            marketing_media_sale_origin,
            marketing_loyalty_structure_id,
            member_id,
            comment,
            sync_status	
          ) VALUES (?, ?,?,?,?,?,?,?,?,?,?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            property_id ,
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
            suspencecr	,
            suspencenarration,
            marketing_media_sale_origin,
            marketing_loyalty_structure_id,
            member_id,
            comment,
            sync_status	
          ],
          (err, result) => {
              if (err) {
                  return reject(err);
              }
              return resolve({ status: "200", message: "Saving successful", result });
          }
      );
  });
};
crudsObj.getContributionTransactions = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM  contribution_transactions", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

crudsObj.getContributionTransactionById = ( contribution_transaction_id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        "SELECT * FROM  contribution_transactions WHERE  contribution_transaction_id = ?",
        [ contribution_transaction_id], // Use the correct parameter here
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  crudsObj.updateContributionTransaction = (contribution_transaction_id, updatedValues) => {
    const {
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
    } = updatedValues;

    console.log("Updated values:", updatedValues);

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE contribution_transactions SET 
                property_id = ?, 
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
                member_id = ?, 
                comment = ?, 
                sync_status = ?
            WHERE contribution_transaction_id = ?`,
            [
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
                contribution_transaction_id, // last parameter for the WHERE clause
            ],
            (err, result) => {
                if (err) {
                    console.error("Error updating contribution transaction:", err);
                    return reject(err);
                }
                if (result.affectedRows === 0) {
                    return resolve({
                        status: "404",
                        message: "Contribution transaction not found or no changes made",
                    });
                }
                return resolve({ status: "200", message: "Update successful", result });
            }
        );
    });
};


crudsObj.deleteContributionTransaction= (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM  contribution_transactions WHERE  contribution_transaction_id = ?",
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
