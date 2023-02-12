import './App.css';
import styled from 'styled-components';

const StBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.borderColor};
    margin: 20px;
    background-color: ${(props) => props.backgroundColor};
`;

function App() {
    return (
        <>
            <StBox borderColor="red">123</StBox>
            <StBox borderColor="blue">1263</StBox>
            <StBox borderColor="green">123</StBox>
        </>
    );
}

export default App;
