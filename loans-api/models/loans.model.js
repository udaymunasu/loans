const mongoose = require("mongoose");

const laonSchema = new mongoose.Schema(
    {
        customerId: String,
        loantype: Array,
        loanname: String,
        loanamount: Number,
        loanstatus: String,
        loanissuedate: Date,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Loans", laonSchema);