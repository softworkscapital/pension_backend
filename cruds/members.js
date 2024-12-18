require("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

crudsObj.postMember = (
  membership_id,
  company_id,
  company_name,
  contributed_principal_balance,
  ecnumber,
  account_type,
  account_category,
  signed_on,
  name,
  surname,
  idnumber,
  sex,
  dob,
  address,
  house_number_and_street_name,
  surbub,
  city,
  country,
  lat_cordinates,
  long_cordinates,
  phone,
  username,
  email,
  password,
  employer,
  workindustry,
  workaddress,
  workphone,
  workphone2,
  nok1name,
  nok1surname,
  nok1relationship,
  nok1_id_number,
  nok1_email,
  nok1phone,
  nok2name,
  nok2surname,
  nok2relationship,
  nok2_id_number,
  nok2_email,
  nok2phone,
  creditstanding,
  credit_bar_rule_exception,
  membershipstatus,
  defaultsubs,
  sendmail,
  sendsms,
  product_code,
  cost_price,
  selling_price,
  payment_style,
  bp_number,
  vat_number,
  profilePic,
  confirmation_from_employer_pic,
  identity_document_pic,
  address_proof_pic,
  application_form_pic
) => {
  return new Promise((resolve, reject) => {
    // Check if required fields are not null
    if (!username) {
      return reject(new Error("Username cannot be null"));
    }

    pool.query(
      `INSERT INTO members (
              membership_id,
              company_id,
              company_name,
              contributed_principal_balance,
              ecnumber,
              account_type,
              account_category,
              signed_on,
              name,
              surname,
              idnumber,
              sex,
              dob,
              address,
              house_number_and_street_name,
              surbub,
              city,
              country,
              lat_cordinates,
              long_cordinates,
              phone,
              username,
              email,
              password,
              employer,
              workindustry,
              workaddress,
              workphone,
              workphone2,
              nok1name,
              nok1surname,
              nok1relationship,
              nok1_id_number,
              nok1_email,
              nok1phone,
              nok2name,
              nok2surname,
              nok2relationship,
              nok2_id_number,
              nok2_email,
              nok2phone,
              creditstanding,
              credit_bar_rule_exception,
              membershipstatus,
              defaultsubs,
              sendmail,
              sendsms,
              product_code,
              cost_price,
              selling_price,
              payment_style,
              bp_number,
              vat_number,
              profilePic,
              confirmation_from_employer_pic,
              identity_document_pic,
              address_proof_pic,
              application_form_pic
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        membership_id,
        company_id,
        company_name,
        contributed_principal_balance,
        ecnumber,
        account_type,
        account_category,
        signed_on,
        name,
        surname,
        idnumber,
        sex,
        dob,
        address,
        house_number_and_street_name,
        surbub,
        city,
        country,
        lat_cordinates,
        long_cordinates,
        phone,
        username,
        email,
        password,
        employer,
        workindustry,
        workaddress,
        workphone,
        workphone2,
        nok1name,
        nok1surname,
        nok1relationship,
        nok1_id_number,
        nok1_email,
        nok1phone,
        nok2name,
        nok2surname,
        nok2relationship,
        nok2_id_number,
        nok2_email,
        nok2phone,
        creditstanding,
        credit_bar_rule_exception,
        membershipstatus,
        defaultsubs,
        sendmail,
        sendsms,
        product_code,
        cost_price,
        selling_price,
        payment_style,
        bp_number,
        vat_number,
        profilePic,
        confirmation_from_employer_pic,
        identity_document_pic,
        address_proof_pic,
        application_form_pic,
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



crudsObj.getMembers = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM members", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};



// Get members by status
crudsObj.getMembersByStatus = (status) => {
  return new Promise((resolve, reject) => {
      // Use parameterized query to prevent SQL injection
      pool.query("SELECT * FROM members WHERE membershipstatus = ?", [status], (err, results) => {
          if (err) {
              return reject(err);
          }
          return resolve(results);
      });
  });
};



crudsObj.getMembershipById = (membership_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM members WHERE membership_id = ?",
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

crudsObj.updateMember = (membership_id, updatedValues) => {
  const {
    company_id,
    company_name,
    contributed_principal_balance,
    ecnumber,
    account_type,
    account_category,
    signed_on,
    name,
    surname,
    idnumber,
    sex,
    dob,
    address,
    house_number_and_street_name,
    surbub,
    city,
    country,
    lat_cordinates,
    long_cordinates,
    phone,
    username,
    email,
    password,
    employer,
    workindustry,
    workaddress,
    workphone,
    workphone2,
    nok1name,
    nok1surname,
    nok1relationship,
    nok1phone,
    nok2name,
    nok2surname,
    nok2relationship,
    nok2phone,
    creditstanding,
    credit_bar_rule_exception,
    membershipstatus,
    defaultsubs,
    sendmail,
    sendsms,
    product_code,
    cost_price,
    selling_price,
    payment_style,
    bp_number,
    vat_number,
    profilePic,
    confirmation_from_employer_pic,
        identity_document_pic,
        address_proof_pic,
        application_form_pic,
  } = updatedValues;

  console.log("Updated values:", updatedValues);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE members SET 
                company_id = ?, 
                company_name = ?, 
                contributed_principal_balance = ?, 
                ecnumber = ?, 
                account_type = ?, 
                account_category = ?, 
                signed_on = ?, 
                name = ?, 
                surname = ?, 
                idnumber = ?, 
                sex = ?, 
                dob = ?, 
                address = ?, 
                house_number_and_street_name = ?, 
                surbub = ?, 
                city = ?, 
                country = ?, 
                lat_cordinates = ?, 
                long_cordinates = ?, 
                phone = ?, 
                username = ?, 
                email = ?, 
                password = ?, 
                employer = ?, 
                workindustry = ?, 
                workaddress = ?, 
                workphone = ?, 
                workphone2 = ?, 
                nok1name = ?, 
                nok1surname = ?, 
                nok1relationship = ?, 
                nok1phone = ?, 
                nok2name = ?, 
                nok2surname = ?, 
                nok2relationship = ?, 
                nok2phone = ?, 
                creditstanding = ?, 
                credit_bar_rule_exception = ?, 
                membershipstatus = ?, 
                defaultsubs = ?, 
                sendmail = ?, 
                sendsms = ?, 
                product_code = ?, 
                cost_price = ?, 
                selling_price = ?, 
                payment_style = ?, 
                bp_number = ?, 
                vat_number = ?, 
                profilePic = ?,
                confirmation_from_employer_pic=?,
        identity_document_pic=?,
        // address_proof_pic=?,
        application_form_pic=?,
            WHERE membership_id = ?`,
      [
        company_id,
        company_name,
        contributed_principal_balance,
        ecnumber,
        account_type,
        account_category,
        signed_on,
        name,
        surname,
        idnumber,
        sex,
        dob,
        address,
        house_number_and_street_name,
        surbub,
        city,
        country,
        lat_cordinates,
        long_cordinates,
        phone,
        username,
        email,
        password,
        employer,
        workindustry,
        workaddress,
        workphone,
        workphone2,
        nok1name,
        nok1surname,
        nok1relationship,
        nok1phone,
        nok2name,
        nok2surname,
        nok2relationship,
        nok2phone,
        creditstanding,
        credit_bar_rule_exception,
        membershipstatus,
        defaultsubs,
        sendmail,
        sendsms,
        product_code,
        cost_price,
        selling_price,
        payment_style,
        bp_number,
        vat_number,
        profilePic,
        confirmation_from_employer_pic,
        identity_document_pic,
        address_proof_pic,
        application_form_pic,
        membership_id,
      ],
      (err, result) => {
        if (err) {
          console.error("Error updating member:", err);
          return reject(err);
        }
        if (result.affectedRows === 0) {
          return resolve({
            status: "404",
            message: "Member not found or no changes made",
          });
        }
        return resolve({ status: "200", message: "Update successful", result });
      }
    );
  });
};

crudsObj.deleteMember = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM members WHERE membership_id = ?",
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
