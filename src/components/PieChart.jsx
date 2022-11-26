import { useTheme } from '@emotion/react'
import { ResponsivePie } from '@nivo/pie'
import React from 'react'
import { mockPieData } from '../data/mockData'

const PieChart = () => {
  const theme = useTheme()
  return (
    <ResponsivePie
      data={mockPieData}
      theme={{
        tooltip: {
          container: {
            color: '#222',
            fontSize: 12,
          },
        },
      }}
      margin={{ top: 0, right: 70, bottom: 60, left: 70 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.text.main}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 70,
          itemHeight: 18,
          itemTextColor: `${theme.palette.text.main}`,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
        },
      ]}
    />
  )
}

export default PieChart
