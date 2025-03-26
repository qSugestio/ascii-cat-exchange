const Button = ({ text }: { text: string }) => {
  return (
    <button className='bg-(--text-focus) text-xl px-5 py-2.5 rounded-xl hover:cursor-pointer hover:scale-105 transition-all active:scale-95'>
      {text}
    </button>
  )
}

export default Button
