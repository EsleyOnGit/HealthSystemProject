//link do video base da pagina de login https://youtu.be/d79TqHpSY3M?si=9bPpr55uFoKB3IT6
import { useState } from "react";
import * as Components from './styleLoginPage';
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

export const LoginPage = () => {
  const [signIn, toggle] = useState(true)
  return (
    <Components.Container>
            <Components.Bgimage>
            </Components.Bgimage>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Criar Cadastro</Components.Title>
                      <Components.Input type='text' placeholder='Name' />
                      <Components.Input type='number' placeholder='CPF' />
                      <Components.Input type='date' placeholder='Data de Nascimento' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Button>Enviar</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Entrar</Components.Title>
                       <Components.Input type='email' placeholder='Email' />
                       <Components.Input type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Esqueceu sua senha?</Components.Anchor>
                       <Components.Button>Enviar</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Seja Bem Vindo!</Components.Title>
                      <Components.Paragraph>
                          ou faça login com
                          <br />
                          <FaFacebook />
                          <FaGoogle />
                          <FaInstagram />
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Entrar
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Olá, seja bem vindo!</Components.Title>
                        <Components.Paragraph>
                            Cadastre-se e junte-se a nós
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                cadastrar
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
                  </Components.Overlay>
              </Components.OverlayContainer>
          </Components.Container>
  );
};

export default LoginPage;
