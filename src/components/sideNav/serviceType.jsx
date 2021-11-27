import React, { useState }  from 'react'

let button = [
    {
        id:1,
        serviceType:"Purchase",
        active:false,
    },
    {
        id:2,
        serviceType:"Rent",
        active:false,
    },
    {
        id:3,
        serviceType:"Daily",
        active:false,
    }
]

const ServiceTypeWraper = (props) => {
    const [state, setState] = useState(button)
    
    return (
        <div className="flex items-center text-center justify-between rounded-xl bg-gray-100 text-gray-400" style={{height:"2.7rem"}}>
            {state && state.map((info) => {
                return (
                    <div
                        onClick={()=>{
                            let newState = button.map((redo, index)=>{
                                redo.active = false;
                                if(redo.id === info.id){
                                    info.active = !info.active
                                    props.selectedFilter(info)
                                    return info
                                }else{
                                    return redo
                                }
                            })
                            setState(newState)
                        }}
                        className={`service-type flex items-center justify-center rounded-xl w-full text-xs h-full cursor-pointer ${info.active ? 'bg-primary-blue text-white' : ''}`}
                    >
                        {info.serviceType}
                    </div>
                )
            })}
        </div>
    )

}

export default ServiceTypeWraper