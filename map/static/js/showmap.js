var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var otm = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© Esri'
});

var twogis = L.tileLayer('http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1&zmax=18&zmin=0');

var map = new L.Map('map', {layers: [osm]}).setView([44.95792, 34.11026], 8);

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenTopoMap": otm,
    "ArcGIS": esri,
    "2Гис": twogis,
};

var layerControl = L.control.layers(baseMaps).addTo(map);

