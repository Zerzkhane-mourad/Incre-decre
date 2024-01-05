

const Button = ({ backg, onclick, content }) => {
    return (
        <button onClick={onclick} className={`${backg}  hover:scale-110 text-white font-bold py-2 px-14 rounded text-2xl `}>
            {content}
        </button>
    )
}

export default Button