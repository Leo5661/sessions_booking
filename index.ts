import * as dotenv from "dotenv";
import app from "./server";

dotenv.config();

if(!process.env.PORT){
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});