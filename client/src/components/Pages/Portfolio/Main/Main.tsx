import Assets from './Assets/Assets'
import BalanceInfo from './BalanceInfo'
import Wallet from './Wallet'

const Main = () => {
  return (
    <main className='flex flex-col h-full w-full justify-center items-center'>
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
    </main>
  )
}

export default Main
