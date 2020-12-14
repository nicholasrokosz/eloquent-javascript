# Ch. 4 — Objects and Arrays

## Author's Summary

>Objects and arrays (which are a specific kind of object) provide ways to group several values into a single value. Conceptually, this allows us to put a bunch of related things in a bag and run around with the bag, instead of wrapping our arms around all of the individual things and trying to hold on to them separately.
>
>Most values in JavaScript have properties, the exceptions being `null` and `undefined`. Properties are accessed using `value.prop` or `value["prop"]`. Objects tend to use names for their properties and store more or less a fixed set of them. Arrays, on the other hand, usually contain varying amounts of conceptually identical values and use numbers (starting from 0) as the names of their properties.
>
>There are some named properties in arrays, such as `length` and a number of methods. Methods are functions that live in properties and (usually) act on the value they are a property of.
>
>You can iterate over arrays using a special kind of `for` loop—`for (let element of array)`.

## Takeaways

- data sets
  - an **array** is a data type specifically for storing sequences of values
  
  - think of the index as the amount of items to skip, counting from the start of the array

- properties
  - certain expressions access a **property** of some value
  - almost all JavaScript values have properties

  - the exceptions are `null` and `undefined`
  - property names are strings — they can be any string, but the dot notation works only with names that look like valid binding names
  - so if you want to access a property named 2 or *John Doe*, you must use square brackets: `value[2]` or `value["John Doe"]`
  - the elements in an array are stored as the array’s properties, using numbers as property names

- methods
  - both string and array values contain, in addition to the length property, a number of properties that hold function values

  - properties that contain functions are generally called **methods** of the value they belong to, as in “`toUpperCase` is a method of a string”
  - a **stack**, in programming, is a data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first (useful data structure)

- objects
  - values of the type **object** are arbitrary collections of properties

  - one way to create an object is by using braces as an expression
  - properties whose names aren’t valid binding names or valid numbers have to be quoted:
    ``` javascript
    let descriptions = {
      work: "Went to work",
      "touched tree": "Touched a tree"
    };
    ```
  - braces have two meanings in JavaScript — at the start of a statement, they start a block of statements — in any other position, they describe an object
  - it is possible to assign a value to a property expression with the = operator — this will replace the property’s value if it already existed or create a new property on the object if it didn’t
  - >To briefly return to our tentacle model of bindings—property bindings are similar. They grasp values, but other bindings and properties might be holding onto those same values. *You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it.*
  - the binary `in` operator, when applied to a string and an object, tells you whether that object has a property with that name
  - the difference between setting a property to `undefined` and actually deleting it is that, in the first case, the object still *has* the property (it just doesn’t have a very interesting value), whereas in the second case the property is no longer present and `in` will return `false`
  - to find out what properties an object has, you can use the `Object.keys()` function. You give it an object, and it returns an array of strings—the object’s property names:
    ``` javascript
    console.log(Object.keys({x: 0, y: 0, z: 2}));
    // → ["x", "y", "z"]
    ```
  - there’s an `Object.assign()` function that copies all properties from one object into another:
    ``` javascript
    let objectA = {a: 1, b: 2};
    Object.assign(objectA, {b: 3, c: 4});
    console.log(objectA);
    // → {a: 1, b: 3, c: 4}
    ```
  - arrays, then, are just a kind of object specialized for storing sequences of things — you can see them as long, flat octopuses with all their tentacles in a neat row, labeled with numbers

- mutability
  - the types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all `immutable` — it is impossible to change values of those types

  - objects work differently — you *can* change their properties, causing a single object value to have different content at different times
  - e.g.
    ``` javascript
    let object1 = {value: 10};
    let object2 = object1;
    let object3 = {value: 10};

    console.log(object1 == object2);
    // → true
    console.log(object1 == object3);
    // → false

    object1.value = 15;
    console.log(object2.value);
    // → 15
    console.log(object3.value);
    // → 10
    ```
    >The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same **identity**. The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.
  - even though number values don’t change, you can use a `let` binding to keep track of a changing number by changing the value the binding points at
  - similarly, though a `const` binding to an object can itself not be changed and will continue to point at the same object, the *contents* of that object might change
  - when you compare objects with JavaScript’s `==` operator, it compares by identity: it will produce `true` only if both objects are precisely the same value — comparing different objects will return `false`, even if they have identical properties
  - instead of declaring properties like `events: events`, the code below just gives a property name — this is shorthand that means the same thing — if a property name in brace notation isn’t followed by a value, its value is taken from the binding with the same name
    ``` javascript
    let journal = [];

    function addEntry(events, squirrel) {
      journal.push({events, squirrel});
    }
    ```
  - *correlation* is a measure of dependence between statistical variables, which are not quite the same as a programming variable
  - in statistics you typically have a set of *measurements*, and each variable is measured for every measurement
  - >Correlation between variables is usually expressed as a value that ranges from -1 to 1. Zero correlation means the variables are not related. A correlation of one indicates that the two are perfectly related—if you know one, you also know the other. Negative one also means that the variables are perfectly related but that they are opposites—when one is true, the other is false.
  
