const express = require("express");
require("dotenv").config();
const cors = require("cors");

const https = require("https");

const path = require("path");
const fs = require("fs");

const PORT = process.env.APPPORT || 3003;
// // Route path
const MemberRouter =require("./routes/members");
const ContributionTransactionsRouter =require("./routes/contribution_transactions");
const PayOutRouter =require("./routes/pay_outs");
const PensionProductRouter =require("./routes/pension_products");
const MemberProductRouter =require("./routes/member_products");
const currencyRouter =require("./routes/currency");
const userRouter =require("./routes/users");
const BeneficiariesRouter = require("./routes/beneficiaries");




const app = express();
app.use(express.json());
app.use(cors());

// //App Route Usage
app.use("/members", MemberRouter);
app.use("/contribution_transactions", ContributionTransactionsRouter);
app.use("/pay_outs", PayOutRouter);
app.use("/pension_products", PensionProductRouter);
app.use("/member_products", MemberProductRouter);
app.use("/currency", currencyRouter);
app.use("/users", userRouter);
app.use("/beneficiaries", BeneficiariesRouter);



app.get("/", (req, res) => {
  res.send("pension_app");
});

// app.post('/driver/login', async (req, res) => {
//     const { email, password } = req.body;

//     // Fetch the user from the database
//     const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
//     const user = result.rows[0];

//     if (!user) {
//         return res.status(400).json({ message: 'User not found' });
//     }                   

//     // Compare the hashed password
//     if (user.password === password) { // Assuming user.password is already hashed
//         return res.json({ account_type: user.account_type, message: 'Login successful' });
//     } else {
//         return res.status(400).json({ message: 'Invalid password' });
//     }
// });

// const options = {
//   cert: fs.readFileSync('/etc/letsencrypt/live/srv547457.hstgr.cloud/fullchain.pem'),
//   key: fs.readFileSync('/etc/letsencrypt/live/srv547457.hstgr.cloud/privkey.pem')
// };

// https.createServer(options, app).listen(process.env.APPPORT || '3010', () => {
//   console.log('app is listening to port' + process.env.APPPORT);
// });

app.listen(PORT, () => {
  console.log("app is listening to port" + " " + PORT);
});
