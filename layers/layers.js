var wms_layers = [];

var format_Gush100150_0 = new ol.format.GeoJSON();
var features_Gush100150_0 = format_Gush100150_0.readFeatures(json_Gush100150_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gush100150_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gush100150_0.addFeatures(features_Gush100150_0);
var lyr_Gush100150_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gush100150_0, 
                style: style_Gush100150_0,
                interactive: true,
                title: '<img src="styles/legend/Gush100150_0.png" /> Gush100150'
            });

lyr_Gush100150_0.setVisible(true);
var layersList = [lyr_Gush100150_0];
lyr_Gush100150_0.set('fieldAliases', {'GUSH_NUM': 'GUSH_NUM', 'GUSH_SUFFI': 'GUSH_SUFFI', 'SHEET_K_ID': 'SHEET_K_ID', 'SCALE': 'SCALE', 'STATUS': 'STATUS', 'STATUS_TEX': 'STATUS_TEX', 'LOCALITY_I': 'LOCALITY_I', 'LOCALITY_N': 'LOCALITY_N', 'REG_MUN_ID': 'REG_MUN_ID', 'REG_MUN_NA': 'REG_MUN_NA', 'COUNTY_ID': 'COUNTY_ID', 'COUNTY_NAM': 'COUNTY_NAM', 'REGION_ID': 'REGION_ID', 'REGION_NAM': 'REGION_NAM', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Gush100150_0.set('fieldImages', {'GUSH_NUM': '', 'GUSH_SUFFI': '', 'SHEET_K_ID': '', 'SCALE': '', 'STATUS': '', 'STATUS_TEX': '', 'LOCALITY_I': '', 'LOCALITY_N': '', 'REG_MUN_ID': '', 'REG_MUN_NA': '', 'COUNTY_ID': '', 'COUNTY_NAM': '', 'REGION_ID': '', 'REGION_NAM': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Gush100150_0.set('fieldLabels', {'GUSH_NUM': 'header label', 'GUSH_SUFFI': 'header label', 'SHEET_K_ID': 'header label', 'SCALE': 'header label', 'STATUS': 'header label', 'STATUS_TEX': 'header label', 'LOCALITY_I': 'header label', 'LOCALITY_N': 'header label', 'REG_MUN_ID': 'header label', 'REG_MUN_NA': 'header label', 'COUNTY_ID': 'header label', 'COUNTY_NAM': 'header label', 'REGION_ID': 'header label', 'REGION_NAM': 'header label', 'SHAPE_AREA': 'header label', 'SHAPE_LEN': 'header label', });
lyr_Gush100150_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});