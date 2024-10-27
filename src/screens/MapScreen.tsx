import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

/**
 * 지도 화면
 * 구글 지도를 표시하는 MapScreen 컴포넌트
 *  @since 2024.10.27
 *  @latest 2024.10.27
 *  @author 김진수
 */
const MapScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // 구글 지도 제공자 설정
                style={styles.map}
                initialRegion={{
                    latitude: 37.7749,   // 초기 위치 (예: 샌프란시스코)
                    longitude: -122.4194,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;