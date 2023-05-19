import Main from '@src/components/Main';
import Signup from '@src/components/Signup';
import '@src/components/assets/scss/reset.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const SIGNUP = 'signup';
export const MAIN = 'main';

function App() {

  const [mode, setMode] = useState(SIGNUP);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    if (user.username) {
      setMode(MAIN);
    }
  }, [user]);

  return (
    <Container>
      {(() => {
        switch (mode) {
          case SIGNUP:
            return <Signup />;
          case MAIN:
            return <Main />
          default:
            return null;
        }
      })()}
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`;

export default App;
