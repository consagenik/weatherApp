import React, {LegacyRef, forwardRef} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';

import styles from './TextInputDefault.styles';

interface TextInputDefaultProps extends RNTextInputProps {
  icon?: any;
  disabled?: boolean;
}

const TextInputDefault = forwardRef(
  (
    {icon, disabled, ...otherProps}: TextInputDefaultProps,
    ref: LegacyRef<RNTextInput> | undefined,
  ) => {
    const IconComponent:
      | undefined
      | (({}: {
          width?: number;
          height?: number;
          color?: string;
        }) => JSX.Element) = icon;

    return (
      <View style={styles.fieldAndErrorContainer}>
        <View
          style={
            disabled
              ? [styles.inputFieldContainer, styles.disabledFieldContainer]
              : styles.inputFieldContainer
          }>
          {icon && (
            <View style={styles.iconWrapper}>
              {/* @ts-ignore */}
              <IconComponent />
            </View>
          )}
          <View style={styles.fieldWrapper}>
            <RNTextInput
              style={styles.field}
              underlineColorAndroid="transparent"
              ref={ref}
              editable={!disabled}
              {...otherProps}
            />
          </View>
        </View>
      </View>
    );
  },
);

export default TextInputDefault;
