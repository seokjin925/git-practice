import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";

/**
 * 로그인 화면
 */
const LoginScreen: React.FC = () => {
    const [id, setId] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const handleLogin = (): void => {
        console.log('===== 로그인 시도 =====');
        console.log('id:', id);
        console.log('password:', password);
    };

    return (
        <View className="flex-1 justify-center bg-white px-4">
            <View className="mb-40">
                <Text className="text-3xl font-bold mb-6 text-center text-blue-600">로그인</Text>
                <TextInput
                    className="border border-gray-300 rounded-lg p-3 mb-4"
                    placeholder="아이디"
                    value={id as string}
                    onChangeText={setId}
                    autoCapitalize="none"
                />
                <TextInput
                    className="border border-gray-300 rounded-lg p-3 mb-6"
                    placeholder="비밀번호"
                    value={password as string}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    onPress={handleLogin}
                    className="bg-blue-700 py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800"
                >
                    <Text className="text-white text-lg font-semibold text-center">로그인</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;
