# Suggestions

## Exercise:

- create a index.html with a text input and a empty list element
- an index.js file in which you create an array made of the names of the class members
- when the value of the input changes the list is filled with names that starts with the value input

## Reflexion

The logic of the script should something like:

 - wait for the change (or keyup) input 
 - get the *value* of the *input element*
 - filter the names by checking if the item (name) starts with the *value* of the input ()
 - with the filtered results iterate to create the HTML list items

## Hints:

Look for documentation about:

 - `addEventListener()`
 - `array.filter()`
 - `array.forEach()`


And by the way...

````js
document.getElementById('identifier')
// is similar (but not same!) to
$('#identifier') // with jQuery
````

and

````js
domElement.addEventListener('name-of-the-event', function() {});
// is similar to
$('<some selector>').on('name-of-the-event', function() {}); // with jQuery
````

Also worth mentioning:

````js
document.getElementById('identifier').value
// is the same as
$('#identifier').value() // with jQuery
````