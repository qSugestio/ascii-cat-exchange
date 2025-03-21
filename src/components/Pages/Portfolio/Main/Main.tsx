import Assets from './Assets/Assets'
import BalanceInfo from './BalanceInfo'
import Wallet from './Wallet'

const Main = () => {
  return (
    <main className='size-full flex justify-center items-center'>
      <BalanceInfo />
      <Wallet />
      <Assets />
    </main>
  )
}

export default Main
