import Chart from '@/components/Other/Chart/Chart'
import { ReactNode } from 'react'

interface props {
  coin: { ascii: string; title: string }
  lastPrice: number
  dynamic: ReactNode
  volume: number
  chart: number[]
}

const AssetsCoin = ({ coin, lastPrice, dynamic, volume, chart }: props) => {
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap'>
        {coin.ascii} - {coin.title}
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>{lastPrice}</td>
      <td className='px-6 py-4 whitespace-nowrap'>{dynamic}</td>
      <td className='px-6 py-4 whitespace-nowrap'>{volume}</td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <Chart
          prices={[
            1, 2, 4, 4, 2, 4, 2, 1, 10, 2, 4, 6, 10, 20, 10, 20, 10, 10, 2, 2,
            3, 9,
          ]}
        />
      </td>
    </tr>
  )
}

export default AssetsCoin
