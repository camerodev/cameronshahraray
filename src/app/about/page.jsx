/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LinkedInIcon, GitHubIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: `Full Stack JavaScript Engineer with 8+ years of professional experience building production-ready applications across the MERN stack (MongoDB, Express.js, React.js, Node.js). Proven track record building scalable APIs, performance-optimized frontend UIs, and real-time tools for high-profile ecosystems such as AT&T, Amazon, and JUS Broadcasting. Best known for engineering clean, testable code, leveraging CI/CD pipelines, and enabling modern DevOps teams with React + Node.js excellence.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Senior Full Stack Engineer.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I'm a senior full-stack software engineer with over a decade of experience developing robust web platforms, APIs, and digital media solutions across diverse industries including telecommunications, digital broadcasting, and e-commerce.
            </p>
            <p>
            At AT&T, I built enterprise dashboards and scalable APIs serving millions of daily requests, optimized infrastructure leading to significant cost reductions, improved frontend performance, and mentored junior developers, enhancing the team's overall efficiency.
            </p>
            <p>
            Previously at JUS Broadcasting, I led complete technical projects, modernized backend technologies, implemented video streaming solutions, and improved system reliability and media processing efficiency.
            </p>
            <p>
            At Amazon, my focus was on internal tools, where I designed React frontends, migrated legacy systems, built microservices to handle complex workflows, and actively contributed to team mentorship and accessibility initiatives.
            </p>
            <p>
            My earlier experience at DC TV involved developing frontend assistants, metadata utilities, integrating CMS solutions, and improving digital workflows in the broadcasting space.
            </p>
            <p>
            I enjoy working with modern languages and technologies such as React, Angular, Node.js, Python, Go, AWS services, and serverless architecture, alongside driving best practices in DevOps, testing, CI/CD, and performance optimization.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/cameronmshah"
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/camerodev"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            {/* <SocialLink
              href="https://twitter.com/imuhammadessa"
              icon={XIcon}
              className="mt-4"
            >
              Follow on X (Twitter)
            </SocialLink> */}
            <SocialLink
              href="mailto:Cameron.shahr@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              Cameron.shahr@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
