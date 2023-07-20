import styled from '@emotion/styled';

export const FilterWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterLabel = styled.label`
  color: ${p => p.theme.colors.secondary};
`;

export const FilterInput = styled.input`
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
