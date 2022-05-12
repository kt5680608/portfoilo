import {
    Page,
    MainContainer,
    SubMainContainer,
    Title,
    SubTitle,
    DetailTitle,
    DetailSubTitle,
    SeperateLine,
    ContentBox,
    Content,
    Li,
    OpenIcon,
    CloseIcon,
    TitleBox,
} from "./globalStyles/globalStyles";
import { useState } from "react";
function App() {
    const [openMuse, setOpenMuse] = useState(false);
    const [openForkoko, setOpenForkoko] = useState(false);
    const [openHoonDesign, setOpenHoonDesign] = useState(false);
    return (
        <Page>
            <MainContainer>
                <SubMainContainer margin="90px 0 90px 0">
                    <ContentBox>
                        <Title>신입 프론트엔드 개발자 김정훈입니다.</Title>
                        <SeperateLine />
                        <Content>
                            React, AWS을 이용하여 프로젝트를 설계부터 배포,
                            운영해본 경험이 있습니다. 새로운 기술과 라이브러리에
                            관심이 많고 이를 익히는 것을 즐깁니다. 또한 UX /
                            UI와 동적 인터랙션에 관심이 많습니다.{" "}
                        </Content>
                    </ContentBox>
                    <ContentBox>
                        <SubTitle>인적사항</SubTitle>
                        <SeperateLine />
                        <Content>
                            숭실대학교 글로벌미디어학부 재학중 (4학년)
                        </Content>
                        <Content>연락처: 010-7231-7893</Content>
                        <Content>이메일: gns7893@naver.com</Content>
                        <Content
                            onClick={() => {
                                window.open("https://github.com/kt5680608");
                            }}
                        >
                            깃허브: <a>https://github.com/kt5680608</a>
                        </Content>
                        <Content
                            onClick={() => {
                                window.open("https://velog.io/@kt5680608");
                            }}
                        >
                            블로그: <a>https://velog.io/@kt5680608</a>
                        </Content>
                    </ContentBox>
                    <ContentBox>
                        <SubTitle>개인 프로젝트</SubTitle>
                        <SeperateLine />
                        <TitleBox
                            onClick={() => {
                                setOpenMuse(!openMuse);
                            }}
                        >
                            {openMuse === false ? (
                                <CloseIcon color="black" />
                            ) : (
                                <OpenIcon color="black" />
                            )}
                            <DetailTitle>MUSE 프로젝트</DetailTitle>
                        </TitleBox>
                        {openMuse === true && (
                            <>
                                <ContentBox>
                                    <Content
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/MUSE-SSU/MuseFE"
                                            )
                                        }
                                    >
                                        서비스: <a>https://muse.seoul.kr</a>
                                    </Content>
                                    <Content
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/MUSE-SSU/MuseFE"
                                            )
                                        }
                                    >
                                        깃허브:{" "}
                                        <a>
                                            https://github.com/MUSE-SSU/MuseFE
                                        </a>
                                    </Content>
                                </ContentBox>
                                <ContentBox>
                                    <Content>
                                        <Li>
                                            22년도 숭실대학교 글로벌미디어학부
                                            졸업전시회 출품작
                                        </Li>
                                        <Li>
                                            주마다 바뀌는 주제에 대해서
                                            창작자들이 자신의 작업물을 공유하는
                                            창작물 기반 레퍼런스 사이트
                                        </Li>
                                        <Li>
                                            3명의 팀원이 기획, 프론트엔드 개발,
                                            백엔드 개발 분야로 나눠 약 5개월의
                                            기간을 거쳐 완성함.
                                        </Li>
                                        <Li>
                                            디자인과 프론트엔드 개발 업무를 맡아
                                            프로젝트를 진행
                                        </Li>
                                    </Content>
                                </ContentBox>
                                <DetailSubTitle>Learned</DetailSubTitle>
                                <ContentBox>
                                    <Content>
                                        <DetailSubTitle>
                                            전역 상태 관리
                                        </DetailSubTitle>
                                        <ContentBox margin="6px 0px 6px 0px">
                                            <Li>
                                                기존에 유저 데이터를 사용할 때
                                                상위 컴포넌트에서 데이터를 받아
                                                props로 넘겨주는 형태로
                                                사용하였습니다. 하위 컴포넌트가
                                                많아지고 여러번 props로 내려주는
                                                작업을 줄이기 위해서 Redux를
                                                적용하여 useSelector를 통해 유저
                                                데이터를 관리하는 법을
                                                익혔습니다. 뿐만 아니라 문제
                                                상황에 직면하였을 때 문제를
                                                정확히 파악하는 것이 해결에
                                                도움을 준다는 것 또한 배울 수
                                                있었습니다.
                                            </Li>
                                            <DetailSubTitle>
                                                다양한 UI 사용
                                            </DetailSubTitle>
                                            <Li>
                                                레퍼런스를 찾는 사용자의 특성상
                                                빠르고 가볍게 많은 정보를
                                                훑어본다는 것을 고려하여
                                                무한스크롤로 페이지네이션을
                                                구현하였습니다.
                                            </Li>
                                            <Li>
                                                무한 스크롤을 적용한 후 게시물
                                                페이지에 들어갔다가 다시
                                                돌아오게 되면 현재 스크롤 정보를
                                                알 수 없다는 문제가 발생하여
                                                게시물 페이지를 모달로
                                                구현하였습니다. 무한스크롤과
                                                모달의 조합으로 가볍고 빠르게
                                                정보를 훑어보는 사용자들에게
                                                가장 적합한 경험을 제공할 수
                                                있었다고 생각하였습니다.
                                            </Li>
                                            <Li>
                                                사용자 로그를 확인했을때 가입 후
                                                오랜 기간동안 프로필 사진과
                                                닉네임을 변경하지 않는다는 것을
                                                알게 되었습니다. 마이페이지로
                                                안내하여 닉네임과 사진을
                                                변경하는 빈도수를 높이기 위해서
                                                첫 로그인시 마이페이지로
                                                라우팅되는 툴바를 만들어
                                                적용하였습니다.
                                            </Li>
                                            <Li>
                                                기존에 공부하던 framer-motion을
                                                통해 동적인 인터랙션 경험을
                                                유도하였습니다. 인터랙션의
                                                확실한 정체성과 그에 맞는
                                                피드백을 염두해두고
                                                적용하였습니다. 그 결과, 실제로
                                                팀원들이나 교수님들에게 좋은
                                                반응을 받을 수 있었습니다.
                                            </Li>
                                            <DetailSubTitle>
                                                배포 경험
                                            </DetailSubTitle>
                                            <Li>
                                                aws ec2와 로드밸런서를 이용하여
                                                https통신을 적용,
                                                배포하였습니다. Route53을 통해
                                                도메인을 연결하였습니다. 이
                                                과정을 통해서 ec2 인스턴스를
                                                만들고 배포하는 법, 로드밸런서를
                                                통해서 https 통신을 설정하는 법,
                                                Route53을 통해 도메인을 연결하는
                                                법을 익혔습니다. 앞으로의
                                                프로젝트에서도 원활히 이 과정을
                                                실행할 수 있다는 점에서 의의가
                                                있다고 생각합니다.
                                            </Li>
                                        </ContentBox>
                                    </Content>
                                </ContentBox>
                                <DetailSubTitle>사용 기술</DetailSubTitle>
                                <ContentBox>
                                    <Content>
                                        <Li>
                                            React, Redux, Gestalt,
                                            Styled-Components, Framer-motion,
                                            aws ec2, nginx
                                        </Li>
                                    </Content>
                                </ContentBox>
                            </>
                        )}
                        <TitleBox
                            onClick={() => {
                                setOpenForkoko(!openForkoko);
                            }}
                        >
                            {openForkoko === false ? (
                                <CloseIcon color="black" />
                            ) : (
                                <OpenIcon color="black" />
                            )}
                            <DetailTitle>Forkoko 프로젝트</DetailTitle>
                        </TitleBox>
                        {openForkoko === true && (
                            <>
                                <ContentBox>
                                    <Content
                                        onClick={() =>
                                            window.open("http://forkoko.site/")
                                        }
                                    >
                                        서비스: <a>http://forkoko.site/</a>
                                    </Content>
                                    <Content
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/kt5680608/lostark-guide"
                                            )
                                        }
                                    >
                                        깃허브:{" "}
                                        <a>
                                            https://github.com/kt5680608/lostark-guide
                                        </a>
                                    </Content>
                                </ContentBox>
                                <ContentBox>
                                    <Content>
                                        <Li>
                                            로스트아크 게임을 새로 시작하는
                                            사람들을 위한 뉴비 가이드북
                                        </Li>
                                        <Li>
                                            개발기간 약 1주동안 1인개발로 진행
                                        </Li>
                                        <Li>
                                            길드 내부 유저들이 사용중에 있으며
                                            피드백을 받아 수정 중
                                        </Li>
                                    </Content>
                                </ContentBox>
                                <DetailSubTitle>Learned</DetailSubTitle>
                                <ContentBox>
                                    <Content>
                                        <Li>
                                            실제 유저에게 사용성에 대한 평가를
                                            직접 받을 수 있다는 점이 좋은 경험이
                                            되었다고 생각합니다.
                                        </Li>
                                        <Li>
                                            props를 이용한 전역 스타일링을 통해
                                            퍼블리싱에 소요되는 시간을 이전
                                            프로젝트와 비교하여 대폭
                                            단축시켰습니다.
                                        </Li>
                                    </Content>
                                </ContentBox>
                                <DetailSubTitle>사용 기술</DetailSubTitle>
                                <ContentBox>
                                    <Content>
                                        <Li>
                                            React, Chakra-ui, Styled-Components,
                                            Framer-motion, aws ec2, nginx
                                        </Li>
                                    </Content>
                                </ContentBox>
                            </>
                        )}
                        <TitleBox
                            onClick={() => {
                                setOpenHoonDesign(!openHoonDesign);
                            }}
                        >
                            {openHoonDesign === false ? (
                                <CloseIcon color="black" />
                            ) : (
                                <OpenIcon color="black" />
                            )}
                            <DetailTitle>
                                UI-라이브러리 hoondesign 프로젝트
                            </DetailTitle>
                        </TitleBox>
                        {openHoonDesign === true && (
                            <>
                                <ContentBox>
                                    <Content
                                        onClick={() =>
                                            window.open(
                                                "https://www.npmjs.com/package/hoondesign"
                                            )
                                        }
                                    >
                                        패키지:{" "}
                                        <a>
                                            https://www.npmjs.com/package/hoondesign
                                        </a>
                                    </Content>
                                </ContentBox>
                                <ContentBox>
                                    <Content>
                                        <Li>
                                            Button, Flex box, Checkbox 등
                                            기초적인 UI 컴포넌트로 구성되어 있는
                                            UI 라이브러리.
                                        </Li>
                                        <Li>개발기간 약 3일</Li>
                                    </Content>
                                </ContentBox>
                                <DetailSubTitle>Learned</DetailSubTitle>
                                <ContentBox>
                                    <Content>
                                        <Li>
                                            typescript의 문법을 익히고 적용함.
                                            이와 더불어 storybook의 기본
                                            사용법에 대해 배울 수 있었습니다.
                                        </Li>
                                        <Li>
                                            npmjs로 패키지를 배포, 버전을
                                            관리하는 법에 대해 배울 수
                                            있었습니다.
                                        </Li>
                                    </Content>
                                </ContentBox>
                                <DetailSubTitle>Lacked</DetailSubTitle>
                                <ContentBox>
                                    <Content>
                                        <Li>
                                            배포 환경에서 dependencies
                                            라이브러리들이 충돌을 일으켜 몇몇
                                            라이브러리를 삭제한 채
                                            배포하였습니다. 문제를 해결하고
                                            완성도를 더 높인 상태로 배포하지
                                            못했다는 점이 아쉬웠습니다. 이러한
                                            문제를 통해서 코드 뿐 아니라 개발
                                            환경에도 관심을 갖게 되었습니다.
                                        </Li>
                                        <Li>
                                            npmjs로 패키지를 배포, 버전을
                                            관리하는 법에 대해 배울 수
                                            있었습니다.
                                        </Li>
                                    </Content>
                                </ContentBox>
                                <DetailSubTitle>사용 기술</DetailSubTitle>
                                <ContentBox>
                                    <Content>
                                        <Li>
                                            React, typescript, storybook, npmjs
                                        </Li>
                                    </Content>
                                </ContentBox>
                            </>
                        )}
                    </ContentBox>
                </SubMainContainer>
            </MainContainer>
        </Page>
    );
}

export default App;
