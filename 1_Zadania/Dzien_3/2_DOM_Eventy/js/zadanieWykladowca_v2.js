// Zadanie z wykładowcą


// Punkt 1
var elementListParent = document.querySelectorAll('.parent');
console.dir(elementListParent);

function show() {
    this.querySelector('.children').style.display = 'block';
}

function hide() {
    this.querySelector('.children').style.display = 'none';
}

// for (var i=0; i<elementListParent.length; i++) {
//     var element = elementListParent[i];
//     element.addEventListener('mouseover', show);
//     element.addEventListener('mouseout', hide);
// }

// Punkt 2

for (var i=0; i<elementListParent.length; i++) {
    var element = elementListParent[i];
    element.addEventListener('mouseover', show);
    element.addEventListener('mouseout', function() {
        var parentElement = this;
        function hideChildrenElement() {
            parentElement.querySelector('.children').style.display = 'none';
        }
        hideChildrenElement();
    });
}
