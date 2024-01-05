import { Args } from "grimoire-kolmafia";
import { Item, buy, mallPrice, print, use } from "kolmafia";
import { $items, $skill, canUse, get, have } from "libram";

import { args } from "./lib/args";

export function main(command: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }

  // Filter item list to only items that grant skills that the player doesn't have and that they can use.
  var skillGranters: Item[] = $items``
    .filter((item) => item.skill !== $skill`none` && !have(item.skill));

  if (args.buy) {
    if (args.buyLimit <= 0) {
      print("Your buyLimit is set to 0, please set a real value and try again", "red");
      return;
    }

    buyItems(skillGranters);
  }

  // Get just the list of items they have available
  var haveItems: Item[] = skillGranters
    .filter((item) => have(item));

  if (args.use) {
    useReusable(haveItems);
  } else if (args.useKarma) {
    useKarma(haveItems);
  } else if (args.useAll) {
    print(`Found ${haveItems.length} skill-granting items in your inventory that you haven't used...`, "green");
    useAll(haveItems);
  } else {
    haveItems.forEach((item) => {
      print(`${item}`)
    });
  }
}

function buyItems(items: Item[]) {
  var dontHave = items.filter((item) => !have(item));
  var totalPrice = 0;
  var skillCount = 0;
  dontHave.forEach((item) => {
    var itemPrice = mallPrice(item);
    if (itemPrice > 0 && itemPrice < args.buyLimit) {
      totalPrice += itemPrice;
      skillCount++;
      if (args.sim) {
        print(`Buying 1 ${item} at ${itemPrice}`);
      } else {
        buy(1, item, args.buyLimit);
      }
    }
  });

  if (args.sim) {
    print(`You'd spend ${totalPrice} meat to get ${skillCount} new skill-granting items.`, "green");
  }
}

function useReusable(inv: Item[]) {
  var reusable = inv
    .filter((item) => item.reusable);

  print(`Found ${reusable.length} re-usable skill-granting items in your inventory that you haven't used...`, "green");
  useAll(reusable);
}

function useKarma(inv: Item[]) {
  var bankedKarma = get("bankedKarma");
  var limit = bankedKarma / 100;

  var permable = inv.slice(0, limit);

  print(`Found ${permable.length} skill-granting items in your inventory that you haven't used and have the karma to softcore perm...`, "green");
  useAll(permable);
}

function useAll(inv: Item[]) {
  inv.forEach((item) => {
    if (args.sim) {
      print(`Using 1 ${item}.`);
    } else {
      use(1, item);
    }
  });
}