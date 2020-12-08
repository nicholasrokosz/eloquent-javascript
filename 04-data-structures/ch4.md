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
    ```
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
    ```
    console.log(Object.keys({x: 0, y: 0, z: 2}));
    // → ["x", "y", "z"]
    ```
  - there’s an `Object.assign()` function that copies all properties from one object into another:
    ```
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
    ```
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