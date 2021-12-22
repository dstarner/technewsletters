import debounce from 'lodash/debounce';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react';

import content from "../content";

export default function Home({ newsletters: defaultNewsletters }) {

  const [query, setQuery] = useState('');

  const newsletters = useMemo(() => {
    if (!query || query.length < 2) { return defaultNewsletters; }
    return defaultNewsletters.filter(nl => nl.title.toLowerCase().includes(query));
  }, [defaultNewsletters, query]);

  const changeHandler = useCallback(event => {
    setQuery(event.target.value);
  }, [setQuery]);

  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 500)
  , []);

  return (
    <>
      <Head>
        <title>Tech Newsletters</title>
      </Head>
      <nav id="header" className="fixed w-full z-10 top-0 bg-white border-b border-gray-100 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
          <Link href="/">
            <a className="pl-4 flex items-center no-underline hover:no-underline" >
              <img className="h-5 pr-3 fill-current" src="/logo.svg" />
              <span className="text-gray-900 text-base font-extrabold text-xl">
                Tech Newsletters
              </span>
            </a>
          </Link>
          <div className="w-full flex-grow flex content-end justify-end items-center w-auto block mt-2 lg:mt-0 z-20" id="nav-content">
            <div className="flex-1 w-full max-w-sm py-4 lg:py-0">
              <div className="relative pull-right pl-4 pr-4 md:pr-0">
                <input
                  type="search" placeholder="Search" onChange={debouncedChangeHandler}
                  className="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-green-500 rounded py-1 px-2 pl-10 appearance-none leading-normal"
                />
                <div className="absolute search-icon" style={{ top: "0.375rem", left: "1.75rem" }}>
                  <svg className="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container w-full flex flex-wrap mx-auto px-2 pt-16 lg:pt-10 mt-20 lg:mt-14 pb-16">
        <NewsletterList newsletters={newsletters} />
      </div>
      <footer className="bg-white border-t border-gray-200 shadow">
        <div className="container mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4 text-gray-600 text-sm">
                  <FooterAboutLink href="/">Technewsletters.wiki</FooterAboutLink> was a small side project
                  by <FooterAboutLink href="https://danstarner.com">Dan Starner</FooterAboutLink> when he
                  realized that it was difficult to find credible and popular newsletters to subscribe to
                  regarding technology and software engineering.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">Some Links</h3>
                <ul className="list-reset items-center text-sm pt-3">
                  <FooterLink href="https://github.com/dstarner/technewsletters">
                    GitHub Repository
                  </FooterLink>
                  <FooterLink href="https://danstarner.com">
                    More About Dan
                  </FooterLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function NewsletterList({ newsletters }) {
  return (
    <div aria-label="group of cards" tabIndex="0" className="focus:outline-none w-full">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {newsletters.map((newsletter, idx) => (
          <NewsletterCard key={idx} {...newsletter} />
        ))}
      </div>
    </div>
  );
}

function NewsletterCard({ title, href, subscribeHref, tags, description, imgSrc }) {
  return (
    <div aria-label="card 5" tabIndex="0" className="flex flex-col focus:outline-none w-full lg:mr-7 lg:mb-0 mb-3 bg-white p-6 shadow rounded">
      <div className="flex items-center border-b border-gray-200 pb-6">
        {imgSrc ? (
          <a target="_blank" rel="noreferrer" href={`${href}?utm_source=technewsletters.wiki`}>
            <Image className="rounded-full" src={imgSrc} width={55} height={55} alt={`${title} logo`} />
          </a>
        ) : (
          <div className="w-12 h-12 bg-gray-300 rounded-full flex flex-shrink-0"></div>
        )}
        <div className="flex items-start justify-between w-full">
          <div className="pl-3 w-full">
            <p tabIndex="0" className="focus:outline-none text-xl font-medium leading-5 text-gray-800">{title}</p>
            <a
              target="_blank" rel="noreferrer" href={`${href}?utm_source=technewsletters.wiki`}
              className="text-green-500 no-underline hover:text-green-700 hover:underline text-sm pt-2">
                {href}
              </a>
          </div>
          {subscribeHref && (
            <>
              <a target="_blank" rel="noreferrer" href={`${subscribeHref}?utm_source=technewsletters.wiki`} aria-label="subscribe">
                <svg className="focus:outline-none hover:fill-green-300" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </>
          )}
        </div>
      </div>
      <div className="grow flex flex-col justify-between px-2">
        <p tabIndex="0" className="focus:outline-none text-sm leading-5 py-4 text-gray-600">{description}</p>
        <div tabIndex="0" className="focus:outline-none flex">
          {tags.map((tag, idx) => (
            <div key={tag} className={`${idx === 0 ? '' : 'ml-2'} py-2 px-4 text-xs leading-3 text-green-700 rounded-full bg-green-100`}>#{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FooterAboutLink({ children, href }) {
  return (
    <Link href={href}>
      <a className="text-green-500 no-underline hover:text-green-700 hover:underline">
        {children}
      </a>
    </Link>
  );
}

function FooterLink({ children, href }) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" className="inline-block text-green-500 no-underline hover:text-green-700 hover:underline py-1" href={href}>
        {children}
      </a>
    </li>
  );
}

export async function getStaticProps() {
  return {props: { newsletters: content }};
}