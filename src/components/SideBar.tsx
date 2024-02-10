import { FaMobileScreenButton } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
const SideBar = () => {
  return (
    <div
      dir="rtl"
      className="bg-[#DAD5F7] w-[28%] h-full right-0 space-y-5 pt-5 border-l border-l-neutral-300">
      <div className='flex items-center justify-center'>
        <div className="w-48 h-48 pt-24 overflow-hidden rounded-full flex items-center justify-center">
          <img src="/images/hosein.jpg" alt="image" />
        </div>
      </div>
      <div className="text-right space-y-2 px-3">
        <p className="text-lg font-semibold">سلام وقت بخیر</p>
        <p className="leading-7 border-b border-b-neutral-400 pb-4">
          حسین امدادی هستم برنامه نویس فرانت و توی این صفحه قراره برنامه هایی که
          با تکنولوژی{' '}
          <span className="text-red-600 font-bold">React Native</span> و
          کتابخانه های مرتبط توسعه دادم باهاتون به اشتراک بزارم امیدوارم براتون
          مفید واقع بشه.
        </p>
      </div>
      <div className="space-y-3 px-3">
        <div className='font-bold text-lg'>
            <p>ارتباط با من</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <FaMobileScreenButton size={20} />
            <p>موبایل:</p>
          </div>
          <div>
            <p className="font-semibold">09120624492</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <MdEmail size={20} />
            <p>ایمیل:</p>
          </div>
          <div>
            <p className="font-semibold">hemdadi71@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <FaGithub size={20} />
            <p>گیت هاب:</p>
          </div>
          <div>
            <a
              href="https://github.com/hemdadi71"
              target="_blank"
              className="font-semibold">
              hemdadi71
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}



export default SideBar
