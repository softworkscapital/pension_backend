const express = require("express");
const MemberRouter = express.Router();
const MembersDbOperations = require("../cruds/members");

MemberRouter.post("/", async (req, res, next) => {
  try {
    let postedValues = req.body;

    // Destructure the posted values
    let {
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
    } = postedValues;

    // Validate required fields
    if (!username || !email || !name || !surname) {
      return res.status(400).json({ error: "Username, email, name, and surname are required." });
    }

    // Call the database operation to post member
    let results = await MembersDbOperations.postMember(
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
      nok2relationship, // Ensure this matches the destructured variable
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
    );

    // Send back the results from the database
    res.json(results);
  } catch (e) {
    console.error(e); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
});




MemberRouter.get("/", async (req, res, next) => {
  try {
    let results = await MembersDbOperations.getMembers();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});



// Route to get members by status
MemberRouter.get('/members/:status', async (req, res) => {
  const status = req.params.status;
  console.log('Status received:', status); // Log the status

  try {
      const members = await MembersDbOperations.getMembersByStatus(status);
      console.log('Members found:', members); // Log the members found
      res.status(200).json(members);
  } catch (error) {
      console.error('Error fetching members by status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


MemberRouter.get("/:id", async (req, res, next) => {
  try {
    let membership_id = req.params.id;
    let result = await MembersDbOperations.getMembershipById(membership_id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

MemberRouter.put("/:membership_id", async (req, res) => {
  const membership_id = req.params.membership_id; // Ensure this matches the route
  const updatedValues = req.body;

  try {
    const result = await MembersDbOperations.updateMember(
      membership_id,
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

MemberRouter.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let result = await MembersDbOperations.deleteMember(id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = MemberRouter;
