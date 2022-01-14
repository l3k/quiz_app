import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Title, Group, Content} from './styles';

import {Button} from '../../components/Button';

import {NavigationProps} from '../../routes/app.routes';
import {useQuestion} from '../../hooks/question';

export function Start() {
  const navigation = useNavigation<NavigationProps>();
  const {loadQuestions} = useQuestion();

  function handleCancel() {
    navigation.navigate('Dashboard');
  }

  function handleStart() {
    loadQuestions();
    navigation.navigate('Questions');
  }

  return (
    <Container>
      <Title>Do you really want to start ?</Title>
      <Group>
        <Content>
          <Button title="Cancel" onPress={handleCancel} />
        </Content>
        <Content>
          <Button title="Start" onPress={handleStart} />
        </Content>
      </Group>
    </Container>
  );
}
