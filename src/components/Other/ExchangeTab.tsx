interface props {
  type: 'loss' | 'income' | 'neutral'
  value: number
}

const ExchangeTab = ({ type, value }: props) => {
  const styles = {
    loss: 'text-(--loss-text) bg-(--loss-background)',
    income: 'text-(--income-text) bg-(--income-background)',
    neutral: 'text-(--neutral-text) bg-(--neutral-background)',
  }
  const symbol = {
    loss: '↓',
    income: '↑',
    neutral: '↕',
  }

  return (
    <div
      className={`text-base w-fit h-fit rounded-sm px-2.5 py-1.5 font-bold flex ${styles[type]}`}
    >
      <span className='inter-font mr-2.5'>{symbol[type]}</span>
      <span>{value}%</span>
    </div>
  )
}

export default ExchangeTab
