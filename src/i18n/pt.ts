import {
  ShoppingBag,
  CodeXml,
  Zap,
  Layers,
  Cpu,
} from 'lucide-astro';

export const pt = {
  menu: [
    { title: 'Sobre', link: '#about' },
    { title: 'Especialidades', link: '#expertise' },
    { title: 'Arsenal Técnico', link: '#skills' },
    { title: 'Jornada Profissional', link: '#experience' },
    { title: 'Projetos Selecionados', link: '#projects' },
    { title: 'Contato', link: '#contact' },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/vinicius-barbo/',
    github: 'https://github.com/vbarbo-dev',
    email: 'vinicius@vbarbo.com.br',
  },
  hero: {
    upper: 'Engenheiro Frontend | Especialista E-comm',
    title: 'Vinicius Barbo',
    text: 'Construindo experiências de e-commerce escaláveis.',
    description: 'Mais de 6 anos de experiência especializado em lojas Shopify enterprise, otimização de performance e lojas customizadas em Liquid.',
    bottomTitle: 'Redes',
    contact: 'Entre em contato',
    projects: 'Ver projetos',
    badges: [
      { label: '+6 Anos de Experiência' },
      { label: 'Expert em Shopify' },
    ],
  },
  about: {
    title: 'Sobre',
    text: 'Eu projeto e construo soluções de e-commerce de alta performance para marcas globais. Com mais de 6 anos de mercado, foco na intersecção entre excelência técnica e impacto comercial, garantindo que as lojas não sejam apenas bonitas, mas otimizadas para conversão e escala.',
    cards: [
      { title: '6+', desc: 'Anos de exp.' },
      { title: '40+', desc: 'Lojas entregues' },
      { title: 'Shopify', desc: 'Plataforma principal' },
      { title: 'Global', desc: 'Disponibilidade' },
    ]
  },
  expertise: {
    title: 'Especialidades',
    text: 'Soluções técnicas especializadas para o varejo enterprise.',
    cards: [
      {
        icon: ShoppingBag,
        title: 'Desenvolvimento E-commerce',
        desc: 'Criação de temas customizados e lojas headless com foco em core web vitals e conversão.'
      },
      {
        icon: CodeXml,
        title: 'Customização Shopify',
        desc: 'Mergulho profundo em Liquid, OS 2.0 e Hydrogen para expandir os limites do Shopify.'
      },
      {
        icon: Zap,
        title: 'Otimização de Performance',
        desc: 'Auditoria e correção de gargalos para atingir carregamentos abaixo de um segundo.'
      },
      {
        icon: Layers,
        title: 'Arquitetura Frontend',
        desc: 'Projetando bibliotecas de componentes e design systems sob medida para o varejo de grande escala.'
      },
    ]
  },
  technical: {
    title: 'Arsenal Técnico',
    categories: [
      {
        icon: CodeXml,
        color: 'color-drac-purple',
        title: 'Frontend',
        items: [
          'JavaScript (ES6+)',
          'TypeScript',
          'HTML5/CSS3',
          'SCSS',
          'React',
          'Vue.js',
          'jQuery',
        ]
      },
      {
        icon: ShoppingBag,
        color: 'color-drac-cyan',
        title: 'E-commerce',
        items: [
          'Shopify (Liquid)',
          'VTEX',
          'VTEX IO',
          'Salesforce Commerce Cloud',
          'Linx Commerce',
        ]
      },
      {
        icon: Cpu,
        color: 'color-drac-pink',
        title: 'Ferramentas',
        items: [
          'Git',
          'Node.js',
          'Figma',
          'Docker',
          'Linux',
          'Vite',
          'Tailwind CSS',
          'Bootstrap',
        ]
      }
    ]
  },
  experience: {
    title: 'Jornada Profissional',
    jobs: [
      {
        company: 'Olist',
        role: 'Desenvolvedor Frontend Pleno',
        start: '2023/out',
        end: '2026/abr',
        tags: ['Liquid', 'JavaScript (ES6+)', 'SCSS', 'Node.js', 'API Rest', 'GitLab', 'E-commerce SEO'],
        bullets: [
          'Desenvolvimento e sustentação de e-commerces de grande porte na plataforma Vnda',
          'Entrega de mais de 30 lojas com foco em performance e experiência do usuário',
          'Implementação de novas funcionalidades e melhorias em lojas ativas',
          'Resolução de problemas complexos envolvendo frontend e integrações',
          'Atuação em ambiente ágil com alinhamentos diários e demandas simultâneas',
        ]
      },

      {
        company: 'Veste',
        role: 'Desenvolvedor Frontend Pleno',
        start: '2021/nov',
        end: '2023/out',
        tags: ['Liquid', 'JavaScript (ES6+)', 'jQuery', 'SCSS', 'Node.js', 'Vue.js', 'API Rest', 'GitLab'],
        bullets: [
          'Sustentação e evolução dos e-commerces das marcas do grupo Veste',
          'Desenvolvimento de landing pages para campanhas de marketing',
          'Customização de widgets e novas funcionalidades na plataforma Linx Commerce',
          'Correção de bugs e otimizações de performance',
          'Atuação em squad ágil utilizando Azure DevOps e Scrum',
        ]
      },

      {
        company: 'Trinto',
        role: 'Desenvolvedor Frontend Pleno',
        start: '2021/jun',
        end: '2021/nov',
        tags: ['Liquid', 'JavaScript (ES6+)', 'jQuery', 'SCSS', 'Node.js', 'API Rest', 'GitLab'],
        bullets: [
          'Atuação dedicada no cliente Veste através da agência Trinto',
          'Gestão e organização de demandas utilizando Trello',
          'Participação em reuniões de alinhamento técnico com cliente e squad',
          'Desenvolvimento e sustentação de funcionalidades para e-commerce',
        ]
      },

      {
        company: 'DevDog',
        role: 'Desenvolvedor Frontend Junior',
        start: '2019/jun',
        end: '2021/jun',
        tags: ['Liquid', 'JavaScript (ES6+)', 'jQuery', 'SCSS', 'Node.js', 'Bitbucket', 'E-mail Marketing'],
        bullets: [
          'Implementação de e-commerces na plataforma Linx Commerce',
          'Desenvolvimento de templates para e-mail marketing via Mailbiz',
          'Criação e manutenção de funcionalidades frontend para lojas virtuais',
          'Versionamento de código utilizando Git e Bitbucket',
          'Participação na entrega de mais de 10 projetos',
        ]
      },
    ],
  },
  projects: {
    title: 'Projetos Selecionados',
    text: 'Criando infraestrutura digital focada em conversão para varejistas globais.',
    disclaimer: 'Devido a restrições de NDA, alguns projetos enterprise são exibidos com detalhes limitados.',
    cards: [
      {
        logo: '/images/ykigai.png', 
        title: 'Ykigai',
        desc: 'E-commerce premium de óculos inspirado na estética e filosofia japonesa.',
        impact: 'LENTES PERSONALIZADAS',
        impactDesc: 'Fluxo completo para lentes solares, com grau e envio de receita.',
        tags: ['E-commerce', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
      {
        logo: '/images/hibiscobeach.png', 
        title: 'Hibisco Beach',
        desc: 'Loja virtual de moda feminina focada em vestidos, macacões e peças autorais.',
        impact: 'SHOP THE LOOK',
        impactDesc: 'Experiência interativa para compra de peças diretamente dos looks.',
        tags: ['Shop The Look', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
      {
        logo: '/images/casaencanto.png', 
        title: 'Casa Encanto',
        desc: 'E-commerce de casa e decoração com ampla variedade de tapetes e artigos mesa e banho.',
        impact: 'NAVEGAÇÃO AVANÇADA',
        impactDesc: 'Seleção dinâmica de formatos e tamanhos entre produtos relacionados.',
        tags: ['Produto Personalizado', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
      {
        logo: '/images/mariaantonieta.png', 
        title: 'Maria Antonieta',
        desc: 'Chocolaterie e empório online da tradicional pâtisserie-boulangerie Maria Antonieta.',
        impact: 'EXPERIÊNCIA PREMIUM',
        impactDesc: 'Storefront personalizado alinhado à identidade sofisticada da marca.',
        tags:  ['Experiência premium', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
      {
        logo: '/images/pipizito.png', 
        title: 'Pipizito',
        desc: 'E-commerce DTC para um produto inovador voltado ao público feminino.',
        impact: 'IDENTIDADE VISUAL',
        impactDesc: 'Layout altamente customizado com formas orgânicas e cores vibrantes.',
        tags:  ['Layout Personalizado', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
    ],
  },
  contact: {
    headTitle: 'Vamos construir um projeto de respeito juntos?',
    headDesc: 'Disponível para novas oportunidades',
    formName: 'Nome',
    formEmail: 'E-mail',
    formMessage: 'Mensagem',
    formButton: 'Enviar Mensagem',
    findMe: 'Encontre-me em',
    mail: 'Email direto',
  },
  footer: {
    copy: '© 2026 vBarbo',
    rights: 'Todos direitos reservados.',
    top: 'Voltar ao topo',
  }
};