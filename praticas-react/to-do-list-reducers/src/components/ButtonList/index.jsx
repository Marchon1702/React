import PropTypes from 'prop-types';

const ButtonList = ({children, handleClick, type}) => {
    return (
        <button className="buttonList" type={type} onClick={handleClick}>
            {children}
        </button>
    )
}   

ButtonList.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    handleClick: PropTypes.func
}

export default ButtonList