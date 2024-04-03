import dataAssets from '../DataAssets/DataAssets'

const data = {
  name: 'Jorge',
  lastName: 'Gómez',
  fullName: 'Jorge Gómez',
  address: 'Rua Otero Pedrayo, Nigrán, Spain',
  email: 'Jorgomez@protonmail.com',
  aboutMe:
    '“The motivation to explore new places led me to take challenges. And now Im studing web development as a tool to achieve my life goals. In this field I have found a huge and dynamic world, which I am very interested in continuing to explore. I am currently looking for those new challenges that will allow me to contribute with the skills acquired during my personal and professional life.',

  education: {
    degree: 'Bachelor  Public Management',
    university: ' University of Valparaíspo',
    graduationYear: 2012,
    honors: 'Summa Cum Laude',
    relevantCourses: [
      'Web Design, ThePower-Tech School',
      'Full Stack Development, ThePower-Tech School',
      'Artificial Intelligence, ThePower-Tech School'
    ]
  },
  workExperience: [
    {
      position: 'Ministerial Programs Coordinator',
      company: 'Cenabast, Ministry of Health.',
      country: 'Chile',
      startDate: '2015',
      endDate: '2019',
      description:
        'Distribution and logistics coordinator Pharmaceutical and health supplies.'
    },
    {
      position: 'Front desk Supervisor',
      company: 'Cape Byron Hostel YHA',
      country: 'Australia',
      startDate: '2020',
      endDate: '2023',
      description:
        'Monitor and organize reception and cleaning volunteers.Tend to guests complaints and questions deal with guest enquiries.'
    }
  ],
  skills: {
    Using: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Git',
      'Vite',
      'Figma',
      'Visual Studio'
    ],
    learning: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'RESTful API',
      'Frontend and Backend Development'
    ]
  },
  projects: [
    {
      title: 'E-commerce Website',
      description:
        'Designed and developed a feature-rich e-commerce platform with advanced product search, user reviews, and a secure payment system, resulting in a 30% increase in sales for the client.',
      sources: 'HTML, CSS, JavaScript',
      linkWeb:
        'https://65f0c4c314bf7e48a007dc10--relaxed-cupcake-ce8a65.netlify.app/?#tienda',
      link: 'https://github.com/Jorgomez/Proyecto-2',
      preview: dataAssets.previewPoyecto2
    },
    {
      title: 'Gallery Platform',
      description:
        'Created a customizable blog platform with dynamic content creation, user authentication, comment functionality, and social media integration, leading to a 50% growth in user engagement.',
      sources: 'HTML, CSS, JavaScript',
      linkWeb: 'https://main--proyecto3surfterest.netlify.app/',
      link: 'https://github.com/Jorgomez/Proyecto-3',
      preview: dataAssets.previewProyecto3
    },
    {
      title: 'Online Store',
      description:
        'Designed and developed a feature-rich e-commerce platform with advanced product search, user reviews, and a secure payment system, resulting in a 30% increase in sales for the client.',
      sources: 'HTML, CSS, JavaScript',
      linkWeb:
        'https://65aa6fa703012e00a8dafde3--stalwart-gecko-0dbdda.netlify.app/#',
      link: 'https://github.com/Jorgomez/Proyecto-1-Tienda-Cosmeticos',
      preview: dataAssets.previewProyecto1
    },

    {
      title: 'Grid-Gallery',
      description: 'One of the first Practice whit Grid template CSS',
      sources: 'HTML, CSS, JavaScript',
      linkWeb:
        'https://659feb915f0af40c336a1b17--cerulean-dasik-9ebf1c.netlify.app/',
      link: 'https://github.com/Jorgomez/PRACTICA-GRID/tree/main',
      preview: dataAssets.previewPractice
    }
  ],
  services: [
    {
      service: 'DESIGN',
      description:
        'I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.'
    },
    {
      service: 'DEVELOPMENT',
      description:
        'Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.'
    },
    {
      service: 'MAINTENANCE',
      description:
        'In case of any problems or the need for changes, I can introduce new functionalities and solutions.'
    }
  ]
}

export default data
