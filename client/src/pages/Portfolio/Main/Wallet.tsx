import Chart from '@/components/Other/Chart/Chart'
import ExchangeTab from '@/components/Other/ExchangeTab'
import Wrapper from '@/components/Other/Wrapper'

const Wallet = () => {
  return (
    <Wrapper title='Wallet'>
      <p>In your wallet is 519 ▼</p>

      <ExchangeTab type='neutral' value={0.0} />
      <Chart
        prices={[
          1, 5, 3, 7, 9, 3, 8, 4, 20, 3, 13, 100, 38, 58, 1, 5, 6.2, 5.6, 10.65,
          10.239939232, 100,
        ]}
        // height={50}
      />
    </Wrapper>
  )
}

export default Wallet
