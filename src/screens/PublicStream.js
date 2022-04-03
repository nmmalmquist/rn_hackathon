import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import AccountListItem from "../components/AccountListItem";

function PublicStream(props) {

    const data = [
        {id: "jkhu;wh;iowuh;o", post: "This is a nick post", from: "Nick"},
        {id: "jkhfou;whiowuh;o", post: "This is a nick post", from: "Nick"},
        {id: "jkhfou;wh;wuh;o", post: "This is a nick post", from: "Nick"},
      ];

  return (
     <View style={styles.container}>
        
        <Text style={styles.listTitle}>Community Posts</Text>
        <FlatList
          style={styles.list}
          data={data}
          scrollEnabled={true}
          renderItem={({item}) => <AccountListItem key={item.id} thisPost={item} />}
        />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    listTitle: {
        fontSize: 20,
        marginTop: 50,
        fontWeight: "bold"
      },
      list: {
        marginTop: 30,
        width: "90%",
        height: "100%"
      },
});

export default PublicStream;