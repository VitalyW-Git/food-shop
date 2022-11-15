import {useState} from 'react'
import MenuMobile from "./MenuMobile.jsx";
import analytics from '../img/svg/analytics.svg'
import engagement from '../img/svg/engagement.svg'
import security from '../img/svg/security.svg'
import integrations from '../img/svg/integrations.svg'
import automations from '../img/svg/automations.svg'
import watch from '../img/svg/watch.svg'
import contact from '../img/svg/contact.svg'
import events from '../img/svg/events.svg'
import guides from '../img/svg/guides.svg'
import help from '../img/svg/help.svg'

export default function Navbar () {
    const [open, setOpen] = useState(false);
    const [flyer, setFlyer] = useState(false);
    const [flyerTwo, setFlyerTwo] = useState(false);

    const handlerSolution = () => {
        setFlyer(!flyer)
        setFlyerTwo(false)
    }

    const handlerMore = () => {
        setFlyerTwo(!flyerTwo)
        setFlyer(false)
    }

    return (
        <>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 pt-2 pb-2 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10 items-center">
                            <div className="relative">
                                <button
                                    type="button"
                                    className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handlerSolution}
                                >
                                    <span>Solutions</span>
                                    <svg className={flyer === true
                                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                        : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <div
                                    onMouseLeave={() => setFlyer(false)}
                                    className={flyer
                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                            : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <img src={analytics} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Analytics
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Get a better understanding of where your traffic is
                                                        coming from.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <img src={engagement} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Engagement
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Speak directly to your customers in a more
                                                        meaningful way.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <img src={security} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Security
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Your customers' data will be safe and secure.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <img src={integrations} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Integrations
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Connect with third-party tools that you're already
                                                        using.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <img src={automations} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Automations
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Build strategic funnels that will drive your
                                                        customers to convert
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <div className="flow-root">
                                                <a href="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                                    <img src={watch} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                    <span className="ml-3">Watch Demo</span>
                                                </a>
                                            </div>
                                            <div className="flow-root">
                                                <a href="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                                    <img src={contact} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                    <span className="ml-3">Contact Sales</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Pricing
                            </a>
                            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Docs
                            </a>
                            <div className="relative">
                                <button
                                    type="button"
                                    className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handlerMore}
                                >
                                    <span>More</span>
                                    <svg className={flyerTwo === true
                                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                        : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <div onMouseLeave={() => setFlyerTwo(false)} className={flyerTwo
                                        ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                        : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }
                                >
                                    <div
                                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <img src={help} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Help Center
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Get all of your questions answered in our forums or
                                                        contact support.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <img src={guides} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Guides
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Learn how to maximize our platform to get the most
                                                        out of it.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <img src={events} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Events
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        See what meet-ups and other events we might be
                                                        planning near you.
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <img src={security} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">
                                                        Security
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Understand how we take your privacy seriously.
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                            <div>
                                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                                    Recent Posts
                                                </h3>
                                                <ul className="mt-4 space-y-4">
                                                    <li className="text-base truncate">
                                                        <a href="/" className="font-medium text-gray-900 hover:text-gray-700">
                                                            Boost your conversion rate
                                                        </a>
                                                    </li>
                                                    <li className="text-base truncate">
                                                        <a href="/" className="font-medium text-gray-900 hover:text-gray-700">
                                                            How to use search engine optimization to drive
                                                            traffic to your site
                                                        </a>
                                                    </li>
                                                    <li className="text-base truncate">
                                                        <a href="/" className="font-medium text-gray-900 hover:text-gray-700">
                                                            Improve your customer experience
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-5 text-sm">
                                                <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    {" "}
                                                    View all posts <span aria-hidden="true">→</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign in
                            </a>
                            <a href="/" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            <MenuMobile show={open}/>
            </div>
        </>
    )
}
