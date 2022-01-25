// Two Sums Algorithm

nums = [1,3,5,7,13]
target = 12

let twoSum = function (nums, target) {

    const previousValues = {}
    for (let i =0;  i < nums.length; i++ ) {

        const currentNumber = nums[i];
        const neededValue = target - currentNumber;
        const index2 = previousValues[neededValue];
        if (index2 != null) {
            return [index2 , i]
        } else {
            previousValues[currentNumber] = i
        }
    }
}
