import PropTypes from 'prop-types';
import { SectionWrapper, TitleName } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <SectionWrapper>
      {title && <TitleName>{title}</TitleName>}
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
