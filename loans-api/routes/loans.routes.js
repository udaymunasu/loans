var express = require('express');
var router = express.Router();

const loanModel = require("../models/loans.model")


/* create home page. */
router.post("/applyloan", async (req, res) => {
    try {
        const params = req.body;
        const loan = new loanModel();

        console.log("loan", loan);
        loan.customerId = params.customerId;
        loan.loantype = params.loantype;
        loan.loanname = params.loanname;
        loan.loanamount = params.loanamount;
        loan.loanstatus = params.loanstatus;
        const newLoan = await loan.save();
        console.log("newLoan", newLoan)
        if (newLoan) {
            res.status(201).send({
                success: true,
                message: "New loan created",
                loan: loan,
            })

        }

    } catch (error) {
        const message = error.message;
        res.status(400).send({
            success: false,
            message
        });
    }
})

router.get('/list', async function (req, res, next) {
    try {
        const loans = await loanModel.find();

        return res.status(200).send({ loans: loans });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send({ message: "Error in the request" });
    }
});

// Get by ID route
router.get('/get/:id', async function (req, res, next) {
    try {
        const loanId = req.params.id;

        const loan = await loanModel.findById(loanId);

        if (loan) {
            return res.status(200).send({ loan: loan });
        } else {
            return res.status(404).send({ message: "Loan not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send({ message: "Error in the request" });
    }
});

router.get('/getbycustomer/:customerId', async function (req, res, next) {
    try {

        const loan = await loanModel.find({ customerId: req.params.customerId });

        if (loan) {
            return res.status(200).send({ loan: loan });
        } else {
            return res.status(404).send({ message: "Loan not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send({ message: "Error in the request" });
    }
});

router.put('/edit/:id', async function (req, res, next) {
    try {
        const loanId = req.params.id;
        const params = req.body;

        const updatedLoan = await loanModel.findByIdAndUpdate(loanId, params, { new: true });

        if (updatedLoan) {
            return res.status(200).send({ user: updatedLoan });
        } else {
            return res.status(404).send({ message: "Loan not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send({ message: "Error in the request" });
    }
});


module.exports = router;