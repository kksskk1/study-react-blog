import Header from './Header';
import Category from './Category';
import Content from './Content';

function Layout(props) {
    return (
        <div className='flex border'>
            <div className='border'>
                <Category/>
            </div>

            <div className='border'>
                <div class='border h-48'><Header/></div>
                <div class='border'><Content/></div>
            </div>
        </div>
    );
}
  
export default Layout;