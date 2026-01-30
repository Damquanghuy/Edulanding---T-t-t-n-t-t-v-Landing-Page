import React from 'react';
import { NavItem, SectionId } from '../types';

interface SidebarProps {
  navItems: NavItem[];
  activeSection: SectionId;
  onSelect: (id: SectionId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, activeSection, onSelect }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
          E
        </div>
        <div>
          <h1 className="font-bold text-gray-800 text-lg leading-tight">EduLanding</h1>
          <p className="text-xs text-gray-500 font-medium">Training Masterclass</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-primary text-white shadow-md shadow-green-100' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }
              `}
            >
              <Icon size={18} className={isActive ? 'text-white' : 'text-gray-400'} />
              <span className="text-left">{item.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">Tiến độ khóa học</p>
          <div className="text-sm font-bold text-gray-800">Version 1.0</div>
          <div className="mt-2 text-[10px] text-gray-400">
            © 2025 Education Training
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
