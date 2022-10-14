// Element oluşturma
const li = document.createElement('li');

// Text node oluşturma ve ekleme.
// appendChild method added text li element's inner.
li.appendChild(document.createTextNode('I added this task.'))

// Listeyi ul içine ekleme.
const ul = document.querySelector('ul').appendChild(li);