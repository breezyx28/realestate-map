const SelectBtn = (props) => {
    return (
        <div className={`select-btn cursor-pointer ${props.active ? 'border-primary-blue' : 'border border-gray-300'} rounded-xl text-sm`}>
            <div className="flex items-center gap-x-3 p-3 rounded">
                <div className={`radio-check border border-gray-400 rounded-full ${props.active ? 'active' : ''}`}></div>
                <p className="text-sm">{props.lable}</p>
            </div>
        </div>
    )
}

export default SelectBtn