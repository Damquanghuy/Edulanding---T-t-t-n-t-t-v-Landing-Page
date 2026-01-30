import React from 'react';
import { SectionId } from '../types';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
} from 'recharts';
import Checklist from './Checklist';

interface CourseContentProps {
  activeSection: SectionId;
}

const CourseContent: React.FC<CourseContentProps> = ({ activeSection }) => {
  switch (activeSection) {
    case SectionId.INTRO:
      return <Introduction />;
    case SectionId.THEORY:
      return <Theory />;
    case SectionId.DESIGN:
      return <DesignPrinciples />;
    case SectionId.MOBILE:
      return <MobileSpeed />;
    case SectionId.TESTING:
      return <ABTesting />;
    case SectionId.VIDEO:
      return <VideoUsage />;
    case SectionId.TOOLS:
      return <Tools />;
    case SectionId.CASES:
      return <CaseStudies />;
    case SectionId.ROADMAP:
      return <Roadmap />;
    case SectionId.CHECKLIST:
      return <Checklist />;
    default:
      return <Introduction />;
  }
};

/* --- Sub-Components for Content --- */

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">{children}</h2>
);

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-bold text-gray-800 mt-10 mb-5 flex items-center">
    <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
    {children}
  </h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-600 leading-relaxed mb-6 text-lg">{children}</p>
);

