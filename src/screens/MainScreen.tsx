import React from 'react';
import { Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, StatusBar, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

/**
 * 메인 화면
 * since 2024/10/26
 * latest
 */
const MainScreen: React.FC = () => {

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* StatusBar 설정: 상단바와 안전하게 분리 */}
            <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" />

            <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
                {/* 검색바 */}
                <View className="flex-row items-center border border-gray-300 rounded-full p-3 mt-6">
                    <TextInput
                        className="flex-1"
                        placeholder="검색어를 입력하세요"
                    />
                </View>

                {/* 주요 공지 사항 및 이벤트 영역 (세로 길이 두 배) */}
                <View className="bg-gray-200 rounded-lg p-6 mt-6 h-64 justify-center">
                    <Text className="text-lg text-center text-gray-700">주요 공지 사항, 이벤트 안내</Text>
                </View>

                {/* 카테고리 아이콘 섹션 */}
                <View className="flex-wrap flex-row justify-between mt-8">
                    {['지도', '숙소', '음식점', '카페', '캠핑', '미용실', '병원', '반려용품'].map((category) => (
                        <View
                            key={category}
                            className="w-1/4 p-2"
                        >
                            <View className="bg-gray-200 rounded-lg h-20 justify-center items-center">
                                <Text className="text-center text-gray-600">{category}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* 이달의 리뷰 Top 4 */}
                <View className="flex-row justify-between items-center mt-10 mb-6">
                    <Text className="text-lg font-semibold text-gray-700">이달의 리뷰 Top 4 모아보기 😎</Text>
                    <TouchableOpacity>
                        <Text className="text-green-600">전체보기</Text>
                    </TouchableOpacity>
                </View>

                {/* 슬라이드 가능한 리뷰 카드 섹션 */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                    {[1, 2, 3, 4].map((item) => (
                        <View key={item} style={{ width: screenWidth * 0.6 }} className="p-2">
                            <View className="bg-gray-200 rounded-lg h-32"></View>
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MainScreen;
