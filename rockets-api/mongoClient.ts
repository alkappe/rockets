import { DB_NAME, MONGO_URL } from "./config";
import { MongoClient } from 'mongodb' 

const mongo = new MongoClient(MONGO_URL);
const db = mongo.db(DB_NAME)
export { db }