const perguntas = [
    {
      pergunta: "Qual é o resultado da expressão '10 + 5' em JavaScript?",
      Respostas: [
        "10",
        "15",
        "5",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama o processo de combinar duas strings em JavaScript?",
      Respostas: [
        "Concatenação",
        "Soma",
        "Substituição",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de atribuição composto para adicionar 5 a uma variável em JavaScript?",
      Respostas: [
        "+=",
        "-=",
        "*=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função para obter o comprimento de uma string em JavaScript?",
      Respostas: [
        "length()",
        "size()",
        "length",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      Respostas: [
        "removeLast()",
        "pop()",
        "shift()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '10 == '10' em JavaScript?",
      Respostas: [
        "Verdadeiro",
        "Falso",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      Respostas: [
        "function myFunction()",
        "def myFunction()",
        "func myFunction()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de módulo em JavaScript?",
      Respostas: [
        "%",
        "/",
        "**",
      ],
      correta: 0
    },
    {
      pergunta: "Como você acessa o último elemento de um array em JavaScript?",
      Respostas: [
        "array.last",
        "array[length-1]",
        "array[-1]",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave usada para definir uma constante em JavaScript?",
      Respostas: [
        "let",
        "const",
        "var",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função para converter uma string em letras minúsculas em JavaScript?",
      Respostas: [
        "toLowerCase()",
        "toLower()",
        "lowerCase()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função para arredondar um número para o inteiro mais próximo em JavaScript?",
      Respostas: [
        "round()",
        "floor()",
        "ceil()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método para dividir uma string em um array de substrings em JavaScript?",
      Respostas: [
        "slice()",
        "split()",
        "substr()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de incremento em JavaScript?",
      Respostas: [
        "++",
        "+=",
        "+1",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de exponenciação em JavaScript?",
      Respostas: [
        "^",
        "**",
        "^^",
      ],
      correta: 1
    },
    {
      pergunta: "Como você verifica se uma variável é do tipo número em JavaScript?",
      Respostas: [
        "isNumber()",
        "typeof === 'number'",
        "isNumeric()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função para encontrar o valor máximo em um array em JavaScript?",
      Respostas: [
        "max()",
        "maximum()",
        "Math.max()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a palavra-chave para terminar um loop em JavaScript?",
      Respostas: [
        "end",
        "break",
        "stop",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '10 === '10' em JavaScript?",
      Respostas: [
        "Verdadeiro",
        "Falso",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Como você verifica se uma string contém outra string em JavaScript?",
      Respostas: [
        "contains()",
        "includes()",
        "has()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função para converter uma string em letras maiúsculas em JavaScript?",
      Respostas: [
        "toUpperCase()",
        "toUpper()",
        "upperCase()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de decremento em JavaScript?",
      Respostas: [
        "--",
        "-=",
        "-1",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método para encontrar o índice de um elemento em um array em JavaScript?",
      Respostas: [
        "findIndex()",
        "indexOf()",
        "search()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função para obter um número aleatório entre 0 e 1 em JavaScript?",
      Respostas: [
        "random()",
        "Math.random()",
        "rand()",
      ],
      correta: 1
    },
    {
      pergunta: "Como você acessa a parte decimal de um número em JavaScript?",
      Respostas: [
        "decimal()",
        "fraction()",
        "toString()",
      ],
      correta: 2
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent =item.pergunta
  
    for(let Resposta of item.Respostas) {
      const dt= quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = Resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.Respostas.indexOf(Resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }