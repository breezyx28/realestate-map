const Section = (props) => {
    return (
        <div className="flex flex-col gap-y-2">
            {props.lable === '' ? '' : (
                <div className="lable text-primary-black text-xs font-semibold">
                    {props.lable}
                </div>
            )}
                {props.children}
        </div>
    )
}

export default Section