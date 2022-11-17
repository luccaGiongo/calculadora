import { InputContainer } from './Input.styles';

export const Input = ({ value }) => {
    return (
        <InputContainer>
            <input disabled value={value}></input>
        </InputContainer>
    );
}

export default Input;