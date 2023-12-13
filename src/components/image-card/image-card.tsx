import { BtnComponent } from "../btn/btn.component.tsx";

type ImageCardProps = {
  imageSrc: string,
  link: string,
}
export const ImageCardComponent = ({ imageSrc, link }  : ImageCardProps) => {
  return (
    <div className='bg-cover bg-center mx-[20px] my-[35px] w-[400px] h-[475px] rounded-[15px] relative flex items-center justify-center'
         style={{ backgroundImage: `url(${imageSrc})` }}>
      <BtnComponent text='Visit profile' link={link}></BtnComponent>
    </div>
  )
}