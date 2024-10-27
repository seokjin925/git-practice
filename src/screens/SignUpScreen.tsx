import React, {useRef, useState} from 'react';
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
    // 상태 변수 생성
    const [id, setId] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [passwordCheck, setPasswordCheck] = useState<String>('');
    const [name, setName] = useState<String>('');
    const [phone, setPhone] = useState<String>('');
    const [isTouched, setIsTouched] = useState<boolean>(false);

    // ref 객체 생성
    const idRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const passwordCheckRef = useRef<TextInput>(null);
    const nameRef = useRef<TextInput>(null);
    const phoneRef = useRef<TextInput>(null);

    /**
     * Axios 인스턴스 생성 함수
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
        setIsTouched(true);

        // 입력 필드 유효성 검증
        if (!id.trim() || !password.trim() || !name.trim() || !phone.trim()) {
            Alert.alert('입력폼 빈칸 존재', '모든 입력폼을 채워주세요.');

            // 빈 필드에 포커스
            if (!id.trim()) {
                idRef.current?.focus();
            } else if (!password.trim()) {
                passwordRef.current?.focus();
            } else if (!passwordCheck.trim()) {
                passwordCheckRef.current?.focus();
            } else if (!name.trim()) {
                nameRef.current?.focus();
            } else if (!phone.trim()) {
                phoneRef.current?.focus();
            }
            return;
        }

        // 비밀번호 폼과 비밀번호 확인 폼 일치 여부 확인
        if (password !== passwordCheck) {
            Alert.alert('비밀번호 불일치', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            setPasswordCheck('');
            passwordCheckRef.current?.focus();
            return;
        }

        // axios 인스턴스 생성
        const axiosInstance = createInstanceWithAuth();

        // 회원가입 요청
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

    // 입력 필드 테두리 색상 상태
    const getBorderColorClass = (value: string) =>  {
        if (isTouched) {
            return value ? 'border-blue-300' : 'border-red-600';
        }

        // 초기 상태는 회색 테두리
        return 'border-gray-300';
    };

    return (
        <View className="flex-1 justify-center bg-white px-4">
            <View className="mb-40">
                <Text className="text-3xl font-bold mb-6 text-center text-blue-600">회원가입</Text>
                <TextInput
                    ref={idRef}
                    className={`border ${getBorderColorClass(id as string)} rounded-lg p-3 mb-4`}
                    placeholder="아이디"
                    value={id as string}
                    onChangeText={setId}
                    autoCapitalize="none"
                />
                <TextInput
                    ref={passwordRef}
                    className={`border ${getBorderColorClass(password as string)} rounded-lg p-3 mb-4`}
                    placeholder="비밀번호"
                    value={password as string}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    ref={passwordCheckRef}
                    className={`border ${getBorderColorClass(password as string)} rounded-lg p-3 mb-4`}
                    placeholder="비밀번호 확인"
                    value={passwordCheck as string}
                    onChangeText={setPasswordCheck}
                    secureTextEntry
                />
                <TextInput
                    ref = {nameRef}
                    className={`border ${getBorderColorClass(name as string)} rounded-lg p-3 mb-4`}
                    placeholder="이름"
                    value={name as string}
                    onChangeText={setName}
                    secureTextEntry
                />
                <View className="flex-row justify-between mb-6 w-full">
                    <TextInput
                        ref = {phoneRef}
                        className={`border ${getBorderColorClass(phone as string)} rounded-lg p-3 w-3/4`}
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