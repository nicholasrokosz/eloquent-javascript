# Ch. 3 — Functions

## Author's Summary

This chapter taught you how to write your own functions. The function keyword, when used as an expression, can create a function value. When used as a statement, it can be used to declare a binding and give it a function as its value. Arrow functions are yet another way to create functions.

```
// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;
```

A key aspect in understanding functions is understanding scopes. Each block creates a new scope. Parameters and bindings declared in a given scope are local and not visible from the outside. Bindings declared with var behave differently—they end up in the nearest function scope or the global scope.

Separating the tasks your program performs into different functions is helpful. You won’t have to repeat yourself as much, and functions can help organize a program by grouping code into pieces that do specific things.

## Takeaways

- defining a function
  - functions have a set of **parameters** (in this case, only x) & a **body**, which contains the statements that are to be executed when the function is called

  - some functions produce a value, such as `power()` & `square()`, & some don’t, such as `makeNoise()`, whose only result is a **side effect** (see example functions in book)
  - a `return` statement determines the value the function returns
  - a `return` keyword without an expression after it will cause the function to return undefined

- bindings & scopes
  - each binding has a **scope**, which is the part of the program in which the binding is visible

  - for bindings defined outside of any function or block, the scope is the whole program—you can refer to these **global** bindings wherever you want
  - bindings declared with `let` & `const` are **local** to the block that they are declared in
  - each local scope can also see all the local scopes that contain it, & all scopes can see the global scope — this approach to binding visibility is called **lexical scoping**

- declaration notation
    ```
    function square(x) {
      return x * x;
    };
    ```
  - this is a **function declaration**
  
  - function declarations are not part of the regular top-to-bottom flow of control — they are conceptually moved to the top of their scope & can be used by all the code in that scope

- arrow functions
  - arrow functions were added in 2015, mostly to make it possible to write small function expressions in a less verbose way

- the call stack
  - the place where the computer stores this context is the **call stack**
  
  - every time a function is called, the current context is stored on top of this stack
  - when a function returns, it removes the top context from the stack & uses that context to continue execution

- optional arguments
  - if you pass too few arguments, the missing parameters get assigned the value `undefined`
  
  - e.g. this minus function tries to imitate the `-` operator by acting on either one or two arguments:
    ```
    function minus(a, b) {
      if (b === undefined) return -a;
      else return a - b;
    }
    ```
  - if you write an `=` operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given

- closure
  - being able to reference a specific instance of a local binding in an enclosing scope is called **closure**
  
  - a function that references bindings from local scopes around it is called **a closure**
  - e.g.
    ```
    function multiplier(factor) {
      return number => number * factor;
    }

    let twice = multiplier(2);
    console.log(twice(5));
    // → 10
    ```
  - think of function values as containing both the code in their body & the environment in which they are created
  - when called, the function body sees the environment in which it was created, not the environment in which it is called

- recursion
  - a function that calls itself is called **recursive**
  
  - worth noting: running through a simple loop is generally cheaper than calling a function multiple times
  - >The dilemma of speed versus elegance is an interesting one. You can see it as a kind of continuum between human-friendliness and machine-friendliness. Almost any program can be made faster by making it bigger and more convoluted. The programmer has to decide on an appropriate balance.
  - worrying about efficiency can be a distraction — always start by writing something that’s correct & easy to understand
  - recursion is best for problems that require exploring or processing several “branches”, each of which might branch out again into even more branches
  - e.g.
    ```
    function findSolution(target) {
      function find(current, history) {
        if (current == target) {
          return history;
        } else if (current > target) {
          return null;
        } else {
          return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
      }
      return find(1, "1");
    }

    console.log(findSolution(24));
    // → (((1 * 3) + 5) * 3)
    ```
  
- growing functions
  - how difficult it is to find a good name for a function is a good indication of how clear a concept it is that you’re trying to wrap
  
  - a useful principle is to not add cleverness unless you are absolutely sure you’re going to need it

- functions & side effects
  - functions can be roughly divided into those that are called for their side effects & those that are called for their return value
  
  - (though it is definitely also possible to both have side effects and return a value)
  - functions that create values are easier to combine in new ways than functions that directly perform side effects
  - a **pure** function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code
    - for example, it doesn’t read global bindings whose value might change
  - a pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else)