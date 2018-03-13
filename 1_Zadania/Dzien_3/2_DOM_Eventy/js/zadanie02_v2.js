function show() {
    console.log('Hura! Działa!');
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#mainBtn');
    console.dir(button);
    button.addEventListener('click', show);
})