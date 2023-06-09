import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { scale } from "react-native-size-matters";
import { Avatar, Hotels, Attractions, Restaurants } from "../assets/images";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import ItemsCardContainer from "../components/ItemsCardContainer";
import { getPlacesData } from "../api";

const Discover = ({ navigation }: any) => {
  const [type, setType] = useState("hotels");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);
  
  const changeTypes = (newType: any) => {
    setType(newType);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.textOne}>Discover</Text>
          <Text style={styles.textTwo}>the beauty today</Text>
        </View>
        <View style={styles.icon}>
          <Image source={Avatar} style={styles.avatar} />
        </View>
      </View>

      <View style={styles.searchBoxContainer}>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true} // you need this to fetch the details object onPress
          placeholder="Search"
          query={{
            key: "AIzaSyChyCHNC9nbGm50bhpckH752adSnVutyHo",
            language: "en", // language of the results
          }}
          onPress={(data: any, details: any = null) => {
            console.log(JSON.stringify(details?.geometry?.viewport));
          }}
          onFail={(error) => console.error(error)}
        />
      </View>

      {/* Menu Container */}
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={"#0B646B"} size={"large"} />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.menuView}>
            <MenuContainer
              key={"hotel"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              changeTypes={changeTypes}
            />
            <MenuContainer
              key={"attractives"}
              title="Attractives"
              imageSrc={Attractions}
              type={type}
              changeTypes={changeTypes}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              changeTypes={changeTypes}
            />
          </View>

          <View>
            <View style={styles.topTipsSection}>
              <Text style={styles.topTipsText}>Top Tips</Text>
              <TouchableOpacity style={styles.explorePresserSection}>
                <Text style={styles.exploreText}>Explore</Text>
                <FontAwsome
                  name="long-arrow-right"
                  size={24}
                  color={"#A0C4C7"}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainItemsSection}>
            {mainData.length > 0 ? (
              <>
                {mainData?.map((data,index)=>(                
                <ItemsCardContainer
                  key={"101"}
                  imageSrc={
                  data?.photo?.medium?.url    
                }
                  location={"Doha"}
                  title={"Something"}
                />)
                )}
              </>
            ) : (
              <Text>No Data</Text>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Discover;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: scale(8),
    paddingRight: scale(8),
  },
  textOne: {
    fontSize: scale(36),
    color: "#0B646B",
    fontWeight: "900",
  },
  textTwo: {
    color: "#527283",
    fontSize: scale(32),
  },
  icon: {
    width: scale(36),
    height: scale(36),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: scale(8),
  },
  searchBoxContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: scale(8),
    paddingHorizontal: scale(4),
    elevation: scale(12),
    marginTop: scale(24),
    borderRadius: scale(8),
    shadowColor: "#000",
  },
  menuView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(32),
    marginTop: scale(16),
  },
  topTipsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(12),
    marginTop: scale(32),
  },
  topTipsText: {
    color: "#2C7379",
    fontSize: 22,
    fontWeight: "bold",
  },
  exploreText: {
    color: "#A0C4C7",
    fontSize: 14,
    fontWeight: "bold",
  },
  explorePresserSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: scale(8),
  },
  mainItemsSection: {
    paddingHorizontal: scale(12),
    marginTop: scale(32),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    columnGapGap: 40,
  },
});
