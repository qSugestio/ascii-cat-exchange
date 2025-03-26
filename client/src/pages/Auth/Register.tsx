import Wrapper from '@/components/Other/Wrapper'
import Button from './form/Button'
import Input from './form/Input'

const Register = () => {
  return (
    <Wrapper title='Login'>
      <Input placeholder='username' type='text' />
      <Input placeholder='password' type='password' />
      <Input placeholder='repeat password' type='password' />
      <Button text='Зарегистрироваться' />
    </Wrapper>
  )
}

export default Register
