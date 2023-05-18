import Main from '@src/components/Main';
import Signup from '@src/components/Signup';
import '@src/components/assets/scss/reset.scss';

// Aqui posso ter um switch que através do redux vai verificar qual página ele está

function App() {

  return (
    <div className='container'>
      {/* <Signup /> */}
      <Main/>
    </div>
  );
}

export default App;
