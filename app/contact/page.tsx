import { MarketingPage } from '@/components/marketing-page'

export default function ContactPage() {
  return <MarketingPage eyebrow="CONTACT" title="When you need help, start here." intro="Message Autoaly on WhatsApp for the fastest way to get started. If you do not have reliable internet, call our customer representative directly." cards={[{ title: 'WhatsApp assistance', text: 'Send a message with what happened, your location, and your vehicle details. We will guide you from there.' }, { title: 'Phone support', text: 'No data? Call Autoaly on +234 906 660 0444. A customer representative can collect your details and help arrange the next step.', icon: 'shield' }, { title: 'Important safety note', text: 'Autoaly is for automotive assistance. For medical, fire, police, or other emergencies, contact the appropriate emergency service.', icon: 'wrench' }]} />
}

export const metadata = { title: 'Contact Autoaly | Switch Mechanic', description: 'Contact Autoaly for automotive assistance by WhatsApp or phone.' }