- array loops
  - for ... of ... loops
    ``` javascript
    for (let entry of JOURNAL) {
      console.log(`${entry.events.length} events.`)
    }
    ```

- further arrayology
  - `push()` : `unshift()` :: `pop()` : `shift()` <-- useful!
  
  - `indexOf()` & `lastIndexOf()` search an array for a specified value from the beginning or end, respectively <-- useful!
  - both `indexOf()` and `lastIndexOf()` take an optional second argument that indicates where to start searching
  - another fundamental array method is `slice()`, which takes start and end indices and returns an array that has only the elements between them — the start index is inclusive, the end index exclusive
  - the `concat()` method can be used to glue arrays together to create a new array, similar to what the `+` operator does for strings
  - e.g.
    ``` javascript
    function remove(array, index) {
      return array.slice(0, index)
        .concat(array.slice(index + 1));
    }
    console.log(remove(["a", "b", "c", "d", "e"], 2));
    // → ["a", "b", "d", "e"]
    ```
  - if you pass `concat()` an argument that is not an array, that value will be added to the new array as if it were a one-element array

- strings and their properties
  - values of type string, number, and Boolean are not objects, and though the language doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties because such values are immutable

  - every string value has a number of methods — some very useful ones are `slice()` and `indexOf()`, which resemble the array methods of the same name
  - the `trim()` method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string
  - `padStart()` takes the desired length and padding character as arguments
    ``` js
    console.log(String(6).padStart(3, "0"));
    // → 006
    ```
  - you can split a string on every occurrence of another string with `split()` and join it again with `join()`
    ``` js
    let sentence = "Secretarybirds specialize in stomping";
    let words = sentence.split(" ");
    console.log(words);
    // → ["Secretarybirds", "specialize", "in", "stomping"]
    console.log(words.join(". "));
    // → Secretarybirds. specialize. in. stomping
    ```
  - a string can be repeated with the `repeat()` method, which creates a new string containing multiple copies of the original string, glued together
    ``` js
    console.log("LA".repeat(3));
    // → LALALA
    ```
  
- rest parameters
  - it can be useful for a function to accept any number of arguments — to write such a function, you put three dots before the function’s last parameter, like this:
    ``` js
    function max(...numbers) {
      let result = -Infinity;
      for (let number of numbers) {
        if (number > result) result = number;
      }
      return result;
    }
    console.log(max(4, 1, 9, -2));
    // → 9
    ```

  - when such a function is called, the **rest parameter** is bound to an array containing all further arguments
  - you can use a similar three-dot notation to call a function with an array of arguments — this “**spreads**” out the array into the function call, passing its elements as separate arguments
    ``` js
    let numbers = [5, 1, 7];
    console.log(max(...numbers));
    // → 7
    ```

- the math object
  - `Math` is a grab bag of number-related utility functions, such as `Math.max()` (maximum), `Math.min()` (minimum), and `Math.sqrt()` (square root)

  - there is only one `Math` object, and it is almost never useful as a value — rather, it provides a **namespace** so that all these functions and values do not have to be global bindings
  - having too many global bindings “pollutes” the namespace — the more names have been taken, the more likely you are to accidentally overwrite the value of some existing binding
  - `Math` contains `cos()` (cosine), `sin()` (sine), and `tan()` (tangent), as well as their inverse functions, `acos()`, `asin()`, and `atan()`, respectively
  - the number π (pi) — or at least the closest approximation that fits in a JavaScript number  —is available as `Math.PI`
  - `Math.random()` is a function that returns a new pseudorandom number between zero (inclusive) and one (exclusive) every time you call it
  - though computers are deterministic machines — they always react the same way if given the same input — it is possible to have them produce numbers that appear random
  - `Math` also has `floor()` (which rounds down to the nearest whole number), `ceil()` (for “ceiling”, which rounds up to a whole number), `round()` (to the nearest whole number), and `abs()` (takes the absolute value of a number)

- destructuring
  - if you know the value you are binding is an array, you can use square brackets to “look inside” of the value, binding its contents
    ``` js
    function phi([n00, n01, n10, n11]) {
      return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
                  (n01 + n11) * (n00 + n10));
    }
    ```
  - a similar trick works for objects, using braces instead of square brackets
    ``` js
    let {name} = {name: "Faraji", age: 23};
    console.log(name);
    // → Faraji
    ```
  - note that if you try to destructure `null` or `undefined`, you get an error, much as you would if you directly try to access a property of those values

- JSON
  - >Because properties only grasp their value, rather than contain it, objects and arrays are stored in the computer’s memory as sequences of bits holding the addresses—the place in memory—of their contents. So an array with another array inside of it consists of (at least) one memory region for the inner array, and another for the outer array, containing (among other things) a binary number that represents the position of the inner array.
  - >JSON looks similar to JavaScript’s way of writing arrays and objects, with a few restrictions. All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.
  - JavaScript gives us the functions `JSON.stringify()` and `JSON.parse()` to convert data to and from this format