var classMembers = [
  'Yasser',
  'Rami',
  'Jose',
  'Johannes',
  'Mir',
  'Hussein',
  'Alaa',
  'Ahmad',
  'Sarey'
];

var inputElement = document.getElementById('search-in-array');
var resultListElement = document.getElementById('list-of-results');

inputElement.addEventListener('keyup', function() {
  // remove the items which are in the list
  resultListElement.textContent = '';

  var searched = inputElement.value;

  classMembers
    .filter(function(name) {
      return name.indexOf(searched) === 0;
    })
    // .filter() returns an array! :)
    // so you can chain and use the .forEach()
    .forEach(function(name) {
      var itemElement = document.createElement('li');
      itemElement.textContent = name;
      resultListElement.appendChild(itemElement);
    });
});