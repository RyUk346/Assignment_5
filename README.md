
    - 1️⃣ What is the difference between var, let, and const?
    Ans: var is a function-scoped, and let, const are block-scoped. Var is accessible everywhere, though it is declared inside a function or inside a conditional block. On the other hand let and const is exist inside the scope. We can not access it from outside of the scope. Value of let is changeable, but the value of const is constant; we cannot change it. Most of the time we need to use const, but if a value need to change later (like inside a loop) then we will use let. 
    
    - 2️⃣ What is the spread operator (...)?
    Ans: The spread operator is used to iterate over individual elements from string, object or array. It makes a copy of data without changing the original source. 
    
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    Ans: These functions are used to iterate through an array. map() transform each element in a new array and returns it without modifying the original one. filter() makes a new array as well without changing the main array but returns elements that matches the condition. On the other hand forEach() loop through each element and show output according to the conditions. it's used in DOM manipulation.
    
    - 4️⃣ What is an arrow function?
    Ans: An arrow function is a shorter way to write a function, which makes the code shorter and cleaner. 
    example: regular function: function add(a,b){
    return a+b;
    }
    arrow function: const add = (a,b) => a+b;
    
    - 5️⃣ What are template literals?
    Ans: Instead of using quotes, in template literals, back ticks(``) are used. It can create strings with multi line, we can use an expression or a variable inside template literals. For dynamic HTML generation it's very useful.



