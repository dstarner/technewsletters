import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Newsletters</title>
      </Head>
      <nav id="header" className="fixed w-full z-10 top-0 bg-white border-b border-gray-100 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
          <Link href="/">
            <a className="pl-4 flex items-center no-underline hover:no-underline" >
              <img className="h-5 pr-3 fill-current text-purple-500" src="/logo.svg" />
              <span className="text-gray-900 text-base font-extrabold text-xl">
                Tech Newsletters
              </span>
            </a>
          </Link>
          <div className="w-full flex-grow flex content-end justify-end items-center w-auto block mt-2 lg:mt-0 z-20" id="nav-content">
            <div className="flex-1 w-full max-w-sm py-4 lg:py-0">
              <div className="relative pull-right pl-4 pr-4 md:pr-0">
                <input type="search" placeholder="Search" className="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-green-500 rounded py-1 px-2 pl-10 appearance-none leading-normal" />
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
      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">

      </div>
      <footer className="bg-white border-t border-gray-200 shadow">
        <div className="container mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4 text-gray-600 text-sm">
                  <FooterAboutLink href="/">Technewsletters.wiki</FooterAboutLink> was a fun side project
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
