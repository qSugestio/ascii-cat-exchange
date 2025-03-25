const formatNumber = (num: number) => num.toLocaleString('en-US')

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className='bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700'>
        <p className='font-bold text-base'>{`День: ${label}`}</p>
        <p className='text-base text-(--text-focus) after:content-["▼"] after:text-lg'>
          {`${formatNumber(data.price)}`}
        </p>
        {/* <p className='text-sm'>{`Цена: $${data.price.toFixed(2)}`}</p> */}
      </div>
    )
  }
  return null
}

export default CustomTooltip
