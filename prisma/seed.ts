import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  console.log("adding questions...");

  const questions = [
    { questionText: "Welcome to the Secret Page. Please type in password" },
    { questionText: "How old am I? (write a number only ex. 99)" },
    {
      questionText:
        "Type the last name of the greatest pianist of our time. hint: his first name is Brad",
    },
    {
      questionText:
        "First name of the guitarist who mostly played with only 2 fingers.",
    },
    {
      questionText:
        "Greatest SegaCD game ever made. The boy was Alex, the girl was Luna.",
    },
    { questionText: "How do you feel?" },
  ];

  const answers = [
    { answerText: "password", questionId: 1 },
    { answerText: "06-25-1983", questionId: 2 },
    { answerText: "Mehldau", questionId: 3 },
    { answerText: "Django", questionId: 4 },
    { answerText: "Lunar", questionId: 5 },
];

  const responses = [
    { responseText: "Very good. You know how to read...", answerId: 1, isCorrect: true },
    { responseText: "No. Read the question.", answerId: 1, isCorrect: false },
    { responseText: "I feel violated... Next question!", answerId: 2, isCorrect: true },
    { responseText: "Do I really look that old?", answerId: 2, isCorrect: false },
    { responseText: "I see you've got good taste. But do you know your history?", answerId: 3, isCorrect: true },
    { responseText: "I am very disapointed.", answerId: 3, isCorrect: false },
    { responseText: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS5yv6mbso7YqBG715_e46FthlIJ4ADvY52paNBUElSKL-C2JrfJK5YRBynu1yu5QdiFZ0Kops-Z7P3ul8", answerId: 4, isCorrect: true },
    { responseText: "Oh.. that's funny..", answerId: 4, isCorrect: false },
    { responseText: "https://assets-prd.ignimgs.com/2022/03/30/lunarsilverstar-1648681538441.jpg", answerId: 5, isCorrect: true },
    { responseText: "Think RPGs...", answerId: 5, isCorrect: false },
  ];

  


}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
