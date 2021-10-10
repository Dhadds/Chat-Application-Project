import styled from '@emotion/styled';
import React, { useState } from 'react';

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stack = styled('div')`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`

const Row = styled('div')`
  display: flex;
`;

const App = () =>  {
  
  const [counter, setCounter] = useState(0);

  // we will be using redux, so most of our state updates will be with dispatch();
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <Wrapper>
      <Stack>
        <Row>
          <button onClick={increment}>
            Increment + 
          </button>
          <button onClick={decrement}>
            Decrement -
          </button>
        </Row>
        <span style={{textAlign: 'center'}}>
          value {counter}
        </span>
      </Stack>
    </Wrapper>
  )
}

export default App;
