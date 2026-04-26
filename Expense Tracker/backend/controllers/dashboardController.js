const {Types} = require("mongoose");

// Dashboard Data
exports.getDashboardData = async (req, res) => {
    try {
        const userId = req.user.id
        const userObjectId = new Types.ObjectId(String(userId))

        // Fetch total income & Expenses
        const totalIncome = await Income.aggregate([
            {$match: {userId: userObjectId}},
            {$group: {_id: null, total: {$sum: "$amount"}}}
        ])

        console.log(totalIncome)
    } catch (err) {

    }
}