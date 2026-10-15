/* ===== EDITE AQUI =====
   Tudo o que aparece nas seções dinâmicas vem deste arquivo.
   Campos vazios ("" ou null) não aparecem no site: nenhum botão sem destino. */
window.PORTFOLIO = {
  nome: "Gabriel Fernandes",


  contato: {
    github: "https://github.com/gabrielfernandes10",
    linkedin: "https://www.linkedin.com/in/gabriel-fernandes-2442a734a/?isSelfProfile=true", 
   instagram: "g.fernandes9",
    email: "gdasilvafernandes@outlook.com" 
  }

  tecnologias: [
    { grupo: "Linguagens", itens: [
      { nome: "Java", exemplo: 'System.out.println("Olá, mundo");' },
      { nome: "HTML", exemplo: '<main id="conteudo">…</main>' },
      { nome: "CSS", exemplo: "display: grid;" },
      { nome: "JavaScript", exemplo: "const ativos = lista.filter(Boolean);" }
    ]},
    { grupo: "Versionamento", itens: [
      { nome: "Git", exemplo: 'git commit -m "mensagem clara"' },
      { nome: "GitHub", exemplo: "git push origin main" }
    ]}
  ],

  // imagem: { src: "assets/projetos/artilha.jfif", alt: "Wallet", largura: 1200, altura: 750 } — só use capturas reais.
  projetos: [
    {
      nome: "ArtilhaBet",
      status: "Em desenvolvimento",
      problema: "Plataforma de apoio a apostas esportivas que reúne palpites, estatísticas e gestão de banca em um só lugar.",
      feito: [
        "Página Wallet/Dashboard com gráfico da banca",
        "Tabela com histórico de apostas",
        "Modal de upload com extração por IA (simulada, ainda sem API real)",
        "Navegação responsiva"
      ],
      planejado: ["Página de Palpites", "Página de Estatísticas"],
      tecnologias: ["Next.js", "TypeScript", "Tailwind CSS"],
      imagem: null,
      codigo: "",   // link do repositório
      demo: ""      // link da demonstração
    },
    {
      nome: "Mundo dos Bolões",
      status: "Em desenvolvimento",
      problema: "Plataforma em português para criar e disputar bolões da Copa do Mundo 2026.",
      feito: [
        "Estrutura base do projeto (Next.js, App Router)",
        "Motor de pontuação dos palpites",
        "Dados de exemplo tipados",
        "Componentes de interface reutilizáveis"
      ],
      planejado: ["Contas de usuário e bolões públicos/privados", "Chaveamento", "Integração com Supabase (projeto ainda não criado)"],
      tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      imagem: null,
      codigo: "",
      demo: ""
    }
  ],

  // Cursos, disciplinas, certificados e marcos. Campos opcionais: instituicao, periodo.
  formacao: [
    { titulo: "Engenharia de Software", descricao: "Graduação em andamento." },
    { titulo: "Análise e Desenvolvimento de Sistemas", descricao: "Curso em andamento, cursado em paralelo." },
    { titulo: "Projetos maiores com Next.js e TypeScript", descricao: "Passei de páginas estáticas para aplicações com motor de regras, dados tipados e componentes reutilizáveis (ArtilhaBet e Mundo dos Bolões)." }
  ],

  estudando: ["SQL", "Python", "React e Next.js", "Inteligência artificial"]
};
