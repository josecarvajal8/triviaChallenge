export type CorrectAnswer = 'True' | 'False';

export interface IQuestion {
  difficulty: string;
  category: string;
  question: string;
  correct_answer: CorrectAnswer;
  incorrect_answers: Array<CorrectAnswer>;
}
export interface IApiResponse {
  response_code: number;
  results: Array<IQuestion>;
}
