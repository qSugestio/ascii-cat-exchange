import Wrapper from '@/components/Other/Wrapper'
import AssetsCoin from './AssetsCoin'

const Assets = () => {
  return (
    <Wrapper title='Assets'>
      <table className='min-w-full '>
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
          <tr>
            <td className='px-6 py-4 whitespace-nowrap'>Мария</td>
            <td className='px-6 py-4 whitespace-nowrap'>25</td>
            <td className='px-6 py-4 whitespace-nowrap'>Санкт-Петербург</td>
          </tr>
          <tr>
            <td className='px-6 py-4 whitespace-nowrap'>Алексей</td>
            <td className='px-6 py-4 whitespace-nowrap'>35</td>
            <td className='px-6 py-4 whitespace-nowrap'>Новосибирск</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  )
}

export default Assets
