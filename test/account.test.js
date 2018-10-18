const { expect } = require('chai')
const sinon = require('sinon')

const Account = require('../lib/account')

describe('Account', () => {
  describe('getBalance', () => {
    it('should return 0 balance when account has null balance', () => {
      // Given
      const account = new Account()
      const nullBalance = 0

      // When
      const result = account.getBalance()

      // Then
      expect(result).to.equal(nullBalance)
    })
    it('should return 10 balance when account has 10 euros', () => {
      // Given
      const account = new Account(10)
      const balanceToTenEuros = 10

      // When
      const result = account.getBalance()

      // Then
      expect(result).to.equal(balanceToTenEuros)
    })
  })
  describe('doDeposit', () => {
    it('should change balance to 5 when add 5 euros on a 0 credit account', () => {
      // Given
      const account = new Account()
      const deposit = 5
      const finalBalance = account.getBalance() + deposit

      // When
      account.doDeposit(deposit)
      const result = account.getBalance()

      // Then
      expect(result).to.equal(finalBalance)
    })
    it('should change balance to 15 when add 5 euros on a 10 credit account', () => {
      // Given
      const account = new Account(10)
      const deposit = 5
      const finalBalance = account.getBalance() + deposit

      // When
      account.doDeposit(deposit)
      const result = account.getBalance()

      // Then
      expect(result).to.equal(finalBalance)
    })
    it('should change balance to 25 when add 15 euros on a 10 credit account', () => {
      // Given
      const account = new Account(10)
      const deposit = 15
      const finalBalance = account.getBalance() + deposit

      // When
      account.doDeposit(deposit)
      const result = account.getBalance()

      // Then
      expect(result).to.equal(finalBalance)
    })
  })
  describe('doWithdraw', () => {
    it('should change balance to 5 when withdraw 5 euros on a 10 credit account', () => {
      // Given
      const account = new Account(10)
      const withdraw = 5
      const finalBalance = account.getBalance() - withdraw

      // When
      account.doWithdraw(withdraw)
      const result = account.getBalance()

      // Then
      expect(result).to.equal(finalBalance)
    })
    it('should change balance to 5 when withdraw 15 euros on a 20 credit account', () => {
      // Given
      const account = new Account(20)
      const withdraw = 15
      const finalBalance = account.getBalance() - withdraw

      // When
      account.doWithdraw(withdraw)
      const result = account.getBalance()

      // Then
      expect(result).to.equal(finalBalance)
    })
    it('should change balance to 15 when withdraw 10 euros on a 25 credit account', () => {
      // Given
      const account = new Account(25)
      const withdraw = 10
      const finalBalance = account.getBalance() - withdraw

      // When
      account.doWithdraw(withdraw)
      const result = account.getBalance()

      // Then
      expect(result).to.equal(finalBalance)
    })
    it('should change balance to -15 when withdraw 40 euros on a 25 credit account', () => {
      // Given
      const account = new Account(25)
      const withdraw = 40
      const finalBalance = account.getBalance() - withdraw

      // When
      account.doWithdraw(withdraw)
      const result = account.getBalance()

      // Then
      expect(result).to.equal(finalBalance)
    })
  })
  describe('displayTransactions', () => {
    it('should display transaction like `undefined || -500.00 || 2,500.00` when call displayTransaction after a transaction', () => {
      // Given
      const account = new Account(3000)
      const withdraw = 500
      const transaction = ['undefined || -500.00 || 2,500.00']

      // When
      account.doWithdraw(withdraw)
      const result = account.displayTransactions()

      // Then
      expect(result).to.deep.equal(transaction)
    })
    it('should display transaction like `undefined || 2,000.00 || 3,000.00` when call displayTransaction after a transaction', () => {
      // Given
      const account = new Account(1000)
      const deposit = 2000
      const transaction = ['undefined || 2,000.00 || 3,000.00']

      // When
      account.doDeposit(deposit)
      const result = account.displayTransactions()

      // Then
      expect(result).to.deep.equal(transaction)
    })
    it('should display 2 transactions when call displayTransaction after 2 transactions', () => {
      // Given
      const account = new Account(1000)
      const deposit = 2000
      const withdraw = 500
      const transactions = ['undefined || 2,000.00 || 3,000.00', 'undefined || -500.00 || 2,500.00']

      // When
      account.doDeposit(deposit)
      account.doWithdraw(withdraw)
      const result = account.displayTransactions()

      // Then
      expect(result).to.deep.equal(transactions)
    })
  })
})
describe.skip('Transaction', () => {
  describe('doTransaction', () => {
    it('should return 100 when make a transaction of -500 with an account with 600 init balance', () => {
      // Given

      const account = new Account(600)
      const transactionValue = 500
      const transaction = '14/01/2012 || -500.00 || 2500.00'

      // When
      account.doWithdraw(withdraw)
      const result = account.displayTransactions()

      // Then
      expect(result).to.equal(transaction)
    })
  })
})
