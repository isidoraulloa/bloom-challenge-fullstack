import { Router } from "express";
import { getBrandById, listBrands } from "./brand";
import { listFaq } from "./faq";

const router = Router();

router.get("/", (req, res) => {
	res.send("API is working.");
});
router.get("/brands", listBrands);
router.get("/brands/:id", getBrandById);
router.get("/faq", listFaq);
export default router;
