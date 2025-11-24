import './style.css'

type DefaultButtonProps = React.ComponentProps<'button'> & {
    text:string
    className?: string
}

export function DefaultButton({ text, className, ...rest }: DefaultButtonProps){
    return(
        <button className={`default-button  ${className ?? ''}`} {...rest}>
            { text }
        </button>
    )
}