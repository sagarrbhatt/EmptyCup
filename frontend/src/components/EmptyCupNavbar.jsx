import { MoreVertical } from 'lucide-react'
import emptycuplogo from '../assets/empty-logo.png'

const EmptyCupNavbar = () => {
  return (
    <div className="max-w mx-auto">

    <nav className="h-[72px] bg-white shadow border border-gray-100 px-4 py-2 flex items-center justify-between">
      
      {/* Logo (Left) with padding */}
      <div className="pl-[20px]">
        <div className="w-[31px] h-[31px]">
            <img
            src={emptycuplogo}
            alt="Logo"
            className="w-full h-full object-contain"
            />
        </div>
       </div>


      {/* Center Text */}
      <h1
        className="text-[24px] font-chivo text-center flex-1 mx-4"
        style={{ color: '#716966', fontWeight: 650 }}
      >
        EmptyCup
      </h1>

      {/* More Options Icon with padding */}
      <div className="pr-[20px]">
        <button className="text-black w-[27px] h-[27px] flex items-center justify-center">
            <MoreVertical className="w-full h-full" />
        </button>
      </div>


    </nav>
<hr style={{ height: '0.25px', backgroundColor: '#D0D0D0', border: 'none' }} />
{/* <div className="w-max h-[0.25px] bg-[#D0D0D0] mx-auto" /> */}

    </div>
  )
}

export default EmptyCupNavbar
