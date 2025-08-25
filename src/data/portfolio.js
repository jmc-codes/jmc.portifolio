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
    summary: "Profissional de tecnologia com mais de 7 anos de experiência em Dados, BI, ETL e Sistemas de Pagamento, atuando em ambientes corporativos de grande porte. Foco em integração de dados, automação de processos, desenvolvimento de soluções low-code e criação de dashboards interativos, com histórico comprovado de otimização de fluxos e redução de falhas críticas."
  },
  
  stats: [
    { label: "Anos de Experiência", value: "7+", icon: "Calendar" },
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
            "Desenvolvi e otimizei pipelines de dados em Python e SQL, reduzindo falhas críticas em até 30%",
            "Implementei automações que economizaram 15h semanais em tarefas manuais",
            "Atuei em integrações de dados financeiros de grande escala, garantindo compliance",
            "Colaborei com engenheiros de dados e arquitetos para definir padrões de qualidade e segurança"
          ]
        },
        {
          title: "Systems Support",
          period: "Out 2020 – Nov 2023",
          achievements: [
            "Liderei implantação de monitoramento em tempo real, reduzindo falhas em 25%",
            "Apoiei projetos de migração e integração de sistemas críticos",
            "Realizei análises de logs e KPIs que embasaram decisões estratégicas de TI"
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
            "Automatizei processos de ativação/licenciamento, reduzindo erros em 15%",
            "Extração e cruzamento de dados para relatórios gerenciais",
            "Contribuí para integração de sistemas de pagamento com segurança"
          ]
        },
        {
          title: "Jovem Aprendiz",
          period: "Jun 2016 – Nov 2017",
          achievements: [
            "Suporte técnico e administrativo em documentação e infraestrutura de TI"
          ]
        }
      ]
    }
  ],

  education: [
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
      { name: "Python", level: 95, icon: "Code" },
      { name: "SQL", level: 95, icon: "Database" },
      { name: "Power BI", level: 90, icon: "BarChart3" },
      { name: "ETL", level: 88, icon: "GitBranch" },
      { name: "Power Apps", level: 85, icon: "Smartphone" },
      { name: "Power Automate", level: 85, icon: "Zap" },
      { name: "VBA", level: 80, icon: "FileSpreadsheet" },
      { name: "R", level: 75, icon: "TrendingUp" }
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
    { name: "Programação em Python", progress: 99.9, icon: "Code" },
    { name: "Banco de Dados e SQL", progress: 99.9, icon: "Database" },
    { name: "Power BI", progress: 99.9, icon: "BarChart3" },
    { name: "Power Apps", progress: 99.9, icon: "Smartphone" },
    { name: "Power Automate", progress: 99.9, icon: "Zap" },
    { name: "VBA para Excel", progress: 99.9, icon: "FileSpreadsheet" },
    { name: "A Arte de Falar Bem", progress: 99.9, icon: "MessageCircle" }
  ],

  projects: [
    {
      id: 1,
      title: "Dashboard Financeiro",
      description: "Insights em tempo real para decisões estratégicas",
      technologies: ["Power BI", "SQL", "ETL"],
      icon: "BarChart3",
      category: "BI",
      highlights: [
        "Visualização de dados financeiros em tempo real",
        "Integração com múltiplas fontes de dados",
        "Alertas automáticos para anomalias",
        "Interface responsiva e intuitiva"
      ]
    },
    {
      id: 2,
      title: "App de Solicitações",
      description: "Aplicativo para controle de demandas internas com integração ao SharePoint",
      technologies: ["Power Apps", "SharePoint", "Power Automate"],
      icon: "Smartphone",
      category: "Desenvolvimento",
      highlights: [
        "Interface mobile-first",
        "Workflow automatizado de aprovações",
        "Integração nativa com SharePoint",
        "Notificações push em tempo real"
      ]
    },
    {
      id: 3,
      title: "Automação de Aprovações",
      description: "Fluxo automatizado para aprovações com notificações por e-mail",
      technologies: ["Power Automate", "Outlook", "SharePoint"],
      icon: "Zap",
      category: "Automação",
      highlights: [
        "Redução de 80% no tempo de aprovação",
        "Notificações automáticas por e-mail",
        "Trilha de auditoria completa",
        "Interface web para acompanhamento"
      ]
    },
    {
      id: 4,
      title: "Monitoramento de Logs",
      description: "Sistema de monitoramento com alertas para falhas críticas",
      technologies: ["Python", "SQL", "APIs"],
      icon: "Activity",
      category: "Monitoramento",
      highlights: [
        "Detecção proativa de falhas",
        "Dashboard de métricas em tempo real",
        "Alertas inteligentes por criticidade",
        "Relatórios automatizados"
      ]
    },
    {
      id: 5,
      title: "Automação de Relatórios",
      description: "Geração automática de relatórios com envio por e-mail",
      technologies: ["VBA", "Excel", "Outlook"],
      icon: "FileText",
      category: "Automação",
      highlights: [
        "Geração automática de relatórios",
        "Envio programado por e-mail",
        "Formatação profissional",
        "Dados sempre atualizados"
      ]
    },
    {
      id: 6,
      title: "Pipeline de ETL",
      description: "Sistema robusto de extração, transformação e carga de dados",
      technologies: ["Python", "SQL", "APIs", "Power BI"],
      icon: "GitBranch",
      category: "ETL",
      highlights: [
        "Processamento de milhões de registros",
        "Validação automática de dados",
        "Recuperação de falhas",
        "Monitoramento de performance"
      ]
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

