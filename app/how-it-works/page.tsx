import { MarketingPage } from '@/components/marketing-page'

export default function HowItWorksPage() {
  return <MarketingPage eyebrow="HOW IT WORKS" title="Simple steps. Real support." intro="Autoaly makes it easier to explain what is wrong, understand what you need, and find the right mechanic for your situation." cards={[{ title: 'Tell us what happened', text: 'Message Autoaly and describe the symptoms, vehicle, location, and situation you are dealing with.' }, { title: 'We understand the situation', text: 'Our assistance flow gathers the important details so your request is clear and actionable.', icon: 'shield' }, { title: 'We find a mechanic', text: 'We help connect you with an available automotive professional who can assist.', icon: 'wrench' }]} />
}

export const metadata = { title: 'How It Works | Switch Mechanic', description: 'See how Autoaly connects drivers with automotive assistance.' }
