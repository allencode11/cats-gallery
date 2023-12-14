import img from '../../assets/images/cat.png'
import {BtnComponent} from "../../components/btn/btn.component.tsx";
export default function NotFoundPage() {
  return (
    <div className='bg-slate-800 min-h-screen text-slate-50 min-w-screen flex flex-col justify-center items-center'>
        <img className='w-200px h-[300px]' src={img} alt='cat-img'/>
        <h1 className="text-[80px] font-bold mb-4">404 - Not Found</h1>
        <p className=" text-[48px] text-[#ffcfd3] mb-[35px]">Sorry, the page you are looking for does not exist.</p>
      <BtnComponent text='Back Home' link='/' style=''></BtnComponent>
    </div>
  );
}