import React, {ReactNode, createContext, useContext, useState} from 'react';
import axios from 'axios';
import uuid from 'react-native-uuid';

interface QuestionProviderProps {
  children: ReactNode;
}

export interface QuestionData {
  uuid: string;
  title: string;
  correctAnswer: string;
  optionsAnswer: Array<string>;
  userAnswer: string | null;
}

interface QuestionProps {
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

interface IQuestionContextData {
  loading: boolean;
  questions: Array<QuestionData>;
  quantityQuestions: number | null;
  changeQuantityQuestion(qtd: number): void;
  loadQuestions(): void;
  answerQuestion(id: string, answer: string): void;
  clearQuestions(): void;
  loadOldQuestions(oldQuestions: QuestionData[]): void;
}

const QuestionContext = createContext({} as IQuestionContextData);

function QuestionProvider({children}: QuestionProviderProps) {
  const [quantityQuestions, setQuantityQuestions] = useState<number | null>(
    null,
  );
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [loading, setLoading] = useState(false);

  function changeQuantityQuestion(qtd: number) {
    setQuantityQuestions(qtd);
  }

  async function loadQuestions() {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${quantityQuestions}`,
      );

      if (response.data?.results) {
        const responseQuestions: QuestionProps[] = response.data?.results;

        const newQuestions: QuestionData[] = responseQuestions.map(
          question => ({
            uuid: String(uuid.v4()),
            title: question.question,
            correctAnswer: question.correct_answer,
            userAnswer: null,
            optionsAnswer: [
              question.correct_answer,
              ...question.incorrect_answers,
            ]
              .map(value => ({value, sort: Math.random()}))
              .sort((a, b) => a.sort - b.sort)
              .map(({value}) => value),
          }),
        );

        setQuestions(newQuestions);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  function answerQuestion(id: string, answer: string) {
    const newQuestions = questions.map(question => {
      if (question.uuid === id) {
        return {
          ...question,
          userAnswer: answer,
        };
      }
      return question;
    });

    setQuestions(newQuestions);
  }

  function clearQuestions() {
    setQuestions([]);
    setQuantityQuestions(null);
  }

  function loadOldQuestions(oldQuestions: QuestionData[]) {
    setQuestions(oldQuestions);
  }

  return (
    <QuestionContext.Provider
      value={{
        loading,
        questions,
        quantityQuestions,
        changeQuantityQuestion,
        loadQuestions,
        answerQuestion,
        clearQuestions,
        loadOldQuestions,
      }}>
      {children}
    </QuestionContext.Provider>
  );
}

function useQuestion() {
  const context = useContext(QuestionContext);

  return context;
}

export {QuestionProvider, useQuestion};
