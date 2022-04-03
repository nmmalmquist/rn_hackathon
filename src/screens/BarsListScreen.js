import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import yelpApi from "../api/yelpApi";

import BarsCard from "../components/BarsCard";
import ItemSeperator from "../components/ItemSeperator";
import SafeScreen from "../components/SafeScreen";
import SearchBar from "../components/SearchBar";

function BarsListScreen({ navigation }) {
  const [searchInput, setSearchInput] = useState("");
  const [masterDataBusinesses, setMasterDataBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [refrshing, setRefreshing] = useState(false);

  const searchApi = async () => {
    setSearchInput("");
    const businessList = await yelpApi.getBusinesses();
    setMasterDataBusinesses(businessList);
    setFilteredBusinesses(businessList);
  };

  useEffect(() => {
    searchApi();
  }, []);

  const filterList = async (text) => {
    setFilteredBusinesses(
      masterDataBusinesses.filter((i) => i.name.includes(text))
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.searchBar}>
        <SearchBar
          placeholder="Search"
          onChangeText={(text) => {
            filterList(text);
            setSearchInput(text);
          }}
          width={380}
          value={searchInput}
        />
      </View>
      <FlatList
        ItemSeparatorComponent={ItemSeperator}
        data={filteredBusinesses}
        keyExtractor={(item) => item.id}
        refreshing={refrshing}
        onRefresh={() => {
          searchApi();
        }}
        renderItem={({ item }) => (
          <BarsCard
            cover={10}
            imageWidth={380}
            imageUri={item.image_url}
            title={item.name}
            waitTime={20}
            onCardPress={() => {
              navigation.navigate("BarsDetails", item);
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: { marginVertical: 10 },
});

export default BarsListScreen;
