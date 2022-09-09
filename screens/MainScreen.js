// @ts-nocheck
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import { Icon, Image, Input } from "@rneui/base";

const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

const MainScreen = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#ff058b" }}>
        <View style={{ marginTop: 50 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              height: 50,
              alignItems: "center",
            }}
          >
            <View style={styles.input}>
              <Icon name="search" color="#ff058b" />
              <Text style={{ color: "gray" }}>Marka, ürün, hizmet ara...</Text>
            </View>
            <View
              style={{
                borderColor: "#ff058b",
                backgroundColor: "white",
                borderWidth: 2,
                borderRadius: 50,
                padding: 5,
              }}
            >
              <Image
                source={require("../assets/bell.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#ff058b",
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <Image
            source={require("../assets/maximumlogo.png")}
            style={{
              width: "50%",
              height: 50,
              resizeMode: "contain",
              marginLeft: x / 4,
            }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/credit-card.png")}
                  style={{
                    width: 50,
                    height: 50,
                    alignContent: "center",
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "lightgray",
                    resizeMode: "contain",
                    tintColor: "#ff058b",
                  }}
                />
              </View>
              <Text style={{ color: "white" }}>Kartlarım</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/bill.png")}
                  style={{
                    width: 50,
                    height: 50,
                    alignContent: "center",
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "lightgray",
                    resizeMode: "contain",
                    tintColor: "#ff058b",
                  }}
                />
              </View>
              <Text style={{ color: "white" }}>Fatura Öde</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/maximum.png")}
                  style={{
                    width: 50,
                    height: 50,
                    alignContent: "center",
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "lightgray",
                    resizeMode: "contain",
                  }}
                />
              </View>
              <Text style={{ color: "white" }}>Maximum</Text>
              <Text style={{ color: "white" }}>Kampanyalar</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/money.png")}
                  style={{
                    width: 50,
                    height: 50,
                    alignContent: "center",
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "lightgray",
                    resizeMode: "contain",
                    tintColor: "#ff058b",
                  }}
                />
              </View>
              <Text style={{ color: "white" }}>Para Gönder</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#ff058b", fontSize: 18, fontWeight: "bold" }}
                >
                  +13
                </Text>
              </View>
              <Text style={{ color: "white" }}>Tümünü</Text>
              <Text style={{ color: "white" }}>Gör</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: y / 2.5,
            backgroundColor: "white",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 25, color: "blue" }}>
            Pazarama
          </Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          >
            <Image
              source={require("../assets/online-shop.png")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
            <Image
              source={require("../assets/cinemaximum.jpeg")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
            <Image
              source={require("../assets/shopping-bag.png")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
            <Image
              source={require("../assets/plane.png")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
            <Image
              source={require("../assets/gas-station.png")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 60,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Online</Text>
              <Text>Alışveriş</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Sinema</Text>
              <Text>Bileti</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Market</Text>
              <Text>Siparişi</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Pazarama</Text>
              <Text>Tatil</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Araçta</Text>
              <Text>Öde</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          >
            <Image
              source={require("../assets/bus.png")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
            <Image
              source={require("../assets/gaming-chair.png")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
            <Image
              source={require("../assets/mastercard.png")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
            <Image
              source={require("../assets/food.png")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
            <Image
              source={require("../assets/pets.png")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Ulaşım</Text>
              <Text>Kartları</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Dijital</Text>
              <Text>Kod Market</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Paha</Text>
              <Text>Biçilemez</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Restoran</Text>
              <Text>Ayrıcalıkları</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>Pazarama</Text>
              <Text>Pet</Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal={true} style={{ backgroundColor: "white" }}>
          <Image
            source={require("../assets/kampanya/pazarama1.webp")}
            style={{ width: x / 1.05, height: y / 3.5, marginHorizontal: 10 }}
          />
          <Image
            source={require("../assets/kampanya/pazarama2.webp")}
            style={{ width: x / 1.05, height: y / 3.5, marginHorizontal: 10 }}
          />
          <Image
            source={require("../assets/kampanya/pazarama3.webp")}
            style={{ width: x / 1.05, height: y / 3.5, marginHorizontal: 10 }}
          />
          <Image
            source={require("../assets/kampanya/pazarama4.webp")}
            style={{ width: x / 1.05, height: y / 3.5, marginHorizontal: 10 }}
          />
          <Image
            source={require("../assets/kampanya/pazarama5.webp")}
            style={{ width: x / 1.05, height: y / 3.5, marginHorizontal: 10 }}
          />
          <Image
            source={require("../assets/kampanya/pazarama6.webp")}
            style={{ width: x / 1.05, height: y / 3.5, marginHorizontal: 10 }}
          />
          <Image
            source={require("../assets/kampanya/pazarama7.webp")}
            style={{ width: x / 1.05, height: y / 3.5, marginHorizontal: 10 }}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "lightgray",
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    height: 50,
    backgroundColor: "white",
  },
});
export default MainScreen;
