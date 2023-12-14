import { useNavigate } from 'react-router-dom';

type BtnProps = {
  text: string,
  link: string,
  style: string
}
export const BtnComponent = (btn: BtnProps) => {
  const navigate = useNavigate();
  const redirectToLink = () => {
    navigate(`${btn.link}`);
  }
  return (
    <div
      className={`bg-slate-700 max-sm:text-[24px] w-[250px] h-[50px] max-sm:w-[200px] max-sm:h-[40px] 
        rounded-[20px] flex justify-center items-center cursor-pointer text-[48px] ${btn.style}`}
      onClick={redirectToLink}
    >{btn.text}</div>
  )
}