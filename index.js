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

  var searched = inputElement.value;

  var listItemsString = '';

  var filtered = classMembers
    .filter(function(name) {
      return name.indexOf(searched) === 0;
    });
  
  filtered.forEach(function(name) {
      listItemsString += '<li>'+name+'</li>';
    });

  resultListElement.innerHTML = listItemsString;
});
