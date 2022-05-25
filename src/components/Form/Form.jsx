import s from './Form.module.css'

const Form = (props) => {
    return (
        // sonSubmit={this.props.weatherMethot}
        <form >
            <input type="text" name="citi" placeholder="Город"/>
            <button>Получиь погоду</button>
        </form>
    )
}

export default Form;