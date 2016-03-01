
//Create a map and set center and zoom level.
var map = L.map('map').setView([40,-90],4);

//Creates streetmap object and adds to map.
var streetmap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Creates satellite object
var satellite = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
	type: 'sat',
	ext: 'jpg',
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
	subdomains: '1234'
});

//Creates and adds live doppler radar object to map.
var radar = L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/radar_base_reflectivity/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);

//Creates and adds lightning strikes object to map.
var lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);

//Creates and adds precipitation object to map.
var precipitation = L.tileLayer.wms("http://gis.srh.noaa.gov/arcgis/services/wxmap/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);

//Creates an object that consists of the satellite and streetmap objects.
var baseLayers = {
    "Street Map": streetmap,
    "Satellite View": satellite
};

//Creates an object that consists of the radar, lightning strikes, and precipitation objects
var overlays = {
    "Radar": radar,
    "Lightning Strikes": lightning,
		"Precipitation": precipitation
};

//Adds a box feature to toggle basemaps and overlays visibility on map.
L.control.layers(baseLayers, overlays).addTo(map);
