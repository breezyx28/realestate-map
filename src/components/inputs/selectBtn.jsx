import {useState, useEffect} from "react"

let data = [
    {
        id:1,
        propertyType:'House',
        active:false,
    },
    {
        id:2,
        propertyType:'Commercial',
        active:false,
    },
    {
        id:3,
        propertyType:'Apartment',
        active:false,
    },
    {
        id:4,
        propertyType:'Land plot',
        active:false,
    }
]


const PropertyTypeWraper = (props) => {
    const [state, setState] = useState(data)
    const [choices, setChoices] = useState([])

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
                                    if(!choices.includes(info.propertyType)){
                                        setChoices([...choices,info.propertyType])
                                        props.selectedFilter({propertyType: [...choices,info.propertyType]})
                                    }else{
                                        let filtered = choices.filter((item)=>{
                                            return item != info.propertyType
                                        })
                                        setChoices(filtered);
                                    }
                                    return result
                                }else{
                                    return result
                                }
                            })
                            setState(newState);
                    }} 
                    className={`select-btn cursor-pointer ${info.active && (props.reset === false) ? 'border-primary-blue' : 'border border-gray-300'} rounded-xl text-sm`}>
                        <div className="flex items-center gap-x-3 p-3 rounded">
                            <div className={`radio-check border border-gray-400 rounded-full ${info.active && (props.reset === false) ? 'active' : ''}`}></div>
                            <p className="text-sm">{info.propertyType}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PropertyTypeWraper