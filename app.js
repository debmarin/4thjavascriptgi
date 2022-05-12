//easy 
let Input = [1 , 4 , 7]  

function average(array){
    let total = array.reduce((a,b) => a + b, 0);
    return total / array.length;
}

console.log(average(Input))

//medium
function findElement(nums,target){
    return nums.indexOf(target)
}
console.log(findElement([4,5,6,7,0,1,2],9));

//hard
let colorchange = function(clicked) {
    if (clicked == "Red") {
      document.body.classList.remove("White");
      document.body.classList.add("Red");
    }
    if (clicked == "White") {
      document.body.classList.remove("Red");
      document.body.classList.add("White");
    }
  }

  //very hard
  const coinChange = (coins, amount) => {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0; 
    for (let coin of coins) { 
      for (let i = coin; i <= amount; i++) { 
        dp[i] = Math.min(dp[i], dp[i - coin] + 1); 
      }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
  };
  console.log(coinChange([2,4,7],6))

/*console
4
-1
2 
 */
