// ========== BANCO DE PERGUNTAS (150 PERGUNTAS) ========== //
const todasPerguntas = [
  // Nível 1 (30 perguntas fáceis)
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    resposta: 1,
    nivel: 1,
    categoria: "Geografia"
  },
 
   {
    pergunta: "Qual é o maior oceano do mundo?",
    opcoes: ["Atlântico", "Índico", "Pacífico", "Ártico"],
    resposta: 2,
    nivel: 1,
    categoria: "Geografia"
  },
  
  {
    pergunta: "Quem pintou 'Mona Lisa'?",
    opcoes: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
    resposta: 2,
    nivel: 1,
    categoria: "Artes"
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    opcoes: ["Terra", "Júpiter", "Saturno", "Netuno"],
    resposta: 1,
    nivel: 1,
    categoria: "Ciência"
  },
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    resposta: 1,
    nivel: 1,
    categoria: "Geografia"
  },
  {
    pergunta: "Quantos segundos há em um minuto?",
    opcoes: ["60", "100", "30", "90"],
    resposta: 0,
    nivel: 1,
    categoria: "Matemática"
  },
  {
    pergunta: "Em que continente está localizado o Egito?",
    opcoes: ["Ásia", "Europa", "África", "América"],
    resposta: 2,
    nivel: 1,
    categoria: "Geografia"
  },
  {
    pergunta: "Qual é o plural de 'papel'?",
    opcoes: ["Papéis", "Papeis", "Papeis'", "Papéis'"],
    resposta: 0,
    nivel: 1,
    categoria: "Português"
  },
  {
    pergunta: "Qual é o animal símbolo da Austrália?",
    opcoes: ["Canguru", "Leão", "Tigre", "Urso"],
    resposta: 0,
    nivel: 1,
    categoria: "Conhecimentos Gerais"
  },
  {
    pergunta: "Qual é a cor da esmeralda?",
    opcoes: ["Verde", "Azul", "Vermelha", "Roxa"],
    resposta: 0,
    nivel: 1,
    categoria: "Ciência"
  },
  {
    pergunta: "Quanto é 2 + 2?",
    opcoes: ["3", "4", "5", "6"],
    resposta: 1,
    nivel: 1,
    categoria: "Matemática"
  },

  // (mais 40 perguntas abaixo...)

  {
    pergunta: "Quem descobriu o Brasil?",
    opcoes: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Dom Pedro I", "Tiradentes"],
    resposta: 0,
    nivel: 1,
    categoria: "História"
  },
  {
    pergunta: "Qual é o instrumento usado para medir a temperatura?",
    opcoes: ["Barômetro", "Higrômetro", "Termômetro", "Anemômetro"],
    resposta: 2,
    nivel: 1,
    categoria: "Ciência"
  },
  {
    pergunta: "Qual é o nome do nosso satélite natural?",
    opcoes: ["Estrela", "Lua", "Sol", "Vênus"],
    resposta: 1,
    nivel: 1,
    categoria: "Astronomia"
  },
  {
    pergunta: "Qual é a cor da bandeira da Argentina?",
    opcoes: ["Azul e branca", "Verde e amarela", "Vermelha e branca", "Preta e amarela"],
    resposta: 0,
    nivel: 1,
    categoria: "Geografia"
  },
  {
    pergunta: "Qual é o país do samba?",
    opcoes: ["Argentina", "México", "Brasil", "Espanha"],
    resposta: 2,
    nivel: 1,
    categoria: "Cultura"
  },
  {
    pergunta: "Quantos dias tem um ano comum?",
    opcoes: ["365", "360", "366", "364"],
    resposta: 0,
    nivel: 1,
    categoria: "Ciência"
  },
  {
    pergunta: "Quem é o autor de 'Dom Casmurro'?",
    opcoes: ["Machado de Assis", "Carlos Drummond", "Monteiro Lobato", "Clarice Lispector"],
    resposta: 0,
    nivel: 1,
    categoria: "Literatura"
  },
  {
    pergunta: "Qual é o menor planeta do sistema solar?",
    opcoes: ["Terra", "Vênus", "Marte", "Mercúrio"],
    resposta: 3,
    nivel: 1,
    categoria: "Ciência"
  },
  {
    pergunta: "Qual é o nome do rio mais extenso do mundo?",
    opcoes: ["Nilo", "Amazonas", "Mississippi", "Yangtzé"],
    resposta: 1,
    nivel: 1,
    categoria: "Geografia"
  },
  {
    pergunta: "Qual é o símbolo químico da água?",
    opcoes: ["O2", "CO2", "H2O", "NaCl"],
    resposta: 2,
    nivel: 1,
    categoria: "Química"
  },

  // (faltam mais 20 para completar 50...)

  {
    pergunta: "Qual é o resultado de 5 x 5?",
    opcoes: ["10", "15", "25", "30"],
    resposta: 2,
    nivel: 1,
    categoria: "Matemática"
  },
  {
    pergunta: "O que usamos para ver objetos distantes no céu?",
    opcoes: ["Microscópio", "Telescópio", "Lupa", "Binóculo"],
    resposta: 1,
    nivel: 1,
    categoria: "Astronomia"
  },
  {
    pergunta: "Quantas patas tem uma aranha?",
    opcoes: ["4", "6", "8", "10"],
    resposta: 2,
    nivel: 1,
    categoria: "Biologia"
  },
  {
    pergunta: "Qual é a estação do ano mais fria?",
    opcoes: ["Primavera", "Verão", "Outono", "Inverno"],
    resposta: 3,
    nivel: 1,
    categoria: "Geografia"
  },
  {
    pergunta: "O que é uma dúzia?",
    opcoes: ["6", "10", "12", "20"],
    resposta: 2,
    nivel: 1,
    categoria: "Matemática"
  },
  {
    pergunta: "Quantos continentes existem?",
    opcoes: ["5", "6", "7", "8"],
    resposta: 2,
    nivel: 1,
    categoria: "Geografia"
  },
  {
    pergunta: "Qual planeta é conhecido como planeta vermelho?",
    opcoes: ["Vênus", "Marte", "Júpiter", "Saturno"],
    resposta: 1,
    nivel: 1,
    categoria: "Astronomia"
  },
  {
    pergunta: "Como se chama o processo pelo qual as plantas produzem seu alimento?",
    opcoes: ["Digestão", "Respiração", "Fotossíntese", "Circulação"],
    resposta: 2,
    nivel: 1,
    categoria: "Biologia"
  },
  {
    pergunta: "Qual é a capital da França?",
    opcoes: ["Berlim", "Londres", "Paris", "Roma"],
    resposta: 2,
    nivel: 1,
    categoria: "Geografia"
  },
  {
    pergunta: "Em qual país está localizada a Torre Eiffel?",
    opcoes: ["Itália", "Alemanha", "França", "Espanha"],
    resposta: 2,
    nivel: 1,
    categoria: "Geografia"
  }, 
  // Nível 2 (30 perguntas moderadas)
  {
    pergunta: "Qual país tem o formato de uma bota?",
    opcoes: ["França", "Itália", "Espanha", "Portugal"],
    resposta: 1,
    nivel: 2,
    categoria: "Geografia"
  },
  {
  pergunta: "Em que país se encontra a Muralha da China?",
  opcoes: ["Japão", "China", "Coreia do Sul", "Índia"],
  resposta: 1,
  nivel: 2,
  categoria: "Geografia"
},
{
  pergunta: "Quem foi o criador da teoria da relatividade?",
  opcoes: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Stephen Hawking"],
  resposta: 2,
  nivel: 2,
  categoria: "Ciência"
},
{
  pergunta: "Qual é o idioma mais falado no mundo?",
  opcoes: ["Inglês", "Hindi", "Espanhol", "Mandarim"],
  resposta: 3,
  nivel: 2,
  categoria: "Línguas"
},
{
  pergunta: "Qual o símbolo químico do sódio?",
  opcoes: ["Na", "So", "Sd", "Sn"],
  resposta: 0,
  nivel: 2,
  categoria: "Química"
},
{
  pergunta: "Qual artista é famoso pela pintura 'O Grito'?",
  opcoes: ["Edvard Munch", "Van Gogh", "Monet", "Picasso"],
  resposta: 0,
  nivel: 2,
  categoria: "Artes"
},
{
  pergunta: "Qual planeta é conhecido como o planeta vermelho?",
  opcoes: ["Marte", "Júpiter", "Vênus", "Saturno"],
  resposta: 0,
  nivel: 2,
  categoria: "Astronomia"
},
{
  pergunta: "Quem escreveu 'Dom Casmurro'?",
  opcoes: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Eça de Queirós"],
  resposta: 0,
  nivel: 2,
  categoria: "Literatura"
},
{
  pergunta: "Qual é o menor país do mundo?",
  opcoes: ["Mônaco", "Malta", "Vaticano", "San Marino"],
  resposta: 2,
  nivel: 2,
  categoria: "Geografia"
},
{
  pergunta: "Quantos lados tem um octógono?",
  opcoes: ["6", "7", "8", "9"],
  resposta: 2,
  nivel: 2,
  categoria: "Matemática"
},
{
  pergunta: "Quem pintou 'A Última Ceia'?",
  opcoes: ["Leonardo da Vinci", "Michelangelo", "Donatello", "Rafael"],
  resposta: 0,
  nivel: 2,
  categoria: "Artes"
},
{
  pergunta: "Qual é o maior deserto do mundo?",
  opcoes: ["Saara", "Deserto da Arábia", "Antártida", "Gobi"],
  resposta: 2,
  nivel: 2,
  categoria: "Geografia"
},
{
  pergunta: "Qual o número atômico do carbono?",
  opcoes: ["6", "12", "8", "10"],
  resposta: 0,
  nivel: 2,
  categoria: "Química"
},
{
  pergunta: "Qual é o continente com o maior número de países?",
  opcoes: ["África", "Ásia", "Europa", "América"],
  resposta: 0,
  nivel: 2,
  categoria: "Geografia"
},
{
  pergunta: "Quem escreveu 'A Divina Comédia'?",
  opcoes: ["Dante Alighieri", "Shakespeare", "Goethe", "Camões"],
  resposta: 0,
  nivel: 2,
  categoria: "Literatura"
},
{
  pergunta: "Qual é o órgão responsável por bombear o sangue no corpo humano?",
  opcoes: ["Pulmões", "Coração", "Fígado", "Estômago"],
  resposta: 1,
  nivel: 2,
  categoria: "Biologia"
},
{
  pergunta: "Qual é o nome do satélite natural da Terra?",
  opcoes: ["Lua", "Sol", "Estrela", "Plutão"],
  resposta: 0,
  nivel: 2,
  categoria: "Astronomia"
},
{
  pergunta: "Qual é a capital do Canadá?",
  opcoes: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  resposta: 2,
  nivel: 2,
  categoria: "Geografia"
},
{
  pergunta: "Qual é o nome da ciência que estuda os seres vivos?",
  opcoes: ["Física", "Química", "Biologia", "Geologia"],
  resposta: 2,
  nivel: 2,
  categoria: "Ciência"
},
{
  pergunta: "Quantos ossos tem o corpo humano adulto?",
  opcoes: ["206", "210", "198", "250"],
  resposta: 0,
  nivel: 2,
  categoria: "Biologia"
},
{
  pergunta: "Em que continente fica o Egito?",
  opcoes: ["Ásia", "África", "Europa", "América"],
  resposta: 1,
  nivel: 2,
  categoria: "Geografia"
},
{
  pergunta: "Quem escreveu 'O Pequeno Príncipe'?",
  opcoes: ["Saint-Exupéry", "Monteiro Lobato", "J. K. Rowling", "Andersen"],
  resposta: 0,
  nivel: 2,
  categoria: "Literatura"
},
{
  pergunta: "Qual é o nome do processo pelo qual as plantas produzem seu alimento?",
  opcoes: ["Respiração", "Fotossíntese", "Transpiração", "Digestão"],
  resposta: 1,
  nivel: 2,
  categoria: "Biologia"
},
{
  pergunta: "Qual cientista propôs a teoria da evolução?",
  opcoes: ["Newton", "Darwin", "Einstein", "Galileu"],
  resposta: 1,
  nivel: 2,
  categoria: "Ciência"
},
{
  pergunta: "Qual é o maior rio do mundo em volume de água?",
  opcoes: ["Amazonas", "Nilo", "Yangtzé", "Mississipi"],
  resposta: 0,
  nivel: 2,
  categoria: "Geografia"
},
{
  pergunta: "Qual é a principal substância da fórmula da água?",
  opcoes: ["H2O", "CO2", "NaCl", "CH4"],
  resposta: 0,
  nivel: 2,
  categoria: "Química"
},
{
  pergunta: "Quem foi o primeiro presidente do Brasil?",
  opcoes: ["Dom Pedro II", "Marechal Deodoro da Fonseca", "Getúlio Vargas", "Juscelino Kubitschek"],
  resposta: 1,
  nivel: 2,
  categoria: "História"
},
{
  pergunta: "Qual o nome do maior osso do corpo humano?",
  opcoes: ["Fêmur", "Tíbia", "Úmero", "Rádio"],
  resposta: 0,
  nivel: 2,
  categoria: "Biologia"
},
{
  pergunta: "Em que continente fica a Cordilheira dos Andes?",
  opcoes: ["Ásia", "América do Sul", "Europa", "América do Norte"],
  resposta: 1,
  nivel: 2,
  categoria: "Geografia"
},
{
  pergunta: "Qual o nome da primeira mulher a ganhar dois prêmios Nobel?",
  opcoes: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
  resposta: 0,
  nivel: 2,
  categoria: "História"
},
{
  pergunta: "Qual é a capital da Argentina?",
  opcoes: ["Buenos Aires", "Lima", "Santiago", "Montevidéu"],
  resposta: 0,
  nivel: 2,
  categoria: "Geografia"
},
{
  pergunta: "Qual o nome do movimento que separou a Igreja Católica e criou o protestantismo?",
  opcoes: ["Iluminismo", "Reforma", "Inquisição", "Contrarreforma"],
  resposta: 1,
  nivel: 2,
  categoria: "História"
},
    
  // Nível 3 (30 perguntas difíceis)
  {
    pergunta: "Qual destes países não faz parte do BRICS?",
    opcoes: ["Brasil", "Rússia", "Índia", "Argentina"],
    resposta: 3,
    nivel: 3,
    categoria: "Atualidades"
  },
  {
  pergunta: "Quem foi o primeiro presidente do Brasil?",
  opcoes: ["Getúlio Vargas", "Deodoro da Fonseca", "Dom Pedro II", "Juscelino Kubitschek"],
  resposta: 1,
  nivel: 3,
  categoria: "História"
},
{
  pergunta: "Qual é a fórmula química da água oxigenada?",
  opcoes: ["H2O2", "H2O", "O2", "CO2"],
  resposta: 0,
  nivel: 3,
  categoria: "Química"
},
{
  pergunta: "Em que ano ocorreu a Revolução Francesa?",
  opcoes: ["1776", "1789", "1804", "1750"],
  resposta: 1,
  nivel: 3,
  categoria: "História"
},
{
  pergunta: "Qual é o valor aproximado de π (pi)?",
  opcoes: ["3,12", "3,14", "3,18", "3,21"],
  resposta: 1,
  nivel: 3,
  categoria: "Matemática"
},
{
  pergunta: "Quem escreveu a obra 'Dom Casmurro'?",
  opcoes: ["José de Alencar", "Machado de Assis", "Carlos Drummond", "Monteiro Lobato"],
  resposta: 1,
  nivel: 3,
  categoria: "Literatura"
},
{
  pergunta: "Em que continente se localiza o deserto do Saara?",
  opcoes: ["Ásia", "América", "África", "Europa"],
  resposta: 2,
  nivel: 3,
  categoria: "Geografia"
},
{
  pergunta: "Qual é o maior rio do mundo em volume de água?",
  opcoes: ["Nilo", "Amazonas", "Mississipi", "Yangtzé"],
  resposta: 1,
  nivel: 3,
  categoria: "Geografia"
},
{
  pergunta: "Qual cientista propôs a teoria da relatividade?",
  opcoes: ["Isaac Newton", "Galileu Galilei", "Albert Einstein", "Stephen Hawking"],
  resposta: 2,
  nivel: 3,
  categoria: "Física"
},
{
  pergunta: "Qual é a capital do Canadá?",
  opcoes: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  resposta: 2,
  nivel: 3,
  categoria: "Geografia"
},
{
  pergunta: "Quem compôs a '9ª Sinfonia'?",
  opcoes: ["Mozart", "Beethoven", "Bach", "Vivaldi"],
  resposta: 1,
  nivel: 3,
  categoria: "Música"
},
{
  pergunta: "Qual foi a principal causa da Primeira Guerra Mundial?",
  opcoes: ["Crise de 1929", "Corrida espacial", "Assassinato do arquiduque", "Revolução Industrial"],
  resposta: 2,
  nivel: 3,
  categoria: "História"
},
{
  pergunta: "Qual animal é símbolo do continente australiano?",
  opcoes: ["Leão", "Canguru", "Urso", "Panda"],
  resposta: 1,
  nivel: 3,
  categoria: "Biologia"
},
{
  pergunta: "Qual é a principal função dos glóbulos vermelhos?",
  opcoes: ["Combater vírus", "Transportar oxigênio", "Regular temperatura", "Produzir energia"],
  resposta: 1,
  nivel: 3,
  categoria: "Biologia"
},
{
  pergunta: "Quem descobriu a penicilina?",
  opcoes: ["Pasteur", "Einstein", "Alexander Fleming", "Isaac Newton"],
  resposta: 2,
  nivel: 3,
  categoria: "Ciência"
},
{
  pergunta: "Qual país sediou a Copa do Mundo de 2014?",
  opcoes: ["Alemanha", "África do Sul", "Brasil", "Rússia"],
  resposta: 2,
  nivel: 3,
  categoria: "Esportes"
},
{
  pergunta: "Qual é o nome da molécula responsável pela hereditariedade?",
  opcoes: ["RNA", "DNA", "ATP", "H2O"],
  resposta: 1,
  nivel: 3,
  categoria: "Biologia"
},
{
  pergunta: "Quantos ossos tem o corpo humano adulto?",
  opcoes: ["202", "206", "210", "180"],
  resposta: 1,
  nivel: 3,
  categoria: "Biologia"
},
{
  pergunta: "Qual é a capital do Irã?",
  opcoes: ["Bagdá", "Teerã", "Riad", "Beirute"],
  resposta: 1,
  nivel: 3,
  categoria: "Geografia"
},
{
  pergunta: "Quem pintou o teto da Capela Sistina?",
  opcoes: ["Da Vinci", "Raphael", "Michelangelo", "Donatello"],
  resposta: 2,
  nivel: 3,
  categoria: "Arte"
},
{
  pergunta: "Quem foi o autor de 'A Metamorfose'?",
  opcoes: ["Kafka", "Goethe", "Dostoiévski", "Tolstói"],
  resposta: 0,
  nivel: 3,
  categoria: "Literatura"
},
{
  pergunta: "Qual órgão do corpo humano é responsável por filtrar o sangue?",
  opcoes: ["Estômago", "Pulmão", "Rim", "Fígado"],
  resposta: 2,
  nivel: 3,
  categoria: "Biologia"
},
{
  pergunta: "O que é a fotossíntese?",
  opcoes: ["Processo de digestão", "Produção de oxigênio pelas plantas", "Respiração celular", "Movimento das plantas"],
  resposta: 1,
  nivel: 3,
  categoria: "Ciência"
},
{
  pergunta: "Em que país se localiza a cidade de Praga?",
  opcoes: ["Áustria", "Polônia", "República Tcheca", "Eslováquia"],
  resposta: 2,
  nivel: 3,
  categoria: "Geografia"
},
{
  pergunta: "Quem é o autor de 'O Pequeno Príncipe'?",
  opcoes: ["Saint-Exupéry", "Verne", "Molière", "Zola"],
  resposta: 0,
  nivel: 3,
  categoria: "Literatura"
},
{
  pergunta: "Qual é o idioma falado na Holanda?",
  opcoes: ["Alemão", "Holandês", "Dinamarquês", "Inglês"],
  resposta: 1,
  nivel: 3,
  categoria: "Línguas"
},
{
  pergunta: "Qual é a montanha mais alta do mundo?",
  opcoes: ["Everest", "Aconcágua", "K2", "Makalu"],
  resposta: 0,
  nivel: 3,
  categoria: "Geografia"
},
{
  pergunta: "Qual filósofo escreveu 'A República'?",
  opcoes: ["Aristóteles", "Sócrates", "Platão", "Descartes"],
  resposta: 2,
  nivel: 3,
  categoria: "Filosofia"
},
{
  pergunta: "O que mede um barômetro?",
  opcoes: ["Temperatura", "Umidade", "Pressão atmosférica", "Velocidade do vento"],
  resposta: 2,
  nivel: 3,
  categoria: "Ciência"
},
{
  pergunta: "Qual era o nome do navio que naufragou em 1912?",
  opcoes: ["Lusitânia", "Titanic", "Olympic", "Britannic"],
  resposta: 1,
  nivel: 3,
  categoria: "História"
},
{
  pergunta: "Em qual país se localiza Machu Picchu?",
  opcoes: ["México", "Peru", "Bolívia", "Chile"],
  resposta: 1,
  nivel: 3,
  categoria: "História"
},

  {
    pergunta: "Qual cientista descobriu a penicilina?",
    opcoes: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
    resposta: 1,
    nivel: 4,
    categoria: "Ciência"
  },
 {
  pergunta: "Quem foi o primeiro homem a receber um transplante de coração?",
  opcoes: ["Louis Washkansky", "Barney Clark", "Christian Barnard", "Philip Blaiberg"],
  resposta: 0,
  nivel: 4,
  categoria: "Medicina"
},
{
  pergunta: "Qual a constante matemática usada para representar o número de Euler?",
  opcoes: ["π", "e", "φ", "i"],
  resposta: 1,
  nivel: 4,
  categoria: "Matemática"
},
{
  pergunta: "Em qual país surgiu a filosofia do estoicismo?",
  opcoes: ["Roma", "Egito", "Grécia", "Índia"],
  resposta: 2,
  nivel: 4,
  categoria: "Filosofia"
},
{
  pergunta: "Quem foi o autor da obra 'Crítica da Razão Pura'?",
  opcoes: ["Descartes", "Kant", "Hegel", "Nietzsche"],
  resposta: 1,
  nivel: 4,
  categoria: "Filosofia"
},
{
  pergunta: "Qual é o nome do primeiro satélite artificial lançado ao espaço?",
  opcoes: ["Sputnik 1", "Apollo 11", "Explorer 1", "Vostok"],
  resposta: 0,
  nivel: 4,
  categoria: "História"
},
{
  pergunta: "O que mede o espectrofotômetro em análises químicas?",
  opcoes: ["Índice de refração", "Condutividade", "Absorbância de luz", "Densidade"],
  resposta: 2,
  nivel: 4,
  categoria: "Ciência"
},
{
  pergunta: "Qual é o elemento químico com maior número atômico conhecido?",
  opcoes: ["Uranium", "Oganesson", "Copernicium", "Livermorium"],
  resposta: 1,
  nivel: 4,
  categoria: "Química"
},
{
  pergunta: "Qual foi a principal consequência do Tratado de Versalhes?",
  opcoes: ["Criação da ONU", "Fim da Guerra Fria", "Início da Segunda Guerra", "Revolução Russa"],
  resposta: 2,
  nivel: 4,
  categoria: "História"
},
{
  pergunta: "Quem desenvolveu o cálculo infinitesimal simultaneamente a Newton?",
  opcoes: ["Euler", "Galileu", "Descartes", "Leibniz"],
  resposta: 3,
  nivel: 4,
  categoria: "Matemática"
},
{
  pergunta: "Qual a função do ribossomo nas células?",
  opcoes: ["Produção de energia", "Síntese de proteínas", "Digestão celular", "Armazenamento de DNA"],
  resposta: 1,
  nivel: 4,
  categoria: "Biologia"
},
{
  pergunta: "Em que país nasceu o escritor Franz Kafka?",
  opcoes: ["Áustria", "Alemanha", "República Tcheca", "Suíça"],
  resposta: 2,
  nivel: 4,
  categoria: "Literatura"
},
{
  pergunta: "Quem escreveu 'Em busca do tempo perdido'?",
  opcoes: ["Marcel Proust", "Victor Hugo", "Fiódor Dostoiévski", "James Joyce"],
  resposta: 0,
  nivel: 4,
  categoria: "Literatura"
},
{
  pergunta: "Qual cientista propôs o modelo atômico planetário?",
  opcoes: ["Dalton", "Thomson", "Rutherford", "Bohr"],
  resposta: 3,
  nivel: 4,
  categoria: "Física"
},
{
  pergunta: "Qual compositor é conhecido por sua 'Missa em Si Menor'?",
  opcoes: ["Mozart", "Beethoven", "Bach", "Vivaldi"],
  resposta: 2,
  nivel: 4,
  categoria: "Música"
},
{
  pergunta: "Quem formulou a teoria da relatividade geral?",
  opcoes: ["Newton", "Einstein", "Planck", "Bohr"],
  resposta: 1,
  nivel: 4,
  categoria: "Física"
},
{
  pergunta: "Em que século ocorreu a Revolução Gloriosa na Inglaterra?",
  opcoes: ["XVI", "XVII", "XVIII", "XIX"],
  resposta: 1,
  nivel: 4,
  categoria: "História"
},
{
  pergunta: "Qual é o nome do sistema filosófico criado por Platão?",
  opcoes: ["Epicurismo", "Estoicismo", "Idealismo", "Empirismo"],
  resposta: 2,
  nivel: 4,
  categoria: "Filosofia"
},
{
  pergunta: "O que estuda a astrobiologia?",
  opcoes: ["Movimento dos astros", "Vida em outros planetas", "Evolução genética", "Dinâmica estelar"],
  resposta: 1,
  nivel: 4,
  categoria: "Ciência"
},
{
  pergunta: "Qual é a capital da Mongólia?",
  opcoes: ["Astana", "Ulaanbaatar", "Tashkent", "Almaty"],
  resposta: 1,
  nivel: 4,
  categoria: "Geografia"
},
{
  pergunta: "Quem escreveu 'O Ser e o Nada'?",
  opcoes: ["Jean-Paul Sartre", "Camus", "Simone de Beauvoir", "Heidegger"],
  resposta: 0,
  nivel: 4,
  categoria: "Filosofia"
},
{
  pergunta: "Qual fenômeno explica a propagação de ondas em fendas ou obstáculos?",
  opcoes: ["Reflexão", "Refração", "Difração", "Interferência"],
  resposta: 2,
  nivel: 4,
  categoria: "Física"
},
{
  pergunta: "Qual cientista desenvolveu os primeiros estudos sobre a genética?",
  opcoes: ["Watson", "Crick", "Gregor Mendel", "Darwin"],
  resposta: 2,
  nivel: 4,
  categoria: "Biologia"
},
{
  pergunta: "Quem escreveu a obra 'Ética a Nicômaco'?",
  opcoes: ["Sócrates", "Platão", "Aristóteles", "Demócrito"],
  resposta: 2,
  nivel: 4,
  categoria: "Filosofia"
},
{
  pergunta: "Qual a unidade usada para medir pressão no SI?",
  opcoes: ["Bar", "Psi", "Pascal", "Atm"],
  resposta: 2,
  nivel: 4,
  categoria: "Física"
},
{
  pergunta: "Qual é a capital da Etiópia?",
  opcoes: ["Adis Abeba", "Cartum", "Nairóbi", "Kampala"],
  resposta: 0,
  nivel: 4,
  categoria: "Geografia"
},
{
  pergunta: "Qual é o nome do cientista que descobriu os raios X?",
  opcoes: ["Roentgen", "Curie", "Tesla", "Maxwell"],
  resposta: 0,
  nivel: 4,
  categoria: "Ciência"
},
{
  pergunta: "Em que ano ocorreu a queda do Muro de Berlim?",
  opcoes: ["1987", "1989", "1991", "1993"],
  resposta: 1,
  nivel: 4,
  categoria: "História"
},
{
  pergunta: "Qual o nome da proteína responsável pelo transporte de oxigênio no sangue?",
  opcoes: ["Albumina", "Hemoglobina", "Insulina", "Colágeno"],
  resposta: 1,
  nivel: 4,
  categoria: "Biologia"
},
{
  pergunta: "Qual país tem mais fusos horários?",
  opcoes: ["China", "Brasil", "França", "Rússia"],
  resposta: 2,
  nivel: 4,
  categoria: "Geografia"
},
{
  pergunta: "Qual o nome da partícula que dá massa às outras partículas?",
  opcoes: ["Elétron", "Nêutron", "Bóson de Higgs", "Quark"],
  resposta: 2,
  nivel: 4,
  categoria: "Física"
},
{
  pergunta: "Quem escreveu 'O Processo'?",
  opcoes: ["Kafka", "Orwell", "Hesse", "Camus"],
  resposta: 0,
  nivel: 4,
  categoria: "Literatura"
},
  
  // Nível 5 (30 perguntas expert)
  {
    pergunta: "Qual a equação que descreve a relação entre energia e matéria?",
    opcoes: ["E = mc²", "F = ma", "PV = nRT", "V = IR"],
    resposta: 0,
    nivel: 5,
    categoria: "Ciência"
  },
   {
    pergunta: "Qual é o nome da teoria que unifica as interações fundamentais da natureza?",
    opcoes: ["Teoria das Cordas", "Teoria da Relatividade", "Teoria Quântica", "Teoria do Caos"],
    resposta: 0,
    nivel: 5,
    categoria: "Física"
  },
  {
    pergunta: "Quem foi o responsável pela unificação da Alemanha no século XIX?",
    opcoes: ["Otto von Bismarck", "Kaiser Wilhelm II", "Adolf Hitler", "Frederico II"],
    resposta: 0,
    nivel: 5,
    categoria: "História"
  },
  {
    pergunta: "Qual é a partícula mediadora da força nuclear fraca?",
    opcoes: ["Fóton", "Glúon", "Bóson W/Z", "Neutrino"],
    resposta: 2,
    nivel: 5,
    categoria: "Física"
  },
  {
    pergunta: "Quem escreveu 'A República', uma obra sobre filosofia e política?",
    opcoes: ["Aristóteles", "Sócrates", "Platão", "Epicuro"],
    resposta: 2,
    nivel: 5,
    categoria: "Filosofia"
  },
  {
    pergunta: "Qual é o número de vértices de um icosaedro regular?",
    opcoes: ["12", "20", "30", "10"],
    resposta: 0,
    nivel: 5,
    categoria: "Matemática"
  },
  {
    pergunta: "Quem foi o primeiro matemático a provar que π é irracional?",
    opcoes: ["Euler", "Lambert", "Gauss", "Fermat"],
    resposta: 1,
    nivel: 5,
    categoria: "Matemática"
  },
  {
    pergunta: "Em qual país nasceu o compositor Gustav Mahler?",
    opcoes: ["Alemanha", "Áustria-Hungria", "Suíça", "França"],
    resposta: 1,
    nivel: 5,
    categoria: "Música"
  },
  {
    pergunta: "Qual é o idioma oficial do Irã?",
    opcoes: ["Árabe", "Curdo", "Persa", "Turcomeno"],
    resposta: 2,
    nivel: 5,
    categoria: "Geografia"
  },
  {
    pergunta: "Quantos elementos químicos a Tabela Periódica possui atualmente (2024)?",
    opcoes: ["114", "118", "120", "116"],
    resposta: 1,
    nivel: 5,
    categoria: "Química"
  },
  {
    pergunta: "Quem pintou o teto da Capela Sistina?",
    opcoes: ["Leonardo da Vinci", "Donatello", "Michelangelo", "Raphael"],
    resposta: 2,
    nivel: 5,
    categoria: "Artes"
  },
  {
    pergunta: "Em que ano ocorreu a Revolução Francesa?",
    opcoes: ["1789", "1799", "1776", "1804"],
    resposta: 0,
    nivel: 5,
    categoria: "História"
  },
  {
    pergunta: "O que significa a palavra 'Kafkaesque'?",
    opcoes: ["Algo sombrio", "Situação absurda e opressiva", "Surrealismo artístico", "Estilo minimalista"],
    resposta: 1,
    nivel: 5,
    categoria: "Literatura"
  },
  {
    pergunta: "Qual é o menor número primo de três dígitos?",
    opcoes: ["101", "103", "107", "109"],
    resposta: 0,
    nivel: 5,
    categoria: "Matemática"
  },
  {
    pergunta: "Qual filósofo cunhou a frase 'Penso, logo existo'?",
    opcoes: ["Descartes", "Nietzsche", "Sartre", "Hobbes"],
    resposta: 0,
    nivel: 5,
    categoria: "Filosofia"
  },
  {
    pergunta: "Qual foi o último imperador romano do Ocidente?",
    opcoes: ["Júlio César", "Rômulo Augústulo", "Constantino", "Nero"],
    resposta: 1,
    nivel: 5,
    categoria: "História"
  },
  {
    pergunta: "Em qual país está localizada a montanha mais alta fora da Ásia?",
    opcoes: ["Argentina", "Peru", "Chile", "Equador"],
    resposta: 0,
    nivel: 5,
    categoria: "Geografia"
  },
  {
    pergunta: "Qual físico é considerado o pai da mecânica quântica?",
    opcoes: ["Max Planck", "Albert Einstein", "Erwin Schrödinger", "Werner Heisenberg"],
    resposta: 0,
    nivel: 5,
    categoria: "Física"
  },
  {
    pergunta: "Qual é a capital da Mongólia?",
    opcoes: ["Ulan Bator", "Almaty", "Astana", "Tashkent"],
    resposta: 0,
    nivel: 5,
    categoria: "Geografia"
  },
  {
    pergunta: "Quem escreveu 'Crime e Castigo'?",
    opcoes: ["Tolstói", "Tchekhov", "Dostoiévski", "Gogol"],
    resposta: 2,
    nivel: 5,
    categoria: "Literatura"
  },
  {
    pergunta: "Qual é a distância da Terra ao Sol, em média?",
    opcoes: ["149 milhões de km", "100 milhões de km", "200 milhões de km", "178 milhões de km"],
    resposta: 0,
    nivel: 5,
    categoria: "Astronomia"
  },
  {
    pergunta: "Quem foi o arquiteto da Basílica da Sagrada Família em Barcelona?",
    opcoes: ["Gaudí", "Calatrava", "Mies van der Rohe", "Le Corbusier"],
    resposta: 0,
    nivel: 5,
    categoria: "Arquitetura"
  },
  {
    pergunta: "Qual país tem o maior número de línguas faladas?",
    opcoes: ["Índia", "Papua Nova Guiné", "Indonésia", "Nigéria"],
    resposta: 1,
    nivel: 5,
    categoria: "Geografia"
  },
  {
    pergunta: "Qual molécula é responsável pela transferência de energia nas células?",
    opcoes: ["ATP", "DNA", "RNA", "Glicose"],
    resposta: 0,
    nivel: 5,
    categoria: "Biologia"
  },
  {
    pergunta: "Qual foi a primeira civilização a usar escrita?",
    opcoes: ["Egípcios", "Maias", "Sumérios", "Chineses"],
    resposta: 2,
    nivel: 5,
    categoria: "História"
  },
  {
    pergunta: "Qual é a capital do Sri Lanka?",
    opcoes: ["Colombo", "Kandy", "Galle", "Sri Jayawardenepura Kotte"],
    resposta: 3,
    nivel: 5,
    categoria: "Geografia"
  },
  {
    pergunta: "Qual é a função do ribossomo na célula?",
    opcoes: ["Produção de energia", "Síntese de proteínas", "Armazenamento de nutrientes", "Digestão celular"],
    resposta: 1,
    nivel: 5,
    categoria: "Biologia"
  },
  {
    pergunta: "Qual a principal característica dos metais de transição?",
    opcoes: ["Baixa densidade", "Alta eletronegatividade", "Capacidade de formar complexos", "Inércia química"],
    resposta: 2,
    nivel: 5,
    categoria: "Química"
  },
  {
    pergunta: "Qual imperador romano tornou o Cristianismo religião oficial?",
    opcoes: ["Nero", "Trajano", "Constantino", "Teodósio I"],
    resposta: 3,
    nivel: 5,
    categoria: "História"
  },
  {
    pergunta: "Quem é considerado o criador da lógica formal?",
    opcoes: ["Aristóteles", "Boole", "Descartes", "Frege"],
    resposta: 0,
    nivel: 5,
    categoria: "Filosofia"
  },
  {
    pergunta: "Qual é o ponto mais profundo dos oceanos?",
    opcoes: ["Fossa de Tonga", "Fossa das Marianas", "Fossa das Aleutas", "Fossa de Java"],
    resposta: 1,
    nivel: 5,
    categoria: "Geografia"
  }
];

