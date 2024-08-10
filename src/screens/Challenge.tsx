import React, {FC, useEffect, useState} from 'react';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Text} from 'react-native';
import {fetchData} from '../providers/fetcher';
import {IApiResponse, IQuestion} from '../models/api-response';

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
      <Text>{'Hello'}</Text>
    </BaseLayout>
  );
};
