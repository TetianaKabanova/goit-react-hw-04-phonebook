import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  gap: 50px;
`;

export const Contact = styled.p`
  color: ${p => p.theme.colors.primary};
`;

export const DeleateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${p => p.theme.fontSize.s};
  font-weight: bold;
  padding: 5px 10px 5px;
  color: ${p => p.theme.colors.light};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.border.none};
  border-radius: ${p => p.theme.space[3]}px;
  transition: background-color 0.3s ease;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.danger};
    box-shadow: ${p => p.theme.boxShadow.boxShadow};
  }
`;
