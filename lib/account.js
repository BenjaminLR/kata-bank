class Account {
  constructor (initBalance = 0) {
    this.balance = initBalance
    this.transactions = []
  }

  getBalance () {
    return this.balance
  }

  doDeposit (deposit) {
    this.balance += deposit
    this.writeTransaction(deposit)
  }

  doWithdraw (withdraw) {
    this.balance -= withdraw
    this.writeTransaction(withdraw, false)
  }

  writeTransaction (amount, positive = true) {
    if (!positive) {
      amount = -amount
    }

    this.transactions.push('undefined || ' + this.formatAmount(amount) + ' || ' + this.formatAmount(this.balance))
  }

  formatAmount (amount) {
    return amount.toLocaleString('en-US', { minimumFractionDigits: 2 })
  }

  displayTransactions () {
    return this.transactions || null
  }
}

module.exports = Account