const Card: React.FC<{ title: string; children: React.ReactNode; highlighted?: boolean }> = ({ title, children, highlighted = false }) => (
  <div className={`p-6 rounded-xl border mb-4 transition-all hover:shadow-md bg-white ${highlighted ? 'border-primary border-l-4' : 'border-gray-200 border-l-4 border-l-gray-300'}`}>
    <h4 className={`font-bold mb-3 text-lg ${highlighted ? 'text-primary' : 'text-gray-800'}`}>{title}</h4>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

// 1. Introduction
const Introduction = () => (
  <div className="animate-fade-in">
    <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl mb-10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 mt-2">
        Tài Liệu Đào Tạo Toàn Diện
      </h1>
      <p className="text-xl text-primary font-bold mb-4">Viết Landing Page Hiệu Quả & Thiết Kế Kéo Thả Cho Ngành Giáo Dục</p>
      <p className="text-gray-500 italic text-lg">Hướng dẫn chuyên sâu dựa trên nghiên cứu khoa học và thực tiễn công nghiệp.</p>
    </div>

    <SubHeading>Mục Tiêu Học Tập</SubHeading>
    <div className="grid md:grid-cols-2 gap-4 mb-8">
      {[
        "Hiểu các nguyên tắc UX/UI nền tảng",
        "Viết copy chuyển đổi cao dựa trên tâm lý học hành vi",
        "Thiết kế responsive & accessible",
        "Sử dụng công cụ kéo thả chuyên nghiệp",
        "Thực hiện A/B testing khoa học"
      ].map((goal, idx) => (
        <div key={idx} className="flex items-start space-x-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
            {idx + 1}
          </div>
          <span className="text-gray-700 font-medium">{goal}</span>
        </div>
      ))}
    </div>

    <Paragraph>
      Tài liệu này dựa trên hơn 80 nghiên cứu từ các tổ chức uy tín như <strong>Nielsen Norman Group</strong>, <strong>Harvard Business Review</strong>, và dữ liệu thực tế từ Dropbox, Slack, HubSpot.
    </Paragraph>
  </div>
);

// 2. Theory
const Theory = () => (
  <div>
    <Heading>Phần 1: Nền Tảng Lý Thuyết</Heading>
    
    <SubHeading>1.1 Ba Khung Tham Chiếu Cơ Bản</SubHeading>
    
    <div className="mb-10">
      <h4 className="font-bold text-lg mb-4 text-gray-800">A. 10 Heuristic Usability của Nielsen (1994)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="1. Visibility of System Status">Người dùng luôn biết điều gì đang xảy ra (phản hồi kịp thời).</Card>
        <Card title="2. Match Between System & Real World">Sử dụng ngôn ngữ người dùng, tránh jargon kỹ thuật.</Card>
        <Card title="8. Aesthetic & Minimalist Design">Loại bỏ thông tin không cần thiết. Đừng để người dùng bị nhiễu.</Card>
        <Card title="Ứng dụng thực tế" highlighted={true}>
          Hero section phải hiển thị rõ Value Proposition trong 3 giây đầu.
        </Card>
      </div>
    </div>

    <div className="mb-10 bg-gray-50 p-8 rounded-xl border border-gray-200">
      <h4 className="font-bold text-lg mb-4 text-gray-800">B. Cognitive Load Theory (Tải Nhận Thức)</h4>
      <p className="mb-6 text-gray-600">Cognitive Load là lượng nỗ lực tinh thần cần thiết để xử lý thông tin.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-red-400">
          <span className="font-bold block text-red-500 mb-1">Intrinsic Load</span>
          <span className="text-sm text-gray-500">Độ khó vốn có của thông tin</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-yellow-400">
          <span className="font-bold block text-yellow-500 mb-1">Extraneous Load</span>
          <span className="text-sm text-gray-500">Gây ra bởi thiết kế kém (Cần giảm thiểu)</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-primary">
          <span className="font-bold block text-primary mb-1">Germane Load</span>
          <span className="text-sm text-gray-500">Nỗ lực để học hỏi (Cần tối ưu)</span>
        </div>
      </div>
      <p className="mt-6 text-sm italic text-gray-500 border-t border-gray-200 pt-4">
        *Tip: Tách thông tin thành phần nhỏ (chunking), visual breaks mỗi 200 từ.
      </p>
    </div>

    <SubHeading>1.2 Mô Hình Conversion Funnel & Tâm Lý Hành Vi</SubHeading>
    <div className="relative border-l-2 border-dashed border-gray-300 ml-4 pl-10 py-4 space-y-10">
      <div className="relative">
        <span className="absolute -left-[50px] w-5 h-5 rounded-full bg-primary ring-4 ring-white shadow-sm"></span>
        <h5 className="font-bold text-lg text-gray-900">Giai đoạn 1: Trust Formation (50ms)</h5>
        <p className="text-gray-600 mt-2">Quyết định tin tưởng trong 50ms đầu tiên. Yếu tố: Logo chuyên nghiệp, tốc độ load, Social proof.</p>
      </div>
      <div className="relative">
        <span className="absolute -left-[50px] w-5 h-5 rounded-full bg-gray-400 ring-4 ring-white shadow-sm"></span>
        <h5 className="font-bold text-lg text-gray-900">Giai đoạn 2: Ownership Building</h5>
        <p className="text-gray-600 mt-2">Người dùng tưởng tượng bản thân sử dụng sản phẩm. Yếu tố: Interactive features, Personalization.</p>
      </div>
      <div className="relative">
        <span className="absolute -left-[50px] w-5 h-5 rounded-full bg-gray-400 ring-4 ring-white shadow-sm"></span>
        <h5 className="font-bold text-lg text-gray-900">Giai đoạn 3: Loss Aversion Defeat</h5>
        <p className="text-gray-600 mt-2">Chuyển từ "mất tiền" sang "được giá trị". Yếu tố: Guarantee, Risk reversal.</p>
      </div>
    </div>
  </div>
);

// 3. Design Principles
const DesignPrinciples = () => (
  <div>
    <Heading>Phần 2: Nguyên Tắc Thiết Kế Landing Page</Heading>
    
    <SubHeading>2.1 Hero Section (Above the Fold)</SubHeading>
    <Paragraph>Đây là bất động sản quan trọng nhất. Mục tiêu: Truyền đạt Value Proposition trong 3 giây.</Paragraph>
    
    <div className="bg-gray-50 p-8 rounded-xl mb-8 border border-gray-200">
      <div className="text-center text-xs text-gray-400 mb-4 uppercase tracking-widest font-semibold">Wireframe Hero Section</div>
      <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex-1 space-y-4 w-full">
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-full bg-gray-800 rounded opacity-80"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          <div className="h-12 w-48 bg-primary rounded shadow-lg shadow-primary/20 mt-6 flex items-center justify-center text-white font-bold cursor-pointer hover:bg-opacity-90 transition-all">CTA: Đăng Ký Ngay</div>
        </div>
        <div className="flex-1 h-56 w-full bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
          <span className="text-gray-400 font-medium">Image/Video (80% giá trị)</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card title="Màu Sắc Nút CTA">
        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li><span className="font-semibold text-gray-800">Red/Orange:</span> +24% conversion</li>
          <li><span className="font-semibold text-gray-800">Green:</span> +15% conversion</li>
          <li><span className="font-semibold text-gray-800">Blue (Education):</span> +18% trust</li>
        </ul>
      </Card>
      <Card title="Hình Ảnh" highlighted={true}>
        <ul className="list-disc ml-4 space-y-2 mt-2">
          <li>Người thực, mắt nhìn trực tiếp</li>
          <li>Tránh ảnh stock vô hồn</li>
          <li>Video tăng conversion 80-86%</li>
        </ul>
      </Card>
    </div>

    <SubHeading>2.2 Copywriting: Feature vs Benefit</SubHeading>
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-50 text-gray-700 text-sm uppercase font-bold tracking-wider">
            <th className="py-4 px-6 text-left border-b border-gray-200">Feature (Sản phẩm)</th>
            <th className="py-4 px-6 text-left border-b border-gray-200">Benefit (Người dùng)</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-base">
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="py-4 px-6 text-left align-top">"Khóa học có 50 videos"</td>
            <td className="py-4 px-6 text-left font-medium text-primary">"Học mọi lúc mọi nơi, làm chủ kiến thức"</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-6 text-left align-top">"Hỗ trợ chat 24/7"</td>
            <td className="py-4 px-6 text-left font-medium text-primary">"Không bao giờ bị kẹt, giải đáp tức thì"</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// 4. Mobile & Speed
const mobileData = [
  { name: 'Desktop Conv.', value: 3.7, fill: '#9ca3af' },
  { name: 'Mobile Conv.', value: 3.3, fill: '#77c17b' },
];

const MobileSpeed = () => (
  <div>
    <Heading>Phần 3: Tối Ưu Hóa Mobile & Tốc Độ</Heading>
    <Paragraph>55% traffic toàn cầu đến từ thiết bị di động. Nếu web không responsive, bạn mất 73% khách hàng.</Paragraph>
    
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
        <h4 className="text-center font-bold mb-6 text-gray-800">Tỷ lệ chuyển đổi (Conversion Rate)</h4>
        <div className="h-64 w-full flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mobileData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
              <YAxis unit="%" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-center text-gray-500 mt-4 pt-4 border-t border-gray-100">Mobile optimized sites gần đuổi kịp Desktop</p>
      </div>

      <div className="space-y-6">
        <Card title="Core Web Vitals" highlighted={true}>
          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-700">LCP (Loading)</span>
                <span className="text-primary font-bold">&lt; 2.5s</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-700">INP (Interactive)</span>
                <span className="text-primary font-bold">&lt; 200ms</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-700">CLS (Stability)</span>
                <span className="text-primary font-bold">&lt; 0.1</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </Card>
        <Card title="Nguyên tắc Mobile-First">
          <ul className="list-disc ml-4 text-sm space-y-2 mt-1">
            <li>Thiết kế cho 360px trước.</li>
            <li>Nút bấm tối thiểu 44x44px (ngón tay cái).</li>
            <li>Layout 1 cột.</li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
);

// 5. A/B Testing
const abData = [
  { name: 'Headline', uplift: 20, effort: 1 }, // Low effort
  { name: 'Form Fields', uplift: 40, effort: 2 },
  { name: 'Video', uplift: 50, effort: 8 }, // High effort
  { name: 'Font', uplift: 2, effort: 5 },
];

const ABTesting = () => (
  <div>
    <Heading>Phần 4: A/B Testing & Đo Lường</Heading>
    <Paragraph>Đừng đoán mò. Hãy để dữ liệu quyết định.</Paragraph>

    <SubHeading>Ma Trận Ưu Tiên Testing</SubHeading>
    <div className="h-96 w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={abData} layout="vertical" margin={{ left: 20, right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#eee" />
          <XAxis type="number" unit="%" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
          <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} tick={{fill: '#374151', fontWeight: 500}} />
          <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="uplift" name="Uplift Tiềm Năng (%)" fill="#77c17b" radius={[0, 4, 4, 0]} barSize={24} />
          <Bar dataKey="effort" name="Nỗ lực (Thấp -> Cao)" fill="#e5e7eb" radius={[0, 4, 4, 0]} barSize={24} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    
    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-400 shadow-sm">
      <h4 className="font-bold text-gray-800 mb-3 text-lg">Quy tắc vàng của Testing</h4>
      <ul className="list-decimal ml-5 space-y-3 text-gray-700">
        <li><strong>Giả thuyết rõ ràng:</strong> "Vì [vấn đề], thay đổi [yếu tố] sẽ tăng [metric]..."</li>
        <li><strong>Statistical Significance:</strong> Chỉ tin kết quả khi p-value &lt; 0.05 (độ tin cậy 95%).</li>
        <li><strong>Kiên nhẫn:</strong> Chạy test tối thiểu 1-2 tuần.</li>
      </ul>
    </div>
  </div>
);

// 6. Video
const VideoUsage = () => (
  <div>
    <Heading>Phần 5: Khi Nào Sử Dụng Video?</Heading>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
         <Card title="Video Hiệu Quả Khi..." highlighted={true}>
            <ul className="list-disc ml-4 space-y-2 mt-2">
              <li>Chất lượng chuyên nghiệp (ánh sáng, âm thanh tốt).</li>
              <li>Liên quan trực tiếp đến offer.</li>
              <li>Ngắn dưới 90 giây.</li>
              <li>Có phụ đề (cho chế độ xem không tiếng).</li>
            </ul>
         </Card>
      </div>
      <div className="space-y-4">
         <Card title="Các Loại Video Cho Giáo Dục">
            <ul className="space-y-4 mt-2">
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span>Explainer (Hero)</span>
                <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded text-sm">60-90s</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span>Testimonial</span>
                <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded text-sm">30-60s</span>
              </li>
              <li className="flex justify-between items-center pb-1">
                <span>Instructor Intro</span>
                <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded text-sm">30-45s</span>
              </li>
            </ul>
         </Card>
      </div>
    </div>
  </div>
);

// 7. Tools
const Tools = () => (
  <div>
    <Heading>Phần 6: Công Cụ Kéo Thả & Thực Hành</Heading>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all cursor-pointer group">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">LadiPage</h3>
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-medium border border-gray-200">Việt Nam</span>
        </div>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">Phổ biến nhất tại VN. Có sẵn template giáo dục, hỗ trợ video dọc, form logic.</p>
        <div className="text-sm font-semibold text-primary flex items-center">
          <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
          Phù hợp: Startup, SME
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all cursor-pointer group">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">Elementor</h3>
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-medium border border-gray-200">WordPress</span>
        </div>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">Plugin WordPress mạnh mẽ. Customization sâu, SEO tốt, nhưng cần kỹ thuật hơn.</p>
        <div className="text-sm font-semibold text-primary flex items-center">
           <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
           Phù hợp: Công ty lớn
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all cursor-pointer group">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">Canva</h3>
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-medium border border-gray-200">Design</span>
        </div>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">Nhanh, đẹp, miễn phí nhiều. Hạn chế về tracking và form logic phức tạp.</p>
        <div className="text-sm font-semibold text-primary flex items-center">
          <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
          Phù hợp: Prototyping
        </div>
      </div>
    </div>
  </div>
);

// 8. Case Studies
const CaseStudies = () => (
  <div>
    <Heading>Phần 7: Case Studies Thực Tế</Heading>
    <div className="space-y-8">
      <div className="bg-white border-l-4 border-primary p-8 shadow-sm rounded-r-xl border-y border-r border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
           <h4 className="font-bold text-2xl text-gray-900">University of Michigan</h4>
           <span className="text-sm text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded mt-2 md:mt-0 inline-block">Education Sector</span>
        </div>
        <p className="text-gray-600 italic mb-4 text-lg border-l-2 border-gray-200 pl-4 py-1">Challenge: Tuyển sinh thấp cho chương trình Digital Health.</p>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
          <p className="font-bold text-gray-800 mb-3">Giải pháp:</p>
          <ul className="list-disc ml-4 text-gray-600 space-y-2 mb-6">
             <li>Làm rõ Value Prop (Nhận được gì, không phải chúng tôi là ai).</li>
             <li>Thêm Social Proof (Số lượng học viên).</li>
          </ul>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
             <span className="font-bold text-gray-500 uppercase tracking-wide text-xs">Kết quả</span>
             <span className="text-2xl font-bold text-primary">+111% Accounts/Year</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-l-4 border-gray-400 p-8 shadow-sm rounded-r-xl border-y border-r border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
           <h4 className="font-bold text-2xl text-gray-900">HubSpot</h4>
           <span className="text-sm text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded mt-2 md:mt-0 inline-block">SaaS / Edu</span>
        </div>
        <p className="text-gray-600 italic mb-4 text-lg border-l-2 border-gray-200 pl-4 py-1">Challenge: Form quá dài làm giảm tỷ lệ điền.</p>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
          <p className="font-bold text-gray-800 mb-3">Giải pháp (Progressive Disclosure):</p>
          <ul className="list-disc ml-4 text-gray-600 space-y-2 mb-6">
             <li>Gốc: 7 trường thông tin.</li>
             <li>Test: Bắt đầu với 2 trường (Email, Tên) sau đó mới hiện thêm.</li>
          </ul>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
             <span className="font-bold text-gray-500 uppercase tracking-wide text-xs">Kết quả</span>
             <span className="text-2xl font-bold text-primary">+50% Completion Rate</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 9. Roadmap
const Roadmap = () => (
  <div>
    <Heading>Phần 8: Roadmap Tối Ưu Hóa (3 Tháng)</Heading>
    <div className="relative border-l-2 border-primary/30 ml-4 space-y-12 pl-10 py-6">
      <div className="relative">
        <div className="absolute -left-[54px] w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm ring-4 ring-white">1</div>
        <h4 className="text-xl font-bold text-gray-900">Tháng 1: Foundation</h4>
        <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4 shadow-sm">
          <ul className="list-disc ml-4 text-gray-600 space-y-2">
            <li>Đo lường hiện tại (Baseline measurement).</li>
            <li>Cài đặt GA4 events & Goals.</li>
            <li>Test 1: Headline (Benefit vs Control).</li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-[54px] w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-lg shadow-sm ring-4 ring-white">2</div>
        <h4 className="text-xl font-bold text-gray-900">Tháng 2: Conversion Funnel</h4>
        <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4 shadow-sm">
          <ul className="list-disc ml-4 text-gray-600 space-y-2">
            <li>Test 3: Rút gọn Form fields.</li>
            <li>Test 4: Thêm Video Testimonial.</li>
            <li>Phân tích phân khúc Mobile vs Desktop.</li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-[54px] w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-lg shadow-sm ring-4 ring-white">3</div>
        <h4 className="text-xl font-bold text-gray-900">Tháng 3: Scale & Optimize</h4>
        <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4 shadow-sm">
          <ul className="list-disc ml-4 text-gray-600 space-y-2">
            <li>Test 6: Làm rõ Value Proposition.</li>
            <li>Triển khai các "Winner" từ tháng trước.</li>
            <li>Lên kế hoạch chu kỳ tiếp theo.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default CourseContent;
