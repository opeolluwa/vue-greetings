interface GreetingOptions {
  [key: string]: string[]
}

const options: GreetingOptions = {
  monday: [
    'Hello Monday!',
    'Monday is here!',
    'Show some Monday love',
    'Another fresh start',
  ],
  tuesday: ['Hello'],
  wednesday: ['Welcome Back'],
  thursday: [
    '#TBT',
    'Throwback Thursday',
    'Time for throwback',
    "Let's do some throwback",
    'Hectic week, huh?',
  ],
  friday: [
    '#TGIF',
    'Weekend is here!',
    'Have a nice weekend',
    'How has the week been?',
    'Thank God It\'s Friday',
    'It\'s weekend',
    'Hello',
    'Weekend is near',
  ],
  saturday: [
    'You deserve some break',
    'Take timeout, enjoy',
    'Hangout! It\'s saturday',
    'Still indoor? Hangout!',
    'You deserve a great time',
    'How about some treats?',
  ],
  sunday: [
    'Happy New Week!',
    'Happy Sunday!',
    'New week wishes',
  ],
  morning: [
    'Blessed morning',
    'Good Morning',
    'Trust you slept well',
    'Beautiful morning',
    'A new day',
    'Have a fruitful day',
  ],
  day_break: [
    'How is your day going',
    'How has the day been',
    'A fresh morning, huh?',
    'How\'s the weather?',
    'Howdy?',
  ],
  afternoon: [
    'Good afternoon!',
    'How\'s the weather outside',
    'How is your day going',
    'How has work been?',
    'How has your day been?',
    'How has the day been',
    'How\'s the weather?',
    'Howdy?',
  ],
  evening: [
    'Good evening',
    'How was your day',
    'How did your day go',
  ],
  midnight: [
    'You up so late?',
    'You should probably be in bed',
    'You should probably be in bed by now',
    'Surprised to see you up so late',
    'Up so early, huh?',
    'Up so early?',
    'Working Late',
    'Hi there!',
    'Aren\'t you sleeping?',
  ],
  new_month: [
    'Happy new month!',
    'Blessed new Month',
    'Have a Happy new month!',
    'It\'s a new month!',
  ],
  new_year: [
    'Happy new year',
    'Happy Holidays',
  ],
  christmas: [
    'Merry Christmas',
    'Season greetings',
  ],
  valentine: [
    'It\'s Valentine',
    'Happy Valentine',
  ],
  other: [
    'Holla!',
    'Hello!',
    'Welcome',
    'Howdy?',
    'Ciao!',
  ],
}

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)]
}

const dayMap: Record<number, string> = {
  0: 'sunday',
  1: 'monday',
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
