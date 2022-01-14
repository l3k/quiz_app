import React, {useRef, useState} from 'react';
import {ActivityIndicator, Alert, FlatList} from 'react-native';
import {useTheme} from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../../components/Button';
import {QuestionOptions} from '../../components/QuestionOptions';

import {useQuestion} from '../../hooks/question';

import {
  Container,
  ContentIndicator,
  Header,
  Space,
  Title,
  ButtonBorderless,
  Icon,
  Content,
  CountQuestions,
  GroupButtons,
  ContentButton,
  Question,
  ContentQuestion,
} from './styles';

import {NavigationProps} from '../../routes/app.routes';

export function Questions() {
  const theme = useTheme();
  const {loading, quantityQuestions, questions, clearQuestions} = useQuestion();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const flatlistRef = useRef<FlatList>(null);
  const navigation = useNavigation<NavigationProps>();

  function handleExitQuiz() {
    setCurrentQuestion(1);
    clearQuestions();
    navigation.navigate('Dashboard');
  }

  async function handleNext() {
    if (currentQuestion !== quantityQuestions) {
      const quest = questions[currentQuestion - 1];

      if (!quest.userAnswer) {
        return Alert.alert('Please answer question');
      }

      flatlistRef.current?.scrollToIndex({
        animated: true,
        index: currentQuestion - 1 + 1,
      });
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const questionnaires = await AsyncStorage.getItem('@Quiz:data');
      let parsedQuiz = questionnaires ? JSON.parse(questionnaires) : [];

      await AsyncStorage.setItem(
        '@Quiz:data',
        JSON.stringify([...parsedQuiz, {questions, date: new Date()}]),
      );
      navigation.navigate('Results');
    }
  }

  function handlePrevious() {
    flatlistRef.current?.scrollToIndex({
      animated: true,
      index: currentQuestion - 2,
    });
    setCurrentQuestion(currentQuestion - 1);
  }

  return (
    <Container>
      {loading ? (
        <ContentIndicator>
          <ActivityIndicator size={'large'} color={theme.colors.text_dark} />
        </ContentIndicator>
      ) : (
        <>
          <Header>
            <Space />
            <Title>Quiz</Title>
            <ButtonBorderless onPress={handleExitQuiz}>
              <Icon name="x" />
            </ButtonBorderless>
          </Header>
          <Content>
            <CountQuestions>
              Question {currentQuestion}/{quantityQuestions}
            </CountQuestions>
            <Question>
              <FlatList
                initialScrollIndex={0}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                pagingEnabled={true}
                scrollEnabled={false}
                data={questions}
                ref={flatlistRef}
                renderItem={({item}) => (
                  <ContentQuestion>
                    <QuestionOptions data={item} />
                  </ContentQuestion>
                )}
                keyExtractor={(item, index) => `${item.uuid}-${index}`}
              />
            </Question>
            <GroupButtons>
              {currentQuestion === 1 && (
                <Button title="Next" onPress={handleNext} />
              )}

              {currentQuestion !== 1 && (
                <>
                  <ContentButton>
                    <Button title="Previous" onPress={handlePrevious} />
                  </ContentButton>
                  <ContentButton>
                    <Button
                      onPress={handleNext}
                      title={
                        currentQuestion === quantityQuestions
                          ? 'Finish'
                          : 'Next'
                      }
                    />
                  </ContentButton>
                </>
              )}

              {/* {currentQuestion === quantityQuestions && (
                <Button title="Finish" />
              )} */}
            </GroupButtons>
          </Content>
        </>
      )}
    </Container>
  );
}
