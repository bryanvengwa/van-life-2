import { getAllVans } from "../controllers/vanController.mjs";
import { createVan } from "../controllers/vanController.mjs";
import { updateVan } from "../controllers/vanController.mjs";
import { deleteVan } from "../controllers/vanController.mjs";
import { getVanById } from "../controllers/vanController.mjs";


const router = express.Router();


router.get("/vans", getAllVans);
router.get("/vans/:id", getVanById);
router.post("/vans", createVan);
router.put("/vans/:id", updateVan);
router.delete("/vans/:id", deleteVan);


export default router;