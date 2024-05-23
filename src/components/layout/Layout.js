import Header from './Header';
import Sidebar from './Sidebar';

function Layout(props) {
    return (
        <div className='flex flex-wrap'>
            <div className='flex-initial'>
                <Sidebar/>
            </div>
            <div className='flex-1 flex flex-col'>
                <Header/>
                <div className="px-64 py-16">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
  
export default Layout;