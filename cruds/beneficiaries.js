require("dotenv").config();
const pool = require("./poolfile");

let crudsBeneficiaryObj = {};

// Create a new beneficiary
crudsBeneficiaryObj.postBeneficiary = (
  name,
  surname,
  relationship,
  dob,
  phone_number,
  status,
  current_country,
  primary_member_id, // Using AAA-100003
  id_number,
  email,
  pic_url
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO beneficiaries (
          name,
          surname,
          relationship,
          dob,
          phone_number,
          status,
          current_country,
          primary_member_id,
          id_number,
          email,
          pic_url
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        surname,
        relationship,
        dob,
        phone_number,
        status,
        current_country,
        primary_member_id,
        id_number,
        email,
        pic_url
      ],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve({ status: "200", message: "Beneficiary added successfully", beneficiary_id: result.insertId });
      }
    );
  });
};

// Get all beneficiaries
crudsBeneficiaryObj.getBeneficiaries = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM beneficiaries", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

// Get beneficiary by primary member ID
crudsBeneficiaryObj.getBeneficiaryByMemberId = (primary_member_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM beneficiaries WHERE primary_member_id = ?",
      [primary_member_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// Update a beneficiary
crudsBeneficiaryObj.updateBeneficiary = (beneficiary_id, updatedValues) => {
  const {
    name,
    surname,
    relationship,
    dob,
    phone_number,
    status,
    current_country,
    id_number,
    email,
    pic_url,
  } = updatedValues;

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE beneficiaries SET 
          name = ?, 
          surname = ?, 
          relationship = ?, 
          dob = ?, 
          phone_number = ?, 
          status = ?, 
          current_country = ?, 
          id_number = ?, 
          email = ?, 
          pic_url = ?
      WHERE beneficiary_id = ?`,
      [
        name,
        surname,
        relationship,
        dob,
        phone_number,
        status,
        current_country,
        id_number,
        email,
        pic_url,
        beneficiary_id
      ],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        if (result.affectedRows === 0) {
          return resolve({
            status: "404",
            message: "Beneficiary not found or no changes made",
          });
        }
        return resolve({ status: "200", message: "Update successful", result });
      }
    );
  });
};

// Delete a beneficiary
crudsBeneficiaryObj.deleteBeneficiary = (beneficiary_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM beneficiaries WHERE beneficiary_id = ?",
      [beneficiary_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = crudsBeneficiaryObj;