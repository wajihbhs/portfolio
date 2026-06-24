export interface Experience {
  id: string
  company: string
  location: string
  period: string
  endDate: string | null
  stack: string[]
  logo: string
  website: string
}

export interface Education {
  id: string
  school: string
  period: string
}

export interface SkillCategory {
  id: string
  labelKey: string
  skills: { name: string; level: number }[]
}

export interface Project {
  id: string
  company: string
  period: string
  screenshot: string
  screenshots: string[]
  link: string | null
  stack: string[]
}

export interface Language {
  id: string
  name: string
  proficiency: number
  flag: string
}

export interface Hobby {
  icon: string
}

export const personalInfo = {
  name: 'Wajih Bnelhadj Sghaier',
  email: 'wajihbhs.contact@gmail.com',
  phone: '+33 788336586',
  location: 'France',
  linkedin: 'linkedin.com/in/wajih-bhs',
  github: 'github.com/wajihbhs',
  photo: '/photo.jpg',
}

export const experiences: Experience[] = [
  {
    id: 'doinsport',
    company: 'Doinsport',
    location: 'Marseille, 13002',
    period: 'Sep 2020 – Présent',
    endDate: null,
    stack: ['Vue.js 2/3', 'Angular', 'TypeScript', 'WebSockets', 'Storybook', 'Docker', 'CI/CD', 'PHP', 'Symfony'],
    logo: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=100',
    website: 'https://www.doinsport.com',
  },
  {
    id: 'odeven',
    company: 'Odeven',
    location: 'Clermont-Ferrand, 63000',
    period: 'Sep 2019 – Sep 2020',
    endDate: 'Sep 2020',
    stack: ['Vue.js', 'TypeScript', 'Node.js', 'REST API', 'WebSockets', 'Docker'],
    logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
    website: 'https://www.odeven.fr',
  },
  {
    id: 'ingeneria',
    company: 'Ingeneria',
    location: 'Fréjus, 83600',
    period: 'Déc 2018 – Juin 2019',
    endDate: 'Juin 2019',
    stack: ['PHP', 'Symfony 3.2', 'MySQL', 'AngularJS', 'JavaScript', 'HTML', 'CSS', 'CakePHP 3.8'],
    logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
    website: 'https://www.ingeneria.fr',
  },
  {
    id: 'ubikey',
    company: 'Ubikey',
    location: 'Compiègne, 60200',
    period: 'Jan 2017 – Août 2018',
    endDate: 'Août 2018',
    stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'WebSocket'],
    logo: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=100',
    website: 'https://www.ubikey.com',
  },
]

export const educations: Education[] = [
  {
    id: 'isamm',
    school: 'ISAMM',
    period: '2015 – 2018',
  },
  {
    id: 'isimm',
    school: 'ISIMM',
    period: '2012 – 2015',
  },
  {
    id: 'lycee',
    school: 'Lycée ZM – Tunisie',
    period: '2010 – 2011',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    labelKey: 'skills.frontend',
    skills: [
      { name: 'Vue.js 2/3', level: 95 },
      { name: 'Angular / Ionic', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Storybook', level: 80 },
    ],
  },
  {
    id: 'backend',
    labelKey: 'skills.backend',
    skills: [
      { name: 'PHP / Symfony', level: 82 },
      { name: 'Node.js / Express', level: 75 },
      { name: 'REST API', level: 88 },
      { name: 'GraphQL', level: 72 },
      { name: 'MySQL / PostgreSQL', level: 78 },
    ],
  },
  {
    id: 'tools',
    labelKey: 'skills.tools',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 78 },
      { name: 'Git / GitHub', level: 92 },
      { name: 'WebSockets', level: 85 },
      { name: 'Agile / Scrum', level: 88 },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'doinsport-saas',
    company: 'Doinsport',
    period: '2020 – Présent',
    screenshot: '/doinsport.jpg',
    screenshots: [
      '/doinsport.jpg',
      '/doinsport_bo.jpg',
      '/doinsport_app.jpg',
    ],
    link: 'https://www.doinsport.com',
    stack: ['Vue.js 3', 'TypeScript', 'Storybook', 'WebSockets', 'PHP', 'Symfony', 'Docker'],
  },
  {
    id: 'van',
    company: 'Personnel',
    period: '2025',
    screenshot: '/van.jpg',
    screenshots: [
      '/van.png',
      '/van_detail.png',
    ],
    link: null,
    stack: ['Vue.js 3', 'TypeScript', 'tailwincss'],
  },
  {
    id: 'vitacare',
    company: 'Personnel',
    period: '2025',
    screenshot: '/patient_list.png',
    screenshots: [
      '/patient_list.png',
      '/patient_update.png',
      '/patient_notif.png',
      '/patient_chart.png',
    ],
    link: null,
    stack: ['Vue.js 3', 'TypeScript', 'vuetify', 'json-server', 'vue-chartjs'],
  },
  {
    id: 'odevia',
    company: 'Odeven',
    period: '2019 – 2020',
    screenshot: '/odeven_team.jpeg',
    screenshots: [
      '/odevia.png',
      '/odevia_chart.png',
      '/odevia_modal.png',
    ],
    link: null,
    stack: ['Vue.js', 'TypeScript', 'Node.js', 'WebSockets', 'REST API'],
  },
  {
    id: 'ubiweb',
    company: 'Ubikey',
    period: '2017 – 2018',
    screenshot: '/ubikey.png',
    screenshots: [
      '/ubikey_all.jpg',
      '/ubiapp.jpg',
      '/ubiweb_chart.jpg',
    ],
    link: null,
    stack: ['Angular 2', 'TypeScript', 'WebSockets', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'projeo',
    company: 'Ingeneria',
    period: '2018 – 2019',
    screenshot: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1200',
    screenshots: [
      'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1200',
      '/odevia_map.png',
      ],
    link: null,
    stack: ['Node.js', 'Express.js', 'React.js', 'GraphQL', 'Maps API'],
  },
  {
    id: 'ingeneria-app',
    company: 'Ingeneria',
    period: '2018 – 2019',
    screenshot: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    screenshots: [
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    link: null,
    stack: ['PHP', 'Symfony 3.2', 'AngularJS', 'MySQL', 'CakePHP'],
  },
]

export const languages: Language[] = [
  { id: 'arabic', name: 'Arabe', proficiency: 100, flag: '🇹🇳' },
  { id: 'french', name: 'Français', proficiency: 100, flag: '🇫🇷' },
  { id: 'english', name: 'Anglais', proficiency: 90, flag: '🇬🇧' },
]

export const hobbies: Hobby[] = [
  { icon: 'chess' },
  { icon: 'swim' },
  { icon: 'fish' },
]
