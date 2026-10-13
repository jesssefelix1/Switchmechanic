'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Car,
  Check,
  ChevronDown,
  CircleAlert,
  Globe2,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
} from 'lucide-react'

const whatsappUrl = 'https://wa.me/2349066600444'
const phoneUrl = 'tel:+2349066600444'

const steps = [
  { number: '01', icon: MessageCircle, title: "Tell Us What's Wrong", text: 'Message Autoaly on WhatsApp and describe what happened to your vehicle.' },
  { number: '02', icon: CircleAlert, title: 'We Understand the Situation', text: "Autoaly's AI helps identify the assistance you may need and gathers the right details." },
  { number: '03', icon: Wrench, title: 'We Find a Mechanic', text: 'We connect you with an available mechanic who can assist with your vehicle.' },
  { number: '04', icon: Car, title: 'Get Back on the Road', text: 'Once connected, your mechanic helps with the breakdown, inspection, or repair.' },
]

const situations = [
  { icon: Car, title: 'Breakdown', text: 'Your vehicle suddenly stops working.' },
  { icon: Wrench, title: 'Mechanical Problems', text: 'Unusual sounds, warning lights, overheating, or starting problems.' },
  { icon: Globe2, title: 'Stranded', text: 'You need a mechanic near your current location.' },
  { icon: CircleAlert, title: 'Emergency', text: 'You need urgent roadside automotive assistance.' },
  { icon: ShieldCheck, title: 'Maintenance', text: 'You need help finding someone to inspect or service your vehicle.' },
]

function Logo() {
  return <div className="brand"><span>Switch</span> <strong>Mechanic</strong><small>by Switch Industries</small></div>
}

function ActionButtons({ compact = false }: { compact?: boolean }) {
  return <div className={`actions ${compact ? 'compact' : ''}`}>
    <a className="button whatsapp" href={whatsappUrl}><MessageCircle size={19} /> Get Help on WhatsApp</a>
    <a className="button phone" href={phoneUrl}><Phone size={18} /> Call Autoaly</a>
  </div>
}

