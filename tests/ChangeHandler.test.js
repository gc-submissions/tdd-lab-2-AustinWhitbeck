const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {

  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  // TODO: Add additional tests below...


  ///** arrange **///

  // add one coin variables
  const changeHandler1 = new ChangeHandler(50);
  const changeHandler2 = new ChangeHandler(50);
  const changeHandler3 = new ChangeHandler(10);
  const changeHandler4 = new ChangeHandler(5);
  const changeHandler5 = new ChangeHandler(1);

  // add multiple coins variables
  const changeHandler6 = new ChangeHandler(41);

  // isPaymentSufficent variables
  const changeHandler7 = new ChangeHandler(25); // not enough
  const changeHandler8 = new ChangeHandler(25); // equal to
  const changeHandler9 = new ChangeHandler(5); // greater than

  // giveChange variables
  const changeHandler10 = new ChangeHandler(25); // return 1 quarter in the changeDue object
  const changeHandelerDue32 = new ChangeHandler(10); // return 32 cents as 1Q, 1N, 2P
  const changeHandlerNickel1 = new ChangeHandler(10); // return 10 cents 1D
  const changeHandlerDue27 = new ChangeHandler(27); // return 27 cents 1Q 2P
  const changeHandlerDue68 = new ChangeHandler(68); // return 68 cents 2Q 1D 1N 3P

  ///** act **///

  // add one coin tests
  changeHandler2.insertCoin('quarter');
  changeHandler3.insertCoin('dime');
  changeHandler4.insertCoin('nickel');
  changeHandler5.insertCoin('penny')

  // multiple calls on a function test
  changeHandler6.insertCoin('quarter');
  changeHandler6.insertCoin('dime');
  changeHandler6.insertCoin('nickel');
  changeHandler6.insertCoin('penny');

  // isPaymentSufficient functions
  changeHandler7.insertCoin('penny'); 
  changeHandler8.insertCoin('quarter');
  changeHandler9.insertCoin('nickel');

  // giveChange functions
    // quarters = 1 //
  changeHandler10.insertCoin('quarter');
  changeHandler10.insertCoin('quarter');
  changeHandler10.giveChange();

    // changeDue = 1Q, 1N, 2P
  changeHandelerDue32.insertCoin('dime');
  changeHandelerDue32.insertCoin('quarter');
  changeHandelerDue32.insertCoin('nickel');
  changeHandelerDue32.insertCoin('penny');
  changeHandelerDue32.insertCoin('penny');

    // changeDue = 1D
  changeHandlerNickel1.insertCoin('dime');
  changeHandlerNickel1.insertCoin('dime');

    // changeDue = 1Q 2P
  changeHandlerDue27.insertCoin('quarter');
  changeHandlerDue27.insertCoin('quarter');
  changeHandlerDue27.insertCoin('penny');
  changeHandlerDue27.insertCoin('penny');
  changeHandlerDue27.insertCoin('penny');
  changeHandlerDue27.insertCoin('penny');

    // changeDue = 2Q 1D 1N 3P
  changeHandlerDue68.insertCoin('quarter');
  changeHandlerDue68.insertCoin('quarter');
  changeHandlerDue68.insertCoin('quarter');
  changeHandlerDue68.insertCoin('quarter');
  changeHandlerDue68.insertCoin('dime');
  changeHandlerDue68.insertCoin('dime');
  changeHandlerDue68.insertCoin('nickel');
  changeHandlerDue68.insertCoin('nickel');
  changeHandlerDue68.insertCoin('penny');
  changeHandlerDue68.insertCoin('penny');
  changeHandlerDue68.insertCoin('penny');
  changeHandlerDue68.insertCoin('penny');
  changeHandlerDue68.insertCoin('penny');
  changeHandlerDue68.insertCoin('penny');
  

  ///** assert **///

  //  add one coin tests 
    test('Test amount due for changeHandler to equal 50', () => {
      expect(changeHandler1.amountDue).toEqual(50);
    })
    test('Add quarter to cashTendered, then cashTendered = 25', () => {
      expect(changeHandler2.cashTendered).toEqual(25)
    })
    test('Add dime, cashTendered = 10', () => {
      expect(changeHandler3.cashTendered).toEqual(10);
    })
    test('Add nickel, cashTendered = 5', () => {
      expect(changeHandler4.cashTendered).toEqual(5);
    })
    test('Add penny, cashTendered = 1', () => {
      expect(changeHandler5.cashTendered).toEqual(1);
    })
  
  // multiple calls on function test
    test('Test adding one of each coin. cashTendered = 41', () => {
      expect(changeHandler6.cashTendered).toEqual(41)
    })

  // isPaymentSufficient testing
    test('Test for cashTendered < amountDue, return false', () => {
      expect(changeHandler7.isPaymentSufficient()).toEqual(false);
    })
    test('Test for cashTendered == amountDue, return true', () => {
      expect(changeHandler8.isPaymentSufficient()).toEqual(true);
    })
    test('Test for cashTendered > amountDue, return true', () => {
      expect(changeHandler9.isPaymentSufficient()).toEqual(true);
    })

  ///// giveChange testing ///// 

    // one quarter in changeDue
      test(' 1 quarter if 50 cents put in, with a total of 25 cents due', () => {
        expect(changeHandler10.changeDue.quarters).toEqual(1)
      })
    // 1Q 1N 2P
      test(' changeDue = 1Q 1N 2P', () => {
        expect(changeHandelerDue32.giveChange()).toEqual(changeDue = {
          quarters: 1,
          dimes: 0,
          nickels: 1,
          pennies: 2
        })
      })
    // 1D
      test(' changeDue = 1D', () => {
        expect(changeHandlerNickel1.giveChange()).toEqual(changeDue = {
          quarters: 0,
          dimes: 1,
          nickels: 0,
          pennies: 0
        })
      })
    // changeDue = 1Q 2P
    test(' changeDue = 1Q 2P', () => {
      expect(changeHandlerDue27.giveChange()).toEqual(changeDue = {
        quarters: 1,
        dimes: 0,
        nickels: 0,
        pennies: 2
      })
    })
    // return 68 cents 2Q 1D 1N 3P
    test(' changeDue = 2Q 1D 1N 3P', () => {
      expect(changeHandlerDue68.giveChange()).toEqual(changeDue = {
        quarters: 2,
        dimes: 1,
        nickels: 1,
        pennies: 3
      })
    })
    


  /*
  Required Test Cases 
  constructor:
  amountDue is set based on an argument.
  cashTendered is set to zero.
    insertCoin:
      Inserting a quarter adds 25.
      Inserting a dime adds 10.
      Inserting a nickel adds 5.
      Inserting a penny adds 1.
      Calling function multiple times continues to add on to the amount.
    isPaymentSufficient:
      Returns true if cashTendered more than amountDue.
      Returns false if cashTendered less than amountDue.
      Returns true if cashTendered equal to amountDue.
    giveChange:
      32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
      10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.
      27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.
      68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.

  */

});