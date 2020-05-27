import {
  MongoClient,
  config,
} from "../deps.ts";
import {
  User,
  userToQuery,
} from "./helpers.ts";
config();

const client = new MongoClient();
const MONGODB_URI = Deno.env.get("MONGODB_URI") as string;
client.connectWithUri(MONGODB_URI);

const isDev = Deno.env.get("IS_DEV") === "1";
const db = client.database(isDev ? "dev" : "production");
const users = db.collection("users");

const hello = "db index";
export { hello };

export const addUser = async (user: User): Promise<User> => {
  let id: string;
  try {
    id = await users.insertOne({ ...user });
  } catch (err) {
    throw new Error("Failed at addUser");
  }
  return { ...user, id };
};

export const updateUser = async (
  targetUser: User,
  updatedUser: User,
): Promise<User> => {
  try {
    const { upsertedId } = await users.updateOne(
      userToQuery(targetUser),
      { $set: { ...updatedUser } },
    );
    console.log({ upsertedId });
  } catch (err) {
    throw new Error("Failed at addUser");
  }
  return { ...targetUser, ...updatedUser };
};

export { User };
