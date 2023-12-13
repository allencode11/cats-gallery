import { useNavigate } from 'react-router-dom';

type BtnProps = {
  text: string;
  link: string
}
export const BtnComponent = (btn: BtnProps) => {
  const navigate = useNavigate();
  const redirectToLink = () => {
    navigate(`/profile/${btn.link}`);
  }
  return (
    <div
      className={'bg-slate-700 text-[32px] w-[250px] h-[50px] rounded-[20px] flex ' +
        'justify-center items-center cursor-pointer text-[48px] absolute bottom-[-25px]'}
      onClick={redirectToLink}
    >{btn.text}</div>
  )
}