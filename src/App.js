import Header from './components/Header';
import Category from './components/Category';
import BoardList from './components/BoardList';
import Footer from './components/Footer';

function App() {
  return (
    <div className='mx-24 text-center'>
      <Header/>
      <div className='flex border-b-4 h-screen'>
          <div className='w-1/6 border-r-4'><Category/></div>
          <div className='w-5/6'><BoardList/></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;