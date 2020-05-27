// deno.land/x/
export { Application, Router } from "https://deno.land/x/oak/mod.ts";
export { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
export { config } from "https://deno.land/x/dotenv/mod.ts";

// dev.jspm.io/
import { default as MagicAdmin } from "https://dev.jspm.io/@magic-sdk/admin";
import { default as passport } from "https://dev.jspm.io/passport";
import { default as passportMagic} from "https://dev.jspm.io/passport-magic";

const { Magic, SDKError } = MagicAdmin;

export {
  Magic,
  SDKError,
  passport,
  passportMagic
};
