Erweiterung des CoordToolkits des Masterportals, um den Layer, von dem die Höhe abgerufen wird, durch den User auswählbar zu machen
und die Höhe sowohl in Höhe über Adria, als auch im Wiener Null darzustellen.

config.json Beispiel:
```
          {
            "type": "coordToolkitExtended",
            "name": "Koordinaten- & Höhenmessung",
            "heightLayers": [
                {
                    "id": "LAYERID",
                    "name": "LAYERNAME",
                    "heightLayerInfo": "LAYER INFORMATION",
                    "heightElementName": "PixelValue",
                    "heightValueWater": "-20",
                    "heightValueBuilding": "150"
                },
                {
                    "id": "OTHERLAYERID",
                    "name": "OTHERLAYERNAME",
                    "heightLayerInfo": "OTHER LAYER INFORMATION",
                    "heightElementName": "PixelValue",
                    "heightValueWater": "-20",
                    "heightValueBuilding": "300"
                }
            ],
            "heightInfoFormat": "application/vnd.ogc.wms_xml",
            "currentProjection": {"id": "http://www.opengis.net/gml/srs/epsg.xml#31256", "name": "EPSG:31256", "projName": "tmerc"},
            "zoomLevel": 13,
            "coordInfo": {
              "title": "Coordinate reference system for 2D position information, explanations",
              "explanations": [
              ]
            }
          }
```
