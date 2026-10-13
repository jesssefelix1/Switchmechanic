import Link from 'next/link'
import { ArrowRight, Check, MessageCircle, Phone, ShieldCheck, Wrench } from 'lucide-react'

const whatsappUrl = 'https://wa.me/2349066600444'
const phoneUrl = 'tel:+2349066600444'

export function MarketingPage({ eyebrow, title, intro, cards, cta = 'Get Help on WhatsApp' }: { eyebrow: string; title: string; intro: string; cards: { title: string; text: string; icon?: 'check' | 'wrench' | 'shield' }[]; cta?: string }) {
  return <main>
    <header className="site-header"><div className="container nav-wrap"><Link href="/" aria-label="Switch Mechanic home"><div className="brand"><span>Switch</span> <strong>Mechanic</strong><small>by Switch Industries</small></div></Link><nav className="nav subpage-nav"><Link href="/how-it-works">How It Works</Link><Link href="/for-drivers">For Drivers</Link><Link href="/for-mechanics">For Mechanics</Link><Link href="/about">About Autoaly</Link><Link href="/contact">Contact</Link></nav><a className="help-link" href={whatsappUrl}><MessageCircle size={17} /> Get Help</a></div></header>
    <section className="subpage-hero"><div className="container"><div className="status-pill"><span /> Automotive assistance, made simple</div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{intro}</p><div className="actions"><a className="button whatsapp" href={whatsappUrl}><MessageCircle size={19} /> {cta}</a><a className="button phone" href={phoneUrl}><Phone size={18} /> Call Autoaly</a></div></div></section>
    <section className="section subpage-content"><div className="container subpage-grid">{cards.map((card) => { const Icon = card.icon === 'wrench' ? Wrench : card.icon === 'shield' ? ShieldCheck : Check; return <article className="situation-card" key={card.title}><Icon /><h3>{card.title}</h3><p>{card.text}</p><Link className="text-link dark-link" href="/contact">Learn more <ArrowRight size={17} /></Link></article> })}</div></section>
    <footer className="footer"><div className="container footer-grid"><div><Link href="/" className="brand"><span>Switch</span> <strong>Mechanic</strong><small>by Switch Industries</small></Link><p>When your car lets you down, Switch Mechanic gets you help.</p></div><div><h4>EXPLORE</h4><Link href="/about">About Autoaly</Link><Link href="/how-it-works">How It Works</Link><Link href="/for-mechanics">For Mechanics</Link></div><div><h4>GET HELP</h4><a href={whatsappUrl}>Get Help on WhatsApp</a><a href={phoneUrl}>Call a Customer Rep</a></div></div><div className="container footer-bottom"><span>© 2025 Switch Industries. All rights reserved.</span><span>Built for the moments that matter.</span></div></footer>
  </main>
}

export { whatsappUrl, phoneUrl }
