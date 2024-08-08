import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[48px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}Possibilites with {""}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute h-[10px] w-[100px] -bottom-0 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 text-sm font-pregular mt-7 text-center">
            Where creativity meets inovation: embark on a journey of limitless
            exploration with Aora.
          </Text>
        </View>
        <CustomButton />
        <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
