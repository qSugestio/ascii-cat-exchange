import Link from 'next/link'

interface props {
  title: string
}

const TabsButton = ({ title }: props) => {
  return title === 'Account' ? (
    <Link
      href='account'
      className='relative inline-block overflow-hidden group'
    >
      <span className='block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full hover:text-(--active-button)'>
        Account
      </span>
      <span className='block absolute inset-x-0 bottom-0 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 hover:text-(--active-button)'>
        Login
      </span>
    </Link>
  ) : (
    <Link
      href={title.toLowerCase()}
      className='text-white hover:text-[#5050fa] text-base ease-in-out duration-100 mx-3.5 hover:underline'
    >
      {title}
    </Link>
  )
}

export default TabsButton
