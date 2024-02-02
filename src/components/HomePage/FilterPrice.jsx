import { useForm } from "react-hook-form"
import './styles/FilterPrice.css'

const FilterPrice = ({ setFromTo }) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        const obj = {
            from: +data.from, //=== null ? 0 : +data.from,
            to: +data.to === 0 ? Infinity : +data.to
        }
        setFromTo(obj)
    }

    return (
        <div className="filter__container">
            <h3 className="filter__title">Price</h3>
            <form onSubmit={handleSubmit(submit)}>
                <label className="filter__label">
                    <span className="filter__span">From</span>
                    <input className="filter__input"{...register('from')} type="number" />
                </label>
                <label className="filter__label" >
                    <span className="filter__span">To</span>
                    <input className="filter__input"{...register('to')} type="number" />
                </label>
                <button className="filter__apply">Apply</button>
            </form>
        </div>
    )
}

export default FilterPrice