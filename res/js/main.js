YMaps.jQuery(function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    
    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    map.setCenter(new YMaps.GeoPoint(18.5, 50.0), 5);  // Координаты центра Европы

    // Создает объект YMaps.Zoom с пользовательскими подсказками и добавляет его на карту
    var zoom = new YMaps.Zoom({noTips: true});
    map.addControl(zoom);

    //var point = new YMaps.GeoPoint(18.5,50.0); // Координаты центра Европы
    //map.setCenter(point);

    //map.setType(YMaps.MapType.SATELLITE); // Тип карты

    map.enableScrollZoom(); // Включаем изменение масштаба колесом
    //map.enableScrollZoom({smooth: false}); // Включаем изменение масштаба колесом и отключаем плавную прокрутку

    // Создает переключатель для типов карты
    var typeControl = new YMaps.TypeControl([YMaps.MapType.MAP, YMaps.MapType.SATELLITE, YMaps.MapType.HYBRID]);
    map.addControl(typeControl);

    //map.enableMagnifier(); // Активация лупы для левой кнопки мыши
    //map.enableHotKeys(); // Активация хоткеев
    //map.enableRuler(); // Активация рулетки

    // Создает объект YMaps.toolBar и добавляет его на карту
    var toolBar = new YMaps.ToolBar();
    map.addControl(toolBar);

    // Создает объект YMaps.SearchControl (поиск по карте) и добавляет его на карту
    var searchControl = new YMaps.SearchControl({
        resultsPerPage: 5,  // Количество объектов на странице
        useMapBounds: 1     // Объекты, найденные в видимой области карты 
                            // будут показаны в начале списка
    });
    map.addControl(searchControl);


    var writers = {
        pushkin: {}
    }

    writers.pushkin = {
        moscow: [1799, 1900, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810],
        tsarskoyeSelo: [1811, 1812, 1813, 1814, 1815, 1816, 1817],
        saintPetersburg: [1818, 1819]

    }

    //alert(writers.pushkin.moscow)
    
    // var myPlacemark = new YMaps.GeoObject({
    //     geometry: {
    //         type: "Point",
    //         coordinates: [55.76, 37.56]
    // }});




    var myGeoObjects = new YMaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.76, 37.56]
        },
        properties: {
            clusterCaption: 'Геообъект № ',
            balloonContentBody: 'Пушкин'
        }
    });
    map.geoObjects.add(myGeoObjects); // Размещение геообъектов на карте.
    

})