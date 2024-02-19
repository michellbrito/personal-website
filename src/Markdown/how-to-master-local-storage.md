## What is Local Storage?

Local Storage is used to store information in the user's browser for the current website that they are visiting. You can think of it as a form of cookies that contains information you can access in your browser. Everything that is stored in Local Storage has to be in the form of a string, so if you wanted to store an array or object into Local Storage you would first need to convert it into a string. Local Storage is also able to hold more information than cookies and would stay saved in the browser until the user clears their Local Storage or it's deleted by the website they are visiting.  

## Possible uses of Local Storage  

1. Saving a user's username to local storage so the next time they visit the website they don't have to enter their username.
2. Saving a user's preference if they would like to use the light or dark mode version of a website.
3. Saving a user's location to show them different information based on their location.  

## Methods belonging to Local Storage  

1. localStorage.getItem(key)
2. localStorage.setItem(key, value)
3. localStorage.removeItem(key)
4. localStorage.clear()  

## Locate your browser's Local Storage  

**Chrome:**  

1. Option + ⌘ + J or Shift + CTRL + J to open Chrome's developer tools
2. Click Application → under the Storage section, you'll find the Local Storage area  ![chrome dev tools](https://cdn-images-1.medium.com/max/1600/1*1Gf6BOB9HeCXfftFgMtulQ.png)  

**Firefox:**  

1. ⌘ + Option + I or Ctrl + Shift + I to open Firefox's developer tools
2. Click Storage to find the Local Storage area  ![firefox dev tools](https://cdn-images-1.medium.com/max/1600/1*4eDVXrNtF28y-ckOECsMEA.png)  

**Safari:**  

1. ⌘ +, or Ctrl +, to open Safari's Preferences Menu → click Advanced → click Show Develop menu in menu bar
2. Option + ⌘ + C or Shift +Ctrl + C to open Safari's JavaScript Console → click Storage to find the Local Storage area  ![safari dev tools](https://cdn-images-1.medium.com/max/1600/1*gLiiXJfv_vevY5IiIa-bVg.png)

## Examples of localStorage methods  

**localStorage.getItem(key):** To get information from local storage we need to provide the key that contains the information we want to retrieve to the getItem() method. If the information that is stored in local storage is an array or an object then you need to use JSON.parse() along with the getItem method to convert it to its original format.  

**localStorage.setItem(key, value):** To store information into local storage we need to provide the key, as well as the information that belongs to that key to the setItem() method. If you try to add a key that already exists, then the value passed in with the new key will replace the value already set for the existing key. If the information that is being stored in local storage is an array or an object then you need to convert the array/object into a string by using JSON.stringify since local storage only accepts strings.

**localStorage.removeItem(key), localStorage.clear():** Both of these methods deal with deleting information from local storage. The removeItem() method deletes a specific key while the clear() method deletes everything that is stored in local storage.

## References  

- <https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>
- <https://www.w3schools.com/html/html5_webstorage.asp>
