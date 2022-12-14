import { useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import React from 'react'
import { geoFeatures } from '../data/geoFeatures'
import { mockGeographyData } from '../data/mockData'

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme()

  return (
    <ResponsiveChoropleth
      data={mockGeographyData}
      features={geoFeatures}
      theme={{
        tooltip: {
          container: {
            color: '#222',
            fontSize: 12,
          },
        },
      }}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor='#666'
      label='properties.name'
      valueFormat='.2s'
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      borderWidth={1.5}
      borderColor={theme.palette.main.light}
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: `${theme.palette.text.main}`,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  )
}
// legends={[
//         {
//           anchor: 'bottom-left',
//           direction: 'column',
//           justify: true,
//           translateX: 20,
//           translateY: -100,
//           itemsSpacing: 0,
//           itemWidth: 94,
//           itemHeight: 18,
//           itemDirection: 'left-to-right',
//           itemTextColor: `${theme.palette.text.main}`,
//           itemOpacity: 0.85,
//           symbolSize: 18,
//           effects: [
//             {
//               on: 'hover',
//               style: {
//                 itemTextColor: '#ffffff',
//                 itemOpacity: 1,
//               },
//             },
//           ],
//         },
//       ]}

export default GeographyChart
