import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, ArrowLeftRight, Check, MapPin, GraduationCap, ShieldCheck, House, Sprout, Menu, X, CheckCheck, MessageCircle, Video, Footprints, ClipboardCheck, Globe2, ChevronDown, UserRound, Compass } from 'lucide-react';
import './styles.css';
import V1 from './V1';

function Brand({small=false}) {
  return <a className={`brand ${small ? 'brand-small' : ''}`} href="#home" aria-label="LocalEyes home"><span className="brand-mark"><MapPin aria-hidden="true"/><GraduationCap aria-hidden="true"/></span><span>Local<span className="brand-blue">Eyes</span></span></a>;
}
const benefits = [
  {icon: ShieldCheck, title:'Help spot rental scams.', text:'Have a vetted local ambassador physically check the apartment and flag differences from the listing before you commit.'},
  {icon: Video, title:'Be there, from anywhere.', text:'Join your ambassador on a live video call. See the rooms, ask questions, and look beyond carefully chosen photos.'},
  {icon: MapPin, title:'Check the street, too.', text:'Get trusted local insight into the street, nearby transit, and everyday amenities before relocating abroad.'}
];
const steps = [
  {number:'01', icon:MapPin, title:'Share where you’re headed', text:'Share your apartment listing and priorities. The planned service connects you with a vetted ambassador who knows the area.'},
  {number:'02', icon:Video, title:'Join a live apartment visit', text:'Your ambassador physically visits the apartment while you join by video. They follow a standardized inspection checklist and show you the street.'},
  {number:'03', icon:ClipboardCheck, title:'Make a more informed move', text:'Review the checklist, listing discrepancies, and neighbourhood observations. Make your rental decision with a clearer view of the place.'}
];
const faqs = [
  ['What is LocalEyes?', 'LocalEyes is a service in development that aims to connect international students with vetted local students for live apartment verification, physical visits, and practical neighbourhood guidance before they arrive.'],
  ['Can I book an ambassador today?', 'Not yet. LocalEyes is in development. This page introduces the planned experience; bookings, matching, and payments are not currently available.'],
  ['What would an apartment visit include?', 'The planned visit includes a standardized apartment inspection checklist, photos and video, and observations about the apartment and its surroundings. A live video conversation would let you ask your own questions. Exact services will be confirmed before launch.'],
  ['Does a visit guarantee a listing is safe?', 'No. A local visit can add useful context and help identify discrepancies, but it cannot guarantee a landlord’s legitimacy, the safety of a neighbourhood, or the condition of a property. You remain responsible for your rental decision.'],
  ['Can local students get involved?', 'Local student ambassadors are central to the concept. Details about recruitment, vetting, availability, and compensation will be shared as the service develops.']
];
function Phone() {
 const [tab,setTab] = useState('apartment');
 return <div className="hero-art viewing-art" aria-label="Illustration: a vetted ambassador physically visits an apartment, video calls a student abroad, and uses an inspection checklist">
  <div className="art-blob"/><div className="orbit orbit-one"/>
  <div className="viewing-window">
   <div className="viewing-bar"><span><Video size={17}/> Live apartment viewing</span><span className="demo-badge">Illustration</span></div>
   <svg className="apartment-scene" viewBox="0 0 440 275" role="img" aria-labelledby="scene-title"><title id="scene-title">A local ambassador inside an apartment holds a phone for a live walkthrough and an inspection clipboard</title>
    <path fill="#edf5ff" d="M0 0h440v275H0z"/><path fill="#d7e7f8" d="M0 220h440v55H0z"/><path d="M0 220h440M290 0v220" fill="none" stroke="#bacfe7" strokeWidth="2"/>
    <rect x="28" y="28" width="138" height="133" rx="4" fill="#fff" stroke="#a9c6e8" strokeWidth="4"/><path fill="#d9edff" d="M34 34h126v121H34z"/><path d="M98 30v129M30 93h134" stroke="#fff" strokeWidth="6"/><path d="m40 146 30-28 30 15 38-38 16 10v45H40" fill="#afd5d1"/>
    <rect x="21" y="188" width="147" height="46" rx="9" fill="#a5bfdf"/><rect x="30" y="168" width="126" height="43" rx="10" fill="#b9cee8"/><path d="M37 234v10m113-10v10" stroke="#6c8bad" strokeWidth="5"/>
    <rect x="330" y="29" width="83" height="180" rx="3" fill="#c1d6ef"/><rect x="337" y="36" width="69" height="173" fill="#e3eefb"/><circle cx="395" cy="121" r="3" fill="#4b709a"/>
    <path d="M309 220v-52" stroke="#6a9c90" strokeWidth="5"/><path d="M309 188q-35-38-30-50 32 4 30 50m0-4q34-42 35-58-31 6-35 58" fill="#7eafa1"/><path fill="#9ab8cd" d="m289 208 7 34h28l7-34z"/>
    <path d="m216 191-8 67m32-67 11 67" stroke="#234b76" strokeWidth="17" strokeLinecap="round"/><path d="m203 260-12 4m61-4 12 4" stroke="#153458" strokeWidth="9" strokeLinecap="round"/>
    <path d="M208 110q17-10 34 0l13 82h-56z" fill="#0969f3"/><path d="m211 122-29 32-19-40m75 10 31 29" fill="none" stroke="#0969f3" strokeWidth="17" strokeLinecap="round"/>
    <path d="m163 114-4-12m109 51 11 4" stroke="#c78e6b" strokeWidth="12" strokeLinecap="round"/>
    <rect x="146" y="73" width="22" height="36" rx="5" fill="#14365e" transform="rotate(-12 157 91)"/><rect x="151" y="79" width="12" height="22" rx="2" fill="#cde7ff"/>
    <rect x="216" y="91" width="16" height="22" rx="7" fill="#c78e6b"/><ellipse cx="225" cy="75" rx="22" ry="27" fill="#d7a17f"/><path d="M203 76q-9-44 24-34 27-1 21 38l-9-25q-24 12-36 5z" fill="#29405d"/>
    <rect x="267" y="143" width="42" height="57" rx="4" fill="#fff" stroke="#6c8bad" strokeWidth="2" transform="rotate(10 288 171)"/><rect x="279" y="139" width="17" height="9" rx="3" fill="#234b76"/><path d="m275 159 3 3 5-6m-7 16 3 3 5-6m-7 16 3 3 5-6" fill="none" stroke="#239475" strokeWidth="2"/><path d="m287 159 15 3m-14 10 12 3m-14 10 12 3" stroke="#bacfe7" strokeWidth="2"/>
    <rect x="214" y="119" width="22" height="26" rx="4" fill="#fff"/><path d="m220 132 4 4 7-9" stroke="#0969f3" strokeWidth="3" fill="none"/>
   </svg>
   <div className="student-video"><div className="student-face"><UserRound size={34}/></div><span>You · joining from abroad</span><Video size={16}/></div>
   <div className="ambassador-caption"><ShieldCheck size={17}/><span>Vetted local ambassador <strong>On site, inside the apartment</strong></span></div>
  </div>
  <div className="visit-checklist"><div className="checklist-heading"><ClipboardCheck size={20}/><strong>Standardized visit checklist</strong></div><div className="phone-tabs"><button className={tab==='apartment'?'selected':''} onClick={()=>setTab('apartment')}>Apartment</button><button className={tab==='street'?'selected':''} onClick={()=>setTab('street')}>Street & area</button></div><ul aria-live="polite">{(tab==='apartment'?['Compare rooms with the listing','Show windows & visible damage','Check furnishings & water flow']:['Show the street & building entrance','Observe noise & surroundings','Check nearby transit & groceries']).map(item=><li key={item}><Check size={15}/>{item}</li>)}</ul></div>
  <p className="viewing-disclaimer">Illustrative planned experience · Service in development</p>
 </div>;
}
const quotes = [
 "If someone could actually go see the apartment and tell me what the pictures don't show, I'd definitely consider using it.",
 "Having a local physically visit the apartment and check the street would make me feel much more confident renting from abroad.",
 "Having a live video call that both of us can join at the same time makes it much easier to choose a place.",
 "I would've used this before moving here, especially to check the area around my apartment.",
 "If the person would be qualified and give me a real opinion, I would have totally tried the service."
];
function Quote({index}) {return <figure className="quote-card"><MessageCircle size={22} aria-hidden="true"/><blockquote>“{quotes[index]}”</blockquote><figcaption>Student interview participant · Anonymous</figcaption></figure>;}
function Planner() {
 const [selected,setSelected]=useState([]);
 const [interested,setInterested]=useState(false);
 const choices=[{id:'apartment',icon:House,label:'The apartment itself',detail:'Ask for a walkthrough of the rooms, windows, furnishings, and any visible damage.'},{id:'commute',icon:Footprints,label:'My everyday commute',detail:'Ask your local to walk the route to transit and check the journey to campus.'},{id:'area',icon:Compass,label:'The neighbourhood',detail:'Ask about nearby groceries, everyday amenities, and observations at different times of day.'}];
 return <section className="planner section" id="your-move"><div className="planner-copy"><span className="eyebrow">YOUR MOVE, YOUR QUESTIONS</span><h2>What would you want<br/>a local to check?</h2><p>Every move is different. Start with what matters most to you.</p><span className="planner-hint"><Check size={15}/> No signup needed. Your choices stay on this page.</span></div><div className="planner-options"><div className="choice-list">{choices.map(({id,icon:Icon,label})=><button key={id} aria-pressed={selected.includes(id)} className={`choice ${selected.includes(id)?'active':''}`} onClick={()=>setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id])}><Icon size={21}/><span>{label}</span><span className="choice-check">{selected.includes(id)&&<Check size={13}/>}</span></button>)}</div><div className="planner-result" aria-live="polite">{selected.length ? <><strong>Your questions to take with you</strong><ul>{choices.filter(c=>selected.includes(c.id)).map(c=><li key={c.id}>{c.detail}</li>)}</ul></> : <><MessageCircle size={20}/><p>Choose a topic above to build a few questions for your apartment visit.</p></>}</div><div className="interest-action"><button className="button button-primary" onClick={()=>setInterested(true)}>I’d use a live apartment visit</button>{interested&&<p role="status">Thanks for exploring LocalEyes. This is a prototype: your interest is shown on this page only and is not submitted or saved. Bookings are not open yet.</p>}</div></div></section>;
}
function App() {
 const [menu,setMenu]=useState(false);
 return <><a className="skip-link" href="#main">Skip to content</a><header id="home" className="header wrap"><Brand/><button className="menu-toggle" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button><nav className={menu?'nav open':'nav'} aria-label="Main navigation"><a href="#why-localeyes" onClick={()=>setMenu(false)}>Why LocalEyes</a><a href="#how-it-works" onClick={()=>setMenu(false)}>How it works</a><a href="#questions" onClick={()=>setMenu(false)}>FAQs</a><a className="nav-cta" href="#your-move" onClick={()=>setMenu(false)}>Plan your apartment check <ArrowUpRight size={16}/></a></nav></header>
 <main id="main"><section className="hero wrap"><div className="hero-copy"><span className="eyebrow hero-eyebrow"><span className="blue-dot"/> YOUR EYES ON THE GROUND, ABROAD.</span><h1>Verify your apartment.<br/>Move with <span className="underlined">confidence.<svg viewBox="0 0 450 18" preserveAspectRatio="none" aria-hidden="true"><path d="M5 13Q218-6 443 9"/></svg></span></h1><p className="hero-description">A real apartment visit.<br/>A live video call. A vetted local ambassador.</p><p className="hero-detail">Renting from abroad? LocalEyes is building live apartment verification for international and exchange students. A vetted local ambassador visits in person, follows a standardized inspection checklist, and shows you what listing photos leave out.</p><div className="hero-actions"><a className="button button-primary" href="#how-it-works">See how it works <ArrowRight size={18}/></a><a className="secondary-link" href="#your-move">Plan your apartment check <ArrowUpRight size={17}/></a></div><div className="hero-footnote"><Globe2 size={16}/><span>Built around international students. <b>In development.</b></span></div></div><Phone/></section>
 <section className="benefits wrap" id="why-localeyes" aria-label="Why LocalEyes">{benefits.map(({icon:Icon,title,text})=><article className="benefit" key={title}><span className="benefit-icon"><Icon size={28} strokeWidth={1.6}/></span><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
 <section className="perspective wrap"><div className="perspective-symbol"><MessageCircle size={28}/></div><div><span className="eyebrow">KNOW WHAT YOU’RE RENTING</span><h2>Photos tell part of the story.<br/><span>LocalEyes checks what’s really there.</span></h2></div><p>Reduce the risk of rental scams and misleading listings with a physical visit, a live walkthrough, and local observations of the neighbourhood. More evidence before you send a deposit.</p></section>
 <div className="wrap inline-quote"><Quote index={0}/></div>
 <section className="how section wrap" id="how-it-works"><div className="section-heading"><div><span className="eyebrow">FROM A LISTING TO A LIVE WALKTHROUGH</span><h2>Your apartment check, in three steps.</h2></div><p>Trusted relocation support, powered by vetted local ambassadors who visit on your behalf.</p></div><div className="steps">{steps.map(({number,icon:Icon,title,text})=><article className="step" key={number}><div className="step-top"><span>{number}</span><Icon size={26} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
 <section className="testimonials wrap" id="student-insights"><span className="interview-label">Insights from interviews with international and exchange students.</span><h2>What Students Told Us</h2><p>What matters before renting abroad: someone on the ground, a live view, and an informed local opinion.</p><div className="quote-grid"><Quote index={1}/><Quote index={2}/></div></section>
 <div className="wrap"><Planner/></div>
 <div className="wrap quote-grid supporting-quotes"><Quote index={3}/><Quote index={4}/></div>
 <section className="faq section wrap" id="questions"><div><span className="eyebrow">A FEW THINGS TO KNOW</span><h2>Good questions.<br/>{' '}Clear answers.</h2><p>We’re building LocalEyes with a simple idea: you should be able to see and check an apartment before renting from abroad.</p></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={19}/></summary><p>{a}</p></details>)}</div></section>
 <section className="closing wrap"><span className="closing-icon"><Globe2 size={30}/></span><h2>Before you rent from abroad,<br/>put local eyes on the apartment.</h2><a href="#your-move" className="button button-primary">Plan my apartment check <ArrowRight size={18}/></a><p>LocalEyes is in development. Live visits. Local insight. Move confidently.</p></section>
 </main><footer className="footer wrap"><div><Brand small/><p>Live apartment verification. Local insight.</p></div><p>© {new Date().getFullYear()} LocalEyes</p><a href="#home">Back to top ↑</a></footer></>;
}

function VersionedSite() {
 const version = new URLSearchParams(window.location.search).get('version') === 'v1' ? 'v1' : 'v2';
 const [open,setOpen] = useState(false);
 const menuRef = useRef(null);
 useEffect(()=>{const close=e=>{if(e.key==='Escape'){setOpen(false);menuRef.current?.querySelector('button').focus();}};const outside=e=>{if(!menuRef.current?.contains(e.target))setOpen(false);};document.addEventListener('keydown',close);document.addEventListener('pointerdown',outside);return()=>{document.removeEventListener('keydown',close);document.removeEventListener('pointerdown',outside);};},[]);
 return <div className={version}><div className="version-switcher" ref={menuRef}><button className="version-toggle" aria-label="Choose site version" aria-expanded={open} aria-controls="version-links" onClick={()=>setOpen(!open)}>{open?<X size={19}/>:<Menu size={19}/>}<span>{version}</span></button>{open&&<nav id="version-links" className="version-links" aria-label="Site versions"><strong>LocalEyes versions</strong><a href="?version=v2" aria-current={version==='v2'?'page':undefined}>v2 · Live apartment visits</a><a href="?version=v1" aria-current={version==='v1'?'page':undefined}>v1 · Original landing page</a></nav>}</div>{version==='v1'?<V1/>:<App/>}</div>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><VersionedSite/></React.StrictMode>);
