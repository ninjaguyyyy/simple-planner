import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";

import clashDisplay from "../assets/fonts/ClashDisplay-Regular.ttf";
import React from "react";

Font.register({
  family: "Clash Display",
  src: clashDisplay,
});

const stylesObject = StyleSheet.create({
  day: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "182px",
    height: "230px",
    backgroundColor: "#FBF9F7",
    padding: "8px 8px 24px 8px",
  },
  dayHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "4px",
    padding: "0px 8px 4px 8px",
    alignSelf: "stretch",
    borderBottom: "solid 0.5px #EEE7DF",
  },
  dayHeaderContent1: {
    color: "rgb(144, 123, 98)",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "16px",
    fontFamily: "Clash Display",
  },
  dayHeaderContent2: {
    color: "rgb(144, 123, 98)",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
    fontFamily: "Clash Display",
  },
  dayBodyWrapper: {
    display: "flex",
    flex: "1 0 0",
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  dayBodyContent: {
    display: "flex",
    flex: "1 0 0",
    padding: "5px 4px",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
    borderBottom: "0.5px solid #EEE7DF",
  },
});
const DayWeekly = () => (
  <View style={stylesObject.day}>
    <View style={stylesObject.dayHeader}>
      <Text style={stylesObject.dayHeaderContent1}>07</Text>
      <Text style={stylesObject.dayHeaderContent2}>Monday</Text>
    </View>
    <View style={stylesObject.dayBodyWrapper}>
      <View style={stylesObject.dayBodyContent}></View>
      <View style={stylesObject.dayBodyContent}></View>
      <View style={stylesObject.dayBodyContent}></View>
      <View style={stylesObject.dayBodyContent}></View>
      <View style={stylesObject.dayBodyContent}></View>
      <View style={stylesObject.dayBodyContent}></View>
      <View style={stylesObject.dayBodyContent}></View>
    </View>
  </View>
);

export default DayWeekly;
