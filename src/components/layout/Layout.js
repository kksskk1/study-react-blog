import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

function Layout(props) {
    return (
        <div className='flex flex-wrap'>
            <div className='flex-none'>
                <Sidebar/>
            </div>
            <div className='flex-auto flex flex-col'>
                <Header/>
                <Content/>
            </div>
        </div>
    );
}
  
export default Layout;