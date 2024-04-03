import logo from '../../logo.svg';
import { FaSearch } from 'react-icons/fa';

function Category() {
    return (
      <div className='w-64 px-4 bg-slate-200'>
        <div className="py-6">
            <div className="flex justify-center">
                <img className="w-24 h-24 rounded-full mb-2 bg-slate-100" src={logo} alt="이미지 설명" />
            </div>
            <div className='flex flex-col text-center'>
                <p><b>개발 스터디</b></p>
                <p>김선규</p>
            </div>
        </div>

        <div className="flex items-center justify-between text-center">
            <div className='flex justify-start'>
                <div>
                    <span>전체</span>
                    <br/>
                    <span>12,140</span>
                </div>
            </div>

            <div className='flex justify-end'>
                <div>
                    <span>오늘</span>
                    <br/>
                    <span>13</span>
                </div>

                <div>
                    <span>어제</span>
                    <br/>
                    <span>140</span>
                </div>
            </div>
        </div>

        <div className="py-8">
            <div className="flex items-center w-full h-12 bg-slate-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <FaSearch className='flex-none m-3'/>
                <input className='flex-auto w-full h-full p-2' type="text" placeholder="Type something..." />
            </div>
        </div>
      </div>
    );
  }
  
  export default Category;