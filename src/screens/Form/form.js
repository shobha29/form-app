import React, {useCallback, useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {isEmpty} from 'lodash';

import {InputText, RadioButton} from '../../components';

import styles from './form.styles';
import {genderOptions} from './helper';

const initialState = {
  name: '',
  mobileNumber: '',
  pinCode: '',
  gender: 'MALE',
  address: '',
};

const Form = () => {
  const [{name, pinCode, mobileNumber, gender, address}, setState] =
    useState(initialState);

  const handleTextChange = useCallback((state, val) => {
    setState(prev => ({...prev, [state]: val}));
  }, []);

  const handleSelect = useCallback((state, data) => {
    setState(prev => ({...prev, [state]: data?.type}));
  }, []);

  const getBtnDisable = useCallback(() => {
    const isDisable =
      isEmpty(name) ||
      isEmpty(pinCode) ||
      pinCode.length < 6 ||
      isEmpty(mobileNumber) ||
      mobileNumber.length < 10 ||
      isEmpty(gender) ||
      isEmpty(address);

    return isDisable;
  }, [name, pinCode, mobileNumber, gender, address]);

  const onSubmitForm = useCallback(() => {
    alert(
      'name: ' +
        name +
        '\npinCode: ' +
        pinCode +
        '\nmobileNumber: ' +
        mobileNumber +
        '\ngender: ' +
        gender +
        '\naddress: ' +
        address,
    );
  }, [name, pinCode, mobileNumber, gender, address]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.formHeader}>Form</Text>
      <InputText
        title={'Name'}
        value={name}
        isMandate={true}
        onChangeText={e => handleTextChange('name', e)}
      />
      <InputText
        title={'Mobile Number'}
        value={mobileNumber}
        isMandate={true}
        maxLength={10}
        keyboardType={'numeric'}
        onChangeText={e => handleTextChange('mobileNumber', e)}
      />
      <InputText
        title={'Pin Code'}
        value={pinCode}
        isMandate={true}
        maxLength={6}
        keyboardType="numeric"
        onChangeText={e => handleTextChange('pinCode', e)}
      />
      <RadioButton
        title={'Gender'}
        value={gender}
        isMandate={true}
        options={genderOptions}
        stateName={'gender'}
        handleSelect={handleSelect}
      />
      <InputText
        title={'Address'}
        value={address}
        isMandate={true}
        isMultiLine={true}
        maxLength={100}
        onChangeText={e => handleTextChange('address', e)}
      />
      <TouchableOpacity
        style={styles.addTaskBtn}
        disabled={getBtnDisable()}
        onPress={onSubmitForm}>
        <Text style={[styles.addBtnText, getBtnDisable() && styles.disableBtn]}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Form;
