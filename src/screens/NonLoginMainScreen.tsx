import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";

// RootStackParamList 타입 정의
type RootStackParamList = {
    NonLogMain: undefined; // 비로그인 메인 페이지
    Main: undefined; // 메인 페이지
    Login: undefined; // 로그인 페이지
    SignUp: undefined; // 회원가입 페이지
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'NonLogMain'>;

/**
 * 비로그인 메인 화면
 */
const NonLoginMainScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View className="flex-1 justify-center items-center bg-gradient-to-r from-blue-200 to-blue-500 p-4">
            <Text className="text-4xl font-extrabold text-black mb-10">
                트윗 마이 펫
            </Text>
            <View className="flex-row justify-center space-x-4 w-full">
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    className="bg-white py-3 px-6 rounded-lg hover:bg-blue-100 border-blue-700 border"
                >
                    <Text className="text-blue-500 text-lg font-semibold text-center">로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    className="bg-blue-700 py-3 px-6 rounded-lg hover:bg-blue-800"
                >
                    <Text className="text-white text-lg font-semibold text-center">회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NonLoginMainScreen;
