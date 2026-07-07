import {
  ShoppingBag,
  CodeXml,
  Zap,
  Layers,
  Cpu,
} from 'lucide-astro';

export const en = {
  menu: [
    { title: 'About', link: '#about' },
    { title: 'Expertise', link: '#expertise' },
    { title: 'Skills', link: '#skills' },
    { title: 'Experience', link: '#experience' },
    { title: 'Selected Works', link: '#projects' },
    { title: 'Contact', link: '#contact' },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/vinicius-barbo/?locale=en-US',
    github: 'https://github.com/vbarbo-dev',
    email: 'vinicius@vbarbo.com.br',
  },
  hero: {
    upper: 'Frontend Engineer | E-commerce',
    title: 'Vinicius Barbo',
    text: 'Building scalable e-commerce experiences.',
    description: '6+ years of experience building high-performance e-commerce solutions, with expertise in Liquid-based platforms, performance optimization, and custom frontend experiences.',
    bottomTitle: 'Social',
    contact: 'Contact Me',
    projects: 'View Projects',
    badges: [
      { label: '+6 Years Experience' },
      { label: 'E-commerce Specialist' },
    ],
  },
  about: {
    textTitle: 'About',
    text: 'I design and develop high-performance e-commerce experiences for brands across different industries. With more than 6 years in the market, I work at the intersection of technical excellence and business impact, creating storefronts optimized for conversion, performance, and scalability.',
    cards: [
      { title: '6+', desc: 'Years experience' },
      { title: '40+', desc: 'Stores delivered' },
      { title: 'Liquid', desc: 'Specialty' },
      { title: 'Worldwide', desc: 'Availability' },
    ]
  },
  expertise: {
    title: 'Expertise',
    text: 'Specialized technical solutions for enterprise retail.',
    cards: [
      {
        icon: ShoppingBag,
        title: 'E-commerce Development',
        desc: 'Building custom themes and headless storefronts with a focus on core web vitals and conversion.'
      },
      {
        icon: CodeXml,
        title: 'Frontend for E-commerce',
        desc: 'Building custom interfaces for e-commerce platforms with a focus on user experience and conversion.'
      },
      {
        icon: Zap,
        title: 'Performance Optimization',
        desc: 'Auditing and fixing performance bottlenecks to achieve sub-second load times and 90+ Lighthouse scores.'
      },
      {
        icon: Layers,
        title: 'Frontend Architecture',
        desc: 'Designing scalable component libraries and design systems tailored for large-scale retail.'
      },
    ]
},
  technical: {
    title: 'Skills',
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
          'Liquid',
          'Olist Commerce',
          'Linx Commerce',
          'Salesforce Commerce Cloud',
          'VTEX',
        ]
      },
      {
        icon: Cpu,
        color: 'color-drac-pink',
        title: 'Tools',
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
    title: 'Professional Journey',
    jobs: [
      {
        company: 'Olist',
        role: 'Mid-Level Frontend Developer',
        start: '2023/oct',
        end: '2026/apr',
        tags: ['Liquid', 'JavaScript (ES6+)', 'SCSS', 'Node.js', 'REST API', 'GitLab', 'E-commerce SEO'],
        bullets: [
          'Developed and maintained large-scale e-commerce stores on the Vnda platform',
          'Delivered more than 30 stores focused on performance and user experience',
          'Implemented new features and improvements for active storefronts',
          'Solved complex frontend and integration-related issues',
          'Worked in agile environments with daily alignments and parallel demands',
        ]
      },

      {
        company: 'Veste',
        role: 'Mid-Level Frontend Developer',
        start: '2021/nov',
        end: '2023/oct',
        tags: ['Liquid', 'JavaScript (ES6+)', 'jQuery', 'SCSS', 'Node.js', 'Vue.js', 'REST API', 'GitLab'],
        bullets: [
          'Maintained and evolved e-commerce stores for Veste group brands',
          'Developed landing pages for marketing campaigns',
          'Customized widgets and implemented new features on Linx Commerce',
          'Fixed bugs and optimized storefront performance',
          'Worked within agile squads using Azure DevOps and Scrum',
        ]
      },

      {
        company: 'Trinto',
        role: 'Mid-Level Frontend Developer',
        start: '2021/jun',
        end: '2021/nov',
        tags: ['Liquid', 'JavaScript (ES6+)', 'jQuery', 'SCSS', 'Node.js', 'REST API', 'GitLab'],
        bullets: [
          'Dedicated frontend developer allocated to the Veste account',
          'Managed and organized demands using Trello',
          'Participated in technical alignment meetings with client and squad',
          'Developed and maintained e-commerce frontend features',
        ]
      },

      {
        company: 'DevDog',
        role: 'Junior Frontend Developer',
        start: '2019/jun',
        end: '2021/jun',
        tags: ['Liquid', 'JavaScript (ES6+)', 'jQuery', 'SCSS', 'Node.js', 'Bitbucket', 'E-mail Marketing'],
        bullets: [
          'Implemented e-commerce storefronts on the Linx Commerce platform',
          'Developed email marketing templates using Mailbiz',
          'Created and maintained frontend features for online stores',
          'Handled code versioning using Git and Bitbucket',
          'Contributed to the delivery of more than 10 projects',
        ]
      },
    ],
  },
  projects: {
    title: 'Selected Works',
    text: 'Crafting conversion-focused digital infrastructure for global retailers.',
    disclaimer: 'Due to NDA restrictions, some enterprise projects are shown with limited details.',
    cards: [
      {
        logo: '/images/ykigai.png',
        preview: '/images/ykigai-preview.png',
        title: 'Ykigai',
        slug: 'ykigai',
        desc: 'Premium eyewear e-commerce inspired by Japanese aesthetics and philosophy.',
        impact: 'CUSTOM LENSES',
        impactDesc: 'Complete flow for sunglasses, prescription lenses and prescription upload.',
        tags: ['E-commerce', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
      {
        logo: '/images/hibiscobeach.png',
        preview: '/images/hibiscobeach-preview.png',
        title: 'Hibisco Beach',
        slug: 'hibisco',
        desc: 'Women’s fashion storefront focused on dresses, jumpsuits and exclusive collections.',
        impact: 'SHOP THE LOOK',
        impactDesc: 'Interactive shopping experience connecting complete outfits to products.',
        tags: ['Shop The Look', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
      {
        logo: '/images/casaencanto.png',
        preview: '/images/casaencanto-preview.png',
        title: 'Casa Encanto',
        slug: 'casaencanto',
        desc: 'Home and decor e-commerce featuring rugs, bedding, bath and lifestyle products.',
        impact: 'ADVANCED NAVIGATION',
        impactDesc: 'Dynamic selection of shapes and sizes across related products.',
        tags: ['Custom Products', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
      {
        logo: '/images/mariaantonieta.png',
        preview: '/images/mariaantonieta-preview.png',
        title: 'Maria Antonieta',
        slug: 'mariaantonieta',
        desc: 'Online storefront for a traditional pâtisserie and boulangerie.',
        impact: 'PREMIUM EXPERIENCE',
        impactDesc: 'Online chocolaterie and gourmet boutique from the traditional Maria Antonieta pâtisserie-boulangerie.',
        tags: ['Premium Experience', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
      {
        logo: '/images/inglesis.png',
        preview: '/images/inglesis-preview.png',
        title: 'Inglesis',
        slug: 'inglesis',
        desc: "Women's fashion e-commerce with a strong visual identity and a premium shopping experience.",
        impact: 'BRAND IDENTITY',
        impactDesc: "Digital experience designed to reflect the brand's creative vision with performance and usability.",
        tags: ['Shop The Look', 'UX', 'Performance', 'SEO', 'Liquid', 'JavaScript ES6+'],
      },
      {
        logo: '/images/pipizito.png',
        preview: '/images/pipizito-preview.png',
        title: 'Pipizito',
        slug: 'pipizito',
        desc: 'Direct-to-consumer e-commerce for an innovative product designed for women.',
        impact: 'VISUAL IDENTITY',
        impactDesc: 'Highly customized layout featuring organic shapes and vibrant colors.',
        tags: ['Custom Layout', 'Performance', 'SEO', 'Liquid', 'SCSS', 'JavaScript ES6+'],
      },
    ],
  },
  contact: {
    headTitle: "Let's build scalable e-commerce experiences.",
    headDesc: 'Available for new opportunities',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formButton: 'Send Message',
    findMe: 'Find me on',
    mail: 'Direct email',
  },
  footer: {
    copy: '© 2026 vBarbo',
    rights: 'All rights reserved',
    top: 'Back to top',
  }
};