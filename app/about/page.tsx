import { MarketingPage } from '@/components/marketing-page'

export default function AboutPage() {
  return <MarketingPage eyebrow="ABOUT AUTOALY" title="Automotive help, without the runaround." intro="Autoaly is a simple assistance service from Switch Industries, built to connect drivers with the right automotive support when it matters most." cards={[{ title: 'Built around real moments', text: 'A breakdown is stressful enough. We keep the first step familiar, direct, and easy to understand.' }, { title: 'Human support when needed', text: 'Use WhatsApp for a fast start or call a customer representative when internet access is limited.', icon: 'shield' }, { title: 'Focused on automotive care', text: 'Our service is focused on helping drivers find appropriate automotive assistance, not replacing emergency services.', icon: 'wrench' }]} />
}

export const metadata = { title: 'About Autoaly | Switch Mechanic', description: 'Learn about Autoaly, automotive assistance from Switch Industries.' }
