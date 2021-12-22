import { map } from "lodash";

const newsletters = [{
    title: "Read Max",
    imgSrc: "https://cdn.substack.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5dccbdd7-40ff-4524-b1b3-862933aa12be_1280x1280.png",
    href: "https://maxread.substack.com/",
    subscribeHref: "https://maxread.substack.com/subscribe",
    description: `
Read Max is a 2x-a-week newsletter by Max Read (that's me) about the future.
    `,
    tags: ["future", "technology"]
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
    tags: ["web", "keyboards", "programming"]
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
    tags: ["aws", "cloud", "infrastructure"]
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
