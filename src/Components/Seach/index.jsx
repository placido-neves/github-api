import './styled.scss'

export default function Seach({ placeholder, value, setValues, handleChange }) {

    return (
        <>
            <form className='form-seach' onSubmit={(event) => {
                handleChange()
                event.preventDefault()
            }}
                method="get">
                <input
                    className='text'
                    value={value}
                    onChange={(event) => {
                        setValues(event.target.value)
                    }}
                    placeholder={placeholder}
                />
                <button type="submit" className='bntSeach'>seach</button>
            </form>
        </>
    )
}