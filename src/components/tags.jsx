import { useRef } from "react"

const Tags = (props) => {
    const closeTag = useRef(null);

    function handleClose(){
        let parentDom = closeTag.current.parentElement;
        let countChilds = closeTag.current.parentElement.childElementCount;

        closeTag.current.remove();
        
        // provide a text if no parent childs
        if(countChilds < 2){
            parentDom.innerHTML = '<div class="text-center w-full"><em class="text-gray-400">No Tags</em></div>'
        }
    }

    return (
        <div ref={closeTag} className="">
            <div className="flex bg-gray-100 items-center gap-x-4 justify-between p-2 rounded-md text-gray-400">
                <small className="text-xs">{props.tag}</small>
                <i class="fal fa-times text-sm cursor-pointer" onClick={handleClose}></i>
            </div>
        </div>
    )
}

export default Tags