export default function Page() {
  const [open, setOpen] = useState(false)
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" aria-label="Switch Mechanic home"><Logo /></a>
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <nav id="primary-navigation" className={open ? 'nav open' : 'nav'}>
            <a href="#home" onClick={() => setOpen(false)}>Home</a><a href="/how-it-works" onClick={() => setOpen(false)}>How It Works</a><a href="/for-drivers" onClick={() => setOpen(false)}>For Drivers</a><a href="/for-mechanics" onClick={() => setOpen(false)}>For Mechanics</a><a href="/about" onClick={() => setOpen(false)}>About Autoaly</a><a href="/contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>
          <a className="help-link" href={whatsappUrl}><MessageCircle size={17} /> Get Help</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="status-pill"><span /> Automotive emergency assistance, available now</div>
            <h1>Your car breaks down.<br /><em>We find you help.</em></h1>
            <p>Fast, reliable automotive assistance wherever you are. Message Autoaly on WhatsApp or call a real person when you need support.</p>
            <ActionButtons />
            <span className="availability"><Check size={15} /> Available for roadside emergencies and automotive assistance.</span>
            <div className="hero-proof" aria-label="Autoaly service benefits"><div><strong>24/7</strong><span>Assistance</span></div><div><strong>WhatsApp</strong><span>First response</span></div><div><strong>Local</strong><span>Mechanic network</span></div></div>
          </div>
          <div className="hero-visual" aria-label="Autoaly assistance preview">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="hero-card hero-card-main"><div className="hero-card-top"><div className="hero-avatar">A</div><div><strong>Autoaly support</strong><span>Online now</span></div><span className="hero-online" /></div><div className="hero-message hero-message-in">Hi. Tell us what happened and we&apos;ll help you find the right mechanic.</div><div className="hero-message hero-message-out">My car stopped on the highway.</div><div className="hero-location"><Globe2 size={17} /><span>Location shared</span><Check size={15} /></div></div>
            <div className="hero-card hero-card-float"><Check size={17} /><div><strong>Help is on the way</strong><span>Mechanic match found nearby</span></div></div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section process-section">
        <div className="container">
          <div className="eyebrow">HOW IT WORKS</div><h2>A simple process built to get you help fast.</h2><p className="section-lead">From your first message to getting back on the road, Autoaly makes it simple.</p>
          <div className="steps-grid">{steps.map(({ number, icon: Icon, title, text }) => <article className="step-card" key={number}><div className="step-top"><div className="icon-box"><Icon /></div><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="drivers" className="section whatsapp-section"><div className="container split"><div className="copy"><div className="eyebrow">WHATSAPP ASSISTANCE</div><h2>Help is already in your WhatsApp.</h2><p>When your vehicle breaks down, you shouldn&apos;t have to download an app, create an account, or search through the internet for a mechanic.</p><p>Simply message Autoaly on WhatsApp. Tell us what happened, share your location, and let Autoaly help connect you with the right mechanic.</p><a className="button whatsapp" href={whatsappUrl}><MessageCircle size={19} /> Message Autoaly on WhatsApp <ArrowRight size={18} /></a></div><div className="phone-mockup"><div className="phone-head"><div className="avatar">A</div><div><strong>Autoaly</strong><small>online</small></div><span>12:30 PM</span></div><div className="chat-body"><div className="bubble outgoing">My car just stopped on the road. I&apos;m in Abuja and it&apos;s not starting.</div><div className="bubble incoming">Don&apos;t worry. Let&apos;s get you some help. What car are you driving?</div><div className="bubble outgoing short">2015 Toyota Camry.</div><div className="bubble incoming">Got it. Please share your location so I can help find a mechanic near you.</div></div><div className="chat-input">Message <MessageCircle size={20} /></div></div></div></section>

      <section className="section internet-section"><div className="container split align-center"><div><div className="status-pill light"><Globe2 size={16} /> No network? Covered</div><h2>No Internet? Call Us.</h2><p>Sometimes you won&apos;t have reliable mobile data, especially when you&apos;re stranded somewhere. That&apos;s why Autoaly also provides a <strong>customer representative phone line.</strong></p><p>If you cannot access WhatsApp or don&apos;t have a reliable internet connection, simply call Autoaly. Our representative can collect your vehicle details and location and help connect you with a mechanic.</p><a className="button navy" href={phoneUrl}><Phone size={18} /> Call a Customer Representative</a><span className="fine-print">WhatsApp when you have data. Call when you don&apos;t.</span></div><div className="callout"><div className="call-icon"><Phone /></div><div><h3>A real person on the line</h3><p>Our customer representative talks you through the details, finds a mechanic near you, and arranges the connection.</p></div></div></div></section>

      <section id="about" className="section situations"><div className="container centered"><div className="eyebrow">FOR EVERY DRIVER</div><h2>Help for every situation</h2><p className="section-lead">Whatever your vehicle is going through, Autoaly is here to find the assistance you need.</p></div><div className="container situation-grid">{situations.map(({ icon: Icon, title, text }) => <article className="situation-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}<article className="situation-note"><Sparkles /><p>Autoaly focuses on <strong>automotive assistance only.</strong> For anything not related to your vehicle, please contact the appropriate emergency service.</p></article></div></section>

      <section id="mechanics" className="network"><div className="container split align-center"><div><div className="eyebrow">FOR MECHANICS</div><h2>A network built around drivers.</h2><p>Autoaly connects drivers with mechanics who can provide automotive assistance in their area.</p><p>Mechanics can become part of the Autoaly network and receive opportunities to assist drivers who need help.</p><a className="text-link" href="#contact">Join the network <ArrowRight size={17} /></a></div><div className="network-card"><Star /><h3>Ready to help drivers?</h3><p>Join a growing network of trusted automotive professionals.</p><a className="button whatsapp" href={whatsappUrl}>Become a mechanic</a></div></div></section>

      <footer id="contact" className="footer"><div className="container footer-grid"><div><Logo /><p>When your car lets you down, Switch Mechanic gets you help.</p></div><div><h4>COMPANY</h4><a href="/about">About Autoaly</a><a href="/for-mechanics">For Mechanics</a><a href="/how-it-works">How It Works</a><a href="/contact">Privacy Policy</a></div><div><h4>GET HELP</h4><a href={whatsappUrl}>Get Help on WhatsApp</a><a href={phoneUrl}>Call a Customer Rep</a><a href="/contact">No Internet Help</a></div></div><div className="container footer-bottom"><span>© 2025 Switch Industries. All rights reserved.</span><span>Built for the moments that matter.</span></div></footer>
      <a className="floating-chat" href={whatsappUrl} aria-label="Open WhatsApp help"><MessageCircle /><span /></a>
    </main>
  )
}
