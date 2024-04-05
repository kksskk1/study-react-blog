import logo from '../../logo.svg';

function Header() {
  return (
    <div className='relative w-full h-64 overflow-hidden'>
        <img className='absolute inset-0 m-auto blur-lg' src={logo}/>
    </div>
  );
}

export default Header;
