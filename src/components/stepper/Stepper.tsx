import React, {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {IQuestion} from '../../models/api-response';
import {fonts, getFontSizes} from '../../constants/typo';
import {colors} from '../../constants/styling';
interface IStepperProps {
  questions: IQuestion[];
}
const ButtonResponse: FC<{
  title: string;
  background: string;
  action: () => void;
}> = ({action, background, title}) => {
  return (
    <Pressable
      onPress={action}
      style={{...styles.button, backgroundColor: background}}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
};
export const Stepper: FC<IStepperProps> = ({questions}) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const {question, correct_answer} = questions[currentQuestion];
  const onValidateQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{question}</Text>
      <View style={styles.btnsContainer}>
        <ButtonResponse
          title="True"
          background={colors.primary}
          action={onValidateQuestion}
        />
        <ButtonResponse
          title="False"
          background={colors.secondary}
          action={onValidateQuestion}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 48,
  },
  title: {
    fontFamily: fonts.regular,
    ...getFontSizes('body'),
    textAlign: 'center',
  },
  btnsContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: 150,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttonTitle: {
    fontFamily: fonts.semibold,
    ...getFontSizes('caption'),
  },
});
