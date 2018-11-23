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
  tooltipButtonStyle
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
          <Button style={tooltipButtonStyle}>Skip</Button>
        </TouchableOpacity>
      ) : null}
      {!isFirstStep ? (
        <TouchableOpacity onPress={handlePrev}>
          <Button style={tooltipButtonStyle}>Previous</Button>
        </TouchableOpacity>
      ) : null}
      {!isLastStep ? (
        <TouchableOpacity onPress={handleNext}>
          <Button style={tooltipButtonStyle}>Next</Button>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleStop}>
          <Button style={tooltipButtonStyle}>Finish</Button>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default Tooltip;
