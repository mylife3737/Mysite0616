import React from 'react';
import { Tractor, Scissors, Leaf } from 'lucide-react';
import { DansLawnCare } from './DansComponent';
import { Project } from './types';

const project: Project = {
  id: 'dans-lawn-care',
  name: "Dan's Lawn Care",
  businessName: "Dan's Lawn Care",
  description: 'Just a guy, a mower, and a perfect yard.',
  logo: 'DansLawn',
  heroImage: 'https://placehold.co/1920x1080?text=Hero+Image',
  accentColor: '#fbbf24',
  theme: 'light',
  fontFamily: 'font-lawn',
  serviceSectionTitle: 'Fair & Fast',
  serviceSectionSubtitle: 'Simple service for busy neighbors.',
  aboutText: "Hey, I'm Dan. I'm just a guy with a mower who loves making yards look great. I've been mowing neighborhood lawns in Charlotte County for years—I just show up, do a good job, and let you get back to your weekend.",
  services: [
    { title: 'Weekly Mowing', description: "I'll show up every week and keep it looking short and tidy. No fuss.", icon: Tractor },
    { title: 'String Trimming', description: 'Clean, crisp edges around the fence and flower beds.', icon: Scissors },
    { title: 'Landscaping', description: 'Mulching and bed maintenance to keep things looking clean.', icon: Leaf }
  ],
  testimonials: [
    { name: "Mark R.", role: "Port Charlotte", content: "Dan is a lifesaver. He shows up when he says he will, and my yard has never looked better. Highly recommend!" },
    { name: "Linda P.", role: "Punta Gorda", content: "Been using Dan for 2 years now. He's fast, fair, and actually cares about the details. Great guy!" },
    { name: "Steve W.", role: "North Port", content: "Finally found a lawn guy who doesn't flake out. Professional, reliable, and reasonably priced." }
  ]
};

export default function App() {
  return <DansLawnCare project={project} />;
}
