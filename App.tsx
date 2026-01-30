import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Layout, 
  Smartphone, 
  Beaker, 
  Video, 
  PenTool, 
  Users, 
  Map, 
  CheckSquare, 
  Menu, 
  X,
  Home
} from 'lucide-react';
import { SectionId, NavItem } from './types';
import Sidebar from './components/Sidebar';
import CourseContent from './components/CourseContent';

const navItems: NavItem[] = [
  { id: SectionId.INTRO, title: 'Giới Thiệu', icon: Home },
  { id: SectionId.THEORY, title: '1. Nền Tảng Lý Thuyết', icon: BookOpen },
  { id: SectionId.DESIGN, title: '2. Nguyên Tắc Thiết Kế', icon: Layout },
  { id: SectionId.MOBILE, title: '3. Mobile & Tốc Độ', icon: Smartphone },
  { id: SectionId.TESTING, title: '4. A/B Testing', icon: Beaker },
  { id: SectionId.VIDEO, title: '5. Sử Dụng Video', icon: Video },
  { id: SectionId.TOOLS, title: '6. Công Cụ Kéo Thả', icon: PenTool },
  { id: SectionId.CASES, title: '7. Case Studies', icon: Users },
  { id: SectionId.ROADMAP, title: '8. Roadmap', icon: Map },
  { id: SectionId.CHECKLIST, title: '9. Checklist & Templates', icon: CheckSquare },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.INTRO);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState<number>(0);

  // Calculate generic progress based on current index
  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.id === activeSection);
    const newProgress = ((currentIndex + 1) / navItems.length) * 100;
    setProgress(newProgress);
  }, [activeSection]);

  const handleSectionChange = (id: SectionId) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden text-gray-800">
      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-white z-20 border-b border-gray-200 h-16 flex items-center justify-between px-4">
        <span className="font-bold text-lg text-primary">EduLanding Master</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <Sidebar 
          navItems={navItems} 
          activeSection={activeSection} 
          onSelect={handleSectionChange} 
        />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden md:mt-0 mt-16">
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-gray-200">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-20">
          <div className="max-w-4xl mx-auto bg-white min-h-full rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
            <CourseContent activeSection={activeSection} />
          </div>
          
          {/* Footer for navigation hints */}
          <div className="max-w-4xl mx-auto mt-8 flex justify-between text-sm text-gray-500 px-2">
            <button 
              onClick={() => {
                const idx = navItems.findIndex(n => n.id === activeSection);
                if (idx > 0) handleSectionChange(navItems[idx - 1].id);
              }}
              disabled={navItems.findIndex(n => n.id === activeSection) === 0}
              className="hover:text-primary disabled:opacity-0 transition-colors"
            >
              &larr; Bài trước
            </button>
            <button 
              onClick={() => {
                const idx = navItems.findIndex(n => n.id === activeSection);
                if (idx < navItems.length - 1) handleSectionChange(navItems[idx + 1].id);
              }}
              disabled={navItems.findIndex(n => n.id === activeSection) === navItems.length - 1}
              className="hover:text-primary disabled:opacity-0 transition-colors"
            >
              Bài tiếp theo &rarr;
            </button>
          </div>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
