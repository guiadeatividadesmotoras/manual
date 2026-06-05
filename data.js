// ============================================
//  Manual para Reduzir Birras em 21 Dias
//  data.js — Conteúdo da aplicação
// ============================================

const DAYS = [
  {
    id: 1, phase: 1,
    title: "O que realmente causa as birras",
    objective: "Compreender a raiz do comportamento desafiador do seu filho.",
    learning: "As birras são uma resposta emocional normal do cérebro infantil. A parte responsável pelo autocontrole (córtex pré-frontal) só termina de se desenvolver por volta dos 25 anos. Seu filho não é 'malcriado' — ele simplesmente ainda não tem as ferramentas para lidar com emoções intensas.",
    steps: [
      "Observe o próximo episódio sem julgamento",
      "Pergunte-se: qual emoção está por trás desse comportamento?",
      "Escreva o que você percebeu na reflexão abaixo"
    ]
  },
  {
    id: 2, phase: 1,
    title: "Identificando os gatilhos",
    objective: "Mapear os momentos que mais provocam crises no seu filho.",
    learning: "Todo comportamento tem um gatilho. Fome, sono, transições de atividade e frustrações são os mais comuns. Quando você identifica o padrão, consegue agir antes do estouro.",
    steps: [
      "Liste 3 situações recentes de crise",
      "Anote o horário, o que aconteceu antes e como terminou",
      "Procure o padrão: o que essas situações têm em comum?"
    ]
  },
  {
    id: 3, phase: 1,
    title: "Aprendendo a observar padrões",
    objective: "Desenvolver um olhar atento para antecipar crises.",
    learning: "Crianças raramente 'explodem do nada'. Há sempre sinais antes: agitação, choro fácil, resistência pequena. Treinar o olhar para esses sinais é o primeiro superpoder da mãe consciente.",
    steps: [
      "Escolha 1 dia para ser a sua 'pesquisadora'",
      "A cada comportamento desafiador, pergunte: qual foi o sinal antes?",
      "Registre na reflexão os padrões que encontrou"
    ]
  },
  {
    id: 4, phase: 1,
    title: "Criando uma rotina previsível",
    objective: "Usar a rotina como ferramenta de prevenção de birras.",
    learning: "Crianças se sentem seguras quando sabem o que vem a seguir. Uma rotina previsível reduz a ansiedade infantil e, consequentemente, as birras. Não precisa ser rígida — precisa ser consistente.",
    steps: [
      "Defina os 3 horários-chave do dia: acordar, almoço e dormir",
      "Crie um ritual simples para cada um (ex.: lavar as mãos antes de comer)",
      "Avise sempre com antecedência o que vai acontecer: 'em 5 minutos vamos almoçar'"
    ]
  },
  {
    id: 5, phase: 1,
    title: "Como evitar conflitos desnecessários",
    objective: "Reduzir o número de confrontos diários de forma estratégica.",
    learning: "Nem toda batalha precisa ser travada. Escolher quais limites são inegociáveis e quais são flexíveis poupa energia emocional sua e do seu filho — e cria menos gatilhos de crise.",
    steps: [
      "Liste 5 situações em que você costuma dizer 'não'",
      "Pergunte: quais desses 'nãos' são realmente necessários?",
      "Escolha 2 que podem virar 'sim condicionado' (ex.: 'sim, depois do almoço')"
    ]
  },
  {
    id: 6, phase: 1,
    title: "A importância da conexão emocional",
    objective: "Entender que a conexão é a base da cooperação infantil.",
    learning: "Crianças cooperam com quem elas se sentem conectadas. 10 minutos de atenção exclusiva por dia — sem celular, sem pressa — fazem mais pela obediência do que qualquer punição.",
    steps: [
      "Reserve 10 minutos hoje só para brincar com seu filho",
      "Deixe ele escolher a brincadeira e você segue o lead dele",
      "Observe como o comportamento muda após esse momento"
    ]
  },
  {
    id: 7, phase: 1,
    title: "Revisão da primeira semana",
    objective: "Consolidar os aprendizados e celebrar seu progresso.",
    learning: "Você chegou ao final da primeira semana! Você já entende as causas das birras, identificou padrões e começou a criar uma base sólida. Cada passo conta — mesmo os imperfeitos.",
    steps: [
      "Releia suas reflexões dos dias anteriores",
      "Anote 1 mudança que você já percebeu no comportamento do seu filho",
      "Escreva 1 coisa que você aprendeu sobre si mesma como mãe"
    ]
  },
  {
    id: 8, phase: 2,
    title: "Mantendo a calma",
    objective: "Aprender a regular suas próprias emoções durante a crise.",
    learning: "Você não pode acalmar seu filho se estiver em chamas. O sistema nervoso das crianças se co-regula com o dos adultos. Quando você respira, seu filho também começa a desacelerar.",
    steps: [
      "Quando a crise começar, pause por 3 segundos antes de reagir",
      "Respire fundo até contar 4, segure 4, solte 4",
      "Fale em voz baixa e devagar — o oposto do que a situação pede"
    ]
  },
  {
    id: 9, phase: 2,
    title: "O que nunca fazer durante uma crise",
    objective: "Evitar reações que amplificam o comportamento desafiador.",
    learning: "Gritar, ameaçar, ceder por exaustão ou ignorar completamente são respostas que, na maioria das vezes, pioram a crise a médio prazo. Reconhecer seus padrões reativos é o primeiro passo para mudar.",
    steps: [
      "Identifique sua reação padrão em crises (grita, cede, ignora?)",
      "Escolha uma frase de ancoragem: 'Calma é o meu superpoder'",
      "Treine falar isso em voz alta antes de reagir"
    ]
  },
  {
    id: 10, phase: 2,
    title: "Comunicação positiva",
    objective: "Usar a linguagem como aliada e não como gatilho.",
    learning: "Crianças respondem melhor ao que elas DEVEM fazer do que ao que NÃO devem. Trocar 'para de correr' por 'vamos andar devagar' parece pequeno, mas muda completamente a dinâmica.",
    steps: [
      "Anote 3 frases negativas que você usa frequentemente",
      "Reescreva cada uma em formato positivo",
      "Use pelo menos uma versão positiva hoje e observe a diferença"
    ]
  },
  {
    id: 11, phase: 2,
    title: "Como validar emoções",
    objective: "Ensinar seu filho que suas emoções são aceitas e normais.",
    learning: "Validar não é concordar. É reconhecer. 'Eu sei que você ficou com raiva' não significa que a birra estava certa — significa que você viu e entendeu seu filho. Isso por si só já diminui a intensidade da crise.",
    steps: [
      "Na próxima crise, diga o nome da emoção: 'Você está frustrado'",
      "Não tente resolver ou minimizar imediatamente — só valide",
      "Observe: a criança costuma acalmar mais rápido quando se sente ouvida"
    ]
  },
  {
    id: 12, phase: 2,
    title: "Técnica da escolha controlada",
    objective: "Dar autonomia ao filho sem perder o controle da situação.",
    learning: "'Você quer tomar banho agora ou em 5 minutos?' — as duas opções levam ao mesmo resultado, mas seu filho sente que decidiu. Isso reduz a resistência em até 70%.",
    steps: [
      "Identifique 3 momentos do dia com alto atrito",
      "Crie uma escolha controlada para cada um (opções A ou B, ambas aceitáveis para você)",
      "Use hoje e registre a reação do seu filho"
    ]
  },
  {
    id: 13, phase: 2,
    title: "Como estabelecer limites sem gritar",
    objective: "Ser firme e amorosa ao mesmo tempo.",
    learning: "Um limite eficaz é claro, calmo e consistente. Não precisa de volume — precisa de segurança. Quando você diz 'não' com calma e mantém, seu filho aprende que as regras existem de verdade.",
    steps: [
      "Escolha um limite não negociável para treinar hoje",
      "Quando desafiado, agache-se no nível do filho e olhe nos olhos",
      "Diga o limite uma vez, com calma e firmeza. Não repita — aja"
    ]
  },
  {
    id: 14, phase: 2,
    title: "Revisão da segunda semana",
    objective: "Celebrar as ferramentas conquistadas na fase de ação.",
    learning: "Você agora tem um kit real de ferramentas para os momentos difíceis. Respiração, validação, escolha controlada, comunicação positiva. São hábitos — e hábitos se fortalecem com prática.",
    steps: [
      "Escolha a ferramenta que mais funcionou para você esta semana",
      "Escreva um episódio em que você agiu diferente e o resultado foi melhor",
      "Celebre essa conquista — isso é transformação real"
    ]
  },
  {
    id: 15, phase: 3,
    title: "Reforço positivo",
    objective: "Usar o elogio estratégico para fortalecer bons comportamentos.",
    learning: "O que você recompensa se repete. Elogiar comportamentos específicos ('que legal que você guardou o brinquedo sem eu pedir!') é mais poderoso do que elogios genéricos ('você é ótimo!').",
    steps: [
      "Hoje, tente pegar seu filho 'fazendo algo certo'",
      "Elogie o comportamento específico, não a pessoa",
      "Faça isso pelo menos 3 vezes ao longo do dia"
    ]
  },
  {
    id: 16, phase: 3,
    title: "Incentivando a cooperação",
    objective: "Tornar seu filho um parceiro, não um adversário.",
    learning: "Quando as crianças se sentem incluídas nas decisões da família, elas cooperam mais. Dar pequenas responsabilidades cria senso de pertencimento e reduz comportamentos de oposição.",
    steps: [
      "Envolva seu filho em uma tarefa doméstica hoje (mesmo que 'atrapalhe')",
      "Use frases como 'você pode me ajudar com isso?'",
      "Agradeça genuinamente a contribuição, por menor que seja"
    ]
  },
  {
    id: 17, phase: 3,
    title: "Construindo autonomia",
    objective: "Ajudar seu filho a desenvolver independência gradual.",
    learning: "Crianças muito dependentes ou muito controladas tendem a ter mais crises. O equilíbrio — oferecer desafios compatíveis com a idade — desenvolve a autoconfiança e reduz a frustração.",
    steps: [
      "Identifique uma tarefa que você faz pelo filho e que ele poderia tentar fazer sozinho",
      "Deixe-o tentar — com suporte, sem fazer por ele",
      "Tolere o resultado imperfeito e elogie o esforço"
    ]
  },
  {
    id: 18, phase: 3,
    title: "Como lidar com recaídas",
    objective: "Encarar os dias difíceis como parte normal do processo.",
    learning: "Dias ruins fazem parte. Uma semana ótima seguida de uma crise enorme não significa que você fracassou — significa que você é humana e seu filho também. O que importa é o padrão geral, não o episódio isolado.",
    steps: [
      "Se hoje foi um dia difícil, escreva: 'O que desencadeou isso?'",
      "Identifique se houve um fator externo (sono, saúde, mudança de rotina)",
      "Pratique a autocompaixão: você está aprendendo um novo jeito de ser mãe"
    ]
  },
  {
    id: 19, phase: 3,
    title: "Desenvolvendo inteligência emocional",
    objective: "Ensinar seu filho a nomear e entender suas próprias emoções.",
    learning: "Crianças que sabem nomear o que sentem têm muito menos crises. Usar livros, jogos e conversas sobre emoções é uma das ferramentas mais poderosas do desenvolvimento infantil.",
    steps: [
      "Hoje à noite, antes de dormir, pergunte: 'Como você se sentiu hoje?'",
      "Use o jogo das emoções: mostrar expressões faciais e pedir para ele imitar",
      "Nomeie suas próprias emoções em voz alta ao longo do dia"
    ]
  },
  {
    id: 20, phase: 3,
    title: "Fortalecendo o vínculo familiar",
    objective: "Criar rituais de conexão que durem para a vida toda.",
    learning: "A segurança emocional que uma criança sente em casa é o alicerce de tudo — do comportamento ao aprendizado, à autoestima. Rituais simples e consistentes criam esse alicerce.",
    steps: [
      "Crie um ritual de boas-vindas ao chegar em casa (abraço especial, palavra secreta, dança)",
      "Crie um ritual de dormir: 3 coisas boas do dia + 'eu te amo'",
      "Pratique pelo menos um dos dois hoje à noite"
    ]
  },
  {
    id: 21, phase: 3,
    title: "Plano definitivo para o futuro",
    objective: "Consolidar sua transformação e criar um plano sustentável.",
    learning: "Você chegou ao dia 21! Você não é mais a mesma mãe de 3 semanas atrás. Agora é sobre manter — escolher todos os dias ser a mãe consciente que você já demonstrou ser.",
    steps: [
      "Escreva 3 ferramentas que se tornaram parte da sua rotina",
      "Escreva uma carta de 5 linhas para o seu filho sobre quem você quer ser para ele",
      "Defina 1 hábito que você vai continuar cultivando nos próximos 21 dias"
    ]
  }
];

