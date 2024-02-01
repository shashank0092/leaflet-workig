const myMap = L.map('map').setView([22.9074872, 79.07306671], 5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ❤️';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);

const CLayer=L.circle([22.9074872,79.07306671],{radius:200000,stroke:true,})
CLayer.addTo(myMap)

const bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
const rectangle=L.rectangle(bounds)
rectangle.addTo(myMap)

const bTriangleCordientes=[
        [
                [25.774,-80.19],
                [18.466,-66.118],
                [32.321,-64.757]
        ]
]

const polygon=L.polygon(bTriangleCordientes)
polygon.addTo(myMap)

const latlngs = [
        [45.51, -122.68],
        [37.77, -122.43],
        [34.04, -118.2]
    ];

const polyLine=L.polyline(latlngs)
polyLine.addTo(myMap)
