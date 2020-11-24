const inspirationalQuotes = ["What you do not want done to yourself, do not do to others.",
"The only joy in the world is to begin.",
"Happiness is not something ready-made. It comes from your own actions.",
"To be happy, we must not be too concerned with others.",
"Happiness depends upon ourselves.",
"It's a helluva start, being able to recognize what makes you happy.",
"Happy people plan actions, they don’t plan results.",
"It is more fitting for a man to laugh at life than to lament over it.",
"The two enemies of human happiness are pain and boredom.",
"For many men, the acquisition of wealth does not end their troubles, it only changes them.",
"Happiness is when what you think, what you say, and what you do are in harmony.",
"Most people would rather be certain they’re miserable, than risk being happy.",
"Time you enjoy wasting is not wasted time.",
"Happiness is a state of activity.",
"The pleasure which we most rarely experience gives us greatest delight.",
"There are more things to alarm us than to harm us, and we suffer more often in apprehension than reality.",
"Since you get more joy out of giving joy to others, you should put a good deal of thought into the happiness that you are able to give.",
"Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
"The unhappy derive comfort from the misfortunes of others.",
"It's been my experience that you can nearly always enjoy things if you make up your mind firmly that you will.",
"Life is really simple, but we insist on making it complicated.",
"Nobody can be uncheered with a balloon.",
"Action may not always bring happiness; but there is no happiness without action.",
"Happiness is nothing more than good health and a bad memory.",
"Our envy always lasts longer than the happiness of those we envy.",
"Love takes off masks that we fear we cannot live without and know we cannot live within.",
"When we are in love we seem to ourselves quite different from what we were before.",
"Life without love is like a tree without blossoms or fruit.",
"I love you not because of who you are, but because of who I am when I am with you.",
"A friend is someone who knows all about you and still loves you.",
"Friends show their love in times of trouble, not in happiness.",
"Love is a friendship set to music.",
"The more one judges, the less one loves.",
"If I had a flower for every time I thought of you… I could walk through my garden forever.",
"Love is when you meet someone who tells you something new about yourself.",
"The most important thing in life is to learn how to give out love, and to let it come in.",
"Better to have lost and loved than never to have loved at all.",
"The best proof of love is trust.",
"Don't brood. Get on with living and loving. You don't have forever.",
"Love is a better teacher than duty.",
"Love does not dominate; it cultivates.",
"Immature love says: ‘I love you because I need you.' Mature love says ‘I need you because I love you.'",
"Love is that condition in which the happiness of another person is essential to your own.",
"The way to love anything is to realize that it may be lost.",
"A woman knows the face of the man she loves as a sailor knows the open sea.",
"Action is the foundational key to all success.",
"Victory is sweetest when you've known defeat.",
"For success, attitude is equally as important as ability.",
"I attribute my success to this: I never gave or took any excuse.",
"Doing the best at this moment puts you in the best place for the next moment.",
"Things may come to those who wait, but only the things left by those who hustle.",
"Not he who has much is rich, but he who gives much.",
"The successful warrior is the average man, with laser-like focus.",
"The secret of success in life is for a man to be ready for his opportunity when it comes.",
"Do not be embarrassed by your failures, learn from them and start again.",
"What seems to us as bitter trials are often blessings in disguise.",
"Don't let what you cannot do interfere with what you can do.",
"Don’t let the fear of losing be greater than the excitement of winning.",
"Judge your success by what you had to give up in order to get it.",
"Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
"To succeed in life, you need two things: ignorance and confidence.",
"The road to success is always under construction.",
"Success is going from failure to failure without losing enthusiasm.",
"Don’t wait. The time will never be just right.",
"Success is largely a matter of holding on after others have let go.",
"Life isn’t about finding yourself. Life is about creating yourself.",
"Try not to become a person of success, but rather try to become a person of value.",
"Start where you are. Use what you have. Do what you can.",
"Success is the sum of small efforts, repeated day-in and day-out.",
"Low self-esteem is like driving through life with your hand-break on.",
"Why should we worry about what others think of us, do we have more confidence in their opinions than we do our own?",
"Loving yourself isn’t vanity. It’s sanity.",
"It ain't what they call you, it's what you answer to.",
"What lies behind us and what lies before us are tiny matters compared to what lies within us.",
"The better you feel about yourself, the less you feel the need to show off.",
"A man cannot be comfortable without his own approval.",
"Trust yourself. You know more than you think you do.",
"One of the greatest regrets in life is being what others would want you to be, rather than being yourself.",
"No one can make you feel inferior without your consent.",
"If you have the ability to love, love yourself first.",
"To fall in love with yourself is the first secret to happiness.",
"Beauty begins the moment you decided to be yourself.",
"People who want the most approval get the least and the people who need approval the least get the most.",
"Be faithful to that which exists within yourself.",
"Never bend your head. Always hold it high. Look the world straight in the face.",
"The real difficulty is to overcome how you think about yourself.",
"Your problem is you’re… too busy holding onto your unworthiness.",
"Growth begins when we start to accept our own weakness.",
"Too many people overvalue what they are not and undervalue what they are.",
"There came a time when the risk to remain tight in the bud was more painful than the risk it took to blossom.",
"It is never too late to be what you might have been."]

const randomQuoteNum = Math.floor(Math.random() * inspirationalQuotes.length)

console.log('Inspirational quote: ', inspirationalQuotes[randomQuoteNum]) 

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const fitnessTipps = {
    mood: ['top', 'bad', 'forget it', 'rockstar'],
    power: ['10%', '30%', '50%', '70%', '100%'],
    tip: ['you should take a rest', 'give it all', 'give up', 'go out and run', 'go to the gym']
  }
  
  // Store the 'wisdom' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in fitnessTipps) {
    let optionIdx = generateRandomNumber(fitnessTipps[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'mood':
        personalWisdom.push(`Your mood is "${fitnessTipps[prop][optionIdx]}".`)
        break
      case 'power':
        personalWisdom.push(`You are having: "${fitnessTipps[prop][optionIdx]}" power.`)
        break
      case 'tip':
        personalWisdom.push(`You should: "${fitnessTipps[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);