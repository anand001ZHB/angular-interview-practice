import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-sum',
  templateUrl: './two-sum.component.html',
  styleUrls: ['./two-sum.component.scss']
})
export class TwoSumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Input
    const nums = [2, 7, 8, 6];
    const target = 9;

    // Get result
    const result = this.twoSum(nums, target);

    // Inject result into HTML
    const output = document.getElementById("output");
    if (output) {
      output.innerText = `Result = [${result}], Numbers = ${nums[result[0]]} + ${nums[result[1]]} = ${target}`;
    }


  }

  twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums?.length; i++) {
      const expectedTarget = target - nums[i];
      if (map?.has(expectedTarget)) {

        return [map?.get(expectedTarget)!, i];
      }
      map?.set(nums[i], i);
    }
    return [];
  }

  // Example 1:

  // Input: nums = [2,7,11,15], target = 9
  // Output: [0,1]
  // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  // Example 2:

  // Input: nums = [3,2,4], target = 6
  // Output: [1,2]

  // Example 3:

  // Input: nums = [3,3], target = 6
  // Output: [0,1]

}
