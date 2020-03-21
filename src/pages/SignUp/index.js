import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  username: Yup.string().required('O Usuário é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha precisa ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
  confirmPassword: Yup.string()
    .min(6, 'Senha precisa ter pelo menos 6 caracteres')
    .required('A confirmação de senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ username, password, confirmPassword }) {
    dispatch(signUpRequest(username, password, confirmPassword));
  }

  return (
    <>
      <img src={logo} alt="Serasa" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" type="text" placeholder="Digite um usuário" />
        <Input name="password" type="password" placeholder="Digite uma senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
