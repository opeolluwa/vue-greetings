interface GreetingOptions {
  [key: string]: string[]
}

const options: GreetingOptions = {
  monday: [
    'Happy Monday — a fresh week awaits',
    'New week, new opportunities',
    'Welcome back — let\'s make this week count',
    'Monday\'s here — time for a strong start',
    'A new week begins — welcome back',
  ],
  tuesday: [
    'Happy Tuesday — keep the momentum going',
    'Tuesday\'s in full swing',
    'Hope your week is off to a great start',
    'Another productive day ahead',
  ],
  wednesday: [
    'Happy Wednesday — halfway through the week',
    'Midweek check-in — hope things are going well',
    'Wednesday already — the week is flying by',
    'Halfway there — keep up the great work',
  ],
  thursday: [
    'Happy Thursday — the finish line is in sight',
    'Almost there — one more day to go',
    'Thursday\'s here — strong week so far',
    'Nearly the weekend — keep going',
    'Great progress this week — almost Friday',
  ],
  friday: [
    'Happy Friday — well-deserved weekend ahead',
    'Friday at last — hope you had a great week',
    'Wrapping up the week — enjoy your weekend',
    'Happy Friday — time to finish strong',
    'The weekend is just around the corner',
  ],
  saturday: [
    'Happy Saturday — enjoy your time off',
    'Hope you\'re having a restful weekend',
    'Saturday check-in — recharge and refresh',
    'Enjoy your Saturday — you\'ve earned it',
  ],
  sunday: [
    'Happy Sunday — make the most of your rest day',
    'Sunday\'s here — recharge for the week ahead',
    'Enjoy your Sunday — a new week is on the horizon',
    'Hope you\'re having a relaxing weekend',
  ],
  morning: [
    'Good morning — here\'s to a productive day',
    'Good morning — ready to get started?',
    'Rise and shine — a great day awaits',
    'Good morning — wishing you a wonderful day',
    'Morning — let\'s make today count',
  ],
  day_break: [
    'Hope your morning is off to a great start',
    'The day is well underway — keep it up',
    'Mid-morning — hope everything\'s going smoothly',
    'Looking good so far today',
  ],
  afternoon: [
    'Good afternoon — hope your day is going well',
    'Afternoon check-in — keep up the great work',
    'Good afternoon — staying productive?',
    'Hope you\'re having a smooth afternoon',
    'Afternoon — the day\'s moving along nicely',
  ],
  evening: [
    'Good evening — wrapping up for the day?',
    'Good evening — hope you had a productive day',
    'Evening — time to wind down and reflect',
    'Hope today was a good one',
    'Good evening — well done today',
  ],
  midnight: [
    'Burning the midnight oil — hope it\'s going well',
    'Late night session — take care of yourself',
    'Working late — your dedication shows',
    'Quiet hours — hope you\'re making progress',
    'Still at it — remember to get some rest soon',
  ],
  new_month: [
    'Happy new month — a fresh chapter begins',
    'Welcome to a brand new month',
    'New month, new goals — wishing you the best',
    'Here\'s to a great month ahead',
  ],
  new_year: [
    'Happy New Year — wishing you success ahead',
    'Happy New Year — here\'s to new beginnings',
    'Cheers to a wonderful year ahead',
  ],
  christmas: [
    'Merry Christmas — wishing you joy and warmth',
    'Season\'s Greetings — have a wonderful holiday',
    'Merry Christmas — enjoy the festivities',
    'Wishing you a Merry Christmas',
  ],
  valentine: [
    'Happy Valentine\'s Day',
    'Wishing you a lovely Valentine\'s Day',
    'Happy Valentine\'s Day — spread the love',
  ],
  other: [
    'Welcome back',
    'Good to see you',
    'Hello — hope all is well',
    'Welcome — glad you\'re here',
    'Hello there',
  ],
}

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)]
}

const dayMap: Record<number, string> = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
}

export function getGreeting(): string {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  const isNewMonth = now.getDate() === 1
  const isChristmas = now.getMonth() === 11 && now.getDate() === 25
  const isValentine = now.getMonth() === 1 && now.getDate() === 14

  if (isNewMonth) return pickRandom(options.new_month)
  if (isChristmas) return pickRandom(options.christmas)
  if (isValentine) return pickRandom(options.valentine)

  if (hour >= 1 && hour <= 3) return pickRandom(options.midnight)
  if (hour >= 6 && hour <= 8) return pickRandom(options.morning)
  if (hour > 8 && hour <= 10) return pickRandom(options.day_break)
  if (hour >= 12 && hour <= 15) return pickRandom(options.afternoon)
  if (hour >= 16 && hour <= 20) return pickRandom(options.evening)

  if (dayMap[day]) return pickRandom(options[dayMap[day]])

  return pickRandom(options.other)
}
