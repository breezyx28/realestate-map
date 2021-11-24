import {useState, useEffect} from "react"

let data = [
    {
        id:1,
        lable:'House',
        active:false,
    },
    {
        id:2,
        lable:'Commercial',
        active:false,
    },
    {
        id:3,
        lable:'Apartment',
        active:false,
    },
    {
        id:4,
        lable:'Land Plot',
        active:false,
    }
]

const PropertyTypeWraper = (props) => {
    const [state, setState] = useState(data)

    return (
        <div className="flex flex-wrap gap-3">
            {state && state.map((info)=>{
                return (
                    <div 
                        key={info.id} 
                        onClick={()=>{
                            let newState = data.map((result)=>{
                                if(info.id === result.id){
                                    info.active = !result.active
                                    return result
                                }else{
                                    return result
                                }
                            })
                            setState(newState);
                    }} 
                    className={`select-btn cursor-pointer ${info.active ? 'border-primary-blue' : 'border border-gray-300'} rounded-xl text-sm`}>
                        <div className="flex items-center gap-x-3 p-3 rounded">
                            <div className={`radio-check border border-gray-400 rounded-full ${info.active ? 'active' : ''}`}></div>
                            <p className="text-sm">{info.lable}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PropertyTypeWraper