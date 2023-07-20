import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  color: ${p => p.theme.colors.primary};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const Input = styled.input`
  width: 320px;
  margin-bottom: ${p => p.theme.space[4]}px;
  outline: none;
  padding: 10px;
  font-size: ${p => p.theme.fontSize.s};
  color: ${props => props.theme.colors.secondary};
  text-shadow: ${p => p.theme.boxShadow.textShadow};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${p => p.theme.space[2]}px;

  :focus,
  :hover {
    box-shadow: ${p => p.theme.boxShadow.boxShadow};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${p => p.theme.fontSize.s};
  font-weight: bold;
  padding: 6px 12px 6px;
  color: ${p => p.theme.colors.light};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.border.none};
  border-radius: ${p => p.theme.space[3]}px;
  transition: background-color 0.3s ease;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.success};
    box-shadow: ${p => p.theme.boxShadow.boxShadow};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
