import { BtnComponent } from "../btn/btn.component.tsx";

type ImageCardProps = {
  imageSrc: string,
  link: string,
}
export const ImageCardComponent = ({ imageSrc, link }  : ImageCardProps) => {
  return (
    <div className='bg-cover bg-center mx-[20px] my-[35px] w-[400px] h-[475px] max-sm:w-[250px] max-sm:h-[320px] rounded-[15px] relative flex items-center justify-center'
         style={{ backgroundImage: `url(${imageSrc})` }}>
      <BtnComponent text='Visit profile' link={`/profile/${link}`} style='absolute bottom-[-25px]'></BtnComponent>
    </div>
  )
}