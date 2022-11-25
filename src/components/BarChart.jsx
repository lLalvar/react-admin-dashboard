import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { mockBarData } from '../data/mockData'
import { useTheme } from '@emotion/react'

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme()
  return (
    <ResponsiveBar
      data={mockBarData}
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
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy='country'
      margin={{ top: 16, right: 100, bottom: 50, left: 48 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'purple_blue' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role='application'
      ariaLabel='Nivo bar chart demo'
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }}
    />
  )
}

export default BarChart
