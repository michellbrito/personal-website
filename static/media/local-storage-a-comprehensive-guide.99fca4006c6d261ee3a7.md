## What is LocalStorage?

localStorage is a part of what's called the Web Storage API. It's a tool in modern web browsers that lets you store simple data in the form of key value pairs. Think of it like a small storage area in your browser where you keep data that you want to reference at a later time.

## Key Features

- _Persistent Storage:_ Data stored in LocalStorage remains there even after the browser window or tab is closed unlike session-based storage.

- _No Expiration Date:_ Unlike cookies, data in LocalStorage doesn’t expire. The only way to delete data from storage is to manually clear it.

- _Storage Capacity:_ It offers more space to store a larger amount of data compared to traditional cookies.

- _Accessible via the Window Object:_ LocalStorage can be accessed through the window object in JavaScript, making it easy to interact with the stored data.

## Practical Usage

- _User Experience Enhancement:_ Store user's usernames for auto-filling during future visits, improving the login experience.
- _Preferences:_ Remember user's theme choices (like light or dark mode) for a personalized website appearance.
- _Geolocation-Based Content:_ Save user's location to display region-specific content, enhancing relevance and engagement.

## Core Methods

### Storing Data

`localStorage.setItem(key, value)` is used for storing data within the storage object. In order to save the data we need to provide both a key and value which both have to be a string type.

```js
// saving an string to localStorage
localStorage.setItem('pizza', '🍕');
```

Even though the value can only be a string type we can save other data types such as array or objects if we convert the value into a string before storing.

```js
// saving an array or an object to localStorage
localStorage.setItem('favFoods1', JSON.stringify(['🍕', '🍝', '🍜', '🍔']));

localStorage.setItem(
  'favFoods2',
  JSON.stringify({
    pizza: '🍕',
    pasta: '🍝',
    soup: '🍜',
    burger: '🍔',
  })
);
```

### Retrieving Data

We retrieve the data from the storage object using `localStorage.getItem(key)`. When we provide the key, it returns the value associated with that key, and if the key doesn't exist you'll receive null as the value.

```js
const pizza = localStorage.getItem('pizza');
console.log(pizza); // expected output: '🍕'
```

If the original format of the value wasn't a string, we need to convert it back. Otherwise, the array or object, which was turned into a string earlier, won't work as expected. We're able to do this with JSON.stringify() which is responsible for converting it back to its original format.

```js
// converts the array / object back into its original format
const foodArr = JSON.parse(localStorage.getItem('favFoods1'));

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}
// expected output: '🍕','🍝','🍜','🍔'

const foodObj = JSON.parse(localStorage.getItem('favFoods2'));
console.log(foodObj.pasta); // expected output: '🍝'
```

### Removing Data

As we keep storing data there are going to be times when we no longer want the data to exist within our storage.

`localStorage.removeItem(key)` allows us to delete specific data by providing the key.

```js
localStorage.removeItem('pizza');
```

To clear all the data in our storage, we can use `localStorage.clear()` which leaves us with an empty storage.

```js
localStorage.clear();
```

## Accessing localStorage in Different Browsers

Chrome:

1. Option + ⌘ + J or Shift + CTRL + J to open Chrome's developer tools
2. Click Application → under the Storage section, you'll find the localStorage area

![chrome dev tools](https://cdn-images-1.medium.com/max/1600/1*1Gf6BOB9HeCXfftFgMtulQ.png)

Firefox:

1. ⌘ + Option + I or Ctrl + Shift + I to open Firefox's developer tools
2. Click Storage to find the localStorage area

![firefox dev tools](https://cdn-images-1.medium.com/max/1600/1*4eDVXrNtF28y-ckOECsMEA.png)

Safari:

1. ⌘ +, or Ctrl +, to open Safari's Preferences Menu → click Advanced → click Show Develop menu in menu bar
2. Option + ⌘ + C or Shift +Ctrl + C to open Safari's JavaScript Console → click Storage to find the localStorage area

![safari dev tools](https://cdn-images-1.medium.com/max/1600/1*gLiiXJfv_vevY5IiIa-bVg.png)

## References

- <https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>
- <https://www.w3schools.com/html/html5_webstorage.asp>
