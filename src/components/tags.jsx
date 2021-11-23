const Tags = (props) => {
    return (
        <div className="">
            <div className="flex bg-gray-100 items-center gap-x-4 justify-between p-2 rounded-md text-gray-400">
                <small className="text-xs">{props.tag}</small>
                <i class="fal fa-times text-sm cursor-pointer"></i>
            </div>
        </div>
    )
}

export default Tags