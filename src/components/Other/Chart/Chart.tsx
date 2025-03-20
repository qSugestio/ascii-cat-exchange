'use client'

import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'
import CustomTooltip from './CustomTooltip'

const Chart = ({ prices, height }: { prices: number[]; height: number }) => {
  const data = prices.map((price, index) => ({
    day: `Day ${index + 1}`,
    price,
  }))

  return (
    <ResponsiveContainer width='100%' height={height}>
      <AreaChart data={data}>
        <Tooltip content={<CustomTooltip />} />
        <defs>
          <linearGradient id='priceGradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='1%' stopColor='#5050fa' stopOpacity={1} />
            <stop offset='99%' stopColor='#5050fa' stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type='monotone'
          dataKey='price'
          stroke='#5050fa'
          strokeWidth={3}
          fill='url(#priceGradient)'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart
