import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ActivityIndicator, Alert, FlatList} from 'react-native';
import useAsyncStorage from '@react-native-async-storage/async-storage';
import {format, parseISO} from 'date-fns';

import {
  Card,
  Header,
  TitleHeader,
  Container,
  Content,
  Form,
  FormControl,
  TitleCard,
  Wrapper,
  ContentIndicator,
  ListText,
  ButtonQuiz,
  TextButtonQuiz,
  ContentList,
} from './styles';

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import {NavigationProps} from '../../routes/app.routes';
import {QuestionData, useQuestion} from '../../hooks/question';

interface QuestionsOldProps {
  questions: Array<QuestionData>;
  date: string;
}

export function Dashboard() {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();
  const {quantityQuestions, changeQuantityQuestion, loadOldQuestions} =
    useQuestion();
  const [loading, setLoading] = useState(true);
  const [questionsStorage, setQuestionsStorage] = useState<QuestionsOldProps[]>(
    [],
  );

  useFocusEffect(() => {
    async function loadQuestionsStorage() {
      const questionnaires = await useAsyncStorage.getItem('@Quiz:data');
      const parsedQuiz: QuestionsOldProps[] = questionnaires
        ? JSON.parse(questionnaires)
        : [];

      const newQuestions = parsedQuiz.sort(
        (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
      );
      setQuestionsStorage(newQuestions);
      setLoading(false);
    }

    loadQuestionsStorage();
  });

  function handleStart() {
    if (!quantityQuestions || quantityQuestions < 1) {
      return Alert.alert('Inform the number of questions before starting');
    }
    if (quantityQuestions > 50) {
      return Alert.alert('The maximum number of questions is 50');
    }

    navigation.navigate('Start');
  }

  function handleLoadOldQuiz(oldQuestion: QuestionData[]) {
    loadOldQuestions(oldQuestion);
    navigation.navigate('Results');
  }

  return (
    <Container>
      <Header>
        <TitleHeader>Let's Play</TitleHeader>
      </Header>
      <Wrapper>
        <Card>
          <TitleCard>Enter questions quantity</TitleCard>
          <Form>
            <FormControl>
              <Input
                placeholder="Ex.: 5"
                placeholderTextColor={theme.colors.text_dark}
                keyboardType="number-pad"
                maxLength={2}
                value={quantityQuestions ? String(quantityQuestions) : ''}
                onChangeText={text => changeQuantityQuestion(Number(text))}
              />
            </FormControl>
            <FormControl>
              <Button title="ENTER" onPress={handleStart} />
            </FormControl>
          </Form>
        </Card>
      </Wrapper>
      <Content>
        {loading ? (
          <ContentIndicator>
            <ActivityIndicator size={'large'} color={theme.colors.text_dark} />
          </ContentIndicator>
        ) : (
          <ContentList>
            <ListText>Old quiz list</ListText>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={questionsStorage}
              renderItem={({item}) => (
                <ButtonQuiz onPress={() => handleLoadOldQuiz(item.questions)}>
                  <TextButtonQuiz>
                    {`Quiz:   ${format(
                      parseISO(item.date),
                      'dd/MM/yyyy HH:mm:ss',
                    )}`}
                  </TextButtonQuiz>
                </ButtonQuiz>
              )}
              keyExtractor={(item, index) => `${index}`}
            />
          </ContentList>
        )}
      </Content>
    </Container>
  );
}
