import TabsButton from './TabsButton'

const Header = () => {
  return (
    <header className='bg-transparent w-screen h-fit p-2.5 flex justify-between'>
      <div>
        <TabsButton title='Portfolio' />
        <TabsButton title='Transactions' />
        <TabsButton title='Market' />
      </div>
      <div>
        <TabsButton title='NICKNAME' />
      </div>
    </header>
  )
}

export default Header
