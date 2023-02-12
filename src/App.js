import './App.css';
import styled from 'styled-components';

const StContainer = styled.div`
    display: flex;
`;

const StBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.borderColor};
    margin: 20px;
`;

// 박스의 색
const boxList = ['red', 'blue', 'green'];

const getBoxName = (color) => {
    switch (color) {
        case 'red':
            return '빨간 박스';
        case 'green':
            return '초록 박스';
        case 'blue':
            return '파란 박스';
        default:
            return '검정 박스';
    }
};

function App() {
    return (
        <StContainer>
            {boxList.map((box) => {
                return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
            })}
        </StContainer>
    );
}

export default App;
