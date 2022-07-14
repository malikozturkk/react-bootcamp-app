import PropTypes from 'prop-types'
export default function Button({ label, variant = 'default' }) {
    return(
        <button>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        age: PropTypes.number
    })
}