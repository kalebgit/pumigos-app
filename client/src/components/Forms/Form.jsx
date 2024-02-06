

export default function Form({title, children, ...props}){
    return (
        <form className="p-3" {...props}>
            <fieldset className="">
                <legend className="">{title}</legend>
                {children}
            </fieldset>
        </form>
    )
}