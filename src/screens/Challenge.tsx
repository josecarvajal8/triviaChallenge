import React, {FC, useEffect, useState} from 'react';
import {BaseLayout} from '../components/layout/BaseLayout';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {fetchData} from '../providers/fetcher';
import {IApiResponse, IQuestion} from '../models/api-response';
import {Stepper} from '../components/stepper/Stepper';
import {fonts, getFontSizes} from '../constants/typo';
import {colors} from '../constants/styling';

export const Challenge: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const getQuestions = async () => {
    const data = await fetchData<IApiResponse>({
      method: 'GET',
      url: 'https://opentdb.com/api.php?amount=4&type=boolean',
    });
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <BaseLayout>
      <View style={styles.container}>
        <Text style={styles.title}>
          {'Try your best to answer the questions, good luck!'}
        </Text>
        {questions?.length ? (
          <Stepper questions={questions} />
        ) : (
          <ActivityIndicator color={colors.accent_yellow} />
        )}
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 48,
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.semibold,
    ...getFontSizes('title'),
    color: colors.black,
    textAlign: 'center',
  },
});
