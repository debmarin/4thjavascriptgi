//easy 
let Input = [1 , 4 , 7]  

function average(array){
    let sum = array.reduce((a,b) => a + b, 0);
    return sum / array.length;
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
  let coinChange = (coins, total) => {
    let dp = Array(total + 1).fill(Infinity);
    dp[0] = 0; 
    for (let coin of coins) { 
      for (let i = coin; i <= total; i++) { 
        dp[i] = Math.min(dp[i], dp[i - coin] + 1); 
      }
    }
    return dp[total] === Infinity ? -1 : dp[total];
  };
  console.log(coinChange([2,4,7],6))

/*console
4
-1
2 
 */
