import React, {FC} from 'react';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {fonts, getFontSizes} from '../constants/typo';
import {colors} from '../constants/styling';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router/Router.interface';

export const Home: FC = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Challenge'>>();
  const onStart = () => navigate('Challenge');
  return (
    <BaseLayout>
      <View style={styles.container}>
        <Text style={styles.title}>
          {'Hello,\n'}
          <Text style={styles.span}>{'Welcome to TriviaApp'}</Text>
        </Text>
        <Pressable style={styles.button} onPress={onStart}>
          <Text style={styles.buttonTitle}>{'Start'}</Text>
        </Pressable>
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 48,
  },
  title: {
    fontFamily: fonts.semibold,
    ...getFontSizes('display'),
  },
  span: {
    fontFamily: fonts.regular,
    ...getFontSizes('headline'),
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonTitle: {
    fontFamily: fonts.semibold,
    ...getFontSizes('body'),
    color: colors.white,
  },
});
