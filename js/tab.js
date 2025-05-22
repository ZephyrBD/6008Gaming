var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
var items = document.querySelectorAll('.item');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function() {
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('index');
        for (var p = 0; p < items.length; p++) {
            items[p].style.display = 'none';
        }
        items[index].style.display = 'flex';
    }
}