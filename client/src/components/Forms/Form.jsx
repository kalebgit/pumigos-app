

export default function Form({title, children, ...props}){
    return (
        <form className="" {...props}>
            <fieldset className="">
                <legend className="">{title}</legend>
                {children}
            </fieldset>
        </form>
    )
}