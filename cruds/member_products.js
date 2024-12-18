require("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

// Existing CRUD operations...

crudsObj.postMemberProduct = (
    membership_id,
    pension_product_id
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO member_products (
                membership_id,
                pension_product_id
            ) VALUES (?, ?)`,
            [
                membership_id,
                pension_product_id
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

crudsObj.getMemberProducts = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM member_products", (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getMemberProductById = (member_product_id) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT * FROM member_products WHERE member_product_id = ?",
            [member_product_id],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};



crudsObj.getMemberProductPlanById = (membership_id) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT mp.*, pp.pension_product_id, pp.product_name, pp.product_description, pp.contribution_amount, pp.pension_product_type, " +
            "pp.contribution_frequency, pp.contribution_variance " +
            "FROM member_products AS mp " +
            "JOIN pension_products AS pp ON mp.pension_product_id = pp.pension_product_id " +
            "WHERE mp.membership_id = ?",
            [membership_id],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};





crudsObj.updateMemberProduct = (member_product_id, updatedValues) => {
    const {
        membership_id,
        pension_product_id
    } = updatedValues;

    console.log("Updated values:", updatedValues);

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE member_products SET 
                membership_id = ?,
                pension_product_id = ?
            WHERE member_product_id = ?`,
            [
                membership_id,
                pension_product_id,
                member_product_id
            ],
            (err, result) => {
                if (err) {
                    console.error("Error updating member:", err);
                    return reject(err);
                }
                if (result.affectedRows === 0) {
                    return resolve({
                        status: "404",
                        message: "Member product not found or no changes made",
                    });
                }
                return resolve({ status: "200", message: "Update successful", result });
            }
        );
    });
};

crudsObj.deleteMemberProduct = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "DELETE FROM member_products WHERE member_product_id = ?",
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