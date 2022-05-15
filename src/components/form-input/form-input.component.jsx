import './form-input.styles.scss';

function FormInput ({ label, ...otherProps }) {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />

        </div>
    );
};

export default FormInput;

