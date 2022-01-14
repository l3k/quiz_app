import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  Space,
  Title,
  ButtonBorderless,
  Icon,
  Content,
  Separator,
  TextInfo,
  TextCorrect,
  TextWrong,
} from './styles';

import {ItemResult} from '../../components/ItemResult';

import {QuestionData, useQuestion} from '../../hooks/question';
import {NavigationProps} from '../../routes/app.routes';

export function Results() {
  const {questions, quantityQuestions, clearQuestions} = useQuestion();
  const [wrongs, setWrongs] = useState(0);
  const [successes, setSuccesses] = useState(0);
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const wrongsTotal = questions.reduce(
      (acumullator: number, question: QuestionData) => {
        if (question.correctAnswer !== question.userAnswer) {
          return acumullator + 1;
        }

        return acumullator;
      },
      0,
    );
    const successesTotal = questions.reduce(
      (acumullator: number, question: QuestionData) => {
        if (question.correctAnswer === question.userAnswer) {
          return acumullator + 1;
        }

        return acumullator;
      },
      0,
    );

    setWrongs(wrongsTotal);
    setSuccesses(successesTotal);
  }, [questions]);

  function handleExit() {
    clearQuestions();
    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <Header>
        <Space />
        <Title>Quiz</Title>
        <ButtonBorderless onPress={handleExit}>
          <Icon name="x" />
        </ButtonBorderless>
      </Header>
      <Content>
        <TextInfo>Questions quantity: {quantityQuestions}</TextInfo>
        <TextInfo>
          Questions correct: <TextCorrect>{successes}</TextCorrect>
        </TextInfo>
        <TextInfo>
          Questions wrong: <TextWrong>{wrongs}</TextWrong>
        </TextInfo>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
          ItemSeparatorComponent={() => <Separator />}
          data={questions}
          renderItem={({item}) => <ItemResult data={item} />}
          keyExtractor={(item, index) => `${item.uuid}-${index}`}
        />
      </Content>
    </Container>
  );
}
