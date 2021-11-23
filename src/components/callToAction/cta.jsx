const Cta = () => {
    return (
        <div>
            <div className="w-full flex flex-col gap-y-3 text-sm">
                <div className="flex justify-center items-center rounded-xl bg-gray-100 py-2 cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="transform -rotate-90">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <p>Filters</p>
                        <div className="flex justify-center items-center text-xs rounded-full" style={
                            {
                                width:"1.3rem",
                                height:"1.3rem",
                                color:"white",
                                backgroundColor:"#696fff",
                            }
                            }>
                                <p style={{position:"relative"}}>3</p>
                            </div>
                    </div>
                </div>
                <div className="flex justify-center items-center text-white rounded-xl bg-primary-black py-2 cursor-pointer">
                    Show
                </div>
            </div>
        </div>
    );
}

export default Cta;