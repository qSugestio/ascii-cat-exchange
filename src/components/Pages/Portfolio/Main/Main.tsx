import Assets from './Assets/Assets'
import BalanceInfo from './BalanceInfo'
import Wallet from './Wallet'

const Main = () => {
  return (
    <main className='size-full flex justify-center items-center'>
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <BalanceInfo />
          <Wallet />
        </div>

        <Assets />
      </div>
    </main>
  )
}

export default Main
