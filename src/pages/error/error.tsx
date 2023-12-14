import { useRouteError } from "react-router-dom";
import img from "../../assets/images/cat2.png";
import { BtnComponent } from "../../components/btn/btn.component.tsx";

type ErrorData = {
  message: string,
  code: number
}
export default function ErrorPage() {
  const error = useRouteError() as ErrorData;

  return (
    <div className='bg-slate-800 p-[30px] text-center min-h-screen text-slate-50 min-w-screen flex flex-col justify-center items-center'>
      <img className='w-200px h-[300px]' src={img} alt='cat-img'/>
      <h1 className='text-[32px] mb-4'>Error - {error.message}</h1>
      <p className='text-[#ffcfd3] px-[50px] mb-[35px] text-[48px]'>Oops! Something went wrong. We're working to fix the issue. Please try again later!</p>
      <BtnComponent text='Back Home' link='/' style=''></BtnComponent>
    </div>
  );
}