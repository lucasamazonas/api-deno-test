import {Req, Res, Router} from "../../deps.ts"

const router = new Router()

router.get("/", (req: Req, res: Res) => {
    res.reply = {
        page: "Home",
    }
})

export default router