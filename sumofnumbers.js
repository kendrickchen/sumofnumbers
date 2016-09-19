/**
 * Solving Experience E26
 * Created by kenchen on 9/18/16.
 */

const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i += 1;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecurse(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecurse(nums.splice(1, nums.length));
}

console.log(sumRecurse(testNums));

function sumUnderscore(nums) {
  return _.reduce(nums, function memorize(memo, num) { return memo + num; }, 0);
}

console.log(sumUnderscore(testNums));
