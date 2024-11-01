// SignUpForm.tsx

import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface SignUpFormProps {
    id: string;
    setId: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    name: string;
    setName: (text: string) => void;
    phone: string;
    setPhone: (text: string) => void;
    handleSignUp: () => void;
    handlePhoneAuth: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ id, setId, password, setPassword, name, setName, phone, setPhone, handleSignUp, handlePhoneAuth }) => {
    return (
        <View>
            <Text className="text-3xl font-bold mb-6 text-center text-blue-600">회원가입</Text>
            <TextInput className="border border-gray-300 rounded-lg p-3 mb-4" placeholder="아이디" value={id} onChangeText={setId} autoCapitalize="none" />
            <TextInput className="border border-gray-300 rounded-lg p-3 mb-4" placeholder="비밀번호" value={password} onChangeText={setPassword} secureTextEntry />
            <TextInput className="border border-gray-300 rounded-lg p-3 mb-4" placeholder="이름" value={name} onChangeText={setName} />
            <View className="flex-row justify-between mb-6 w-full">
                <TextInput className="border border-gray-300 rounded-lg p-3 w-3/4" placeholder="전화번호" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
                <TouchableOpacity onPress={handlePhoneAuth} className="bg-blue-700 py-3 px-6 rounded-lg">
                    <Text className="text-white font-semibold text-center text-base leading-none">인증</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSignUp} className="bg-blue-700 py-3 px-6 rounded-lg shadow-lg">
                <Text className="text-white text-lg font-semibold text-center">회원가입</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpForm;
