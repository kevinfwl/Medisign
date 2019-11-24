import React, { Component } from "react";
import {
  Alert,
  Button,
  TextInput,
  Dimensions,
  View,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from 'react-native-elements';
import axios from 'axios';


export default class MenuScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  _sendReminder() {
    console.log("MY NAME");
    axios({
      method: "post",
      url: "https://hackwestern-emr.herokuapp.com/"
    })
    .then(res => {
      console.log(res.status);
      console.log(res.data);
      //pop up here
      // this.props.navigation.navigate("Results", {claimAmount: res.data.claimAmount})
    }).catch(e => {
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginLeft: 30, marginTop: 40, width: 70, height: 30 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Main");
            }}
          >
            <View>
              <Text
                style={[
                  { fontWeight: "bold", fontSize: 16, color: "black" }
                ]}
              >
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 100, alignContent: "strech", flex: 1, flexDirection: "row", flexWrap: "wrap" }}>

          <Image
            source={require("../assets/images/logo-grey.png")}
            style={{ marginLeft: "15%" }}
          />

          <TouchableOpacity
            style={styles.customBtnBG1}
            onPress={() => {
              this.props.navigation.navigate("NewPatient");
            }}
          >
            <View style={{ paddingTop: 25 }}>
              <Text
                style={[
                  styles.customBtnText,
                  { fontWeight: "bold", fontSize: 30 }
                ]}
              >
                Patient Info
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.customBtnBG1}
            onPress={() => {
              this.props.navigation.navigate("Record");
            }}
          >

            <View style={{ paddingTop: 25 }}>
              <Text
                style={[
                  styles.customBtnText,
                  { fontWeight: "bold", fontSize: 30 }
                ]}
              >
                Patient Records
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.customBtnBG1}
            onPress={() => {
              this.props.navigation.navigate("Contact Patient");
            }}
          >
            <View style={{ paddingTop: 25 }}>
              <Text
                style={[
                  styles.customBtnText,
                  { fontWeight: "bold", fontSize: 30 }
                ]}
              >
                Contact Patient
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={styles.customBtnBG1}
              onPress={() => {this._sendReminder()}}
            >
              <View style={{ paddingTop: 25 }}>
                <Text
                  style={[
                    styles.customBtnText,
                    { fontWeight: "bold", fontSize: 30 }
                  ]}
                >
                  Send Reminder
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

MenuScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9e9e8",
    flex: 1,
  },
  customBtnText: {
    fontWeight: "400",
    textAlign: "center",
    paddingTop: "30%",
    color: "white"
  },
  customBtnBG1: {
    backgroundColor: "#c71920",
    opacity: 0.85,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "black",
    width: (Dimensions.get("window").width * 15) / 40,
    height: (Dimensions.get("window").width * 7) / 20,
    marginRight: "0%",
    marginLeft: "8%",
    marginTop: "8%",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowColor: "#8C8C8C",
  },
});