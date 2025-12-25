
import React, { useState, useMemo } from 'react';
import { NEWS, RESEARCH_AREAS, TEAM_MEMBERS, PUBLICATIONS, OPENINGS, PI_NAME, LAB_NAME } from '../constants';
import { IMAGES } from '../assets';
import { askResearchAssistant } from '../geminiService';

interface SectionProps {
  lang: 'zh' | 'en';
}

export const HomeSection: React.FC<SectionProps> = ({ lang }) => (
  <div>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img 
        src={IMAGES.heroBackground} 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.25]"
        alt="Laboratory background"
      />
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <div className="mb-6 inline-block px-4 py-1 border border-indigo-400/30 rounded-full bg-indigo-500/10 backdrop-blur-sm">
          <span className="text-indigo-300 text-xs font-bold uppercase tracking-widest">
            {lang === 'zh' ? '先进纳米技术领航者' : 'Pioneer in Advanced Nanotechnology'}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter leading-tight">
          {lang === 'zh' ? '铸就' : 'Forging'} <span className="text-indigo-400">{lang === 'zh' ? '材料未来' : 'Future Materials'}</span>
        </h1>
        <p className="text-xl md:text-3xl text-slate-300 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
          {lang === 'zh' ? '结合前沿纳米科学与复合材料工程，探索无限可能。' : 'Merging cutting-edge nanoscience with composite engineering to explore infinite possibilities.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
            {lang === 'zh' ? '了解研究方向' : 'Explore Research'}
          </button>
          <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold border border-white/20 transition-all active:scale-95">
            {lang === 'zh' ? '学术成果' : 'Our Publications'}
          </button>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-32 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-indigo-600/5 rounded-[2.5rem] blur-2xl group-hover:bg-indigo-600/10 transition-colors"></div>
          <img src={IMAGES.groupPhoto} alt="Group" className="relative w-full h-[500px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50">
             <p className="text-indigo-600 font-bold text-3xl">15+</p>
             <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">{lang === 'zh' ? '核心研究员' : 'Researchers'}</p>
          </div>
        </div>
        <div>
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">
            {lang === 'zh' ? '我们的使命' : 'Our Mission'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
            {lang === 'zh' ? '多学科融合驱动创新' : 'Interdisciplinary Innovation'}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
            {lang === 'zh' 
              ? `本研究所由${PI_NAME.zh}领导，致力于碳纳米材料、仿生复合材料及智能材料的前沿研究。我们坚信，材料的突破是所有工程创新的基石。`
              : `Led by ${PI_NAME.en}, our institute is dedicated to the forefront of carbon nanomaterials, biomimetic composites, and smart materials.`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lang === 'zh' ? (
              <>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100"><h4 className="font-bold mb-1">极端性能</h4><p className="text-sm text-slate-500">追求超高强度与导电性。</p></div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100"><h4 className="font-bold mb-1">智能感知</h4><p className="text-sm text-slate-500">赋予材料生命般的自修复能力。</p></div>
              </>
            ) : (
              <>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100"><h4 className="font-bold mb-1">Extreme Performance</h4><p className="text-sm text-slate-500">Pursuing ultra-high strength.</p></div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100"><h4 className="font-bold mb-1">Smart Sensing</h4><p className="text-sm text-slate-500">Giving materials self-healing life.</p></div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const ResearchSection: React.FC<SectionProps> = ({ lang }) => (
  <section className="py-32 container mx-auto px-6">
    <div className="max-w-3xl mb-24">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter text-slate-900">
        {lang === 'zh' ? '研究领域' : 'Research Areas'}
      </h2>
      <p className="text-xl text-slate-500 leading-relaxed font-light">
        {lang === 'zh' ? '我们从分子级别重新构筑材料，解决复杂工程挑战。' : 'We reconstruct materials from the molecular level to solve complex engineering challenges.'}
      </p>
    </div>
    <div className="grid grid-cols-1 gap-32">
      {RESEARCH_AREAS.map((area, idx) => (
        <div key={area.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
          <div className="flex-1 w-full">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img src={area.image} alt={area.title[lang]} className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <div className="w-16 h-1 bg-indigo-600"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{area.title[lang]}</h3>
            <p className="text-xl text-slate-700 leading-relaxed font-light">{area.shortDesc[lang]}</p>
            <p className="text-slate-500 leading-relaxed text-sm">{area.longDesc[lang]}</p>
            {area.keyTechnologies && (
              <div className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {area.keyTechnologies.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-xs font-bold border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const TeamSection: React.FC<SectionProps> = ({ lang }) => (
  <section className="py-32 container mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-32">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">{lang === 'zh' ? '团队成员' : 'Our Team'}</h2>
      <p className="text-xl text-slate-500 font-light">
        {lang === 'zh' ? '汇聚卓越才华，共同塑造材料科学的未来。' : 'Bringing together exceptional talent to shape the future of material science.'}
      </p>
    </div>

    {/* PI Section */}
    {TEAM_MEMBERS.filter(m => m.role === 'PI').map(pi => (
      <div key={pi.id} className="mb-40 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col lg:flex-row gap-16 items-center shadow-3xl">
        <div className="w-80 h-80 flex-shrink-0 rounded-[2rem] overflow-hidden border-8 border-white/5">
          <img src={pi.image} alt={pi.name[lang]} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{pi.name[lang]}</h3>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl leading-relaxed font-light">{pi.bio[lang]}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {pi.education && (
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase mb-4">{lang === 'zh' ? '教育背景' : 'Education'}</h4>
                <ul className="text-sm text-slate-300 space-y-2">
                  {pi.education.map((edu, i) => <li key={i}>• {edu[lang]}</li>)}
                </ul>
              </div>
            )}
            <div>
               <h4 className="text-xs font-bold text-slate-500 uppercase mb-4">{lang === 'zh' ? '研究兴趣' : 'Focus'}</h4>
               <div className="flex flex-wrap gap-2">
                 {pi.researchInterests.map(interest => (
                   <span key={interest[lang]} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-indigo-300 font-bold border border-white/10">{interest[lang]}</span>
                 ))}
               </div>
            </div>
          </div>
          <div className="flex gap-8 pt-10 border-t border-white/10 mt-10">
            <a href={`mailto:${pi.email}`} className="text-indigo-400 font-bold">Email</a>
            {pi.socials?.website && <a href={pi.socials.website} className="text-slate-400 font-bold">Faculty Page</a>}
          </div>
        </div>
      </div>
    ))}

    {/* Members Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {TEAM_MEMBERS.filter(m => m.role !== 'PI').map(member => (
        <div key={member.id} className="group relative">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-lg">
            <img src={member.image || IMAGES.team.placeholder} alt={member.name[lang]} className="w-full h-full object-cover transition-all duration-700" />
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <p className="text-white text-xs font-light">{member.bio[lang]}</p>
            </div>
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name[lang]}</h4>
          <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export const PublicationSection: React.FC<SectionProps> = ({ lang }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-32 container mx-auto px-6 max-w-6xl">
      <div className="mb-24">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">{lang === 'zh' ? '学术成果' : 'Publications'}</h2>
        <p className="text-xl text-slate-500 font-light">{lang === 'zh' ? '我们在顶级学术期刊上分享我们的发现。' : 'Sharing our discoveries in high-impact academic journals.'}</p>
      </div>

      <div className="space-y-8">
        {PUBLICATIONS.map(pub => (
          <div key={pub.id} className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
             <div className="flex flex-col md:flex-row gap-10">
                <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                   <span className="text-2xl font-black">{pub.year}</span>
                </div>
                <div className="flex-grow">
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">{pub.title}</h3>
                   <p className="text-slate-600 mb-6 text-lg">
                      {pub.authors.map((author, i) => (
                        <span key={i} className={author.includes(PI_NAME.en) || author.includes(PI_NAME.zh) ? "font-bold text-slate-900" : ""}>
                          {author}{i < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                   </p>
                   <div className="flex items-center gap-4 mb-8">
                      <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded uppercase tracking-widest">{pub.journal}</span>
                      <div className="flex gap-2">
                        {pub.tags.map(t => <span key={t} className="text-[10px] font-bold text-indigo-400 uppercase">{t}</span>)}
                      </div>
                   </div>

                   {pub.abstract && (
                     <div className="mb-8">
                       <button onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)} className="text-xs font-bold text-indigo-600">
                         {expandedId === pub.id ? (lang === 'zh' ? '隐藏摘要' : 'Hide Abstract') : (lang === 'zh' ? '查看摘要' : 'Read Abstract')}
                       </button>
                       {expandedId === pub.id && (
                         <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                           <p className="text-sm text-slate-500 italic leading-relaxed">{pub.abstract[lang]}</p>
                         </div>
                       )}
                     </div>
                   )}

                   <div className="flex gap-8 pt-6 border-t border-slate-50">
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" className="text-sm font-bold text-slate-900 hover:text-indigo-600">DOI</a>
                      {pub.pdfUrl && <button className="text-sm font-bold text-slate-500">PDF</button>}
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const JoinSection: React.FC<SectionProps> = ({ lang }) => (
  <section className="py-32 container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div>
        <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tighter">{lang === 'zh' ? '加入我们' : 'Join Us'}</h2>
        <p className="text-2xl text-slate-500 leading-relaxed mb-12 font-light">
          {lang === 'zh' ? '我们欢迎拥有材料学、物理学或化学背景的优秀学子加入。' : 'We welcome outstanding students with backgrounds in materials science, physics, or chemistry.'}
        </p>
        <div className="p-10 bg-indigo-900 rounded-[2.5rem] text-white">
           <h4 className="text-2xl font-bold mb-4 italic">"{lang === 'zh' ? '在纳米世界中，创新触手可及。' : 'In the nano world, innovation is within reach.'}"</h4>
           <p className="text-indigo-200 text-sm">— {PI_NAME[lang]}</p>
        </div>
      </div>

      <div className="space-y-8">
        {OPENINGS.map(opening => (
          <div key={opening.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-8">
              <span className="px-4 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full uppercase">{opening.type}</span>
              <span className="text-xs text-slate-400 font-bold uppercase">{lang === 'zh' ? '截止日期' : 'Deadline'}: {opening.deadline[lang]}</span>
            </div>
            <h4 className="text-3xl font-bold mb-6">{opening.title[lang]}</h4>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">{opening.description[lang]}</p>
            <div className="space-y-4 mb-10">
               {opening.requirements.map((req, i) => (
                 <div key={i} className="flex gap-3 text-slate-600 text-sm">
                    <span className="text-indigo-600 font-bold">•</span>
                    {req[lang]}
                 </div>
               ))}
            </div>
            <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl">
               {lang === 'zh' ? '立即申请' : 'Apply Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSection: React.FC<SectionProps> = ({ lang }) => (
  <section className="py-32 container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">{lang === 'zh' ? '联系我们' : 'Contact'}</h2>
        <p className="text-2xl text-slate-500 leading-relaxed mb-16 font-light">
          {lang === 'zh' ? '我们非常欢迎学术交流与工业合作。' : 'We welcome academic exchange and industrial collaboration.'}
        </p>
        <div className="space-y-12">
          <div className="flex gap-8">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 font-bold">A</div>
            <div>
               <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">{lang === 'zh' ? '研究所地址' : 'Address'}</h4>
               <p className="text-xl font-bold text-slate-900">{lang === 'zh' ? '天津大学北洋园校区材料科学与工程学院' : 'School of Materials Science, TJU'}</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 font-bold">E</div>
            <div>
               <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">{lang === 'zh' ? '通用邮箱' : 'Email'}</h4>
               <p className="text-xl font-bold text-slate-900 font-mono">isl-lab@tju.edu.cn</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl border border-slate-50">
          <h3 className="text-3xl font-bold mb-10">{lang === 'zh' ? '在线留言' : 'Leave a Message'}</h3>
          <form className="space-y-6">
             <input type="text" className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-600" placeholder={lang === 'zh' ? '姓名' : 'Your Name'} />
             <input type="email" className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-600" placeholder={lang === 'zh' ? '电子邮箱' : 'Email'} />
             <textarea rows={4} className="w-full p-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-600" placeholder={lang === 'zh' ? '留言内容' : 'Message'}></textarea>
             <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl">
               {lang === 'zh' ? '发送' : 'Send'}
             </button>
          </form>
      </div>
    </div>
  </section>
);

export const AIAssistant: React.FC<SectionProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setLoading(true);

    const response = await askResearchAssistant(userMsg, lang);
    setMessages(prev => [...prev, {role: 'bot', text: response}]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[350px] md:w-[450px] h-[600px] shadow-3xl rounded-[2.5rem] overflow-hidden flex flex-col border border-slate-100">
          <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center font-bold text-xl">✨</div>
              <div>
                <p className="font-bold text-base">{lang === 'zh' ? '学术AI助理' : 'Research AI'}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">{lang === 'zh' ? '在线' : 'Online'}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
          </div>
          <div className="flex-grow p-8 overflow-y-auto space-y-6 bg-slate-50/50">
            <div className="bg-white p-5 rounded-3xl rounded-tl-none text-sm text-slate-700 shadow-sm border border-slate-100">
              {lang === 'zh' ? '你好！我是天津大学纳米及复合材料研究所的AI助理。我可以帮你查找论文、了解导师或招聘信息。' : 'Hello! I am the AI assistant of the Institute of Nanomaterials, TJU. I can help you find papers or team info.'}
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-sm ${m.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-100 text-slate-700'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-slate-400 animate-pulse">{lang === 'zh' ? '思考中...' : 'Thinking...'}</div>}
          </div>
          <div className="p-6 border-t bg-white flex gap-4 items-center">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder={lang === 'zh' ? '请输入问题...' : 'Ask anything...'} className="flex-grow p-4 bg-slate-100 rounded-2xl text-sm focus:outline-none" />
            <button onClick={handleSend} className="bg-slate-900 text-white p-4 rounded-2xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth={2} /></svg></button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-20 h-20 bg-slate-900 rounded-[2rem] shadow-3xl flex items-center justify-center text-white hover:bg-indigo-600 transition-all group">
           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
           <div className="absolute right-full mr-6 bg-slate-900 text-white text-[10px] font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">{lang === 'zh' ? '学术咨询' : 'AI Assistant'}</div>
        </button>
      )}
    </div>
  );
};