const TOOLS = [
  {
    icon: "🧠",
    name: "Técnica da Respiração",
    sub: "Regulação emocional",
    steps: [
      "Sinta a necessidade de reagir impulsivamente",
      "Inspire pelo nariz contando até 4",
      "Segure o ar contando até 4",
      "Expire pela boca contando até 4",
      "Repita 2-3 vezes antes de falar"
    ]
  },
  {
    icon: "❤️",
    name: "Método da Conexão",
    sub: "Reconexão antes da correção",
    steps: [
      "Pare tudo o que está fazendo",
      "Agache-se no nível da criança",
      "Faça contato visual e toque gentil no ombro",
      "Diga o nome dela e valide a emoção",
      "Só então conduza para a solução"
    ]
  },
  {
    icon: "🎯",
    name: "Escolha Controlada",
    sub: "Autonomia com limites",
    steps: [
      "Identifique o ponto de resistência",
      "Crie 2 opções que você aceita as duas",
      "Ofereça: 'você prefere A ou B?'",
      "Respeite a escolha feita",
      "Parabenize a decisão autônoma"
    ]
  },
  {
    icon: "⭐",
    name: "Reforço Positivo",
    sub: "Elogio estratégico",
    steps: [
      "Observe o comportamento desejado acontecendo",
      "Elogie IMEDIATAMENTE e de forma específica",
      "Ex: 'que incrível que você dividiu sem eu pedir!'",
      "Evite elogios vagos como 'muito bem'",
      "Repita nos próximos dias para fixar o comportamento"
    ]
  },
  {
    icon: "🤝",
    name: "Comunicação Empática",
    sub: "Linguagem de conexão",
    steps: [
      "Troque 'não faz isso' por 'pode fazer assim'",
      "Comece frases com 'eu sei que...' e 'eu entendo que...'",
      "Agache-se no nível físico da criança",
      "Use voz calma e volume baixo",
      "Ofereça soluções, não apenas proibições"
    ]
  },
  {
    icon: "🛑",
    name: "Plano Anti-Crise",
    sub: "Protocolo para crises intensas",
    steps: [
      "Passo 1: Respire (técnica 4-4-4)",
      "Passo 2: Não reaja por 3 segundos",
      "Passo 3: Valide a emoção em voz alta",
      "Passo 4: Ofereça presença ('estou aqui')",
      "Passo 5: Dê tempo — a crise vai passar"
    ]
  }
];