// ========== LÓGICA DO JOGO ========== //
let perguntasPartida = [];
let perguntaAtual = 0;
let pontuacao = 0;
let ajudasUsadas = {
  universitarios: false,
  placas: false
};

// Seleciona 10 perguntas (2 de cada nível)
function selecionarPerguntas() {
  const perguntasSelecionadas = [];

  for (let nivel = 1; nivel <= 5; nivel++) {
    const perguntasNivel = todasPerguntas
      .filter(p => p.nivel === nivel)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2); // pega 2 aleatórias de cada nível

    perguntasSelecionadas.push(...perguntasNivel);
  }

  return perguntasSelecionadas; // mantém a ordem: do nível 1 ao 5
}


// Exibe a pergunta atual
function exibirPergunta() {
  const quiz = document.getElementById('quiz');
  const pergunta = perguntasPartida[perguntaAtual];
  
  quiz.innerHTML = `
    <h2>${pergunta.pergunta}</h2>
    <div class="opcoes">
      ${pergunta.opcoes.map((opcao, index) => `
        <button class="opcao" onclick="verificarResposta(${index})">${opcao}</button>
      `).join('')}
    </div>
  `;
  
  //document.getElementById('nivel').textContent = pergunta.nivel;
  document.getElementById('categoria').textContent = pergunta.categoria;
  
  // Atualiza estado dos botões de ajuda
  document.getElementById('ajuda-universitarios').disabled = ajudasUsadas.universitarios;
  document.getElementById('ajuda-placas').disabled = ajudasUsadas.placas;
}
// Verifica a resposta
function verificarResposta(resposta) {
  const pergunta = perguntasPartida[perguntaAtual];
  const opcoes = document.querySelectorAll('.opcao');
  const somCorreto = document.getElementById('som-correto');
  const somIncorreto = document.getElementById('som-incorreto');
  const somPalmas = document.getElementById('som-palmas');

  // Desabilita todas as opções e aplica estilos de certo/errado
  opcoes.forEach((opcao, index) => {
    opcao.disabled = true;
    if (index === pergunta.resposta) {
      opcao.style.backgroundColor = '#4CAF50'; // Verde para correta
    } else if (index === resposta) {
      opcao.style.backgroundColor = '#F44336'; // Vermelho para errada
    }
  });

  if (resposta === pergunta.resposta) {
    somCorreto.currentTime = 0;
    somCorreto.play();

    somPalmas.currentTime = 0;
    somPalmas.volume = 1;
    somPalmas.play();

    // Inicia o fade out após 2 segundos
    setTimeout(() => {
      const fadeDuration = 1000; // 1 segundo
      const fadeStep = 50; // Intervalo de cada passo
      const steps = fadeDuration / fadeStep;
      let currentStep = 0;

      const fadeInterval = setInterval(() => {
        currentStep++;
        somPalmas.volume = Math.max(0, 1 - currentStep / steps);

        if (currentStep >= steps) {
          clearInterval(fadeInterval);
          somPalmas.pause();
          somPalmas.currentTime = 0;
        }
      }, fadeStep);
    }, 2000); // Espera 2 segundos para começar o fade

    pontuacao++;

    setTimeout(() => {
      perguntaAtual++;
      if (perguntaAtual < perguntasPartida.length) {
        exibirPergunta();
      } else {
        const mensagemFinal = document.getElementById('mensagem-final');
        mensagemFinal.innerHTML = '🥇 <strong>Parabéns!</strong> Você é um verdadeiro <span style="color:#ffd700">Milionário do Conhecimento</span>!';
        document.getElementById('tela-vitoria').classList.remove('escondido');
        document.getElementById('modal-pix').classList.remove('escondido');
      }
    }, 3000); // Espera o som terminar com fade
  } else {
    somIncorreto.currentTime = 0;
    somIncorreto.play();

    setTimeout(() => {
      const quiz = document.getElementById('quiz');
      quiz.innerHTML = `
        <div id="mensagem-derrota" style="text-align: center; padding: 20px; opacity: 0; transform: scale(0.9); transition: all 0.8s ease;">
          <h2 style="color: #fff;">Fim de jogo!</h2>
          <p style="color: #ccc; font-size: 1.2rem;">Continue tentando se tornar um <span style="color:#ffd700;">Milionário do Saber</span>!</p>
          <button id="botao-recomecar" style="margin-top: 20px; padding: 10px 20px; font-size: 1rem; border: none; border-radius: 8px; background-color: #2196F3; color: white; cursor: pointer;">Jogar Novamente</button>
        </div>
      `;
      requestAnimationFrame(() => {
        const mensagem = document.getElementById('mensagem-derrota');
        mensagem.style.opacity = '1';
        mensagem.style.transform = 'scale(1)';
      });

      document.getElementById('modal-pix').classList.remove('escondido');

      document.getElementById('botao-recomecar').addEventListener('click', () => {
        perguntasPartida = selecionarPerguntas();
        perguntaAtual = 0;
        pontuacao = 0;
        ajudasUsadas = { universitarios: false, placas: false };
        document.getElementById('tela-vitoria').classList.add('escondido');
        document.getElementById('modal-pix').classList.add('escondido');
        exibirPergunta();
      });
    }, 1000);
  }
}


