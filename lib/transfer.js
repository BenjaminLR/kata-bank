const request = require('request')

class Transfer {
  constructor () {

  }

  makeTransfer (amount) {
    request.post({ url: 'http://test', form: { amount: amount } }, (err, res, body) => {
      try {
        return 200
      } catch (e) {
        return e, err
      }
    })
  }
}

module.exports = Transfer
