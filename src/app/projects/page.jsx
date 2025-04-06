import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import ATT from '@/images/logos/att.svg'
import Amazon from '@/images/logos/amazon.svg'
import JUS from '@/images/logos/jus.jpg'
import DCTV from '@/images/logos/dctv.svg'
import SadatTransport from '@/images/logos/sadattransport.svg'
import SmartEnergy from '@/images/logos/smartenergy.svg'
import HouseToPic from '@/images/logos/housetopic.svg'
import AudioAesthetics from '@/images/logos/audioAesthetics.svg'
import SaviCandle from '@/images/logos/savicandle.svg'
import EVC from '@/images/logos/evc.svg'

const projects = [
  {
    name: 'Achievery',
    description:
      'A free and secure online learning platform developed by AT&T to offer K-12 students an engaging and entertaining experience through a variety of videos, which are complemented by interactive educational activities designed to enhance their learning.',
    link: {
      href: 'https://www.theachievery.com/en',
      label: 'www.theachievery.com',
    },
    logo: ATT,
  },
  {
    name: 'ClimRR',
    description:
      'ClimRR provides data about future conditions and environmental extremes to help us better plan and adapt for the future. Using one of the world largest  supercomputers, ClimRR datasets provide among the most comprehensive, free dynamically downscaled projections for the United States.',
    link: {
      href: 'https://climrr.anl.gov/',
      label: 'climrr.anl.gov',
    },
    logo: ATT,
  },
  {
    name: 'Amazon Chime',
    description:
      'Amazon Chime is a versatile communications service that allows you to easily meet, chat, and make business calls both within your organization and with external partners or clients, all facilitated through a single, integrated application designed for seamless collaboration.',
    link: { href: 'https://aws.amazon.com/chime/', label: 'aws.amazon.com/chime/' },
    logo: Amazon,
  },
  {
    name: 'Alexa Skill Blueprints',
    description:
      'Alexa Skill Blueprints provide a web-based, no-code tool that enables anyone—regardless of coding experience—to create custom Alexa skills and personalized responses easily.',
    link: {
      href: 'https://blueprints.amazon.com/',
      label: 'blueprints.amazon.com',
    },
    logo: Amazon,
  },
  {
    name: 'luna',
    description:
      'Amazon Luna is a cloud gaming service that Amazon introduced to compete in the game streaming arena (similar to Google Stadia or Microsoft xCloud).',
    link: {
      href: 'https://luna.amazon.com/',
      label: 'luna.amazon.com',
    },
    logo: Amazon,
  },
  {
    name: 'https://www.jusbroadcasting.org/',
    description:
      '​JUS Broadcasting Corp, established in 2007, is known for its portfolio of television channels and a radio station, including JUS Punjabi TV, JUS One, JUS Hindi, and JUS Now.',
    link: {
      href: 'https://www.jusbroadcasting.org/',
      label: 'jusbroadcasting.org',
    },
    logo: EVC,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Apps I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Apps I've created in an effort to make my mark on the universe."
      intro="I’ve worked on numerous web apps over the years, but these are the ones I'm most proud of. Take a look at the designs, and feel free to email me with any suggestions on how I can improve."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
