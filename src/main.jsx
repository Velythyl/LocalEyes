import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, ArrowLeftRight, Check, MapPin, GraduationCap, ShieldCheck, House, Sprout, Menu, X, CheckCheck, MessageCircle, Video, Footprints, ClipboardCheck, Globe2, ChevronDown, UserRound, Compass } from 'lucide-react';
import './styles.css';

function Brand({small=false}) {
  return <a className={`brand ${small ? 'brand-small' : ''}`} href="#home" aria-label="LocalEyes home"><span className="brand-mark"><MapPin aria-hidden="true"/><GraduationCap aria-hidden="true"/></span><span>Local<span className="brand-blue">Eyes</span></span></a>;
}
const benefits = [
  {icon: Sprout, title:'Less stress. More possibility.', text:'A familiar face in an unfamiliar city. Get a local perspective before you make the leap.'},
  {icon: ShieldCheck, title:'Look beyond the listing.', text:'An independent visit can help you spot discrepancies and ask better questions before signing.'},
  {icon: House, title:'Find a place that feels right.', text:'From the daily commute to the feel of the neighbourhood, discover what photos leave out.'}
];
const steps = [
  {number:'01', icon:MapPin, title:'Share where you’re headed', text:'Bring the listings you’re considering and the questions that matter to you.'},
  {number:'02', icon:Video, title:'See it through local eyes', text:'A local ambassador visits the apartment, follows a consistent checklist, and shares a closer look.'},
  {number:'03', icon:ClipboardCheck, title:'Make a more informed move', text:'Compare observations, photos, and neighbourhood insights before deciding where to live.'}
];
const faqs = [
  ['What is LocalEyes?', 'LocalEyes is a service in development that aims to connect international students with vetted local students for apartment visits and practical neighbourhood guidance before they arrive.'],
  ['Can I book an ambassador today?', 'Not yet. LocalEyes is in development. This page introduces the planned experience; bookings, matching, and payments are not currently available.'],
  ['What would an apartment visit include?', 'The planned visit includes a consistent checklist, photos and video, and observations about the apartment and its surroundings. A live video conversation would let you ask your own questions. Exact services will be confirmed before launch.'],
  ['Does a visit guarantee a listing is safe?', 'No. A local visit can add useful context and help identify discrepancies, but it cannot guarantee a landlord’s legitimacy, the safety of a neighbourhood, or the condition of a property. You remain responsible for your rental decision.'],
  ['Can local students get involved?', 'Local student ambassadors are central to the concept. Details about recruitment, vetting, availability, and compensation will be shared as the service develops.']
];
function Phone() {
 const [tab,setTab] = useState('neighbourhood');
 return <div className="hero-art" aria-label="Illustration of the planned LocalEyes experience">
   <div className="art-blob"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
   <div className="floating-note note-top"><span className="note-icon"><ShieldCheck size={21}/></span><div>A little local knowledge.<strong>A lot more confidence.</strong></div></div>
   <div className="phone"><div className="phone-island"/><div className="phone-top"><span>9:41</span><span className="phone-signal">••• ▰</span></div><Brand small/>
    <div className="phone-heading">A local perspective.<br/><strong>A personal connection.</strong></div>
    <div className="match"><div><div className="avatar avatar-one"><UserRound/></div><b>You</b><span>Moving abroad</span></div><ArrowLeftRight className="match-arrows"/><div><div className="avatar avatar-two"><GraduationCap/></div><b>Your local</b><span>Already at home</span></div></div>
    <div className="phone-tabs" aria-label="Example conversation topics"><button className={tab==='neighbourhood'?'selected':''} onClick={()=>setTab('neighbourhood')}>Neighbourhood</button><button className={tab==='apartment'?'selected':''} onClick={()=>setTab('apartment')}>Apartment</button></div>
    <div className="conversation" aria-live="polite"><div className="bubble question">{tab==='neighbourhood'?'What’s the commute to campus like?':'Could you check the apartment’s natural light?'}</div><div className="bubble answer">{tab==='neighbourhood'?'I can walk the route and show you the nearby transit stops.':'Of course! I can show you the windows on a video call.'}<CheckCheck size={13}/></div></div>
    <div className="phone-report"><span><ClipboardCheck size={17}/></span><div>A clearer picture<strong>One question at a time</strong></div><Check size={15}/></div>
    <p className="example-label">Illustrative experience · In development</p><div className="phone-home"/>
   </div>
   <div className="floating-note note-bottom"><span className="note-icon"><MapPin size={22}/></span><div>Before you arrive.<strong>Someone’s already there.</strong></div><span className="green-dot"/></div>
   <div className="spark spark-one">✳</div><div className="spark spark-two">+</div>
 </div>;
}
function Planner() {
 const [selected,setSelected]=useState([]);
 const choices=[{id:'apartment',icon:House,label:'The apartment itself',detail:'Ask for a walkthrough of the rooms, windows, furnishings, and any visible damage.'},{id:'commute',icon:Footprints,label:'My everyday commute',detail:'Ask your local to walk the route to transit and check the journey to campus.'},{id:'area',icon:Compass,label:'The neighbourhood',detail:'Ask about nearby groceries, everyday amenities, and observations at different times of day.'}];
 return <section className="planner section" id="your-move"><div className="planner-copy"><span className="eyebrow">YOUR MOVE, YOUR QUESTIONS</span><h2>What would you want<br/>a local to check?</h2><p>Every move is different. Start with what matters most to you.</p><span className="planner-hint"><Check size={15}/> No signup needed. Your choices stay on this page.</span></div><div className="planner-options"><div className="choice-list">{choices.map(({id,icon:Icon,label})=><button key={id} aria-pressed={selected.includes(id)} className={`choice ${selected.includes(id)?'active':''}`} onClick={()=>setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id])}><Icon size={21}/><span>{label}</span><span className="choice-check">{selected.includes(id)&&<Check size={13}/>}</span></button>)}</div><div className="planner-result" aria-live="polite">{selected.length ? <><strong>Your questions to take with you</strong><ul>{choices.filter(c=>selected.includes(c.id)).map(c=><li key={c.id}>{c.detail}</li>)}</ul></> : <><MessageCircle size={20}/><p>Choose a topic above to build a few questions for your future local.</p></>}</div></div></section>;
}
function App() {
 const [menu,setMenu]=useState(false);
 return <><a className="skip-link" href="#main">Skip to content</a><header id="home" className="header wrap"><Brand/><button className="menu-toggle" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button><nav className={menu?'nav open':'nav'} aria-label="Main navigation"><a href="#why-localeyes" onClick={()=>setMenu(false)}>Why LocalEyes</a><a href="#how-it-works" onClick={()=>setMenu(false)}>How it works</a><a href="#questions" onClick={()=>setMenu(false)}>FAQs</a><a className="nav-cta" href="#your-move" onClick={()=>setMenu(false)}>Explore your move <ArrowUpRight size={16}/></a></nav></header>
 <main id="main"><section className="hero wrap"><div className="hero-copy"><span className="eyebrow hero-eyebrow"><span className="blue-dot"/> STUDENT LIVING, LOCALISED.</span><h1>Move abroad<br/>with <span className="underlined">confidence.<svg viewBox="0 0 450 18" preserveAspectRatio="none" aria-hidden="true"><path d="M5 13Q218-6 443 9"/></svg></span></h1><p className="hero-description">A new city. A new chapter.<br/>A local student in your corner.</p><p className="hero-detail">Meet LocalEyes — a student-to-student approach to apartment viewings, honest neighbourhood insights, and feeling at home before you arrive.</p><div className="hero-actions"><a className="button button-primary" href="#how-it-works">See how it works <ArrowRight size={18}/></a><a className="secondary-link" href="#your-move">Explore your move <ArrowUpRight size={17}/></a></div><div className="hero-footnote"><Globe2 size={16}/><span>Built around international students. <b>In development.</b></span></div></div><Phone/></section>
 <section className="benefits wrap" id="why-localeyes" aria-label="Why LocalEyes">{benefits.map(({icon:Icon,title,text})=><article className="benefit" key={title}><span className="benefit-icon"><Icon size={28} strokeWidth={1.6}/></span><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
 <section className="perspective wrap"><div className="perspective-symbol"><MessageCircle size={28}/></div><div><span className="eyebrow">MORE THAN A VIRTUAL TOUR</span><h2>A listing shows you a place.<br/><span>A local helps you picture life there.</span></h2></div><p>The light in your room. The walk to campus. The grocery store around the corner. Small details make a big difference when you’re starting somewhere new.</p></section>
 <section className="how section wrap" id="how-it-works"><div className="section-heading"><div><span className="eyebrow">FROM FAR AWAY TO FEELING AT HOME</span><h2>A little closer, in three steps.</h2></div><p>The experience we’re building puts a real human connection at the heart of your move.</p></div><div className="steps">{steps.map(({number,icon:Icon,title,text})=><article className="step" key={number}><div className="step-top"><span>{number}</span><Icon size={26} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
 <div className="wrap"><Planner/></div>
 <section className="faq section wrap" id="questions"><div><span className="eyebrow">A FEW THINGS TO KNOW</span><h2>Good questions.<br/>{' '}Clear answers.</h2><p>We’re building LocalEyes with a simple idea: moving somewhere new should feel a little less unknown.</p></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={19}/></summary><p>{a}</p></details>)}</div></section>
 <section className="closing wrap"><span className="closing-icon"><Globe2 size={30}/></span><h2>Your next chapter starts<br/>with a little local perspective.</h2><a href="#your-move" className="button button-primary">Start with your questions <ArrowRight size={18}/></a><p>LocalEyes is in development. Stay curious. Move confidently.</p></section>
 </main><footer className="footer wrap"><div><Brand small/><p>Student living, localised.</p></div><p>© {new Date().getFullYear()} LocalEyes</p><a href="#home">Back to top ↑</a></footer></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
