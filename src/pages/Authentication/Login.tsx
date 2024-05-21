import { ActionFunctionArgs } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm';
import { actions } from '../../services/common/Actions';

const Login = () => {
  return (
    <LoginForm />
  )
}

export const SignInAction = async (actionArgs: ActionFunctionArgs) => {
  return actions.SignInAction(actionArgs);
};

export default Login