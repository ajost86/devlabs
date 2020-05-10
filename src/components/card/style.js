import styled from 'styled-components';
import { rgba } from 'polished';

export const StyleCard = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 40px 49px;
  ${(props) => props.small && 'padding: 30px'};
  box-shadow: 0 0px 0px 0px rgba(51, 51, 51, 0.1);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 18px 40px 5px rgba(51, 51, 51, 0.1);
    transform: translateY(-3px);
  }

  &&.aos-finished[data-aos^='fade'][data-aos^='fade'] {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-3px);
    }
  }

  .cardTitle {
    margin: 20px 0px 15px 0px;
  }
  .smallCardTitle {
    color: ${({ theme }) => rgba(theme.palette.neutral.black, 0.6)};
    margin: 20px 0px 0px 0px;
    font-size: 15px;
  }
`;
