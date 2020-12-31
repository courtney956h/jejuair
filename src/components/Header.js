import React, { useState } from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import './Header.scss';


const Header = () => {

    const [on, setOn] = useState(false);

    



    return (
        <div className="header_wrap">
            <nav className="top_nav">
                <div className="row">
                    <ul className="company_select">
                        <li>기업우대</li>
                        <li>여행사 우대 <AiOutlineDown className="down" /></li>
                    </ul>
                    <ul className="topmenu">
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li>
                        <li>고객센터</li>
                        <li>한국사이트 <AiOutlineDown className="down" /></li>
                        <li>
                            <fieldset>
                                <from action="#" method="post">
                                    <legend>검색창</legend>
                                    <input type="text" />
                                    <button type="submit"><AiOutlineSearch className="search" /></button>
                                </from>
                            </fieldset>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="logo_nav">
                <div className="row">
                    <h1 className="logo">
                        <Link to="/" className="lnk">
                            <img src="images/jejuairlogo1.png" alt="" />
                        </Link>
                    </h1>
                    <ul className="depth1">
                        <li>항공권 예매
                            <div className={cn("overlay", { on })}></div>
                            <div className={cn("arr", { on })}>
                                <img src="images/sub_arr.png" alt="" />
                            </div>
                            <div className={cn("depth2Wrap", { on })}>
                                <ul className="depth2 row">
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m1s1.png" alt="" />
                                            <p>항공권 예매</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>최저 운임 항공권</li>
                                            <li>서울 출발 항공권</li>
                                            <li>제주 출발 항공권</li>
                                            <li>부산 출발 항공권</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m1s2.png" alt="" />
                                            <p>운항일정</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>운항 스케줄</li>
                                            <li>출발/도착 조회</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m1s3.png" alt="" />
                                            <p>운임안내</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>국제선 운임</li>
                                            <li>국내선 운임</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m1s4.png" alt="" />
                                            <p>단체예약신청</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>단체예약신청</li>
                                            <li>민항공후급증 예약신청</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m1s5.png" alt="" />
                                            <p>모바일 탑승권</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>마이페이지
                            <div className={cn("overlay", { on })}></div>
                            <div className={cn("arr", { on })}>
                                <img src="images/sub_arr.png" alt="" />
                            </div>
                            <div className={cn("depth2Wrap", { on })}>
                                <ul className="depth2 row">
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s1.png" alt="" />
                                            <p>나의 예약<br/>
                                            조회/변경/취소</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s2.png" alt="" />
                                            <p>나의 포인트</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s3.png" alt="" />
                                            <p>나의 쿠폰</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s7.png" alt="" />
                                            <p>나의 JJ라운지이용권</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s8.png" alt="" />
                                            <p>나의 J Pass</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s6.png" alt="" />
                                            <p>나의 정보수정</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>서비스안내
                            <div className={cn("overlay", { on })}></div>
                            <div className={cn("arr", { on })}>
                                <img src="images/sub_arr.png" alt="" />
                            </div>
                            <div className={cn("depth2Wrap", { on })}>
                                <ul className="depth2 row">
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m3s6.png" alt="" />
                                            <p>NEW CLASS</p>
                                        </a>
                                        <a href="#">
                                            <img src="images/gnb_ico_m3s7.png" alt="" />
                                            <p>JJ 라운지</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s3.png" alt="" />
                                            <p>예약안내</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>항공권 예매</li>
                                            <li>항공권 환불</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s7.png" alt="" />
                                            <p>기내서비스</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>기내서비스</li>
                                            <li>Air Cafe</li>
                                            <li>기내면세품 판매</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s8.png" alt="" />
                                            <p>부가서비스</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>사전 수하물 구매</li>
                                            <li>사전 좌석 구매</li>
                                            <li>사전 기내식 주문</li>
                                            <li>기프티켓</li>
                                            <li>프리패스</li>
                                            <li>JJ 라운지 이용권</li>
                                            <li>J Pass</li>
                                            <li>스포츠멤버십</li>
                                            <li>옆 좌석 구매</li>
                                            <li>기타 유료 아이템</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s6.png" alt="" />
                                            <p>공항서비스</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>탑승수속안내</li>
                                            <li>모바일 탑승권</li>
                                            <li>수하물</li>
                                            <li>제주항공 카운터</li>
                                            <li>도움이 필요한 고객</li>
                                            <li>기내 유실물 조회</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m2s6.png" alt="" />
                                            <p>회원혜택존</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>쿠폰혜택N</li>
                                            <li>쿠폰안내</li>
                                            <li>국내선 스탬프 랠리N</li>
                                            <li>일본 스탬프 랠리N</li>
                                            <li>지방발 스탬프 랠리N</li>
                                            <li>제휴혜택</li>
                                            <li>카드 및 환전 혜택</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>이벤트/새소식
                            <div className={cn("overlay", { on })}></div>
                            <div className={cn("arr", { on })}>
                                <img src="images/sub_arr.png" alt="" />
                            </div>
                            <div className={cn("depth2Wrap", { on })}>
                                <ul className="depth2 row">
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m4s8.png" alt="" />
                                            <p>안전하고<br/>
                                            건강한 여행</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m4s1.png" alt="" />
                                            <p>이벤트</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>진행중인 이벤트</li>
                                            <li>종료된 이벤트</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m4s2.png" alt="" />
                                            <p>새소식</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>여행상품
                            <div className={cn("overlay", { on })}></div>
                            <div className={cn("arr", { on })}>
                                <img src="images/sub_arr.png" alt="" />
                            </div>
                            <div className={cn("depth2Wrap", { on })}>
                                <ul className="depth2 row">
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m5s6.png" alt="" />
                                            <p>공항밴</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m5s3.png" alt="" />
                                            <p>호텔</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m5s4.png" alt="" />
                                            <p>렌터카</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m5s5.png" alt="" />
                                            <p>제휴상품</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>여행자 보험</li>
                                            <li>포켓와이파이</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>리프레시 포인트
                            <div className={cn("overlay", { on })}></div>
                            <div className={cn("arr", { on })}>
                                <img src="images/sub_arr.png" alt="" />
                            </div>
                            <div className={cn("depth2Wrap", { on })}>
                                <ul className="depth2 row">
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m6s1.png" alt="" />
                                            <p>리프레시 포인트</p>
                                        </a>
                                        <ul className="depth3">
                                            <li>소개</li>
                                            <li>회원등급</li>
                                            <li>포인트 적립</li>
                                            <li>포인트 사용</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m6s9.png" alt="" />
                                            <p>포인트 내역 조회</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m6s4.png" alt="" />
                                            <p>포인트 구매</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m6s5.png" alt="" />
                                            <p>포인트 선물</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m6s7.png" alt="" />
                                            <p>포인트 양도</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/gnb_ico_m6s8.png" alt="" />
                                            <p>제휴 포인트</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    {/* <div className={cn("overlay", { on })}></div> */}
                </div>
            </div>
        </div>
    );
};

export default Header;