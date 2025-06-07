"use client";

import C_PageTemplate from "@/common/templates/C_PageTemplate";
import C_SectionContainer from "@/common/mocules/C_SectionContainer";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from "@/styles/P_Location.module.scss";

export default function TestPage() {

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const handleTabClick = (label) => {
        console.log("탭 클릭됨:", label);
    };

    const tabList = ["이용안내", "시설안내", "오시는 길", "조직도"];

    const containerStyle = {
		width: '1080px',
		height: '400px'
	};

	const center = {
		lat: 37.547458,
		lng: 127.204603
	};


    return (
        <C_PageTemplate
            title="시설안내" 
            tabBarElementList={tabList}
            tabBarCallback={handleTabClick}
            bannerImageUrl="https://media.istockphoto.com/id/1317323736/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4-%EB%B0%A9%ED%96%A5%EC%9C%BC%EB%A1%9C-%ED%95%98%EB%8A%98%EB%A1%9C-%EB%B0%94%EB%9D%BC%EB%B3%B4%EB%8A%94-%EA%B2%BD%EC%B9%98.jpg?s=612x612&w=0&k=20&c=0xTghmMTXJ5ITCZ-LKTABbaPIK_1kWNf0FSFl_GL_7I="
        >
            <C_SectionContainer title="오시는길">
                <div className={styles.mapSection}>
                    <LoadScript googleMapsApiKey={apiKey}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>

                    <div className={styles.mapFooter}>
                        <span className={styles.mapLabel}>오시는 길</span>
                        <div className={styles.mapInfoWrapper}>
                            <div className={styles.mapInfo}>
                                <strong>주소</strong><span>경기도 하남시 덕풍동로 53 (12936)</span>
                            </div>
                            <div className={styles.mapInfo}>
                                <strong>전화번호</strong><span>031-796-0005</span>
                            </div>
                        </div>
                    </div>
                </div>
            </C_SectionContainer>
                        
        </C_PageTemplate>
    );
}
