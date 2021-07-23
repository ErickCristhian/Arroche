## Instalação do Backend
Este tutorial subentende que você já tem o mongodb instalado e configurado na sua máquina.

Crie um banco no mongo chamado arrochaurl rodando na porta 27017.


Ao clonar a pasta do Backend:

Crie um arquivo .env na raiz da pasta.
Coloque o seguinte conteúdo dentro do arquivo:

```
NODE_ENV=development
PORT=3333
DATABASE=mongodb://127.0.0.1:27017/arrochaurl
```
Em seguida execute o seguinte comando no terminal:

```
yarn install
```

Aguarde o processo ser finalizado...

Depois de finalizado o processo de instalação, rode o seguinte comando:
```
yarn dev
```


O backend deve estar rodando em http://localhost:3333.

Qualquer eventual problema pode entrar em contato por email: erickcristhian123@gmail.com.