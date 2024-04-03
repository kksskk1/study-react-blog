import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

function Layout(props) {
    return (
        <div className='flex border'>
            <div className='border'>
                <Sidebar/>
            </div>

            <div className='border'>
                <div class='border h-48'><Header/></div>
                <div class='border'><Content/></div>
            </div>
        </div>
    );
}
  
export default Layout;