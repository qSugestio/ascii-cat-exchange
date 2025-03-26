import ExchangeTab from '@/components/Other/ExchangeTab'
import Wrapper from '@/components/Other/Wrapper'

const BalanceInfo = () => {
  return (
    <Wrapper title='Total Balance'>
      <p className='text-(--text-focus) after:content-["▼"] after:text-lg bg-(--text-focus-background) w-fit px-2.5 py-1 rounded-xl'>
        12,521.12
      </p>
      <div className='flex items-center mb-2'>
        <p>Income:</p>
        <ExchangeTab type='income' value={1.2} />
      </div>
      <div className='flex items-center'>
        <p>Loss:</p>
        <ExchangeTab type='loss' value={17.56} />
      </div>
    </Wrapper>
  )
}

export default BalanceInfo
