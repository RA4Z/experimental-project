const secoes = [
    {
      id: 1,
      titulo: 'Olá nome, pedimos que insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo',
          name: 'nome'
        },
        {
          id: 2,
          label: 'E-mail',
          placeholder: 'Digite seu E-mail',
          name: 'email'
        },
        {
          id: 3,
          label: 'Telefone',
          placeholder: '(00) 00000-0000',
          name: 'senha'
        },
        {
          id: 4,
          label: 'Senha',
          placeholder: 'Insira sua senha',
          secureTextEntry: true,
          name: 'senha'
        },
        {
          id: 5,
          label: 'Confirme a senha',
          placeholder: 'Insira sua senha',
          secureTextEntry: true,
          name: 'confirmaSenha'
        },
        {
          id: 6,
          label: 'Gênero',
          placeholder: 'Selecione seu Gênero',
          tipoInput: 'Select',
          name: 'genero'
        }
      ]
    }
  ]
  export { secoes }