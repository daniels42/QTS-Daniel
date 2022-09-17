**Funcionalidade: Registro**
-
 - Como um usuário do site SP SUBMERSO
 - O usuário quer realizar a função de cadastro 
 - Para que ele possua uma conta e tenha acesso às funcionalidades do site, exclusivas para usuários logados

**Contexto:**
 - Dado que o usuário não possui uma conta no sistema

**Cenário: Registro válido**
 - E ele acessa a página de cadastro 
 - E ele preenche suas credenciais válidas
 - Quando ele aciona a opção para cadastrar 
 - Então um aviso de que o usuário foi cadastrado deve aparecer
 - E ao clicar em "OK" o usuário deve ser redirecionado para a página de Login.

**Cenário: Registro com e-mail já cadastrado**
- E ele acessa a página de cadastro
- E ele preenche suas credenciais com um e-mail já cadastrado no sistema
- Quando ele aciona a opção para cadastrar
- Então uma mensagem de e-mail ou senha inválida deve ser exibida.

**Cenário: Registro com a confirmação de senha inválida**
- E ele acessa a página de cadastro
- E ele preenche suas credenciais com uma confirmação de senha que não confere com a senha
- Quando ele aciona a opção para cadastrar
- Então uma mensagem de e-mail ou senha inválida deve ser exibida

**Funcionalidade: Login**
-
- Como um usuário do site SP SUBMERSO
- O usuário quer realizar a função de login
- Para que ele tenha acesso às funcionalidades do site, exclusivas para usuários logados.

**Contexto:**
- Dado que o usuário possui uma conta no sistema

**Cenário: Login válido**
- E ele acessa a página de login
- E ele preenche suas credencias válidas
- Quando ele aciona a opção de para logar
- Então o usuário será redirecionado à página Index

**Cenário: Login com e-mail incorreto**
- E ele acessa a página de login
- E ele preenche suas credencias com um e-mail incorreto
- Quando ele aciona a opção de logar
- Então um aviso que o e-mail ou senha está incorreta deve ser exibido

**Cenário: Login com senha incorreta**
- E ele acessa a página de login
- E ele preenche suas credencias com uma senha incorreta
- Quando ele aciona a opção de logar
- Então um aviso que o e-mail ou senha está incorreta deve ser exibido

**Funcionalidade: Contato**
-
- Como um usuário do site SP SUBMERSO
- O usuário quer realizar a função de contato
- Para que ele possa entrar em contato com a equipe administradora do site

**Contexto:**
- Dado que o usuário deseja enviar um formulário de contato

**Cenário: Contato válido**
- E ele acessa a página de Contato
- E ele preenche com informações válidas
- Quando ele aciona a opção de enviar contato
- Então um aviso que o formulário de contato foi enviado deve ser exibido

**Cenário: Contato inválido**
- E ele acessa a página de Contato
- E ele preenche com informações inválidas
- Quando ele aciona a opção de enviar contato
- Então um aviso que o formulário de contato não foi enviado devido a um erro no preenchimento das informações deve ser exibido

**Funcionalidade: Alterar E-mail**
-
- Como um usuário do site SP SUBMERSO
- O usuário quer realizar a função de alterar e-mail
- Para que ele consiga alterar o e-mail atual cadastrado no sistema

**Contexto:**
- O usuário possui uma conta no sistema
- E deseja alterar o e-mail cadastrado

**Cenário: Alteração de E-mail válida**
- E ele acessa a página de Alterar E-mail
- E ele preenche suas credencias válidas
- Quando ele aciona a opção de alterar e-mail
- Então um aviso que o e-mail foi alterado deve ser exibido

**Cenário: Alteração de E-mail com um e-mail já cadastrado no sistema**
- E ele acessa a página de Alterar E-mail
- E ele preenche suas credencias com um e-mail já cadastrado no sistema
- Quando ele aciona a opção de alterar e-mail
- Então um aviso que não foi possível fazer a alteração no e-mail atual deve ser exibido

**Funcionalidade: Alterar Senha**
-
- Como um usuário do site SP SUBMERSO
- O usuário quer realizar a função de alterar senha
- Para que ele consiga alterar a senha atual cadastrada no sistema

**Contexto:**
- O usuário possui uma conta no sistema
- E deseja alterar a senha cadastrada

**Cenário: Alteração de senha válida**
- E ele acessa a página de alterar senha
- E ele preenche suas credencias válidas
- Quando ele aciona a opção de alterar senha
- Então um aviso que a senha foi alterada deve ser exibida

**Cenário: Alteração de senha com senha antiga inválida**
- E ele acessa a página de alterar senha
- E ele preenche suas credencias com a senha antiga incorreta
- Quando ele aciona a opção de alterar senha
- Então um aviso que a senha não foi alterada devido a senha antiga não conferir com a cadastrada no sistema deve ser exibido

**Cenário: Alteração de senha com as senhas não conferindo**
- E ele acessa a página de alterar senha
- E ele preenche suas credencias com a confirmação de senha inválida
- Quando ele aciona a opção de alterar senha
- Então um aviso que as senhas não conferem deve ser exibido
