import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import './HomeSection.scss';

const Article1 = styled.div`
    padding-top: 65px;
    .slick-arrow {
        position:absolute; 
        bottom: 40%;
        transform: translateY(-50%);
        background: none;
        width: 15px; height: 15px;
        color: #000;
        border: 1px solid #000;
    }
    .slick-prev { left: 740px; z-index: 9; }
    .slick-next { left: 760px; }
    
    .slide { position: relative;
        height: 30vw !important;
        background-repeat: no-repeat;
        background-position: center;
        .text { position: absolute;
            left: 22%; top: 45%;
            transform: translateY(-50%);
            color: #fff;
            background: #f15a22;
            width: 380px;
            padding: 20px;
            h2 { font-size: 40px;
                font-weight: normal; 
                line-height: 50px;
                margin-bottom: 10px; }
            p { font-size: 15px; }
        }
    }
    .slide1 { background-image: url(images/bg1.jpg); }
    .slide2 { background-image: url(images/bg2.jpg); }
    .slide3 { background-image: url(images/bg3.jpg); }
    .slide4 { background-image: url(images/bg4.jpg); }
    .slide5 { background-image: url(images/bg5.jpg); }
`;

const Article2  = styled.div`
    .slick-arrow {
        position:absolute; 
        bottom: 15%;
        transform: translateY(-50%);
        background: none;
        width: 15px; height: 15px;
        color: #000;
        border: 1px solid #000;
    }
    .slick-prev { right: 510px; z-index: 9; }
    .slick-next { right: 490px; }
    
    .slide_bn { height: 100px; 
        text-align: center;
        width: 100%;
        .slide_img { display: inline-block;
            height: 100px;
            width: 17%;
            img { width: 272px; }
        }
        .text_img { display: inline-block;
            text-align: left;
            vertical-align: top;
            h3 { font-size: 30px;
                font-weight: bold; 
                line-height: 50px;
                margin: 10px 0 2px; }
            p { font-size: 15px;
                color: #333; }
        } 
    }
    .bn1 { background: #ffa88c; }
    .bn2 { background: #e8fdff; 
        h3 { color: #00a7e1; }
    }
`;



