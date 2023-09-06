
const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4
    border font-montserrat text-lg leading-none bg-coral-red
    rounded-full text-white border-coral-red hover:bg-dark-coral-red
    hover:border-dark-coral-red active:bg-darker-coral-red
    active:border-darker-coral-red">
        {label}

        <img
            src={iconURL}
            alt="Arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
        />
    </button>
  )
}

export default Button