export interface ProjectType {
  id: number;
  titleKey: string;
  descKey: string;
  image: string;
  savings: string;
  payback: string;
  co2: string;
}

export const projectsData: ProjectType[] = [
  {
    id: 1,
    titleKey: 'proj_1_title',
    descKey: 'proj_1_desc',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    savings: '42%',
    payback: '3.8',
    co2: '320'
  },
  {
    id: 2,
    titleKey: 'proj_2_title',
    descKey: 'proj_2_desc',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
    savings: '55%',
    payback: '3.2',
    co2: '250'
  },
  {
    id: 3,
    titleKey: 'proj_3_title',
    descKey: 'proj_3_desc',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
    savings: '60%',
    payback: '2.9',
    co2: '280'
  },
  {
    id: 4,
    titleKey: 'proj_4_title',
    descKey: 'proj_4_desc',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    savings: '35%',
    payback: '4.5',
    co2: '180'
  }
];
export default projectsData;
