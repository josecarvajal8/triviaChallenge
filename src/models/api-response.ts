export interface IQuestion {
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}
export interface IApiResponse {
  response_code: number;
  results: Array<IQuestion>;
}
