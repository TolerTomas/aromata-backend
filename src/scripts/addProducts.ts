import axios from "axios";
import { db } from "../db";

db.forEach(p => {
    axios.post('http://127.0.0.1:500/ecommerce/addProduct', p);
})