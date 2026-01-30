import React, { useState } from 'react';
import { ChecklistItem } from '../types';

const CHECKLIST_DATA: ChecklistItem[] = [
  // Copy & Content
  { id: 'c1', category: 'Copy & Content', text: 'Headline rõ ràng lợi ích, dưới 10 từ' },
  { id: 'c2', category: 'Copy & Content', text: 'CTA copy dạng hành động ("Đăng ký ngay")' },
  { id: 'c3', category: 'Copy & Content', text: 'Có ít nhất 2-3 Social Proof (Testimonials)' },
  { id: 'c4', category: 'Copy & Content', text: 'Không lỗi chính tả' },
  // Design
  { id: 'd1', category: 'Design & UX', text: 'Responsive trên Mobile (360px)' },
  { id: 'd2', category: 'Design & UX', text: 'Độ tương phản màu >= 4.5:1' },
  { id: 'd3', category: 'Design & UX', text: 'Kích thước nút >= 44x44px' },
  { id: 'd4', category: 'Design & UX', text: 'Ảnh Hero dưới 100KB (WebP)' },
  // Tech
  { id: 't1', category: 'Technical', text: 'SSL Certificate (HTTPS)' },
  { id: 't2', category: 'Technical', text: 'Google Lighthouse Score > 80' },
  { id: 't3', category: 'Technical', text: 'Form submit hoạt động và gửi email' },
  { id: 't4', category: 'Technical', text: 'Đã cài đặt GA4 Events' },
];

const Checklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = Array.from(new Set(CHECKLIST_DATA.map(item => item.category)));
  const progress = Math.round((Object.values(checkedItems).filter(Boolean).length / CHECKLIST_DATA.length) * 100);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">Phần 9: Checklist Pre-Launch</h2>
      <p className="text-gray-600 mb-8 text-lg">Sử dụng danh sách này trước khi bấm nút "Public" trang landing page của bạn.</p>

      <div className="mb-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between text-sm font-bold text-gray-700 mb-3">
          <span>Tiến độ kiểm tra</span>
          <span className="text-primary">{progress}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-primary h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="grid gap-8">
        {categories.map(cat => (
          <div key={cat} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-bold text-gray-800 text-lg">
              {cat}
            </div>
            <div className="p-6 space-y-4">
              {CHECKLIST_DATA.filter(item => item.category === cat).map(item => (
                <label key={item.id} className="flex items-start space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                  <div className="relative flex items-center mt-1">
                    <input 
                      type="checkbox" 
                      className="peer h-6 w-6 cursor-pointer appearance-none rounded border-2 border-gray-300 shadow-sm checked:border-primary checked:bg-primary focus:outline-none transition-all"
                      checked={!!checkedItems[item.id]}
                      onChange={() => toggleItem(item.id)}
                    />
                    <svg
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 6L5 7.5L8.5 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className={`${checkedItems[item.id] ? 'text-gray-400 line-through' : 'text-gray-700'} text-base select-none transition-colors`}>
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gray-50 p-8 rounded-xl border border-gray-200">
         <h4 className="font-bold text-gray-900 mb-4 text-lg">Template A/B Test Planning</h4>
         <div className="bg-white p-6 rounded-lg border border-gray-300 font-mono text-sm text-gray-600 whitespace-pre-wrap shadow-inner">
{`Test #: ___
Hypothesis: Because [problem], changing [element] will increase [metric] from X% to Y%.
Element: [ ] Headline  [ ] CTA  [ ] Form
Duration: ___ weeks
Metric: Conversion Rate`}
         </div>
         <div className="flex items-center mt-4 text-sm text-gray-500">
           <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           Copy nội dung trên vào Google Docs để lập kế hoạch test.
         </div>
      </div>
    </div>
  );
};

export default Checklist;
