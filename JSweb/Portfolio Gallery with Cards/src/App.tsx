import { useState } from 'react';
import { AutoScrollGallery } from './components/AutoScrollGallery';
import { ProjectModal } from './components/ProjectModal';

interface PortfolioWork {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
  tags: string[];
}

const portfolioWorks: PortfolioWork[] = [
  {
    id: '1',
    title: 'Modern Web Platform',
    category: 'Web Design',
    description: 'A comprehensive web platform featuring modern design principles, intuitive user experience, and responsive layout. Built with cutting-edge technologies to deliver exceptional performance.',
    imageUrl: 'https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzU3MjU2NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'UX/UI']
  },
  {
    id: '2',
    title: 'Mobile App Interface',
    category: 'App Design',
    description: 'Sleek mobile application interface designed for optimal user engagement and seamless interaction across iOS and Android platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3MjgyMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
    tags: ['Swift', 'Kotlin', 'Figma', 'Prototyping', 'iOS', 'Android']
  },
  {
    id: '3',
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Complete brand identity system including logo design, color palette, typography, and brand guidelines for a innovative tech startup.',
    imageUrl: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHhicmFuZGluZyUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTczMjE0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
    tags: ['Brand Design', 'Illustrator', 'InDesign', 'Strategy', 'Visual Identity']
  },
  {
    id: '4',
    title: 'Creative Studio Website',
    category: 'Web Design',
    description: 'Portfolio website for a creative studio featuring dynamic animations, immersive storytelling, and showcase of their creative work.',
    imageUrl: 'https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTczMjcyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
    tags: ['Vue.js', 'GSAP', 'WebGL', 'Creative Coding', 'Animation']
  },
  {
    id: '5',
    title: 'Product Design System',
    category: 'UX/UI Design',
    description: 'Comprehensive design system for a SaaS product including components, patterns, and guidelines to ensure consistency across the platform.',
    imageUrl: 'https://images.unsplash.com/photo-1667237346955-7b6cbb0815e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1NzMxMzcwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2024',
    tags: ['Design Systems', 'Figma', 'Component Library', 'Documentation', 'Accessibility']
  },
  {
    id: '6',
    title: 'Digital Art Collection',
    category: 'Digital Art',
    description: 'A series of digital artworks exploring the intersection of technology and creativity, featuring generative art and interactive installations.',
    imageUrl: 'https://images.unsplash.com/photo-1663153206192-6d0e4c9570dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkaWdpdGFsJTIwYXJ0JTIwY3JlYXRpb258ZW58MXx8fHwxNzU3MzIyMjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    year: '2023',
    tags: ['Digital Art', 'Generative Design', 'Processing', 'Creative Coding', 'Installation']
  }
];

export default function App() {
  const [selectedWork, setSelectedWork] = useState<PortfolioWork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (work: PortfolioWork) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <AutoScrollGallery 
        works={portfolioWorks} 
        onCardClick={handleCardClick}
      />
      
      <ProjectModal
        work={selectedWork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}