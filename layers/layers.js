var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
}),
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var lyr_Densitdesaccidents_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densité des accidents",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Densitdesaccidents_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-183895.320903, 1379300.986354, -159509.657924, 1394693.439670]
                            })
                        });var format_Merge_voirie_def1_1 = new ol.format.GeoJSON();
var features_Merge_voirie_def1_1 = format_Merge_voirie_def1_1.readFeatures(json_Merge_voirie_def1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merge_voirie_def1_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Merge_voirie_def1_1.addFeatures(features_Merge_voirie_def1_1);var lyr_Merge_voirie_def1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Merge_voirie_def1_1, 
                style: style_Merge_voirie_def1_1,
                title: '<img src="styles/legend/Merge_voirie_def1_1.png" /> Merge_voirie_def1'
            });var format_10_Accidents_et_Plus__2 = new ol.format.GeoJSON();
var features_10_Accidents_et_Plus__2 = format_10_Accidents_et_Plus__2.readFeatures(json_10_Accidents_et_Plus__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_Accidents_et_Plus__2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_10_Accidents_et_Plus__2.addFeatures(features_10_Accidents_et_Plus__2);var lyr_10_Accidents_et_Plus__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10_Accidents_et_Plus__2, 
                style: style_10_Accidents_et_Plus__2,
                title: '<img src="styles/legend/10_Accidents_et_Plus__2.png" /> 10_Accidents_et_Plus_'
            });var format_Moins_de_10_Accidents__3 = new ol.format.GeoJSON();
var features_Moins_de_10_Accidents__3 = format_Moins_de_10_Accidents__3.readFeatures(json_Moins_de_10_Accidents__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Moins_de_10_Accidents__3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Moins_de_10_Accidents__3.addFeatures(features_Moins_de_10_Accidents__3);var lyr_Moins_de_10_Accidents__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Moins_de_10_Accidents__3, 
                style: style_Moins_de_10_Accidents__3,
                title: '<img src="styles/legend/Moins_de_10_Accidents__3.png" /> Moins_de_10_Accidents_'
            });var format_Carrefours_Accidentogenes_4 = new ol.format.GeoJSON();
var features_Carrefours_Accidentogenes_4 = format_Carrefours_Accidentogenes_4.readFeatures(json_Carrefours_Accidentogenes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carrefours_Accidentogenes_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Carrefours_Accidentogenes_4.addFeatures(features_Carrefours_Accidentogenes_4);var lyr_Carrefours_Accidentogenes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carrefours_Accidentogenes_4, 
                style: style_Carrefours_Accidentogenes_4,
                title: '<img src="styles/legend/Carrefours_Accidentogenes_4.png" /> Carrefours_Accidentogenes'
            });var format_Siege_Association_5 = new ol.format.GeoJSON();
var features_Siege_Association_5 = format_Siege_Association_5.readFeatures(json_Siege_Association_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siege_Association_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Siege_Association_5.addFeatures(features_Siege_Association_5);var lyr_Siege_Association_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Siege_Association_5, 
                style: style_Siege_Association_5,
                title: '<img src="styles/legend/Siege_Association_5.png" /> Siege_Association'
            });var format_VADS_6 = new ol.format.GeoJSON();
var features_VADS_6 = format_VADS_6.readFeatures(json_VADS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VADS_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VADS_6.addFeatures(features_VADS_6);cluster_VADS_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_VADS_6
});var lyr_VADS_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_VADS_6, 
                style: style_VADS_6,
                title: '<img src="styles/legend/VADS_6.png" /> VADS'
            });var format_PN_7 = new ol.format.GeoJSON();
var features_PN_7 = format_PN_7.readFeatures(json_PN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PN_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PN_7.addFeatures(features_PN_7);cluster_PN_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PN_7
});var lyr_PN_7 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PN_7, 
                style: style_PN_7,
                title: '<img src="styles/legend/PN_7.png" /> PN'
            });var format_BJVSER_8 = new ol.format.GeoJSON();
var features_BJVSER_8 = format_BJVSER_8.readFeatures(json_BJVSER_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BJVSER_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BJVSER_8.addFeatures(features_BJVSER_8);cluster_BJVSER_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_BJVSER_8
});var lyr_BJVSER_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_BJVSER_8, 
                style: style_BJVSER_8,
                title: '<img src="styles/legend/BJVSER_8.png" /> BJVSER'
            });var format_ATUJB_9 = new ol.format.GeoJSON();
var features_ATUJB_9 = format_ATUJB_9.readFeatures(json_ATUJB_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATUJB_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ATUJB_9.addFeatures(features_ATUJB_9);cluster_ATUJB_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ATUJB_9
});var lyr_ATUJB_9 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ATUJB_9, 
                style: style_ATUJB_9,
                title: '<img src="styles/legend/ATUJB_9.png" /> ATUJB'
            });var format_AJVSR_10 = new ol.format.GeoJSON();
var features_AJVSR_10 = format_AJVSR_10.readFeatures(json_AJVSR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AJVSR_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AJVSR_10.addFeatures(features_AJVSR_10);cluster_AJVSR_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AJVSR_10
});var lyr_AJVSR_10 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AJVSR_10, 
                style: style_AJVSR_10,
                title: '<img src="styles/legend/AJVSR_10.png" /> AJVSR'
            });var format_AJUDBF_11 = new ol.format.GeoJSON();
var features_AJUDBF_11 = format_AJUDBF_11.readFeatures(json_AJUDBF_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AJUDBF_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AJUDBF_11.addFeatures(features_AJUDBF_11);cluster_AJUDBF_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AJUDBF_11
});var lyr_AJUDBF_11 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AJUDBF_11, 
                style: style_AJUDBF_11,
                title: '<img src="styles/legend/AJUDBF_11.png" /> AJUDBF'
            });var format_AFOV_12 = new ol.format.GeoJSON();
