import Transaction from '../../models/transaction.js';

// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ 
      user: req.user.id 
    });
    
    res.status(200).json({
      status: 'success',
      results: transactions.length,
      data: transactions,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Error retrieving transactions',
      error: err.message,
    });
  }
};

export default getAllTransactions;