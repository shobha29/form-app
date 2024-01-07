import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './radioButton.styles';

const RadioButton = ({
  title = '',
  value = '',
  isMandate = '',
  options = '',
  stateName = '',
  handleSelect = () => {},
}) => {
  const renderItem = ({item}) => {
    const isSelected = value === item?.type;

    return (
      <TouchableOpacity
        style={styles.radioItem}
        onPress={() => handleSelect(stateName, item)}>
        <View
          style={[styles.radioCircle, isSelected && styles.selectedRadioCirle]}>
          {isSelected && <View style={styles.innerCircle} />}
        </View>
        <Text style={styles.radioItemText}>{item?.label}</Text>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (_, index) => index.toString();

  return (
    <View style={styles.radioContainer}>
      <View style={styles.label}>
        <Text style={styles.labelText}>
          {title}
          {isMandate && <Text style={styles.redText}>*</Text>}
        </Text>
      </View>

      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEnabled={false}
      />
    </View>
  );
};

export default RadioButton;
