type ProfileCardProps = {
  imageSrc: string,
  title: string,
  content: string,
  author: string,
}
export const ProfileCardComponent = ({ imageSrc, title, content, author }  : ProfileCardProps) => {

  return (
    <div className='flex flex-wrap justify-center items-center w-screen'>
      <div className='bg-cover bg-center mx-[60px] my-[35px] w-[500px] max-sm:w-[250px] max-sm:h-[320px] h-[575px] rounded-[15px]'
           style={{ backgroundImage: `url(${imageSrc})` }}>
      </div>
      <div className='flex flex-col items-center w-[500px] max-sm:w-[300px]  text-center'>
        <div className='text-[56px] max-sm:text-[32px] mb-[25px] text-slate-400'>{title?.toUpperCase()}</div>
        <div className='text-[40px] max-sm:text-[24px] mb-[20px] text-slate-50'>{content}</div>
        <div className='text-[32px] max-sm:text-[16px] w-[500px] max-sm:w-[300px] text-slate-500 text-right'>{author}</div>
      </div>
  </div>
  )
}