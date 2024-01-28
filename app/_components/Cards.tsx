'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";



function Cards() {

    const router = useRouter();

    // State variables for toggling expansion
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpandedsecond, setIsExpandedsecond] = useState(false);
    const [isExpandedlast, setIsExpandedlast] = useState(false);

    // Function to toggle expansion
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleExpand13 = () => {
        setIsExpandedsecond(!isExpandedsecond);
    };

    const toggleExpand14 = () => {
        setIsExpandedlast(!isExpandedlast);
    };
    const handleContactClick = () => {
        router.push("/contact");
    };
    return (
        <div>
            <div className="w-full"> <h2 className="text-2xl mt-3 text-center font-semibold ">Մենք անցկացնում ենք հետևյալ դասընթացները</h2></div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 place-items-center w-full">
                <div className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-[95%] p-3  rounded-lg font-[sans-serif] overflow-hidden  my-4">
                    <img src="https://readymadeui.com/cardImg.webp" className="w-full rounded" alt="Description of the image" />
                    <div className="px-6">
                        <div className="flex justify-between items-center mt-2">
                            <span className="bg-green-100 text-green-400 text-[14px] p-1"> Development</span>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>
                        <h2 className="text-sm text-gray-500 mt-2 font-extrabold">HTML CSS JAVASCRIPT</h2>
                        <div className="flex items-center mt-5">
                            <p className="text-[16px] text-blue-600 font-semibold">
                                30.000դր
                            </p>
                            <span className="font-thin line-through ml-1 text-slate-500 text-[13px]">45000դր</span>
                            <span className="text-[11px] ml-1 bg-red-400  text-white p-1 rounded-sm">ամսեկան</span>
                        </div>
                        <div>
                            <span className="text-[13px] text-slate-900 font-semibold mt-4">Դասընթացի տևողությունը 6 ամիս</span>
                            <p className="text-[13px] text-slate-700 my-3">
                                {isExpanded
                                    ? "Գիտելիքը ուժ է: Կրթությունը առաջընթացի նախադրյալն է, յուրաքանչյուր հասարակությունում, յուրաքանչյուր ընտանիքում: Այս դասընթացի ընթացքում կհասկանանք կայքի կառուվածքը ուսումնասիրելով  HTML5 հիպերտեքստային լեզուն, կսովորենք CSS3, որը նախատեսված է HTML5 դոկումենտի ոճավորման համար, կսովորենք աշխարհում ամանաշատ պահանջարկ ունեցող ծրագրավորման լեզուն JAVASCRIPT։ JAVASCRIPT-ի օգնությամբ մենք կարող ենք ստեղծել բարդ ֆունկցիաներ վեբ էջերի համար։"
                                    : "Գիտելիքը ուժ է: Կրթությունը առաջընթացի նախադրյալն է, յուրաքանչյուր հասարակությունում, յուրաքանչյուր ընտանիքում:"}


                                <button
                                    className="text-blue-500 hover:underline text-[13px] ml-1 underline italic"
                                    onClick={toggleExpand}
                                >
                                    իմանալ ավելին
                                </button>
                            </p>
                            <span className="text-[11px] text-slate-700 mt-4 font-semibold">Դասընթացի վերաբերյալ ավելի մանրամասն տեղեկատվություն իմանալու համար խնդրում եմ գրանցվել և մեր մասնագետը կարճ ժամանակահատվածում կապ կհաստատի Ձեր հետ։</span>
                        </div>
                        <div className="mt-10 flex items-center flex-wrap gap-4">
                            <button type="button" onClick={handleContactClick}
                                className="px-6 py-2.5 w-full rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-green-600 bg-green-600 hover:bg-transparent hover:text-black transition-all duration-300"
                            >
                                գրանցվել
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-[95%] p-3  rounded-lg font-[sans-serif] overflow-hidden  my-4">
                    <img src="https://readymadeui.com/cardImg.webp" className="w-full rounded" alt="Description of the image" />
                    <div className="px-6">
                        <div className="flex justify-between items-center mt-2">
                            <span className="bg-green-100 text-green-400 text-[14px] p-1"> Development</span>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>
                        <h2 className="text-sm text-gray-500 mt-2 font-extrabold">HTML CSS JAVASCRIPT</h2>
                        <div className="flex items-center mt-5">
                            <p className="text-[16px] text-blue-600 font-semibold">
                                30.000դր
                            </p>
                            <span className="font-thin line-through ml-1 text-slate-500 text-[13px]">45000դր</span>
                            <span className="text-[11px] ml-1 bg-red-400  text-white p-1 rounded-sm">ամսեկան</span>
                        </div>
                        <div>
                            <span className="text-[13px] text-slate-900 font-semibold mt-4">Դասընթացի տևողությունը 6 ամիս</span>
                            <p className="text-[13px] text-slate-700 my-3">
                                {isExpandedsecond
                                    ? "Գիտելիքը ուժ է: Կրթությունը առաջընթացի նախադրյալն է, յուրաքանչյուր հասարակությունում, յուրաքանչյուր ընտանիքում: Այս դասընթացի ընթացքում կհասկանանք կայքի կառուվածքը ուսումնասիրելով  HTML5 հիպերտեքստային լեզուն, կսովորենք CSS3, որը նախատեսված է HTML5 դոկումենտի ոճավորման համար, կսովորենք աշխարհում ամանաշատ պահանջարկ ունեցող ծրագրավորման լեզուն JAVASCRIPT։ JAVASCRIPT-ի օգնությամբ մենք կարող ենք ստեղծել բարդ ֆունկցիաներ վեբ էջերի համար։"
                                    : "Գիտելիքը ուժ է: Կրթությունը առաջընթացի նախադրյալն է, յուրաքանչյուր հասարակությունում, յուրաքանչյուր ընտանիքում:"}


                                <button
                                    className="text-blue-500 hover:underline text-[13px] ml-1 underline italic"
                                    onClick={toggleExpand13}
                                >
                                    իմանալ ավելին
                                </button>
                            </p>
                            <span className="text-[11px] text-slate-700 mt-4 font-semibold">Դասընթացի վերաբերյալ ավելի մանրամասն տեղեկատվություն իմանալու համար խնդրում եմ գրանցվել և մեր մասնագետը կարճ ժամանակահատվածում կապ կհաստատի Ձեր հետ։</span>
                        </div>
                        <div className="mt-10 flex items-center flex-wrap gap-4">
                            <button type="button" onClick={() => router.push("/contact")}
                                className="px-6 py-2.5 w-full rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-green-600 bg-green-600 hover:bg-transparent hover:text-black transition-all duration-300"
                            >
                                գրանցվել
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-[95%] p-3  rounded-lg font-[sans-serif] overflow-hidden  my-4">
                    <img src="https://readymadeui.com/cardImg.webp" className="w-full rounded" alt="Description of the image" />
                    <div className="px-6">
                        <div className="flex justify-between items-center mt-2">
                            <span className="bg-green-100 text-green-400 text-[14px] p-1"> Development</span>
                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>
                        <h2 className="text-sm text-gray-500 mt-2 font-extrabold">HTML CSS JAVASCRIPT</h2>
                        <div className="flex items-center mt-5">
                            <p className="text-[16px] text-blue-600 font-semibold">
                                30.000դր
                            </p>
                            <span className="font-thin line-through ml-1 text-slate-500 text-[13px]">45000դր</span>
                            <span className="text-[11px] ml-1 bg-red-400  text-white p-1 rounded-sm">ամսեկան</span>
                        </div>
                        <div>
                            <span className="text-[13px] text-slate-900 font-semibold mt-4">Դասընթացի տևողությունը 6 ամիս</span>
                            <p className="text-[13px] text-slate-700 my-3">
                                {isExpandedlast
                                    ? "Գիտելիքը ուժ է: Կրթությունը առաջընթացի նախադրյալն է, յուրաքանչյուր հասարակությունում, յուրաքանչյուր ընտանիքում: Այս դասընթացի ընթացքում կհասկանանք կայքի կառուվածքը ուսումնասիրելով  HTML5 հիպերտեքստային լեզուն, կսովորենք CSS3, որը նախատեսված է HTML5 դոկումենտի ոճավորման համար, կսովորենք աշխարհում ամանաշատ պահանջարկ ունեցող ծրագրավորման լեզուն JAVASCRIPT։ JAVASCRIPT-ի օգնությամբ մենք կարող ենք ստեղծել բարդ ֆունկցիաներ վեբ էջերի համար։"
                                    : "Գիտելիքը ուժ է: Կրթությունը առաջընթացի նախադրյալն է, յուրաքանչյուր հասարակությունում, յուրաքանչյուր ընտանիքում:"}


                                <button
                                    className="text-blue-500 hover:underline text-[13px] ml-1 underline italic"
                                    onClick={toggleExpand14}
                                >
                                    իմանալ ավելին
                                </button>
                            </p>
                            <span className="text-[11px] text-slate-700 mt-4 font-semibold">Դասընթացի վերաբերյալ ավելի մանրամասն տեղեկատվություն իմանալու համար խնդրում եմ գրանցվել և մեր մասնագետը կարճ ժամանակահատվածում կապ կհաստատի Ձեր հետ։</span>
                        </div>
                        <div className="mt-10 flex items-center flex-wrap gap-4">
                            <button type="button" onClick={() => router.push("/contact")}
                                className="px-6 py-2.5 w-full rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-green-600 bg-green-600 hover:bg-transparent hover:text-black transition-all duration-300"
                            >
                                գրանցվել
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;