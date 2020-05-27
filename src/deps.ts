import { Passport } from "./types/mod.ts";

// deno.land/x/
export { Application, Router } from "https://deno.land/x/oak/mod.ts";
export { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
export { config } from "https://deno.land/x/dotenv/mod.ts";

// dev.jspm.io/
interface MagicSDKInterface {
  Magic: any;
  SDKError: any;
}
interface MagicPassportInterface {
  Strategy: any;
}

import * as MagicSDK from "https://dev.jspm.io/@magic-sdk/admin";
import * as passportModule from "https://dev.jspm.io/passport";
import * as MagicPassport from "https://dev.jspm.io/passport-magic";

export const { Magic, SDKError } = MagicSDK.default as MagicSDKInterface;
export const passport = passportModule.default as Passport;
export const { Strategy: MagicStrategy } = MagicPassport
  .default as MagicPassportInterface;
