# Ch. 2 — Program Structure

## Author's Summary

>You now know that a program is built out of statements, which themselves sometimes contain more statements. Statements tend to contain expressions, which themselves can be built out of smaller expressions.
>
>Putting statements after one another gives you a program that is executed from top to bottom. You can introduce disturbances in the flow of control by using conditional (if, else, and switch) and looping (while, do, and for) statements.
>
>Bindings can be used to file pieces of data under a name, and they are useful for tracking state in your program. The environment is the set of bindings that are defined. JavaScript systems always put a number of useful standard bindings into your environment.
>
>Functions are special values that encapsulate a piece of program. You can invoke them by writing functionName(argument1, argument2). Such a function call is an expression and may produce a value.

## Takeaways

- expressions & statements
  - a fragment of code that produces a value is called an **expression**
  
  - expressions : sentence fragments :: **statements** : full sentences
  - a **program** is a list of statements
  - "A statement stands on its own, so it amounts to something only if it affects the world. It could display something on the screen—that counts as changing the world—or it could change the internal state of the machine in a way that will affect the statements that come after it. These changes are called **side effects**."
  - use semicolons after statements unless the subtleties of omitting them are well understood
- bindings
  - bindings, or **variables**, are used to catch and hold values
  
  - keywords like `let` and `const` indicate that statement defines a binding
  - "You should imagine bindings as tentacles, rather than boxes. They do not contain values; they grasp them—two bindings can refer to the same value. A program can access only the values that it still has a reference to." 
  - empty bindings have value `undefined`
  - one let statement may define multiple bindings, e.g. `let one=1, two=2`
  - `const` stands for constant & points at the same value throughout the program
- binding names
  - can't start with a digit
  
  - only symbols allowed are `_` & `$`
  - can't use keywords or other reserved words: 
    ```
    break case catch class const continue debugger default
    delete do else enum export extends false finally for
    function if implements import interface in instanceof let
    new package private protected public return static super
    switch this throw true try typeof var void while with yield

- functions
  - a **function** is a piece of program wrapped in a value
  
  - can be *applied*, *invoked*, or *called* by putting parenthesis after an expression that produces a function value
  - values given to functions are called **arguments**
  - when a function produces a value, it is said to **return** that value
  - `Number()`, `String()`, & `Boolean()` are useful functions

- conditional execution
  - when your program contains more than one statement, the statements are executed as if they are a story, from top to bottom

  - **conditional execution** has the program execute certain code based on the situation at hand
  - conditional execution is created with the `if` keyword in JavaScript
  - `Number.isNaN()` is a useful function
  - braces can be used to group any number of statements into a single statement, called a **block**
  - a **loop** is used to run a piece of code multiple times
  - use a `break` statement to jump out of the enclosing loop
  - use the `continue` keyword to jump out of the loop body & continue with loop's next iteration
