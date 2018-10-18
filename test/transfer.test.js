const { expect } = require('chai')
const sinon = require('sinon')
const request = require('request')

// const Account = require('../lib/account')
const Transfer = require('../lib/transfer')

describe('Transfer', () => {
  describe('callService', () => {
    it('test should call callTransfer once', () => {
      // Given
      const transfer = new Transfer()
      const mock = sinon.mock(request)
      const transferAmount = 10
      // When
      const expectation = mock.expects('post').once()
      transfer.makeTransfer(transferAmount)

      // Then
      expectation.verify()
      mock.restore()
    })
    it('test that makeTransfer calls with the correct parameter', () => {
      // Given
      const transfer = new Transfer()
      const mock = sinon.mock(request)
      const transferAmount = 10
      // When
      const expectation = mock.expects('post').withArgs({ url: 'http://test', form: { amount: transferAmount } })
      transfer.makeTransfer(transferAmount)

      // Then
      expectation.verify()
      expect(expectation)
      mock.restore()

    })
    it('test that makeTransfer return status code 200 when format is ok', () => {
      // Given
      const transfer = new Transfer()
      const stub = sinon.stub(request, "post")

      //When
      stub.withArgs({ url: 'http://test', form: { amount: 10 } }).returns(200)
      const result = transfer.makeTransfer(10)

      // Then
      expect(result).to.equal(200)
      console.log(result)
    })
  })
})
