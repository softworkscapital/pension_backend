const express = require('express');
const BeneficiariesRouter = express.Router();
const crudsBeneficiaryObj = require('../cruds/beneficiaries'); 

BeneficiariesRouter.post('/', async (req, res) => {
    try {
      const {
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
      } = req.body;
  
      const result = await crudsBeneficiaryObj.postBeneficiary(
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
      );
  
      res.status(result.status).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });


BeneficiariesRouter.get('/', (req, res) => {
  crudsBeneficiaryObj.getBeneficiaries()
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json({ error: err.message }));
});


BeneficiariesRouter.get('/member/:memberId', (req, res) => {
  crudsBeneficiaryObj.getBeneficiaryByMemberId(req.params.memberId)
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json({ error: err.message }));
});


BeneficiariesRouter.put('/:id', (req, res) => {
  crudsBeneficiaryObj.updateBeneficiary(req.params.id, req.body)
    .then(result => res.status(result.status).json(result))
    .catch(err => res.status(500).json({ error: err.message }));
});

BeneficiariesRouter.delete('/:id', (req, res) => {
  crudsBeneficiaryObj.deleteBeneficiary(req.params.id)
    .then(result => res.status(200).json({ message: "Beneficiary deleted successfully" }))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = BeneficiariesRouter;