
import React, { useState } from 'react';
import { NEWS, RESEARCH_AREAS, TEAM_MEMBERS, PUBLICATIONS, OPENINGS, PI_NAME, LAB_NAME } from '../constants';
import { askResearchAssistant } from '../geminiService';

export const HomeSection: React.FC = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2070" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        alt="Laboratory background"
      />
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Exploring the Frontiers of <span className="text-indigo-400">Intelligent Systems</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed">
          The {LAB_NAME} integrates symbolic reasoning with deep learning to solve tomorrow's challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all">
            Latest Research
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold border border-white/30 transition-all">
            Join Our Team
          </button>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-24 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-indigo-600 font-semibold uppercase tracking-widest text-sm">Overview</span>
          <h2 className="text-4xl font-bold mt-4 mb-6">Pioneering Interdisciplinary Research</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Established in 2018, our lab has grown into a vibrant hub for researchers interested in the fusion of artificial intelligence, robotics, and cognitive science. Under the direction of {PI_NAME}, we strive to create AI that is not just powerful, but explainable and safe.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-indigo-600">50+</div>
              <p className="text-slate-500 font-medium">Publications</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600">12</div>
              <p className="text-slate-500 font-medium">Ongoing Projects</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-2xl rotate-1 group transition-transform hover:rotate-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Group Photo" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    {/* News */}
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold">Latest Updates</h2>
            <p className="text-slate-500 mt-2">Catch up with our lab's activities</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEWS.map(item => (
            <div key={item.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-6 hover:shadow-md transition-all">
              <div className="flex-shrink-0 text-center">
                <div className="text-indigo-600 font-bold text-2xl">{item.date.split('-')[2]}</div>
                <div className="text-slate-400 text-xs uppercase tracking-tighter">{item.date.split('-')[1]} {item.date.split('-')[0]}</div>
              </div>
              <div>
                <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase mb-2 inline-block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const ResearchSection: React.FC = () => (
  <section className="py-32 container mx-auto px-6">
    <div className="max-w-3xl mb-16">
      <h2 className="text-5xl font-bold mb-6">Our Research</h2>
      <p className="text-xl text-slate-600 leading-relaxed">
        We bridge foundational theory with practical applications. Our core focus lies in the intersection of neural networks and classical logic.
      </p>
    </div>
    <div className="space-y-24">
      {RESEARCH_AREAS.map((area, idx) => (
        <div key={area.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video group">
              <img src={area.image} alt={area.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">{area.title}</h3>
            <p className="text-lg text-slate-700 leading-relaxed font-light">{area.shortDesc}</p>
            <p className="text-slate-600 leading-relaxed">{area.longDesc}</p>
            
            {area.keyTechnologies && (
              <div className="pt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Core Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {area.keyTechnologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-100">
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

export const TeamSection: React.FC = () => (
  <section className="py-32 container mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto mb-20">
      <h2 className="text-5xl font-bold mb-6">Meet the Team</h2>
      <p className="text-slate-600 text-lg font-light">
        A diverse group of researchers from across the globe, united by a passion for intelligence and discovery.
      </p>
    </div>

    {/* PI Section */}
    {TEAM_MEMBERS.filter(m => m.role === 'PI').map(pi => (
      <div key={pi.id} className="mb-24 p-12 bg-indigo-900 rounded-3xl text-white flex flex-col md:flex-row gap-12 items-center shadow-2xl shadow-indigo-200">
        <div className="w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-indigo-400/30">
          <img src={pi.image} alt={pi.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <h3 className="text-4xl font-bold">{pi.name}</h3>
            <span className="bg-indigo-700 px-4 py-1 rounded-full text-sm font-semibold border border-indigo-600">Principal Investigator</span>
          </div>
          <p className="text-indigo-100 text-lg mb-6 max-w-2xl">{pi.bio}</p>
          
          {pi.education && (
            <div className="mb-6">
              <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2">Education</h4>
              <ul className="text-sm text-indigo-100/80 space-y-1">
                {pi.education.map((edu, i) => <li key={i}>• {edu}</li>)}
              </ul>
            </div>
          )}

          <div className="flex gap-6">
            <a href={`mailto:${pi.email}`} className="text-white hover:text-indigo-300 font-medium transition-colors">Email</a>
            {pi.socials?.googleScholar && <a href={pi.socials.googleScholar} className="text-white hover:text-indigo-300 font-medium transition-colors">Scholar</a>}
            {pi.socials?.website && <a href={pi.socials.website} className="text-white hover:text-indigo-300 font-medium transition-colors">Website</a>}
          </div>
        </div>
      </div>
    ))}

    {/* Members Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {TEAM_MEMBERS.filter(m => m.role !== 'PI').map(member => (
        <div key={member.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <p className="text-white text-xs font-light italic leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
            <p className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
            
            {member.education && (
              <div className="mb-4">
                <ul className="text-[11px] text-slate-500 space-y-0.5">
                  {member.education.map((edu, i) => <li key={i} className="truncate">{edu}</li>)}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mb-6">
              {member.researchInterests.map(interest => (
                <span key={interest} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">{interest}</span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-50">
               <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-indigo-600">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               </a>
               {member.socials?.github && (
                 <a href={member.socials.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                 </a>
               )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const PublicationSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const years = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort((a, b) => b - a);

  return (
    <section className="py-32 container mx-auto px-6 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-5xl font-bold mb-4 text-slate-900">Publications</h2>
          <p className="text-slate-500">Selected peer-reviewed journals and conference proceedings</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['All', ...years.map(String)].map(y => (
            <button 
              key={y}
              onClick={() => setFilter(y)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${filter === y ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {PUBLICATIONS
          .filter(p => filter === 'All' || p.year.toString() === filter)
          .map(pub => (
          <div key={pub.id} className="group pb-12 border-b border-slate-100 last:border-0">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-16 h-16 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center font-bold shadow-sm">
                <span className="text-xs text-slate-400 leading-none mb-1">Year</span>
                <span className="text-lg text-indigo-600">{pub.year}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-tight">
                  {pub.title}
                </h3>
                <p className="text-slate-600 mb-3 text-lg">
                  {pub.authors.map((a, i) => (
                    <span key={i} className={a === PI_NAME ? 'font-bold text-slate-900 underline decoration-indigo-300' : ''}>
                      {a}{i < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <div className="flex items-center gap-3 mb-6">
                   <span className="text-sm font-medium text-slate-400 italic">{pub.journal}</span>
                   {pub.tags.map(tag => (
                     <span key={tag} className="text-[10px] text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase">{tag}</span>
                   ))}
                </div>

                {pub.abstract && (
                  <div className="mb-6">
                    <button 
                      onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                      className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:text-indigo-800 transition-colors mb-2"
                    >
                      {expandedId === pub.id ? 'Hide Abstract' : 'View Abstract'}
                      <svg className={`w-3 h-3 transition-transform ${expandedId === pub.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {expandedId === pub.id && (
                      <p className="text-sm text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                        {pub.abstract}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-6 text-sm">
                  <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 font-bold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
                    DOI Link
                  </a>
                  {pub.pdfUrl && <a href={pub.pdfUrl} className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    PDF
                  </a>}
                  {pub.codeUrl && <a href={pub.codeUrl} className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    Source Code
                  </a>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const JoinSection: React.FC = () => (
  <section className="py-32 container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-5xl font-bold mb-8 text-slate-900">Join our journey</h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
          We are always looking for curious, hardworking, and creative minds. Whether you are a prospective graduate student or an experienced postdoc, our lab provides a collaborative and high-impact environment to grow.
        </p>
        <div className="bg-indigo-50 border border-indigo-100 p-10 rounded-3xl mb-12 shadow-inner">
          <h4 className="font-bold text-indigo-900 text-xl mb-6">Why join {LAB_NAME}?</h4>
          <ul className="space-y-6">
            {[
              {t: 'Computing Power', d: 'Access to high-performance GPU clusters for large-scale training.'},
              {t: 'Global Network', d: 'Strong collaborations with MIT, Stanford, and leading tech companies.'},
              {t: 'Active Mentorship', d: 'Regular 1-on-1 meetings with Prof. Vance and senior researchers.'},
              {t: 'Rich Culture', d: 'Weekly lab lunches, regular hiking trips, and inclusive environment.'}
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="font-bold text-indigo-900 leading-none mb-1">{benefit.t}</p>
                  <p className="text-indigo-700/70 text-sm leading-relaxed">{benefit.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-8">
        <h3 className="text-2xl font-bold mb-6 text-slate-900">Current Openings</h3>
        {OPENINGS.map(opening => (
          <div key={opening.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:border-indigo-300 transition-all hover:shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{opening.type}</span>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Application Deadline</p>
                <p className="text-sm text-slate-600 font-bold">{opening.deadline}</p>
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">{opening.title}</h4>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed font-light">{opening.description}</p>
            <div className="mb-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Requirements</p>
              <ul className="text-sm text-slate-500 space-y-2">
                {opening.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 hover:shadow-indigo-200">
              Apply via Email
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSection: React.FC = () => (
  <section className="py-32 container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
          Interested in a collaboration or have questions about our research? Our doors are always open for academic exchange.
        </p>
        <div className="space-y-10">
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Office Location</h4>
              <p className="text-slate-500 leading-relaxed">Science Building, Room 402, 123 Research Ave</p>
              <p className="text-slate-500">Palo Alto, CA 94301, USA</p>
            </div>
          </div>
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Inquiries</h4>
              <p className="text-slate-500 font-mono text-lg">isl-lab@university.edu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[5rem] -mr-8 -mt-8"></div>
        <h3 className="text-3xl font-bold mb-8 relative z-10">Send us a message</h3>
        <form className="space-y-6 relative z-10">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
              <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all" placeholder="Dr. John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all" placeholder="john@university.edu" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
            <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all" placeholder="Research Collaboration" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message Content</label>
            <textarea rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all" placeholder="How can we help?"></textarea>
          </div>
          <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export const AIAssistant: React.FC = () => {
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

    const response = await askResearchAssistant(userMsg);
    setMessages(prev => [...prev, {role: 'bot', text: response}]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 h-[550px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden flex flex-col border border-slate-100 animate-in slide-in-from-bottom-8 duration-500 ease-out">
          <div className="bg-indigo-600 p-6 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-xl">✨</div>
              <div>
                <p className="font-bold text-sm tracking-tight">ISL AI Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-indigo-100 uppercase tracking-widest font-bold">Online</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50/50">
            <div className="bg-white shadow-sm border border-slate-100 text-slate-700 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed">
              Hi there! I'm the {LAB_NAME} AI agent. I know everything about our research members, latest papers, and open positions. <strong>What would you like to know?</strong>
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-1.5 p-2">
                <span className="w-2 h-2 bg-indigo-300 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
          </div>
          <div className="p-4 border-t bg-white flex gap-3 items-center">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-grow p-3 bg-slate-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 transition-all border border-transparent focus:border-indigo-100"
            />
            <button 
              onClick={handleSend} 
              disabled={!input.trim()}
              className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-100 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-indigo-600 rounded-[1.5rem] shadow-2xl shadow-indigo-300 flex items-center justify-center text-white hover:scale-110 transition-all active:scale-95 hover:rotate-3 relative group"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></div>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs py-2 px-4 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-bold">Ask AI Assistant</span>
        </button>
      )}
    </div>
  );
};
