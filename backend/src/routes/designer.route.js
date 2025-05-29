import express from "express";
import { getDesigners } from "../controllers/designer.controller.js";
import { updateDesign } from "../controllers/designer.controller.js";

const router = express.Router();

router.get("/designer", getDesigners);
router.put('/designer/:id/shortlist', updateDesign);

export default router;
