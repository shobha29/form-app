import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { isEmpty } from 'lodash';
import styles from './inputText.styles';
import { colors } from '../../utils/colors';

const InputText = ({
  title = '',
  value = '',
  isMandate = false,
  isMultiLine = false,
  maxLength = 20,
  keyboardType = 'default',
  onChangeText = () => { },
}) => {
  return (
    <View style={[styles.fieldContainer, isMultiLine && styles.multiLine]}>
      {!isEmpty(value) && (
        <View style={styles.label}>
          <Text style={styles.labelText}>
            {title}
            {isMandate && <Text style={styles.redText}>*</Text>}
          </Text>
        </View>
      )}
      <TextInput
        placeholder={title}
        value={value}
        onChangeText={onChangeText}
        multiline={isMultiLine}
        maxLength={maxLength}
        keyboardType={keyboardType}
        style={styles.inputTextStyle}
        placeholderTextColor={colors.silverSand}
      />
    </View>
  );
};

const areEqual = (prevProps, nextProps) => {
  let isEqual = true;
  const propsKeys = Object.keys(prevProps) || [];
  for (let key of propsKeys) {
    if (
      prevProps[key] !== nextProps[key] &&
      typeof prevProps[key] !== 'function' &&
      typeof nextProps[key] !== 'function'
    ) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
};

export default React.memo(InputText, areEqual);
