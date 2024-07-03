function init() {
    let map = new ymaps.Map('map', {
        center: [60, 0],
        zoom: 10
    });
}

ymaps.ready(init)