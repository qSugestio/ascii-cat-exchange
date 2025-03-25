import Assets from './Assets/Assets'
import BalanceInfo from './BalanceInfo'
import Wallet from './Wallet'

const Main = () => {
  return (
    <main className='flex flex-col size-full justify-center items-center'>
      <div>
        <div className='flex flex-row'>
          <BalanceInfo />
          <Wallet />
        </div>
        <div></div>
        <Assets />
      </div>
    </main>
  )
}

export default Main
