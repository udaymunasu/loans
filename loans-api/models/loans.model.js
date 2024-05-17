const mongoose = require("mongoose");

const laonSchema = new mongoose.Schema(
    {
        customerId: String,
        loantype: String,
        loanname: String,
        loanamount: Number,
        loanstatus: String,
        loanissuedate: {
            type: Date,
            default: Date.now(),
            required: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Loans", laonSchema);