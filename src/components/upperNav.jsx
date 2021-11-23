import Avatar from '@mui/material/Avatar';

const UpperNav = () => {

    return (
        <div className="w-full">
            <div className="px-10 w-full flex justify-between items-center">
                <div className="flex items-center gap-x-20">
                    <div className="logo flex items-center gap-x-2">
                        <img src="./img/Logo.png" width="26" height="26"/>
                        <div className="text-lg text-primary-black font-semibold">Point</div>
                    </div>
                    <ul className="flex items-center gap-x-14">
                        <li className="cursor-pointer">Rent</li>
                        <li className="cursor-pointer">Sale</li>
                        <li className="cursor-pointer">New Buildings</li>
                        <li className="cursor-pointer">Mortgage</li>
                    </ul>
                </div>
                <div className="flex justify-between items-center gap-x-16">
                    <ul className="flex items-center text-gray-500 gap-x-14">
                        <li className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </li>
                        <li className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </li>
                        <li className="cursor-pointer">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <div className="absolute" style={{top:"-5px",right:"-5px"}}>
                                    <div className="notification-icon bg-white rounded-full opacity-80" style={{width:"12px",height:"12px",border:"3px solid #EF4444"}}>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <Avatar alt="Remy Sharp" src="./img/kat.jpg" />
                </div>
            </div>
        </div>
    )

}

export default UpperNav