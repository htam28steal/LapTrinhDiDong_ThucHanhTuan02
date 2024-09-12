// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
    ]);

    console.log(gameEvents)

    const events = [...new Set(gameEvents.values())];
    console.log(events)


 //2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log

console.log(`Before remove yellow card 64'`,gameEvents)
gameEvents.delete(64)
console.log(`After remove yellow card 64'`,gameEvents)

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
const totalEvents = gameEvents.size;
const gameDuration = 90; 
const avgTimeBetweenEvents = gameDuration / totalEvents;
console.log(`An event happened, on average, every ${avgTimeBetweenEvents.toFixed(2)} minutes`);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

for (const [minute, event] of gameEvents) {
    if (minute <= 45) {
      // Sự kiện xảy ra trong nửa đầu trận đấu
      if(event==='⚽ GOAL'){
        console.log(`[FIRST HALF] ${minute}: ${event}`);
        console.log(`[SECOND HALF] ${minute}: ${event}`);
      }
    } else {
      // Sự kiện xảy ra trong nửa sau trận đấu
      if(event==='⚽ GOAL'){
        console.log(`[SECOND HALF] ${minute}: ${event}`);
      }
    }
  }