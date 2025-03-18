interface props {
  title: string
}

const TabsButton = ({ title }: props) => {
  return (
    <button className='text-white hover:text-[#5050fa] text-base ease-in-out duration-100 mx-3.5'>
      {title}
    </button>
  )
}

export default TabsButton
