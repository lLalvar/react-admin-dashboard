import { useTheme } from '@emotion/react'
import { ResponsiveBump } from '@nivo/bump'
import React from 'react'
import { mockBumpData } from '../data/mockData'

const BumpChart = ({ isDashboard = false }) => {
  const theme = useTheme()
  return (
    <ResponsiveBump
      data={mockBumpData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: `${theme.palette.text.main}`,
            },
          },
          legend: {
            text: {
              fill: `${theme.palette.text.main}`,
            },
          },
          ticks: {
            line: {
              stroke: `${theme.palette.text.main}`,
              strokeWidth: 1,
            },
            text: {
              fill: `${theme.palette.text.main}`,
            },
          },
        },
        legends: {
          text: {
            fill: `${theme.palette.text.main}`,
          },
        },
        tooltip: {
          container: {
            color: '#222',
            fontSize: 12,
          },
        },
      }}
      colors={{ scheme: 'nivo' }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      axisTop={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? 'ranking' : undefined,
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      margin={{ top: 40, right: 68, bottom: 40, left: 44 }}
      axisRight={null}
    />
  )
}

export default BumpChart
