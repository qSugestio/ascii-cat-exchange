import Assets from './Main/Assets/Assets'
import BalanceInfo from './Main/BalanceInfo'
import Wallet from './Main/Wallet'

const Portfolio = () => {
  return (
    <>
      <div className='flex flex-row max-w-4xl w-full justify-center'>
        <div className='flex-1 max-w-md'>
          <BalanceInfo />
        </div>
        <div className='flex-1 max-w-md'>
          <Wallet />
        </div>
      </div>
      <div className='max-w-4xl w-full'>
        <Assets />
      </div>
    </>
  )
}

export default Portfolio
