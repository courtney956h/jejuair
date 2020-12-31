import React from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer_wrap">
            <div className="footer1">
                <div className="row">
                    <div className="logo_container">
                        <div className="logo_nav">
                            <h1 className="logo">
                                <Link to="/" className="lnk">
                                    <img src="images/jejuairlogo2.png" alt="" />
                                </Link>
                            </h1>
                            <div class="info">
                                <ul className="company_info">
                                    <li>회사소개</li>
                                    <li>투자정보</li>
                                    <li>채용안내</li>
                                    <li>여객운송약관</li>
                                    <li>홈페이지이용약관</li>
                                    <li>개인정보처리방침</li>
                                    <li>사이트맵</li>
                                </ul>
                                <ul className="service_info">
                                    <li>항공교통이용자 서비스 계획</li>
                                    <li>항공교통이용자 피해구제 계획</li>
                                    <li>항공위험물안내</li>
                                </ul>
                            </div>
                        </div>
                        <div className="familysite">
                            <div className="f_img">
                                <img src="images/ico_ios.png" alt="" />
                                <img src="images/ico_android.png" alt="" />
                            </div>
                            <div className="f_select">
                                <p><a href="#">Family Site <AiOutlineDown className="down" /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="recommend">
                        <h4>제주항공이 추천하는 최저가 여행</h4>
                        <ul className="depth1">
                            <li>최저 운임 항공권</li>
                            <li>서울 출발 항공권</li>
                            <li>제주 출발 항공권</li>
                            <li>부산 출발 항공권</li>
                            <li>무안 출발 항공권</li>
                            <li>청주 출발 항공권</li>
                            <li>대구 출발 항공권</li>
                            <li>광주 출발 항공권</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer2">
                <div className="row">
                    <div className="address">
                        <span>대표이사 김이배</span>
                        <span>사업자등록번호 616-81-50527</span>
                        <span>통신판매업신고 제주 2006-125호</span>
                        <span>제주특별자치도 제주시 신대로 64 3층(연동, 건설공제회관)</span>
                        <span>서울지사 서울시 강서구 하늘길 210 국제화물청사 366</span>
                        <p>Copyright ⓒ 2014 by JEJUAIR, CO., LTD. All rights reserved.</p>
                    </div>
                    <div className="value">
                        <img src="images/J_VA_logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;