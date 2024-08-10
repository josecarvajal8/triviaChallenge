import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../constants/styling';

export const BaseLayout: FC<{children: React.ReactNode}> = ({children}) => {
  return <View style={styles.root}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white_smoke,
    padding: 16,
  },
});
