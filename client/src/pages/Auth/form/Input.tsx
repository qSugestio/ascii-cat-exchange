interface props {
  placeholder: string
  type: 'text' | 'password'
}

const Input = ({ placeholder, type }: props) => {
  return (
    <input
      placeholder={placeholder}
      className='bg-(--text-focus-background) border-(--text-focus) border-4 rounded-xl px-5 py-2.5 text-xl outline-0'
      type={type}
    />
  )
}

export default Input
