import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import nextLogo from "/macroprocesos.png";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "gray",
  },
});
function PDF() {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Hello World</Text>
        <View style={styles.section}>
          <Image src={nextLogo} />
        </View>
        <View style={styles.pageNumber}>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber}/${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
