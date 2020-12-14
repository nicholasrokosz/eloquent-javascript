## Ch. 1 — Values, Types, and Operators

# Author's Summary

>We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values.
>
>Such values are created by typing in their name (true, null) or value (13, "abc"). You can combine and transform values with operators. We saw binary operators for arithmetic (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.
>
>This gives you enough information to use JavaScript as a pocket calculator but not much more. The next chapter will start tying these expressions together into basic programs.

# Takeaways

- values of type number use 64 bits
  
- special number values: `Infinity`, `-Infinity`, & `NaN`s
- strings are sorted by Unicode standard ('Z' < 'a')
- `NaN` does not equal `NaN`
- `null` and `undefined` are mostly interchangable
- use `===` instead of `==` to avoid unexpected type conversions
- short circuit evaluation:
   ``` javascript
    console.log(null || 'user')
    // -> user
    console.log(null && 'user')
    // -> null
    ```