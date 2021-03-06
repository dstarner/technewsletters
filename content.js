export const categories = {
  CLOUD: "cloud",
  INDUSTRY: "industry",
  HARDWARE: "hardware",
  INFRA: "infrastructure",
  CODE: "programming",
  MISC: "other",
  WEB: "web-dev",
}

const newsletters = [
  {
    title: "Greater Than Code",
    imgSrc: "https://assets.fireside.fm/file/fireside-images/podcasts/images/7/79118de2-5b5b-439a-84b3-d9942b407117/cover_small.jpg?v=1",
    href: "https://www.greaterthancode.com/",
    subscribeHref: "https://www.greaterthancode.com/subscribe",
    description: `
    Greater Than Code is a podcast that invites the voices of people who are not heard from enough in
    tech: women, people of color, trans and/or queer folks, to talk about the human side of software development
    and technology. Greater Than Code is providing a vital platform for these conversations, and developing
    new ideas of what it means to be a technologist beyond just the code.
`,
    tags: [categories.INDUSTRY],
  },
  {
    title: "Overreacted.io",
    imgSrc: "https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",
    href: "https://overreacted.io/",
    description: "I explain with words and code. - Dan Abramov",
    tags: [categories.WEB, categories.INDUSTRY]
  },
  {
    title: "Daring Fireball",
    href: "https://daringfireball.net/",
    imgSrc: "https://pbs.twimg.com/card_img/1469414635522592768/kV8FUwV_?format=png&name=medium",
    description: `
Follow the thoughts of John Gruber, one of the creators of Markdown, as he
discusses different tech, industry, and global topics.
    `,
    tags: [categories.INDUSTRY, categories.MISC]
  },
  {
    title: "Read Max",
    imgSrc: "https://cdn.substack.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5dccbdd7-40ff-4524-b1b3-862933aa12be_1280x1280.png",
    href: "https://maxread.substack.com/",
    subscribeHref: "https://maxread.substack.com/subscribe",
    description: `
Read Max is a 2x-a-week newsletter by Max Read (that's me) about the future.
    `,
    tags: [categories.INDUSTRY]
  },
  {
    title: "rendezvous with cassidoo",
    imgSrc: "https://buttondown.s3.amazonaws.com/icons/cfaf57f2-7aba-4c14-b56b-d41008562067.png",
    href: "https://buttondown.email/cassidoo/",
    description: `
    In this weekly newsletter I'm going to share with you what's new and cool in the world of web development, with content for everyone, from beginners to pros. There's also an interview question of the week, where you can test your skills and I'll share the results the following week.
    I'll also send you jokes and stories.
    And pics of mechanical keyboards.
    I won't spam though, I promise.
    `,
    tags: [categories.WEB, categories.HARDWARE, categories.CODE]
  },
  {
    title: "Last Week in AWS",
    imgSrc: "https://www.lastweekinaws.com/wp-content/uploads/2019/04/last-week-in-aws-logo.svg",
    href: "https://www.lastweekinaws.com/",
    subscribeHref: "https://www.lastweekinaws.com/newsletter/",
    description: `
    Posts about AWS come out over sixty times a day and the signal to noise ratio is abysmal. I filter
    through it all to find the hidden gems, the community contributions--the stuff worth reading! Then I
    summarize it, with a bit of snark, and share it with you--minus the nonsense.
    `,
    tags: [categories.CLOUD, categories.INFRA, categories.INDUSTRY]
  }
].map(nl => ({
  ...nl,
  tags: nl.tags.sort(),
})).sort(function(a, b){
  const aTitle = a.title.toLowerCase();
  const bTitle = b.title.toLowerCase();
  if(aTitle < bTitle) { return -1; }
  if(aTitle > bTitle) { return 1; }
  return 0;
});

export default newsletters;
