import { Page, StyleSheet, View } from "@react-pdf/renderer";
import BlankRowCard from "components/BlankRowCard";
import Calendar from "components/Calendar";

import PageDateTitle from "components/PageDateTitle";
import Priorities from "components/Priorities";
import Sidebar from "components/Sidebar";
import TimeSchedule from "components/TimeSchedule";
import TodoList from "components/TodoList";
import { COLOR } from "constants/color";
import moment, { Moment } from "moment";
import Notes from "pages/weekly/Weekly3/Notes";

const styles = StyleSheet.create({
  page: {
    paddingLeft: 15,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
  },
  main: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 8,
    flexGrow: 1,
  },
  sidebar: {
    width: "6%",
    height: "100%",
    marginLeft: 4,
  },
  container: {
    flexDirection: "row",
    width: "100%",
  },
  left: {
    flexGrow: 1,
    height: "100%",
  },
  right: {
    width: "32%",
    height: "100%",
    marginLeft: 10,
    flexDirection: "column",
  },
  lTop: {
    flexGrow: 1,
  },
  lBottom: {
    height: "32%",
  },
  rTop: {
    flexGrow: 1,
  },
  rMiddle: {
    marginTop: 10,
    height: "40%",
  },
  rBottom: {
    height: "32%",
  },
  pageHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

interface Props {
  day: Moment;
}

export const PortraitDaily1 = ({ day }: Props) => {
  const heading = day.format("DD dddd");
  const description = day.format("MMMM YYYY");

  const currDay = day.toDate();
  const id = `${currDay.getDate()}-${currDay.getMonth()}-${currDay.getFullYear()}`;

  return (
    <Page size="A4" style={styles.page} orientation="portrait" wrap={false} id={id}>
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.pageHeading}>
            <PageDateTitle heading={heading} description={description} />
            <Calendar
              context={{
                date: currDay,
              }}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.left}>
              <View style={styles.lTop}>
                <TimeSchedule />
              </View>
              <View style={styles.lBottom}>
                <Notes />
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.rTop}>
                <Priorities totalRow={7} heading="PRIORITIES" />
              </View>
              <View style={styles.rMiddle}>
                <TodoList totalRow={9} />
              </View>
              <View style={styles.rBottom}>
                <BlankRowCard
                  totalRow={8}
                  customStyles={{
                    borderColor: COLOR.LIGHT_BROWN,
                    borderWidth: 1,
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sidebar}>
          <Sidebar />
        </View>
      </View>
    </Page>
  );
};
