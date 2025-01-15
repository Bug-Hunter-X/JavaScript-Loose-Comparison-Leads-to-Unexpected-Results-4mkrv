# JavaScript Loose Comparison Bug

This repository demonstrates a common JavaScript bug caused by loose comparison (==) instead of strict comparison (===).

## Bug Description
The `foo` function incorrectly handles `null` values due to loose comparison.  When `x` is `null`, the loose comparison `x == null` evaluates to `true`, resulting in the function returning 0 even though it should ideally throw an error or handle null differently.

## How to Reproduce
1. Clone the repository.
2. Open `bug.js`.
3. Run the code (e.g., using Node.js): `node bug.js`.
4. Observe that `foo(null)` returns 0 instead of throwing an error or handling null appropriately.

## Solution
The solution involves using strict equality (===) to ensure that the function correctly distinguishes between different data types. This avoids the unexpected behavior caused by loose comparison. Refer to `bugSolution.js` for the corrected code.

## Lesson Learned
Always use strict equality (===) in JavaScript to avoid unintended type coercion, which is a frequent source of subtle errors. This helps to produce more reliable and predictable code.