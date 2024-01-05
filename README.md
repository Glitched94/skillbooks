# Skillbooks
This goal of this script is to help you find skill-granting items in your inventory that would give you skills you don't already know.
There are several flags that can be used when running this script to modify the behavior and what is used.

## Basic Usage
Install by using `git checkout Glitched94/skillbooks.git release`

At it's core, the most basic usage of this script is calling `skillbooks`. This command will print a list of all skill-granting items in your inventory.
```
> skillbooks

Found 35 skill-granting items in your inventory that you haven't used...
Really Expensive Jewelry and You, which gives the skill 'Really Expensive Jewelrycrafting'
Kissin' Cousins, which gives the skill 'Awesome Balls of Fire'
Tales from the Fireside, which gives the skill 'Conjure Relaxing Campfire'
...
```

## Using Skills
Each of these commands is mutually exclusive, you cannot mix and match them with each other.
- `skillbooks use` - Will use any skill-graning items in your inventory that Mafia has marked as `reusable`. This does not include books that give `(used)` copies but does include any existing `(used)` books you already have
- `skillbooks useKarma` - Checks how much karma you have available and learns as many skills as you have the karma to softcore perm. Only uses items marked as `reusable`, same as the previous command.
- `skillbooks useAll` - Uses any and all skill-granting items that you don't already know from your inventory. Since this can be a destructive action if you don't have the karma to perm all of the skills, please use this at your own risk.
- `skillbooks useAllKarma` - Checks how much karma you have available and learns as many skills as you have the karma to softcore perm. Uses all items, not just `reusable`, same as previous command.

## Buying Skills
Skillbooks includes a command to purchase all skill-granting items you haven't previously used below a configured price point. To set the maximum price to spend on acquiring a new skill-granter, set the `tptb.skillbooks.priceLimit` property, like so `set tptb.skillbooks.buyLimit=50000`.
- `skillbooks buy` - Will search the mall for all skill-granting items priced below your `priceLimit` and purchase them. _Does not use the items purchased!_
- `skillbooks buy use` - Will purchase skills like above, then use them. Can use any of the different `use` methods defined above.

## Simulation
Automating the usage or purchase of items can be a scary concept. If you'd like to see what actions the script will perform before performing them, you can run any of the above commands and include `sim` to generate a text output of what would be performed.
- `skillbooks useAll sim` would generate an output like:
```
> skillbooks useAll sim

Found 1 skill-granting items in your inventory that you haven't used...
Sim: Using 1 A Beginner's Guide to Charming Snakes.
```

- `skillbooks buy sim`
```
> skillbooks buy sim

Sim: Buying 1 Really Expensive Jewelry and You at 4750
Sim: Buying 1 Blizzards I Have Died In at 82200
Sim: Buying 1 Maxing, Relaxing at 50900
Sim: Buying 1 Travels with Jerry at 60497
Sim: Buying 1 Let Me Be! at 17290
Sim: Buying 1 Asleep in the Cemetery at 17448
Sim: Buying 1 Sensual Massage for Creeps at 59000
Sim: Buying 1 The Joy of Wassailing at 16000
Sim: Buying 1 The Thorax's Codex of Tormenting Plants at 22222
Sim: Buying 1 Ghost Pinching Quarterly at 56006
Sim: Buying 1 warbear metalworking primer at 39000
Sim: Buying 1 Spelunker of Fortune at 92000
Sim: Buying 1 training scroll: Shivering Monkey Technique at 19900
Sim: Buying 1 Pop Art: a Guide at 67000
You'd spend 604213 meat to get 14 new skill-granting items.
```