const EDU = [
  {
    icon: "🧠",
    title: "O cérebro infantil explicado de forma simples",
    sub: "Neurociência acessível",
    color: "purple",
    text: "O cérebro da criança é como um carro sem freios. A parte emocional (amígdala) está ativa desde o nascimento, mas a parte racional (córtex pré-frontal), responsável pelo autocontrole, só termina de se desenvolver por volta dos 25 anos. Birras não são manipulação — são neurologia."
  },
  {
    icon: "💛",
    title: "Diferença entre birra e necessidade emocional",
    sub: "Entendendo a diferença",
    color: "blue",
    text: "Birra é uma descarga emocional em resposta a uma frustração pontual. Necessidade emocional é um padrão recorrente que sinaliza algo maior: falta de conexão, insegurança ou uma necessidade não atendida. Aprender a distinguir as duas muda completamente a resposta."
  },
  {
    icon: "⚠️",
    title: "Erros mais comuns dos pais",
    sub: "Sem julgamentos, com consciência",
    color: "coral",
    text: "Ceder para acabar a birra, reagir com gritos, dar explicações longas durante a crise, comparar com outras crianças e punir sem ensinar são os erros que mais perpetuam o ciclo. Reconhecer é o primeiro passo para mudar."
  },
  {
    icon: "🌊",
    title: "Como evitar explosões emocionais",
    sub: "Prevenção é mais fácil que gestão",
    color: "green",
    text: "Observe os gatilhos recorrentes. Mantenha rotinas previsíveis. Ofereça conexão antes das transições difíceis. Avise antecipadamente sobre mudanças. Cuide do sono e da alimentação. A maioria das crises pode ser prevenida antes de acontecer."
  },
  {
    icon: "🔗",
    title: "Como fortalecer a conexão com a criança",
    sub: "A base de tudo",
    color: "purple",
    text: "Conexão não é permissividade. É a base sobre a qual os limites funcionam. Uma criança que se sente vista e amada coopera muito mais do que uma criança que obedece por medo. 10 minutos de atenção exclusiva por dia transformam a dinâmica familiar."
  }
];

const ACHIEVEMENTS = [
  { id: "day1",    icon: "🏅", name: "Primeiro Dia",           desc: "Completou o primeiro dia",         thresh: 1  },
  { id: "week1",   icon: "🌟", name: "Primeira Semana",        desc: "Completou 7 dias",                 thresh: 7  },
  { id: "week2",   icon: "💎", name: "Duas Semanas",           desc: "Manteve o ritmo por 14 dias",      thresh: 14 },
  { id: "consist", icon: "🦋", name: "Mãe Consistente",        desc: "Concluiu 10 dias ou mais",         thresh: 10 },
  { id: "expert",  icon: "💜", name: "Especialista em Conexão", desc: "Completou 16 dias ou mais",       thresh: 16 },
  { id: "complete",icon: "🏆", name: "Jornada Completa",       desc: "Completou todos os 21 dias!",      thresh: 21 }
];
