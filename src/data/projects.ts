export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  year: string
  status: 'complete' | 'wip'
}

export const fullStackProjects: Project[] = [
  {
    id: 'OBJ-001',
    title: 'Project Title Here',
    description:
      'A short description of what this project does, the problem it solves, and the impact it had. Keep it punchy — two sentences max.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/dkay9',
    live: '',
    year: '2024',
    status: 'complete',
  },
  {
    id: 'OBJ-002',
    title: 'Another Project',
    description:
      'Brief description of this project. What stack did you use? What was interesting or challenging about building it?',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/dkay9',
    live: '',
    year: '2024',
    status: 'complete',
  },
  {
    id: 'OBJ-003',
    title: 'Third Project',
    description:
      'A React dashboard with real-time data — or whatever best describes this entry. Replace all placeholder text with your actual projects.',
    tags: ['React', 'TypeScript', 'Firebase', 'Recharts'],
    github: 'https://github.com/dkay9',
    live: '',
    year: '2023',
    status: 'complete',
  },
]

export const aimlProjects: Project[] = [
  {
    id: 'SIG-001',
    title: 'Incoming Transmission',
    description: 'AI/ML projects currently in development. Signal incoming.',
    tags: ['Python', 'TensorFlow', 'scikit-learn'],
    year: '2025',
    status: 'wip',
  },
]
