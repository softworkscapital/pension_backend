require("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

crudsObj.postPensionProduct = (
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
) => {
  return new Promise((resolve, reject) => {
      pool.query(
          `INSERT INTO pension_products (
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
              company_id,fin_acc_investment_fund_details_id
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`,
          [
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





crudsObj.getPensionProducts = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM pension_products", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

crudsObj.getPensionProductById = (pension_product_id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        "SELECT * FROM pension_products WHERE pension_product_id = ?",
        [pension_product_id], // Use the correct parameter here
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

  crudsObj.updatePensionProduct = (pension_product_id, updatedValues) => {
    const {
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
    } = updatedValues;

    console.log("Updated values:", updatedValues);

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE pension_products SET 
               currency = ?,
              contribution_amount = ?,
              contribution_variance = ?,
              contribution_frequency = ?,
              product_name = ?,
              product_description = ?,
              pension_product_type = ?,
              minimum_contribution = ?,
              pension_entity_type = ?,
              entity_contribution = ?,
              estimate_payout = ?,
              contributions_holding_account = ?,
              sub_account1 = ?,
              sub_account2 = ?,
              sub_account3 = ?,
              product_id = ?,
              date_for = ?,
              time_for = ?,
              company_id = ?,
              fin_acc_investment_fund_details_id = ?
            WHERE pension_product_id = ?`,
            [
              
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
              fin_acc_investment_fund_details_id,
                pension_product_id // last parameter for the WHERE clause
            ],
            (err, result) => {
                if (err) {
                    console.error("Error updating member:", err);
                    return reject(err);
                }
                if (result.affectedRows === 0) {
                    return resolve({
                        status: "404",
                        message: "Customer admin chat not found or no changes made",
                    });
                }
                return resolve({ status: "200", message: "Update successful", result });
            }
        );
    });
};

crudsObj.deletePensionProduct= (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM pension_products WHERE pension_product_id = ?",
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
