import { MarketingPage } from '@/components/marketing-page'

export default function ForMechanicsPage() {
  return <MarketingPage eyebrow="FOR MECHANICS" title="A better way to meet drivers who need your expertise." intro="Join a growing network of automotive professionals and receive opportunities to assist drivers in your area." cta="Join the Mechanic Network" cards={[{ title: 'Get relevant opportunities', text: 'Be connected with drivers who need the services you provide, where you can provide them.' }, { title: 'Build trust through service', text: 'Autoaly is designed around clear communication, responsive support, and a better experience for every driver.', icon: 'shield' }, { title: 'Grow your local network', text: 'Become part of a professional network built to make automotive assistance easier to find.', icon: 'wrench' }]} />
}

export const metadata = { title: 'For Mechanics | Switch Mechanic', description: 'Join the Autoaly network of trusted automotive professionals.' }
