ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [55.758463, 37.626349],
        zoom: 16
    });
    map.geoObjects
        .add(new ymaps.Placemark([55.758463, 37.626349],{
            balloonContent: 'ул. Новая площадь, дом 6',
            iconContent: 'Monte'
        },
        {
            preset: 'islands#redStretchyIcon',
            
        }))
});