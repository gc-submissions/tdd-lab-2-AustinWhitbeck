/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
        this.changeDue = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
        }
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */


    
    insertCoin(type) {
      // TODO  
        if (type === 'quarter'){
          this.cashTendered = this.cashTendered += 25;
        } else if (type === 'dime') {
          this.cashTendered = this.cashTendered += 10;
        } else if (type === 'nickel'){
          this.cashTendered = this.cashTendered += 5;
        } else if (type === 'penny'){
          this.cashTendered = this.cashTendered += 1;
        } 
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      // TODO
      if (this.amountDue > this.cashTendered){
        return false
      } else if (this.amountDue == this.cashTendered){
        return true
      } else if (this.amountDue < this.cashTendered){
        return true
      }

    }

    giveChange() {
        // TODO return the correct change in the following format...

      let currentChangeDueLeft = this.cashTendered - this.amountDue;
    

      /// variable inside the fucntion instead of in the constructor ///

      // let changeDue = {
      //   quarters: 0,
      //   dimes: 0,
      //   nickels: 0,
      //   pennies: 0
      //   };
    

    // while loop using the constructor variable //
      while (currentChangeDueLeft > 0){
        
            if (currentChangeDueLeft >= 25){
              currentChangeDueLeft -= 25;
              // this.changeDue.quarters = this.changeDue.quarters + 1;
              this.changeDue.quarters++;
            } else if  (currentChangeDueLeft >= 10){
              currentChangeDueLeft -= 10;
              // this.changeDue.dimes = this.changeDue.dimes + 1;
              this.changeDue.dimes++;
            } else if (currentChangeDueLeft >= 5){
              currentChangeDueLeft -= 5;
              // this.changeDue.nickels = this.changeDue.nickels + 1;
              this.changeDue.nickels++;
            } else {
              currentChangeDueLeft -= 1;
              // this.changeDue.pennies = this.changeDue.pennies + 1;
              this.changeDue.pennies++;
            }

            
          }
          return this.changeDue;

          



          /// not using constructor variable ///

          // if (currentChangeDueLeft >= 25){
          //   currentChangeDueLeft - 25;
          //   changeDue.quarters = changeDue.quarters ++;
          // } else if  (currentChangeDueLeft >= 10){
          //   currentChangeDueLeft - 10;
          //   changeDue.dimes = changeDue.dimes ++;
          // } else if (currentChangeDueLeft >= 5){
          //   currentChangeDueLeft - 5;
          //   changeDue.nickels = changeDue.nickels ++;
          // } else if (currentChangeDueLeft >= 1) {
          //   currentChangeDueLeft - 1;
          //   changeDue.pennies = changeDue.pennies ++ ;
          // }

          // return changeDue;
      }
        





       
    }
  


module.exports = ChangeHandler;