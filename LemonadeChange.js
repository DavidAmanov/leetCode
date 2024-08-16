// At a lemonade stand, each lemonade costs $5. Customers are standing in a
// queue to buy from you and order one at a time (in the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
// You must provide the correct change to each customer so that the net transaction is
// that the customer pays $5.

// Note that you do not have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays,
// return true if you can provide every customer with the correct change, or false otherwise.

var lemonadeChange = function (bills) {
  if (bills[0] > 5) {
    return false;
  }
  let balance = new Map();
  balance.set(5, 0);
  balance.set(10, 0);
  balance.set(20, 0);
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      balance.set(5, balance.get(5) + 1);
    } else if (bills[i] === 10) {
      if (balance.get(5) >= 1) {
        balance.set(5, balance.get(5) - 1);
        balance.set(10, balance.get(10) + 1);
      } else {
        return false;
      }
    } else if (bills[i] === 20) {
      if (balance.get(10) >= 1 && balance.get(5) >= 1) {
        balance.set(10, balance.get(10) - 1);
        balance.set(5, balance.get(5) - 1);
        balance.set(20, balance.get(20) + 1);
      } else if (balance.get(5) >= 3) {
        balance.set(5, balance.get(5) - 3);
        balance.set(20, balance.get(20) + 1);
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