// Ajuda dos Universitários
document.getElementById('ajuda-universitarios').addEventListener('click', function () {
  const opcoes = document.querySelectorAll('.opcao');
  const pergunta = perguntasPartida[perguntaAtual];

  const opcoesIncorretas = [];
  opcoes.forEach((opcao, index) => {
    if (index !== pergunta.resposta) {
      opcoesIncorretas.push(opcao);
    }
  });

  opcoesIncorretas.sort(() => Math.random() - 0.5).slice(0, 2).forEach(opcao => {
    opcao.disabled = true;
    opcao.style.opacity = '0.5';
    opcao.style.textDecoration = 'line-through';
  });

  this.disabled = true;
  ajudasUsadas.universitarios = true;
});

// Ajuda das Placas (com modal estilizado)
document.getElementById('ajuda-placas').addEventListener('click', function () {
  const pergunta = perguntasPartida[perguntaAtual];
  const porcentagens = [10, 20, 30, 40];

  // Define uma porcentagem maior para a resposta correta
  porcentagens[pergunta.resposta] = Math.floor(Math.random() * 30) + 50;

  // Gera porcentagens para as demais opções
  let somaOutras = 0;
  porcentagens.forEach((p, i) => {
    if (i !== pergunta.resposta) {
      porcentagens[i] = Math.floor(Math.random() * 15) + 5;
      somaOutras += porcentagens[i];
    }
  });

  // Normaliza para que a soma dê 100%
  const fator = (100 - porcentagens[pergunta.resposta]) / somaOutras;
  porcentagens.forEach((p, i) => {
    if (i !== pergunta.resposta) {
      porcentagens[i] = Math.round(p * fator);
    }
  });

  // Exibe os resultados no modal
  const letras = ['A', 'B', 'C', 'D'];
  let resultado = '<ul>';
  letras.forEach((letra, i) => {
    resultado += `<li><strong>${letra}:</strong> ${porcentagens[i]}%</li>`;
  });
  resultado += '</ul>';

  document.getElementById('placas-texto').innerHTML = resultado;
  document.getElementById('modal-placas').classList.remove('escondido');

  this.disabled = true;
  ajudasUsadas.placas = true;
});

// Função para fechar o modal da Ajuda das Placas ao clicar no "X"
document.getElementById('fechar-modal').addEventListener('click', function () {
  document.getElementById('modal-placas').classList.add('escondido');
});


// Reiniciar jogo
document.getElementById('reiniciar').addEventListener('click', () => {
  perguntasPartida = selecionarPerguntas();
  perguntaAtual = 0;
  pontuacao = 0;
  ajudasUsadas = { universitarios: false, placas: false };
  document.getElementById('tela-vitoria').classList.add('escondido');
  document.getElementById('modal-pix').classList.add('escondido'); // ✅ Corrigido
  exibirPergunta();
});


// Botão de fechar o modal do Pix
document.getElementById("fechar-pix").addEventListener("click", function () {
  document.getElementById("modal-pix").classList.add("escondido");
});

// Inicia o jogo
perguntasPartida = selecionarPerguntas();
// exibirPergunta(); ← Agora é chamada após o jingle no HTML