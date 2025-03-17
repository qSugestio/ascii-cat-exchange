interface props {
  title: string
}

const Button = ({ title }: props) => {
  return (
    <button className='text-white hover:text-[#5050fa] text-xl ease-in-out duration-100'>
      {title}
    </button>
  )
}

export default Button
