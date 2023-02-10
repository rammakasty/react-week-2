import './App.css';
import styled from 'styled-components';

const StBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 20px;
`;

const StP = styled.p`
    color: blue;
`;

function App() {
    return (
        <StBox>
            <StP>나는 박스입니다</StP>
        </StBox>
    );
}

export default App;
