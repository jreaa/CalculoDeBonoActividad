window.addEventListener('load', function () {
    const isChecked = document.getElementById('validar');
    const btn = document.getElementById('btn');
    btn.style.display = "none";
    isChecked.addEventListener('change', function(){
        (this.checked) ? btn.style.display = "block": btn.style.display = "none";
    });
   })