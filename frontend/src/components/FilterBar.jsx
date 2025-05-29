import contactsIcon from '../assets/icons/contacts.svg'
import galleryIcon from '../assets/icons/gallery.svg'
import mapIcon from '../assets/icons/map.svg'
import shortlistedIcon from '../assets/icons/shortlisted.svg'
import sortIcon from '../assets/icons/sort.svg'
import { useState } from 'react'


const FilterBar = ({ onShortlistToggle }) => {
  const [showShortlisted, setShowShortlisted] = useState(false)

  const handleShortlistClick = () => {
    const newValue = !showShortlisted
    setShowShortlisted(newValue)
    onShortlistToggle(newValue)
  }
  return (
    <div className="flex h-[91px] bg-white border border-gray-100 text-sm font-medium text-[#716966] px-4">
  
  {/* First 3 icons */}
  <div className="flex gap-[40px] pl-[16px]">
    <div className="flex flex-col items-center justify-center">
      <img src={contactsIcon} alt="Contacts" className="w-[34px] h-[42px]" />
    </div>
    <div className="flex flex-col items-center justify-center">
      <img src={galleryIcon} alt="Gallery" className="w-[27px] h-[40.5px]" />
    </div>
    <div className="flex flex-col items-center justify-center">
      <img src={mapIcon} alt="Map" className="w-[17px] h-[40.75px]" />
    </div>
  </div>

  {/* Spacer */}
  <div className="flex-1" />

  {/* Last 2 icons */}
  <div className="flex gap-[30px] pr-[16px]">
        <div className="flex flex-col items-center justify-center cursor-pointer" onClick={handleShortlistClick}>
          <img
            src={shortlistedIcon}
            alt="Shortlisted"
            className={`w-[42px] h-[46px] ${showShortlisted ? 'opacity-100' : 'opacity-40'}`}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={sortIcon} alt="Sort" className="w-[31px] h-[44px]" />
        </div>
      </div>
</div>

  )
}

export default FilterBar
