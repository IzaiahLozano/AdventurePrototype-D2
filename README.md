A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: I have a scene for the starting room, the garage, the staircase, the living room and bedroom
- **2+ scenes *not* based on `AdventureScene`**: I have a production intro and two alternate ending screens
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: a method to cleanup the items being picked up
    - Enhancement 2: guided through the game

Experience requirements:
- **4+ locations in the game world**: 5 scenes in total as mentioned above
- **2+ interactive objects in most scenes**: I have a screwdriver, and paperclip to be used to escape, as well as a pile of clothes to collect if the player chooses to
- **Many objects have `pointerover` messages**: I put a unique message for the player in each room, I also added in messages for certain objects in the room to help guide the player in what to do
- **Many objects have `pointerdown` effects**: Most of the pointerdown objects were doorknobs, but also the objects I mentioend before like the paperclip.
- **Some objects are themselves animated**: Animated objects are the tools that are collected, and the doorknobs

Asset sources:
- Every assest was created by me in adobe illustrator.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.