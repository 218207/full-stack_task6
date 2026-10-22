// Замер времени формирования DOM-дерева и отображения страницы.
// performance.now() — миллисекунды от начала загрузки страницы.
// Результаты выводятся в консоль (F12 → Console).

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded (DOM-дерево построено): ' + performance.now().toFixed(1) + ' мс');
});

window.addEventListener('load', function () {
    console.log('load (страница отображена): ' + performance.now().toFixed(1) + ' мс');
});

// Только для вариантов с LESS: момент, когда less.js закончил компиляцию и применил стили
if (window.less) {
    less.pageLoadFinished.then(function () {
        console.log('LESS скомпилирован, стили применены: ' + performance.now().toFixed(1) + ' мс');
    });
}
