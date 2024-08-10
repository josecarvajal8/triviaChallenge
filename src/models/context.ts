export interface IScore {
  correct: number;
  incorrect: number;
}

export interface IContextState {
  answers: IScore;
}
