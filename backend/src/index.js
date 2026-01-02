import app from "./app.js";
import { ENV } from "./config/env.js";


app.listen(ENV.PORT, () => {
    console.log(`Server is listening at PORT: ${ENV.PORT}`)
})

