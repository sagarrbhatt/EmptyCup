import Designer from "../models/designer.model.js";

export const getDesigners = async (req, res) => {
    try {
        const designers = await Designer.find({});
        res.status(200).json(designers);
    } catch (error) {
        console.log("Error in getDesigners controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateDesign = async (req, res) => {
  try {
    const { id } = req.params
    const { shortlisted } = req.body

    const updatedDesigner = await Designer.findByIdAndUpdate(
      id,
      { shortlisted },
      { new: true }
    )

    if (!updatedDesigner) {
      return res.status(404).json({ message: 'Designer not found' })
    }

    res.status(200).json(updatedDesigner)
  } catch (error) {
    console.error('Error updating shortlist:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
};
