import Main from '@src/components/Main';
import Modal from '@src/components/Modal';
import Signup from '@src/components/Signup';
import '@src/components/assets/scss/reset.scss';
import { getArticles } from '@src/redux/articles';
import { setUsername } from '@src/redux/user';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export const SIGNUP = 'signup';
export const MAIN = 'main';

function App() {

  const dispatch = useDispatch();
  const [mode, setMode] = useState(SIGNUP);
  const user = useSelector((state: any) => state.user);
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    dispatch(getArticles());
  }, [])

  useEffect(() => {
    if (userName) {
      dispatch(setUsername(userName));
    }

  }, [userName]);


  useEffect(() => {
    if (user.username) {
      setMode(MAIN);
    }
  }, [user]);

  return (
    <Container>
      {/* show modal */}
      <Modal />

      {/* Show application */}
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
