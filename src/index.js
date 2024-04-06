const button = document.querySelectorAll('.btn')
console.log(button)
button.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener('click', function (e) {
        document.body.style.backgroundColor = e.target.id;
    })
});