const Homesection = () => {

    const settings1 = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        prevArrow: <BiCaretLeft />,
        nextArrow: <BiCaretRight />
    }

    const settings2 = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        prevArrow: <BiCaretLeft />,
        nextArrow: <BiCaretRight />
    }
    return (
        <div className="homesec_wrap">
            <Article1 className="article1">
                <div className="flightTab">
                    <div className="f_tabTit">
                        <ul className="f_left">
                            <li><a href="#">왕복</a></li>
                            <li><a href="#">편도</a></li>
                            <li><a href="#">다구간</a></li>
                            <li><a href="#">단체예약 신청</a></li>
                        </ul>
                        <ul className="f_right">
                            <li>
                                <input type="radio" name="n_pay" id="n_pay" checked />
                                <p>일반결제</p>
                            </li>
                            <li>
                                <input type="radio" name="p_pay" id="p_pay" />
                                <p>포인트결제</p>
                            </li>
                        </ul>
                    </div>
                    <div className="f_tabCon">
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <input type="text" id="dep" placeholder="출발지" />
                                        <input type="text" id="arr" placeholder="도착지" />
                                        <input type="text" id="depDate" placeholder="2020-12-07" />
                                        <input type="text" id="arrDate" placeholder="2020-12-07" />
                                        <input type="text" id="selAdt" placeholder="성인 1명" />
                                        <input type="text" id="selChd" placeholder="소아 0명" />
                                        <input type="text" id="selInf" placeholder="유아 0명" />
                                        <button>예매하기</button>
                                    </tr>
                                    <tr>
                                        <p><a href="#">나이계산기</a></p>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Slider {...settings1}>
                    <div className="slide slide1">
                        <div className="text">
                            <h2>면세 쇼핑 혜택<br/>
                                최대 40%</h2>
                            <p>면세 쇼핑러들 모여라!</p>
                            <p>12.07 ~ 12.31, 2020</p>
                        </div>
                    </div>
                    <div className="slide slide2">
                        <div className="text">
                            <h2>하늘에서 즐기는<br/>
                                나만의 낭만 비행</h2>
                            <p>힐링이 필요한 당신 지금 바로 예약하세요!</p>
                            <p>12.07 ~ 12.27, 2020</p>
                        </div>
                    </div>
                    <div className="slide slide3">
                        <div className="text">
                            <h2>[NEWs]신규, 증편<br/>
                                노선소식 알아보기</h2>
                            <p>김포-광주, 무안-제주 동계편 오픈!</p>
                            <p>10.07 ~ 12.31, 2020</p>
                        </div>
                    </div>
                    <div className="slide slide4">
                        <div className="text">
                            <h2>수험생 할인<br/>
                                프로모션</h2>
                            <p>국내선 20% 할인, 8000원 할인 쿠폰</p>
                            <p>12.03 ~ 01.31, 2021</p>
                        </div>
                    </div>
                    <div className="slide slide5">
                        <div className="text">
                            <h2>일본노선 이용고객<br/>
                                알짜배기 혜택모음</h2>
                            <p>2종 무료 혜택+포인트 추가적립+프리미엄클래스 할인</p>
                            <p>11.06 ~ 12.31, 2020</p>
                        </div>
                    </div>
                </Slider>
            </Article1>
            <Article2 className="article2">
                <Slider {...settings2}>
                    <div className="slide_bn bn1">
                        <div className="slide_img">
                            <img src="images/bn2.jpg" alt="" />
                        </div>
                        <div className="text_img">
                            <h3>고객센터 문의하기</h3>
                            <p>자주찾는 질문을 이용하시면 원하시는 답변을 빠르게 찾으실 수 있습니다.</p>
                        </div>
                    </div>
                    <div className="slide_bn bn2">
                        <div className="slide_img">
                            <img src="images/bn1.jpg" alt="" />
                        </div>
                        <div className="text_img">
                            <h3>환불보다 더 좋은 선택!</h3>
                            <p>리프레시 포인트 전환해서 10% 추가 적립 받으세요.</p>
                        </div>
                    </div>
                </Slider>
                <div className="event">
                    <div className="row">
                        <h2>이벤트</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="images/event1.jpg" alt=""/>
                                    <span>썸데이 썸씽스페셜!</span>
                                    <p>2020.11.30 ~ 2021.01.29</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/event2.png" alt=""/>
                                    <span>11월 제주항공 X 카카오페이 즉시할인</span>
                                    <p>2020.11.16 ~ 2021.12.11</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/event3.png" alt=""/>
                                    <span>삼성카드 결제 시 최대 1만원 할인 혜택</span>
                                    <p>2020.11.12 ~ 2021.12.31</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/event4.jpg" alt=""/>
                                    <span>오직 제주항공만 가능한 것</span>
                                    <p>2020.11.02 ~ 2021.12.20</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Article2>
            <article className="article3">
                <div className="row">
                    <div className="news">
                        <h3>새소식</h3>
                        <ul className="newslist">
                            <li>
                                <p><a href="#">국내선 포인트 항공권 취소 위약금 변경 안내</a></p>
                                <p>2020.12.01</p>
                            </li>
                        </ul>
                        <span><AiOutlineDown /></span>
                    </div>
                    <div className="point">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="images/point1.jpg" alt="" />
                                    <div className="point_text">
                                        <strong>제주항공 리프레시 포인트</strong>
                                        <p>부족한 포인트는<br/>
                                            지금 바로 구매할 수 있어요!</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/point2.jpg" alt="" />
                                    <div className="point_text">
                                        <strong>리프레시 포인트 제휴카드</strong>
                                        <p>쓸수록 쌓이는 리프레시 포인트!<br/>
                                            프리미엄 공항라운지 FREE</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="service1">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="images/s1.jpg" alt=""/>
                                    <p>사전 좌석 구매</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/s2.jpg" alt=""/>
                                    <p>사전 수하물 예약</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/s3.jpg" alt=""/>
                                    <p>사전 기내식 주문</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/s4.jpg" alt=""/>
                                    <p>기내 면세품</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/s5.jpg" alt=""/>
                                    <p>렌터카 예약</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="service2">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="images/h1.png" alt="" />
                                    <div className="s2_text">
                                        <strong>호텔예약</strong>
                                        <p>최대 80% 할인~<br/>
                                            전 세계 200만 여개 호텔</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/h2.png" alt="" />
                                    <div className="s2_text">
                                        <strong>에어카페</strong>
                                        <p>어머? 이건 사야해!<br/>
                                            어머! 이건 맛봐야해!</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/h3.jpg" alt="" />
                                    <div className="s2_text">
                                        <strong>브랜드 스토리</strong>
                                        <p>제주항공x동방신기<br/>
                                            글로벌 모델 메이킹</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className="article4">
                <div className="row">
                    <ul className="cs">
                        <li>
                            <h3>고객센터</h3>
                            <h2>1599-1500</h2>
                            <p>(한국) 09:00~19:00</p>
                            <p>(일본) 월~금 14:00~18:00 / 토,일 휴무</p>
                        </li>
                        <li>
                            <h3>SNS</h3>
                            <div className="sns">
                                <p>
                                    <a href="#">
                                        <img src="images/sns1.png" alt="" />
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        <img src="images/sns2.png" alt="" />
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        <img src="images/sns3.png" alt="" />
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        <img src="images/sns4.png" alt="" />
                                    </a>
                                </p>
                            </div>
                        </li>
                        <li>
                            <h3>마케팅 제휴 <p>branding@jejuair.net</p></h3>
                            <p>브랜드 협업, 미디어 노출, 제휴 프로모션 등 제안을 기다립니다.<br/>
                                제안 별 담당자 검토 후 제휴가 진행됩니다.</p>
                            <strong>* 이메일 무단 수집 거부</strong>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    );
};

export default Homesection;