import React from 'react';
import {
  Container,
  StatusQuestion,
  Title,
  Options,
  Option,
  Group,
  UserAnswer,
  CorrectAnswer,
  TextAnswer,
  TextInfo,
} from './styles';

import {QuestionData} from '../../hooks/question';

interface Props {
  data: QuestionData;
}

export function ItemResult({data}: Props) {
  return (
    <Container>
      <StatusQuestion isCorrect={data.correctAnswer === data.userAnswer}>
        {data.correctAnswer === data.userAnswer ? 'Correct' : 'Wrong'}
      </StatusQuestion>
      <Title>{data.title}</Title>
      <Options>
        {data.optionsAnswer.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Options>
      <Group>
        <TextInfo>Your Answer</TextInfo>
        <UserAnswer isCorrect={data.correctAnswer === data.userAnswer}>
          <TextAnswer>{data.userAnswer}</TextAnswer>
        </UserAnswer>
        <TextInfo>Correct Answer</TextInfo>
        <CorrectAnswer>
          <TextAnswer>{data.correctAnswer}</TextAnswer>
        </CorrectAnswer>
      </Group>
    </Container>
  );
}
