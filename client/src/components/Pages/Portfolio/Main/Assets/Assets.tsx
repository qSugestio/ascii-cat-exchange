import Wrapper from '@/components/Other/Wrapper'
import AssetsCoin from './AssetsCoin'

const Assets = () => {
  return (
    <Wrapper title='Assets'>
      <table>
        <thead className='border-b-(--border) border-b-4'>
          <tr>
            <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>
              Coin
            </th>
            <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>
              Last price
            </th>
            <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>
              Dynamic
            </th>
            <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>
              Volume
            </th>
            <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>
              Chart
            </th>
          </tr>
        </thead>
        <tbody>
          <AssetsCoin
            coin={{ ascii: 'ASCII', title: 'cyan coin' }}
            lastPrice={20}
          />
        </tbody>
      </table>
    </Wrapper>
  )
}

export default Assets
