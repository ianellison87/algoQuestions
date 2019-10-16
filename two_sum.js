//  O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length  - 1; i++) {
    const x = array[i];
    for (let j = i+1; j < array.length; j++) {
      const y = array[j];
      if (x + y === targetSum) {
        return [x , y].sort((a,b) => a - b);
      }
    }
  }
  return [];
}

// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  const nums = {}

  for (let i = 0; i < array.length; i++) {
    const potentialNum = targetSum - array[i];
    
    if (potentialNum in nums) {
      return [potentialNum , array[i]].sort((a,b) => a - b);
    } else {
      nums[array[i]] = true;
    }
  }
  return [];
}

function twoNumberSum(array, targetSum) {

}

// array = [1,5,11,-1,6,3]
// target sum = 10
// expected output = [11,-1]


