[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11974284&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency list to an adjacency matrix for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

Looking at the initialization matrix I came to the conclusion that this would run in O(n^2) time as we are filling an n x n matrix with zeroes before we can get started. The nested loop is where things get a bit trickier. Whereas the outer loop runs from 0 to maxNode, the inner loop may also have to go through every matrix entry as well once again creating an O(n^2) time complexity in the worst case. Putting it all together we get O(2n^2). Taking out the constant factor leaves us with a final answer of simply O(n^2).
