var parents = document.querySelectorAll('.parent');

//petla jest dlatego ze zwrocona wartosc z var parents to tablica a na tablicy nie ma funkcji
for(var i=0; i<parents.length; i++){

    parents[i].addEventListener('mouseover', function () {
        this.querySelector('.children').style.display = 'block';
    });

    parents[i].addEventListener('mouseout', function () {

        var parentElement = this; //zagniezdrzenie kontekstu, inaczej to nizsze this nie odwolywalo by sie do tego kontekstu tylko do kontekstu globalnego

        function hideChildrenElement() {
            parentElement.querySelector('.children').style.display = 'none';
        }

        hideChildrenElement();
        // this.querySelector('.children').style.display = 'none';
    });
}