import { MarketingPage } from '@/components/marketing-page'

export default function ForDriversPage() {
  return <MarketingPage eyebrow="FOR DRIVERS" title="Help is closer than you think." intro="When your vehicle breaks down, Autoaly helps you move from stuck to supported without downloading another app or searching for a mechanic yourself." cards={[{ title: 'Message us on WhatsApp', text: 'Tell us what happened, share your location, and answer a few simple questions about your vehicle.' }, { title: 'Get the right assistance', text: 'Our support flow understands your situation and helps identify the kind of automotive assistance you need.', icon: 'shield' }, { title: 'Get back on the road', text: 'We connect you with an available mechanic who can help with your breakdown, inspection, or repair.', icon: 'wrench' }]} />
}

export const metadata = { title: 'For Drivers | Switch Mechanic', description: 'Get automotive assistance through Autoaly WhatsApp support.' }
