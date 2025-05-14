function countFruits(arr) {
  const countMap = new Map();
  for (const fruit of arr) {
    countMap.set(fruit, (countMap.get(fruit) || 0) + 1);
  }
  return countMap;
}

const arr = ["apple", "banana", "orange", "apple", "banana", "banana"];

const fruitCount = countFruits(arr);
console.log(fruitCount); // Map(3) { 'apple' => 2, 'banana' => 3, 'orange' => 1 }

/*
Using Map (Recommended for HashMap)
The Map object is a built-in data structure in JavaScript designed for key-value storage. It allows keys of any type—including objects and functions.

Key Features:
Maintains insertion order

Any data type can be used as a key

Has useful built-in methods like set(), get(), has(), delete(), and clear()
Example:    

const hashMap = new Map();

// Add values
hashMap.set("name", "Bob");
hashMap.set("age", 25);
hashMap.set("isEmployed", true);

// Get values
console.log(hashMap.get("name")); // Bob

// Check if a key exists
console.log(hashMap.has("age")); // true

// Iterate through the map
for (const [key, value] of hashMap.entries()) {
  console.log(`${key}: ${value}`);
}

// Delete a key
hashMap.delete("isEmployed");

// Map size
console.log(hashMap.size); // 2


*/
