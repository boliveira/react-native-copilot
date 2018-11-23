// @flow
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Button from "./Button";

import styles from "./style";

import type { Step } from "../types";

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  tooltipTextColor,
  tooltipButtonStyle,
  tooltipSkipText,
  tooltipPreviousText,
  tooltipNextText,
  tooltipFinishText
}: Props) => (
  <View>
    <View style={styles.tooltipContainer}>
      <Text
        testID="stepDescription"
        style={[styles.tooltipText, { color: tooltipTextColor }]}
      >
        {currentStep.text}
      </Text>
    </View>
    <View style={[styles.bottomBar]}>
      {!isLastStep ? (
        <TouchableOpacity onPress={handleStop}>
          <Button style={tooltipButtonStyle}>{tooltipSkipText()}</Button>
        </TouchableOpacity>
      ) : null}
      {!isFirstStep ? (
        <TouchableOpacity onPress={handlePrev}>
          <Button style={tooltipButtonStyle}>{tooltipPreviousText()}</Button>
        </TouchableOpacity>
      ) : null}
      {!isLastStep ? (
        <TouchableOpacity onPress={handleNext}>
          <Button style={tooltipButtonStyle}>{tooltipNextText()}</Button>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleStop}>
          <Button style={tooltipButtonStyle}>{tooltipFinishText()}</Button>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default Tooltip;
