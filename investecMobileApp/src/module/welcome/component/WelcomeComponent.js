import React, {PureComponent} from 'react';

import {
  View,
  Text,
} from 'react-native';

import {CommonInputField} from '../../common/CommonInputField';

// Notes data
const NOTES = [
  {
    title: 'Notes: ',
    data: [
      `All the pages components are build using classes.`,
      `The below input field is a functional components.`,
    ],
  },
];

class WelcomeComponent extends PureComponent {
  constructor() {
    super();
    // write your constructor level code.
    // eg : state initilization
  }

  render() {
    return (
      <View style={styles.container}>
        {/* // <SafeAreaView style={styles.container}> */}
        {/* <SectionList
            sections={NOTES}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Text style={styles.title}>{`> `}{item}</Text>}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          /> */}

        <Text style={styles.header}>{`Notes: `}</Text>
        <Text
          style={
            styles.title
          }>{`> All the pages components are build using classes.`}</Text>
        <Text
          style={
            styles.title
          }>{`> The below input field is a functional components.`}</Text>
          <Text
          style={
            styles.title
          }>{`> Developed a Native module to get the information in a toast message about the device.`}</Text>
          
        <View style={styles.inputCompoView}>
          <CommonInputField
            placeholder={'Enter name here...'}
            label={'Name :'}
            {...this.props}
          />
        </View>
      </View>
    );
  }
}

// Component styling object
const styles = {
  container: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 12,
    paddingLeft: 20,
  },
  inputCompoView: {flex: 1, justifyContent: 'center'},
};

export default WelcomeComponent;
