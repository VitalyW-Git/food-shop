import {useState} from "react";
import close from "../img/svg/close.svg";
import analytics from "../img/svg/analytics.svg";
import engagement from "../img/svg/engagement.svg";
import security from "../img/svg/security.svg";
import integrations from "../img/svg/integrations.svg";
import automations from "../img/svg/automations.svg";

export default function MenuMobile ({show, showMobileMenu}) {
    return (
        <>
            <div className={show
                ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
            >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img className="h-8 w-auto"
                                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                     alt="Workflow"
                                />
                            </div>
                            <div className="-mr-2">
                                <button type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => showMobileMenu(!show)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <img src={close} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                    <img src={analytics} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                          Analytics
                                        </span>
                                </a>
                                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                    <img src={engagement} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                          Engagement
                                        </span>
                                </a>
                                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                    <img src={security} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                          Security
                                        </span>
                                </a>
                                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                    <img src={integrations} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                          Integrations
                                        </span>
                                </a>
                                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                    <img src={automations} alt="" className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                          Automations
                                        </span>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Pricing
                            </a>
                            <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Docs
                            </a>
                            <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Enterprise
                            </a>
                            <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Blog
                            </a>
                            <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Help Center
                            </a>
                            <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Guides
                            </a>
                            <a href="/"
                               className="text-base font-medium text-gray-900 hover:text-gray-700"
                            >
                                Security
                            </a>
                            <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Events
                            </a>
                        </div>
                        <div>
                            <a href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Sign up
                            </a>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?
                                <a href="/" className="text-indigo-600 hover:text-indigo-500">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}