var features_AFOV_12 = format_AFOV_12.readFeatures(json_AFOV_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFOV_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AFOV_12.addFeatures(features_AFOV_12);cluster_AFOV_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AFOV_12
});var lyr_AFOV_12 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AFOV_12, 
                style: style_AFOV_12,
                title: '<img src="styles/legend/AFOV_12.png" /> AFOV'
            });var format_ABSER_13 = new ol.format.GeoJSON();
var features_ABSER_13 = format_ABSER_13.readFeatures(json_ABSER_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABSER_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ABSER_13.addFeatures(features_ABSER_13);cluster_ABSER_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ABSER_13
});var lyr_ABSER_13 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ABSER_13, 
                style: style_ABSER_13,
                title: '<img src="styles/legend/ABSER_13.png" /> ABSER'
            });

lyr_Densitdesaccidents_0.setVisible(true);lyr_Merge_voirie_def1_1.setVisible(true);lyr_10_Accidents_et_Plus__2.setVisible(true);lyr_Moins_de_10_Accidents__3.setVisible(true);lyr_Carrefours_Accidentogenes_4.setVisible(true);lyr_Siege_Association_5.setVisible(true);lyr_VADS_6.setVisible(true);lyr_PN_7.setVisible(true);lyr_BJVSER_8.setVisible(true);lyr_ATUJB_9.setVisible(true);lyr_AJVSR_10.setVisible(true);lyr_AJUDBF_11.setVisible(true);lyr_AFOV_12.setVisible(true);lyr_ABSER_13.setVisible(true);
var layersList = [baseLayer,lyr_Densitdesaccidents_0,lyr_Merge_voirie_def1_1,lyr_10_Accidents_et_Plus__2,lyr_Moins_de_10_Accidents__3,lyr_Carrefours_Accidentogenes_4,lyr_Siege_Association_5,lyr_VADS_6,lyr_PN_7,lyr_BJVSER_8,lyr_ATUJB_9,lyr_AJVSR_10,lyr_AJUDBF_11,lyr_AFOV_12,lyr_ABSER_13];
lyr_Merge_voirie_def1_1.set('fieldAliases', {'Nb_acci': 'Nombre Accident', 'Nom_V': 'Nom', });
lyr_10_Accidents_et_Plus__2.set('fieldAliases', {'zone_acci': 'Nom du lieu', 'nbasso': 'Nombre Association', 'nbVADS': 'Nombre VADS', 'nbacc': 'Nombre Accident', });
lyr_Moins_de_10_Accidents__3.set('fieldAliases', {'zone_acci': 'Nom du lieu', 'nbasso': 'Nombre association', 'nbVADS': 'Nomnre VADS', 'nbacc': 'Nombre Accident', });
lyr_Carrefours_Accidentogenes_4.set('fieldAliases', {'Nom_carre_': 'Nom carrefour', });
lyr_Siege_Association_5.set('fieldAliases', {'Nom': 'Nom', 'Nom Resp': 'Nom du Responsable', 'Contacts d': 'Contact', 'Date CR': 'Date de creation', });
lyr_VADS_6.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_PN_7.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_BJVSER_8.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_ATUJB_9.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Presence': 'Presence observation?', });
lyr_AJVSR_10.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_AJUDBF_11.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_AFOV_12.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_ABSER_13.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Presence': 'Presence observation?', });
lyr_Merge_voirie_def1_1.set('fieldImages', {'Nb_acci': 'TextEdit', 'Nom_V': 'TextEdit', });
lyr_10_Accidents_et_Plus__2.set('fieldImages', {'zone_acci': 'TextEdit', 'nbasso': 'TextEdit', 'nbVADS': 'TextEdit', 'nbacc': 'TextEdit', });
lyr_Moins_de_10_Accidents__3.set('fieldImages', {'zone_acci': 'TextEdit', 'nbasso': 'TextEdit', 'nbVADS': 'TextEdit', 'nbacc': 'TextEdit', });
lyr_Carrefours_Accidentogenes_4.set('fieldImages', {'Nom_carre_': 'TextEdit', });
lyr_Siege_Association_5.set('fieldImages', {'Nom': 'TextEdit', 'Nom Resp': 'TextEdit', 'Contacts d': 'TextEdit', 'Date CR': 'TextEdit', });
lyr_VADS_6.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_PN_7.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_BJVSER_8.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_ATUJB_9.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Presence': 'TextEdit', });
lyr_AJVSR_10.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_AJUDBF_11.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_AFOV_12.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_ABSER_13.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Presence': 'TextEdit', });
lyr_Merge_voirie_def1_1.set('fieldLabels', {'Nb_acci': 'header label', 'Nom_V': 'header label', });
lyr_10_Accidents_et_Plus__2.set('fieldLabels', {'zone_acci': 'header label', 'nbasso': 'header label', 'nbVADS': 'header label', 'nbacc': 'header label', });
lyr_Moins_de_10_Accidents__3.set('fieldLabels', {'zone_acci': 'header label', 'nbasso': 'header label', 'nbVADS': 'header label', 'nbacc': 'header label', });
lyr_Carrefours_Accidentogenes_4.set('fieldLabels', {'Nom_carre_': 'header label', });
lyr_Siege_Association_5.set('fieldLabels', {'Nom': 'header label', 'Nom Resp': 'header label', 'Contacts d': 'header label', 'Date CR': 'header label', });
lyr_VADS_6.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_PN_7.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_BJVSER_8.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_ATUJB_9.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Presence': 'header label', });
lyr_AJVSR_10.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_AJUDBF_11.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_AFOV_12.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_ABSER_13.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Presence': 'header label', });
lyr_ABSER_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});