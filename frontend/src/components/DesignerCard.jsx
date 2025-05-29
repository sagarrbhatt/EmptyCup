import detailsIcon from '../assets/icons/arrow.svg'
import hideIcon from '../assets/icons/hide.svg'
import shortlistIcon from '../assets/icons/shortlist.svg'
import reportIcon from '../assets/icons/report.svg'
import shortlistedYesIcon from '../assets/icons/shortlist_yes.svg'
import { useState } from 'react'
import { axiosInstance } from '../lib/axios'


const DesignerCard = ({
  id,
  name,
  stars,
  description,
  projects,
  years,
  price,
  phone1,
  phone2,
  shortlisted: initialShortlisted,
  
}) => {

  const [shortlisted, setShortlisted] = useState(initialShortlisted)

  const toggleShortlist = async () => {
    try {
      const res = await axiosInstance.put(`/emptycup/designer/${id}/shortlist`, {
        shortlisted: !shortlisted
      })
      setShortlisted(res.data.shortlisted)
    } catch (err) {
      console.error('Error updating shortlist:', err)
    }
  }
  return (
<div className={`p-4 flex justify-between border-b border-gray-100 text-black font-chivo ${shortlisted ? 'bg-[#fffcf2]' : 'bg-[#ffffff]'}`}>
      <div className="w-[237px] pl-[33px]">
        <h2 className="font-bold text-[18px]">{name}</h2>
        <p className="mb-1 w-[96px] h-[16px]">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</p>
        <p className="text-[10px] mb-2">{description}</p>
        <div className="flex space-x-6 mb-5 mt-5 font-chivo text-center">
  <div>
    <span className="block text-[24px] leading-[24px] font-bold">{projects}</span>
    <span className="block text-[10px] leading-[10px] font-normal">Projects</span>
  </div>
  <div>
    <span className="block text-[24px] leading-[24px] font-bold">{years}</span>
    <span className="block text-[10px] leading-[10px] font-normal">Years</span>
  </div>
  <div>
    <span className="block text-[24px] leading-[24px] font-bold">{price}</span>
    <span className="block text-[10px] leading-[10px] font-normal">Price</span>
  </div>
</div>

        <div className="text-[16px] font-normal">
          <p>+91 - {phone1}</p>
          <p>+91 - {phone2}</p>
        </div>
      </div>

  {/* <div style={{ width: '0.25px', backgroundColor: '#D0D0D0', height: '100%' }} /> */}
  {/* <hr style={{ width: '0.25px', backgroundColor: '#D0D0D0', border: 'none' , height: '100%'}} /> */}
<div
  style={{ width: '0.25px' }}
  className="ml-[60px] mr-[20px] bg-gray-100"
></div>



      {/* Actions with icons */}
      <div className="flex flex-col justify-around items-center text-xs text-[#716966] ml-2 space-y-2 pr-[25px]">
        <button className="flex flex-col items-center w-[23px] h-[22px]">
          <img src={detailsIcon} alt="Details" className="mb-1" />
        </button>
        <button className="flex flex-col items-center w-[18px] h-[20px] ">
          <img src={hideIcon} alt="Hide" className="mb-1" />
        </button>
        <button
          onClick={toggleShortlist}
          className="flex flex-col items-center w-[25px] h-[22px]"
        >
          <img
            src={shortlisted ? shortlistedYesIcon : shortlistIcon}
            alt="Shortlist"
            className="mb-1"
          />
        </button>
        <button className="flex flex-col items-center w-[23px] h-[22px]">
          <img src={reportIcon} alt="Report" className="mb-1" />
        </button>
      </div>
    </div>
  )
}

export default DesignerCard
