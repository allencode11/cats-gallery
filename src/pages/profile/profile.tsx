type ProfileComponentProps = {
  id: string
}
export default function ProfileComponent({ id }: ProfileComponentProps) {
  return (
    <div className='bg-slate-800 min-h-screen text-slate-50 min-w-screen flex flex-col justify-center items-center'>
    <div className='text-[160px]'>Cat {id} Profile</div>
  </div>
  )
}

