import React from 'react';
import {Container, Title, Options} from './styles';

import {ButtonOption} from '../ButtonOption';

import {QuestionData, useQuestion} from '../../hooks/question';

interface Props {
  data: QuestionData;
}

export function QuestionOptions({data}: Props) {
  const {answerQuestion} = useQuestion();

  function handlePress(answer: string) {
    answerQuestion(data.uuid, answer);
  }

  return (
    <Container>
      <Title>{data.title}</Title>
      <Options>
        {data.optionsAnswer.map((item, index) => (
          <ButtonOption
            key={index}
            isActive={item === data.userAnswer}
            name={item}
            press={() => handlePress(item)}
          />
        ))}
      </Options>
    </Container>
  );
}
