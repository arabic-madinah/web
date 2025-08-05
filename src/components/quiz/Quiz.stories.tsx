// To run this story, make sure you have Storybook installed in your project.
// Then run: `npm run storybook` or `yarn storybook` from the project root.
// This will open the Storybook UI in your browser where you can interactively test the Quiz component.

import { Quiz, type QuizQuestion } from "./Quiz";

export default {
  title: "Components/Quiz",
  component: Quiz,
};

const sampleQuestions: QuizQuestion[] = [
  {
    question: "What is the Arabic letter for 'A'?",
    options: ["ا", "ب", "ت", "ث"],
    answer: 0,
  },
  {
    question: "Which of these means 'book' in Arabic?",
    options: ["قلم", "كتاب", "مدرسة", "باب"],
    answer: 1,
  },
  {
    question: "What is the correct translation for 'house'?",
    options: ["بيت", "شمس", "قمر", "ماء"],
    answer: 0,
  },
];

export const Default = () => <Quiz questions={sampleQuestions} />;
