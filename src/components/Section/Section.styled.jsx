import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[4]}px;
`;

export const TitleName = styled.h1`
  display: block;
  text-align: center;
  margin-top: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.colors.primary};
`;
