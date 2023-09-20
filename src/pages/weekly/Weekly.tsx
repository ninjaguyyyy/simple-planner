import { StyleSheet, View } from "@react-pdf/renderer";
import DayWeekly from "../../components/DayWeekly";
import DayWeeklyNotes from "../../components/DayWeeklyNotes";
import moment from "moment/moment";
import DayWeeklyHeader from "../../components/DayWeeklyHeader";
import React from "react";

const stylesObject = StyleSheet.create({
  dayWeeklyWrapper: {
    display: "flex",
    flex: "1 0 0",
    flexWrap: "wrap",
    padding: "0px 12px",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    gap: "12px",
    alignSelf: "stretch",
  },
});

const weeksInYear = moment().isoWeeksInYear();

const Weekly = () => {
  console.log(weeksInYear);
  return (
    <>
      <DayWeeklyHeader />
      <View style={stylesObject.dayWeeklyWrapper}>
        <DayWeekly />
        <DayWeekly />
        <DayWeekly />
        <DayWeekly />
        <DayWeekly />
        <DayWeekly />
        <DayWeekly />
        <DayWeeklyNotes />
      </View>
    </>
  );
};
export default Weekly;
