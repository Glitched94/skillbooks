import { Args } from "grimoire-kolmafia";

export const args = Args.create("skillbooks", "A simple script to help you find and use skill-granting items you didn't know you had.", {
  use: Args.flag({
    setting: "",
    default: false,
    help: "When used, will attempt to use any skill-granting items that are reusable. Will not use items that give (Used) copies of themselves, but will use (Used) copies if you have them"
  }),
  useKarma: Args.flag({
    setting: "",
    default: false,
    help: "When used, will attempt to use as many reusable skill-granting items as you can afford to perm with your current \"bankedKarma\" value."
  }),
  useAll: Args.flag({
    setting: "",
    default: false,
    help: "When used, will attempt to use all skill-granting items, reusable or otherwise."
  }),
  useAllKarma: Args.flag({
    setting: "",
    default: false,
    help: "When used, will attempt to use as many skill-granting items, reusable or otherwise, as you can afford to perm with your current \"bankedKarma\" value."
  }),
  buy: Args.flag({
    setting: "",
    default: false,
    help: "When used, will attempt to buy any items that grant skills you don't have priced below your \"buyLimit\". Does not use the skillbooks, you can use this in conjunction with one of the use commands to buy and use."
  }),
  buyLimit: Args.number({
    setting: "tptb.skillbooks.buyLimit",
    default: 0,
    help: "Defines the price limit for buying skill-granting items when used with the \"buy\" flag."
  }),
  sim: Args.flag({
    setting: "",
    default: false,
    help: "When used with another flag, will simply simulate what the result would be instead of actually performing it."
  })
})