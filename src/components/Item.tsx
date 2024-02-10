import { FaGithub } from 'react-icons/fa6'
import { TfiAndroid } from 'react-icons/tfi'

interface ItemProps {
  videoLink: string
  apkLink: string
  gitHubLink: string
  title: string
  poster: string
}

const Item: React.FC<ItemProps> = ({ videoLink, apkLink, gitHubLink,title,poster }) => {
  return (
    <div className="w-52 rounded-lg space-y-3 h-fit bg-white p-3">
      <p className='text-center font-bold border-b'>{title}</p>
      <video poster={poster} src={videoLink} className="rounded-md" controls autoPlay loop muted />
      <a
        href={apkLink}
        target="_blank"
        className="bg-rose-500 w-full flex items-center justify-center gap-3 text-center rounded-md py-1 hover:bg-rose-400 transition-all ease-in-out duration-200 font-semibold">
        <p>دانلود برنامه</p>
        <TfiAndroid size={20} />
      </a>
      <a
        href={gitHubLink}
        target="_blank"
        className="bg-rose-500 w-full flex items-center justify-center gap-3 text-center rounded-md py-1 hover:bg-rose-400 transition-all ease-in-out duration-200 font-semibold">
        <p>گیت هاب</p>
        <FaGithub size={20} />
      </a>
    </div>
  )
}

export default Item
