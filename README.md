### Website Name: Wellbeing Yoga

### Website live link: https://wellbeing-yoga.web.app

### Different features and functionalities of your website:

1. In this project, users can choose from a variety of available yoga services
   by selecting from service cards that match their interests.

2. To access the details of their selected yoga service, users must log in.
   Without logging in, they won't be able to view the service details.Once a
   user successfully logs in, they will be directed to their desired page.

3. If a user is not registered on the website, they must complete the
   registration process first. If any errors occur during registration, a
   notification or alert, such as a "sweet alert," should be displayed to inform
   the user about the issue.

4. After logging in, the user's name and image should be displayed in the
   website's navigation bar for a personalized experience.

5. The "Event" and "Contact" pages are marked as private, which means they are
   only accessible after a user logs in. Once logged in, these pages should be
   visible in the navigation bar, and users can access them.

##### MCQ TEST

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

Answer: A

#### Answer Explanation:

The code snippet starts by declaring a variable let greeting;, which initializes
the greeting variable but does not assign any value to it. So, greeting is
declared but not defined with a value.Then, it try to create an empty object and
assign it to a variable called "greetign". it is typing mistake in the variable
name; it should be greeting .When console.log(greetign); is executed, it tries
to log the value of the variable greetign, but since it was typing mistake and
does not exist, JavaScript creates an empty object and assigns it to greetign.
So, the output will be an empty object {}.

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: NaN
- B: TypeError
- C: "12"
- D: 3

Answer: C

#### Answer Explanation:

In this example 1 is number and '2' is string.JavaScript converts the number 1
to a string and then addition it with the string "2", and show the result in a
string "12".

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

Answer:A

#### Answer Explanation:

In this example initially declare the food array.From this food array index 0 is
set the info value.Then assign the info.favoriteFood = '🍝',but food array is
unchanged. So the result show food array.

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

Answer:B

#### Answer Explanation:

In this function sayHi(name), the name parameter is not given a default value.
When call sayHi() without passing any arguments, name is undefined. So, the
function returns "Hi there, undefined" because it's added the undefined value
with the string.

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

Answer:C

#### Answer Explanation:

If condition checks the value of num is truthy or falsy. The first number in the
nums array is 0, which is a falsy value. So, the if statement's code block is
not executed for the first iteration. However, for the other three numbers in
the nums array (1, 2, and 3), the if statement's code block is executed. The
code increments count by 1 for each of these three truthy values (1, 2, and
3).Therefore, the final value of count is indeed 3.
