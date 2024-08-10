import React, {FC, useRef, useState} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {CorrectAnswer, IQuestion} from '../../models/api-response';
import {fonts, getFontSizes} from '../../constants/typo';
import {colors} from '../../constants/styling';
import {useAppContext} from '../../providers/context';
import {CONTEXT_TYPES} from '../../providers/context/flux/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/Router.interface';
import {sanitizeString} from '../../utils/utilities';
interface IStepperProps {
  questions: IQuestion[];
}

const ScalingButton: FC<{
  title: string;
  background: string;
  action: () => void;
}> = ({action, background, title}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.2,
      friction: 2,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 2,
      tension: 40,
      useNativeDriver: true,
    }).start(() => {
      action();
    });
  };

  const animatedStyle = {
    transform: [{scale}],
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={[
          {...styles.button, backgroundColor: background},
          animatedStyle,
        ]}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

export const Stepper: FC<IStepperProps> = ({questions}) => {
  const {replace} =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const {state, dispatch} = useAppContext();
  const {answers} = state;
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const {question = '', correct_answer = ''} =
    currentQuestion < questions.length ? questions[currentQuestion] : {};

  const onValidateQuestion = (answer: CorrectAnswer) => {
    if (answer === correct_answer) {
      dispatch({
        type: CONTEXT_TYPES.UPDATE_SCORE,
        payload: {...state.answers, correct: answers.correct + 1},
      });
    } else {
      dispatch({
        type: CONTEXT_TYPES.UPDATE_SCORE,
        payload: {...state.answers, incorrect: answers.incorrect + 1},
      });
    }
    setCurrentQuestion(prev => {
      if (prev < questions.length) {
        return prev + 1;
      }
      return prev;
    });
  };

  const onBackHome = () => {
    dispatch({
      type: CONTEXT_TYPES.UPDATE_SCORE,
      payload: {
        correct: 0,
        incorrect: 0,
      },
    });
    replace('Home');
  };
  const isCompleted = currentQuestion === questions.length;
  return (
    <View style={styles.container}>
      {isCompleted ? (
        <>
          <Text style={styles.resultTitle}>{'Your results'}</Text>
          <Text
            style={{
              ...styles.resultText,
              color: colors.primary,
            }}>{`Correct: ${answers.correct}`}</Text>
          <Text
            style={{
              ...styles.resultText,
              color: colors.secondary,
            }}>{`Incorrect: ${answers.incorrect}`}</Text>
          <ScalingButton
            title="Back home"
            background={colors.primary}
            action={onBackHome}
          />
        </>
      ) : (
        <>
          <Text style={styles.title}>{sanitizeString(question)}</Text>
          <View style={styles.btnsContainer}>
            <ScalingButton
              title="True"
              background={colors.primary}
              action={() => onValidateQuestion('True')}
            />
            <ScalingButton
              title="False"
              background={colors.secondary}
              action={() => onValidateQuestion('True')}
            />
          </View>
        </>
      )}
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
    color: colors.black,
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
    color: colors.black,
  },
  resultText: {
    fontFamily: fonts.regular,
    ...getFontSizes('body'),
    textAlign: 'center',
  },
  resultTitle: {
    fontFamily: fonts.bold,
    ...getFontSizes('body'),
    textAlign: 'center',
    color: colors.black,
  },
});
