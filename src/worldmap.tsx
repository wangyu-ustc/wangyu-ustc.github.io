import * as React from 'react';
// import { csv } from "d3-fetch";
// import { scaleLinear } from "d3-scale";
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule,
    Marker
  } from "react-simple-maps";
import Typography from '@mui/material/Typography';





export function WorldMapComponent() {

    const countries = [
        'China',
        'Singapore',
        'United States',
        'United Arab Emirates',
        'United Kingdom',
        'Japan'
    ]

    type markerType = 
    {
        markerOffset: number,
        name: string,
        coordinates: [number, number]
    }[]

    const markers: markerType = [
        // { markerOffset: 15, name: "San Diego", coordinates: [117.16, 32.72] },
        // { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
        // { markerOffset: 15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
        // { markerOffset: 15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
        // { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
        // { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
        // { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
        // { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
      ];
    
    // const geoUrl =
    //   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    const geoUrl = '/features.json'

    return (
        <div style={{
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 200
                  }}>
            <Sphere id='0' stroke="#E4E5E6" strokeWidth={0.5} fill="#E4E5E6" />
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
            {/* <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
                </Geographies> */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              let color = countries.find(i=>(i===geo.properties.name)) ? 'blue' : 'black'

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={color}
                //   fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                //   fill='#F5F4F6'
                />
              );
            })
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}


            </ComposableMap>
            
        </div>
    )
}