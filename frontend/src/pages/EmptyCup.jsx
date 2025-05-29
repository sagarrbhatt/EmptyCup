import { useEffect, useState } from 'react'
import { axiosInstance } from "../lib/axios"
import FilterBar from '../components/FilterBar.jsx'
import DesignerCard from '../components/DesignerCard.jsx'

const EmptyCup = () => {
  const [designers, setDesigners] = useState([])
  const [loading, setLoading] = useState(true)
  const [showShortlistedOnly, setShowShortlistedOnly] = useState(false)

  useEffect(() => {
    const fetchDesigners = async () => {
      try {
        const res = await axiosInstance.get('/emptycup/designer')
        setDesigners(res.data)
        console.log("Designer Data collected successfully")
      } catch (error) {
        console.log("Error fetching designers: ", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDesigners()
  }, [])

  const handleShortlistToggle = (value) => {
    setShowShortlistedOnly(value)
  }

  const filteredDesigners = showShortlistedOnly
    ? designers.filter((d) => d.shortlisted)
    : designers

  return (
    <div className="max-w mx-auto min-h-screen bg-white">
      <FilterBar onShortlistToggle={handleShortlistToggle} />
      {loading ? (
        <p className="text-center mt-10">Loading designers...</p>
      ) : (
        filteredDesigners.map((d) => (
          <DesignerCard key={d._id} {...d} id={d._id} />
        ))
      )}
    </div>
  )
}

export default EmptyCup
