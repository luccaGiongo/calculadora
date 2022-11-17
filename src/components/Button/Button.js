import { ButtonContainer } from './Button.styles';

export const Button = ({ label, onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

export default Button;
