import Wrapper from '@/components/Other/Wrapper'
import Button from './form/Button'
import Input from './form/Input'

const Login = () => {
  return (
    <Wrapper title='Login'>
      <Input placeholder='username' type='text' />
      <Input placeholder='password' type='password' />
      <Button text='Авторизироваться' />
    </Wrapper>
  )
}

export default Login
