import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import config from '../config/config';

/**
 * 회원가입 화면
 * @since 2024.10.26
 * @latest 2024.10.27
 * @author 권민지
 */
const SignUpScreen: React.FC = () => {
    const [id, setId] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [name, setName] = useState<String>('');
    const [phone, setPhone] = useState<String>('');

    /**
     * Axios 인스턴스 생성
     */
    const createInstanceWithAuth = () => {
        const baseURL = config.baseURL;

            return axios.create({
                baseURL: baseURL,
                responseType: 'json',
                withCredentials: true,
            });
        };

    /**
     * 회원가입 버튼 클릭 이벤트
     */
    const handleSignUp = async (): Promise<void> => {
        console.log('===== 회원가입 요청 =====');

        const axiosInstance = createInstanceWithAuth();

        try {
            const response = await axiosInstance.post('/auth/signup',
                {
                loginId: id,
                password: password,
                name: name,
                phoneNumber: phone
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('회원가입 성공: ', response.data);
            Alert.alert('회원가입 성공', '회원가입이 완료되었습니다.');
        } catch (error) {
            console.error('회원가입 실패: ', error);
            Alert.alert('회원가입 실패', '회원가입에 실패하였습니다.');
        }
    };

    /**
     * 전화번호 인증 버튼 클릭 이벤트
     */
    const handlePhoneAuth = (): void => {
        // 전화번호 인증 로직
    };

    return (
        <View className="flex-1 justify-center bg-white px-4">
            <View className="mb-40">
                <Text className="text-3xl font-bold mb-6 text-center text-blue-600">회원가입</Text>
                <TextInput
                    className="border border-gray-300 rounded-lg p-3 mb-4"
                    placeholder="아이디"
                    value={id as string}
                    onChangeText={setId}
                    autoCapitalize="none"
                />
                <TextInput
                    className="border border-gray-300 rounded-lg p-3 mb-4"
                    placeholder="비밀번호"
                    value={password as string}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    className="border border-gray-300 rounded-lg p-3 mb-4"
                    placeholder="이름"
                    value={name as string}
                    onChangeText={setName}
                    secureTextEntry
                />
                <View className="flex-row justify-between mb-6 w-full">
                    <TextInput
                        className="border border-gray-300 rounded-lg p-3 w-3/4"
                        placeholder="전화번호"
                        value={phone as string}
                        onChangeText={setPhone}
                        keyboardType={'phone-pad'}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        onPress={handlePhoneAuth}
                        className="bg-blue-700 py-3 px-6 rounded-lg hover:bg-blue-800"
                    >
                        <Text className="text-white font-semibold text-center text-base leading-none">인증</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={handleSignUp}
                    className="bg-blue-700 py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800"
                >
                    <Text className="text-white text-lg font-semibold text-center">회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUpScreen;