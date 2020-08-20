import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

const CustomDropDown = styled(Dropdown)`
  &&& {
    border-bottom: 1px solid #ccc;
    padding: 0.44rem 0.2rem;
  }
`;

export default CustomDropDown;
