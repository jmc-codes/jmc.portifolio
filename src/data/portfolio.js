export const portfolioData = {
  personal: {
    name: "Johnathan Campos",
    title: "Analista de Dados & BI",
    subtitle: "Transformando dados em insights estratégicos para negócios",
    location: "São Paulo – SP, Brasil",
    phone: "(11) 98780-4513",
    email: "johnathanmaravilha12@gmail.com",
    linkedin: "https://linkedin.com/in/johnathan-campos",
    github: "https://github.com/jmc-codes",
    summary: "Profissional de Tecnologia com mais de 5 anos de experiência em Dados, BI, ETL e Sistemas de Pagamento, atuando em empresas de grande porte como Fiserv e Software Express. Especialista em integração de dados, automação de processos e desenvolvimento de soluções low-code, com forte atuação em ambientes de alta disponibilidade e suporte a plataformas financeiras complexas. Experiência comprovada na criação de dashboards interativos com Power BI, automação de fluxos com Power Automate, desenvolvimento de aplicativos corporativos via Power Apps e modelagem de pipelines de dados para análise estratégica. Histórico consistente de otimização de processos, redução de falhas críticas e entrega de insights que apoiam decisões de negócio. Certificado em Python, SQL, Power BI, Power Automate, Power Apps, Banco de Dados e VBA. Reconhecido pela capacidade de resolver problemas técnicos, colaborar em equipe e entregar soluções que geram valor direto para a operação."
  },
  
  stats: [
    { label: "Anos de Experiência", value: "5+", icon: "Calendar" },
    { label: "Projetos Concluídos", value: "50+", icon: "FolderOpen" },
    { label: "Falhas Reduzidas", value: "30%", icon: "TrendingDown" },
    { label: "Horas Economizadas", value: "15h/sem", icon: "Clock" }
  ],

  experience: [
    {
      id: 1,
      company: "Fiserv",
      location: "São Paulo, SP",
      positions: [
        {
          title: "Systems Support – Professional II",
          period: "Nov 2023 – Atual",
          achievements: [
            "Realizei suporte técnico de sistemas de pagamento em ambiente de alta disponibilidade, garantindo continuidade operacional e rápida resolução de incidentes",
            "Monitorei e analisei logs de sistemas críticos, identificando padrões de erro e propondo melhorias que reduziram reincidência de falhas",
            "Implementei automações de processos com Power Automate, otimizando rotinas internas e reduzindo o tempo de resposta em atendimentos",
            "Criei dashboards operacionais no Power BI para acompanhamento de performance e indicadores de SLA, facilitando a gestão proativa da equipe",
            "Participei de testes e validações de atualizações sistêmicas, assegurando compatibilidade e estabilidade em ambientes produtivos"
          ]
        },
        {
          title: "Systems Support",
          period: "Out 2020 – Nov 2023",
          achievements: [
            "Prestei suporte técnico a sistemas de pagamento e aplicações críticas, garantindo alta disponibilidade e atendimento dentro dos SLAs",
            "Implementei rotinas de monitoramento e alertas proativos, contribuindo para a redução de falhas recorrentes e maior estabilidade operacional",
            "Participei de processos de migração e atualização de sistemas, realizando testes e validações para assegurar integridade e compatibilidade",
            "Realizei análises de logs e indicadores operacionais, identificando gargalos e propondo ajustes que melhoraram a performance dos serviços",
            "Colaborei com equipes de infraestrutura e desenvolvimento na resolução de incidentes complexos, promovendo agilidade e comunicação eficaz"
          ]
        }
      ]
    },
    {
      id: 2,
      company: "Software Express",
      location: "São Paulo, SP",
      positions: [
        {
          title: "Assistente de Licenciamento/Ativação",
          period: "Nov 2018 – Out 2020",
          achievements: [
            "Realizei processos de ativação e licenciamento de softwares, garantindo conformidade com políticas internas e contratos de uso",
            "Implementei melhorias operacionais que reduziram erros recorrentes em registros e validações de licenças",
            "Extraí, organizei e cruzei dados de sistemas para elaboração de relatórios gerenciais, apoiando áreas de produto e atendimento",
            "Colaborei com equipes de TI na validação de integrações entre sistemas de licenciamento e plataformas",

          ]
        },
        {
          title: "Jovem Aprendiz",
          period: "Jun 2016 – Nov 2017",
          achievements: [
            "Auxiliei em rotinas administrativas, organização de documentos e atualização de registros internos",
            "Colaborei com a equipe em tarefas de controle de planilhas, arquivamento e suporte básico a sistemas internos"
          ]
        }
      ]
    }
  ],

  education: [
    {
      institution: "Universidade São Judas",
      degree: "Inteligência Artificial e Ciência de Dados",
      period: "2025 – 2026 (Cursando)",
      type: "Pós-Graduação"
    },
    {
      institution: "Universidade Cruzeiro do Sul",
      degree: "Análise e Desenvolvimento de Sistemas",
      period: "2019 – 2021",
      type: "Graduação"
    },
    {
      institution: "Senac Brasil",
      degree: "Formação em Hardware",
      period: "2017",
      type: "Curso Técnico"
    }
  ],

  skills: {
    "Engenharia de Dados & BI": [
      { name: "Python", level: 75, icon: "Code" },
      { name: "SQL", level: 85, icon: "Database" },
      { name: "Power BI", level: 95, icon: "BarChart3" },
      { name: "ETL", level: 90, icon: "GitBranch" },
      { name: "Power Apps", level: 90, icon: "Smartphone" },
      { name: "Power Automate", level: 90, icon: "Zap" },
      { name: "VBA", level: 90, icon: "FileSpreadsheet" },
      { name: "R", level: 90, icon: "TrendingUp" }
    ],
    "Infraestrutura & Sistemas": [
      { name: "Monitoramento de Sistemas", level: 90, icon: "Activity" },
      { name: "Troubleshooting", level: 88, icon: "AlertTriangle" },
      { name: "Integração de Sistemas", level: 85, icon: "Link" },
      { name: "APIs", level: 82, icon: "Globe" },
      { name: "Bancos de Dados", level: 85, icon: "HardDrive" }
    ],
    "Soft Skills": [
      { name: "Comunicação", level: 92, icon: "MessageCircle" },
      { name: "Resolução de Problemas", level: 95, icon: "Lightbulb" },
      { name: "Trabalho em Equipe", level: 90, icon: "Users" },
      { name: "Gestão de Tempo", level: 88, icon: "Clock" },
      { name: "Adaptabilidade", level: 90, icon: "RefreshCw" }
    ]
  },

  certifications: [
    { name: "Programação em Python", progress: 100, icon: "Code" },
    { name: "Banco de Dados e SQL", progress: 100, icon: "Database" },
    { name: "Power BI", progress: 100, icon: "BarChart3" },
    { name: "Power Apps", progress: 100, icon: "Smartphone" },
    { name: "Power Automate", progress: 100, icon: "Zap" },
    { name: "VBA para Excel", progress: 100, icon: "FileSpreadsheet" },
    { name: "DAX", progress: 77.5, icon: "MessageCircle" },
    { name: "IA na Análise de Dados", progress: 55.5, icon: "MessageCircle" }
  ],

  projects: [
    {
      id: 1,
      title: "Dashboard NPS",
      description: "Insights em tempo real para decisões estratégicas",
      technologies: ["Power BI", "ETL", "Power Automate", "Power Apps"],
      icon: "BarChart3",
      category: "BI",
      highlights: [
        "Monitoramento contínuo do Net Promoter Score (NPS)",
        "Análise de feedback de clientes em tempo real",
        "Identificação de promotores, neutros e detratores",
        "Tendências históricas e comparativos por período",
        "Segmentação por região, produto ou canal de atendimento",
        "Alertas automáticos para quedas no índice de satisfação"
      ],
      images: [],
      // Para incorporar o dashboard do Power BI, cole a URL pública de embed aqui:
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 2,
      title: "Voice Analytics – Telefonia",
      description: "Análise inteligente de interações telefônicas para otimizar a experiência do cliente",
      technologies: ["Power BI", "API", "Power Automate"],
      icon: "Smartphone",
      category: "BI",
      highlights: [
        "Monitoramento em tempo real da performance de atendimento",
        "Análise detalhada de indicadores operacionais (TME, TMA, TMO)",
        "Segmentação por grupos de atendimento e serviços",
        "Identificação de gargalos e oportunidades de melhoria",
        "Filtros dinâmicos por data, equipe e operador"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 3,
      title: "Analytics – Atendimento Digital",
      description: "Monitoramento e análise de conversas via chat para melhoria contínua",
      technologies: ["Power BI", "APIs", "Power Automate"],
      icon: "Zap",
      category: "BI",
      highlights: [
        "Classificação automática de tópicos",
        "Análise de sentimento em tempo real",
        "Tempo médio de resposta e resolução",
        "Identificação de gargalos no atendimento",
        "Relatórios comparativos por canal e equipe"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 4,
      title: "Servidores Products – Performance",
      description: "Painel de monitoramento de servidores e aplicações críticas",
      technologies: ["Power BI", "SQL", "APIs"],
      icon: "Activity",
      category: "BI",
      highlights: [
        "Status em tempo real de servidores e serviços",
        "Alertas para falhas e indisponibilidades",
        "Histórico de incidentes e tempo de recuperação",
        "Métricas de uso de CPU, memória e rede"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 5,
      title: "Monitoria de Qualidade – Atendimento",
      description: "Acompanhamento e avaliação da qualidade no atendimento ao cliente",
      technologies: ["Power BI", "Sharepoint", "Power Automate"],
      icon: "FileText",
      category: "BI",
      highlights: [
        "Avaliação de interações com base em critérios definidos",
        "Pontuação por operador e equipe",
        "Relatórios de evolução de qualidade",
        "Integração com feedback de clientes"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 6,
      title: "Monitoramento de Alertas – Operações",
      description: "Central de alertas para eventos críticos e acompanhamento de resolução",
      technologies: ["Power BI", "APIs", "SQL"],
      icon: "Bell",
      category: "BI",
      highlights: [
        "Registro e categorização de alertas",
        "Priorização por criticidade",
        "Tempo médio de resposta",
        "Histórico e recorrência de eventos"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 7,
      title: "Relação de Tickets – Suporte",
      description: "Visão consolidada de tickets de suporte e status de atendimento",
      technologies: ["Power BI", "APIs", "SQL"],
      icon: "Ticket",
      category: "BI",
      highlights: [
        "Listagem e filtragem por status, prioridade e responsável",
        "Tempo médio de resolução",
        "Volume de tickets por período",
        "Integração com sistemas de help desk"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 8,
      title: "Indicadores de Leads – Vendas",
      description: "Painel de acompanhamento de geração e conversão de leads",
      technologies: ["Power BI", "Sharepoint", "Power Apps"],
      icon: "Target",
      category: "BI",
      highlights: [
        "Volume de leads gerados por canal",
        "Taxa de conversão por etapa do funil",
        "Custo por lead",
        "Análise de campanhas e ROI"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 9,
      title: "CrossSelling – Oportunidades Inteligentes",
      description: "Aplicativo para identificar e sugerir vendas cruzadas de forma automática e estratégica",
      technologies: ["Power Apps", "Power Automate", "Sharepoint"],
      icon: "ShoppingCart",
      category: "Aplicativo",
      highlights: [
        "Sugestões automáticas de produtos complementares",
        "Integração com CRM para histórico de clientes",
        "Relatórios de conversão de cross-sell",
        "Interface mobile e web responsiva"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 10,
      title: "Gerenciador de Notas NPS",
      description: "Controle centralizado das avaliações e notas de satisfação dos clientes",
      technologies: ["Power Apps", "Sharepoint", "Power Bi"],
      icon: "ClipboardList",
      category: "Aplicativo",
      highlights: [
        "Registro e consulta de notas NPS",
        "Filtros por período, produto e região",
        "Integração com dashboards analíticos",
        "Exportação de relatórios"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 11,
      title: "Callbacks NPS – Retorno Estratégico",
      description: "Aplicativo para gestão de retornos a clientes com base em feedbacks NPS",
      technologies: ["Power Apps", "Sharepoint", "Power Bi"],
      icon: "PhoneCallback",
      category: "Aplicativo",
      highlights: [
        "Lista automática de clientes para retorno",
        "Priorização por nota e criticidade",
        "Registro de interações e follow-ups",
        "Notificações para prazos de contato"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 12,
      title: "Monitoria de Qualidade – Auditoria de Processos",
      description: "Aplicativo para avaliação e acompanhamento da qualidade de processos e atendimentos",
      technologies: ["Power Apps", "Sharepoint", "Power Bi"],
      icon: "CheckCircle",
      category: "Aplicativo",
      highlights: [
        "Formulários de avaliação customizáveis",
        "Pontuação automática por critérios",
        "Relatórios de evolução de qualidade",
        "Integração com feedback de clientes"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 13,
      title: "Importação Automática de Dados – Chat",
      description: "Fluxo automatizado para coleta e integração de dados de atendimento via chat",
      technologies: ["Power Automate", "APIs", "SQL"],
      icon: "MessageSquare",
      category: "Automação",
      highlights: [
        "Importação diária de dados de conversas",
        "Integração com base de dados central",
        "Validação e tratamento automático de informações",
        "Geração de logs para auditoria"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 14,
      title: "Importação Automática – NPS, Ocorrências e Chat",
      description: "Automação para consolidar dados de NPS, ocorrências e interações de chat em um único repositório",
      technologies: ["Power Automate", "APIs", "SQL"],
      icon: "RefreshCw",
      category: "Automação",
      highlights: [
        "Coleta unificada de múltiplas fontes",
        "Transformação e padronização de dados",
        "Carga automática em data warehouse",
        "Monitoramento de performance do fluxo"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 15,
      title: "Importação de Dados – Telefonia",
      description: "Fluxo automatizado para ingestão de dados de chamadas e métricas de telefonia",
      technologies: ["Power Automate", "APIs", "SQL"],
      icon: "PhoneIncoming",
      category: "Automação",
      highlights: [
        "Importação de registros de chamadas",
        "Integração com sistemas de Voice Analytics",
        "Validação e enriquecimento de dados",
        "Execução programada e monitorada"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    },
    {
      id: 16,
      title: "Monitoramento de Alertas – Automação",
      description: "Automação para detecção e notificação de eventos críticos em tempo real",
      technologies: ["Power Automate", "APIs", "Outlook"],
      icon: "AlertTriangle",
      category: "Automação",
      highlights: [
        "Gatilhos automáticos para eventos críticos",
        "Envio de alertas por e-mail e Teams",
        "Registro de histórico de alertas",
        "Priorização por nível de criticidade"
      ],
      images: [],
      powerBiEmbed: "",
      githubLink: "",
      liveDemoLink: "",
      status: "concluído"
    }
  ],

  languages: [
    { name: "Português", level: "Nativo", flag: "🇧🇷" },
    { name: "Inglês", level: "Intermediário", flag: "🇺🇸" }
  ]
};

export const navigationItems = [
  { name: "Início", href: "#hero", icon: "Home" },
  { name: "Sobre", href: "#about", icon: "User" },
  { name: "Experiência", href: "#experience", icon: "Briefcase" },
  { name: "Habilidades", href: "#skills", icon: "Code" },
  { name: "Projetos", href: "#projects", icon: "FolderOpen" },
  { name: "Contato", href: "#contact", icon: "Mail" }
];

const downloadItems = [
 {
 nome: "📊 Form_Monit_Cht_V5.0.1",
 link: "./arqs_nn/Form_Monit_Cht_V5.0.1.xlsx"
 },
 {
 nome: "📊 Form_Monit_Lgc_V5.0.1",
 link: "./arqs_nn/Form_Monit_Lgc_V5.0.1.xlsx"
 }
];

