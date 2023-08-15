# BlogTemplate

---

### 윈도우95 스타일의 블로그 템플릿

1. 서버없이 동작합니다
2. 간단하게 설치와 환경변수 설정으로 블로그를 만들어볼 수 있습니다
3. 배포는 vercel, AWS Amplify를 추천합니다

## [guleeBlog click!](https://9utty.world)

<br/>
<br/>
<br/>

# Skill Set.

- [NextJS](https://nextjs.org/)
- [ReactJS](https://ko.legacy.reactjs.org/)
- [github](https://github.com/)
- [github Utterances](https://utteranc.es/)
- SSR, CSR
- [antd](https://ant.design/), [react95](https://storybook.react95.io/?path=/story/docs-welcome-to-react95--page)
- [styled-components](https://styled-components.com/), [tailwind css](https://tailwindcss.com/)

<br/>
<br/>

# Contributor

@9utty

<br/>
<br/>

# Script

### start

```bash
$> npm install
```

```bash
$> npm run dev
```

<br />

### build

```bash
$> npm run build
```

<br/>
<br/>
<br/>

# Doc ( 꼭 절차를 지켜주세요! )

<br/>

1. MetaData를 작성할 새로운 깃헙 레포를 만들고 git clone 을 받으세요

<br/>

2. Category의 이름의 디렉토리를 만들어주세요(ex: ReactJS)

<br/>

3. 그 안에 .mdx(MarkDownXML) 파일을 만들고 문서작성을 해주세요.

```
/* 예시 파일 */
---
title: "웹앱의 구성요소"
date: "2023-05-06"
tags: ["webapp"]
---

# 애플리케이션의 정의

- 애플리케이션의 정의는 다른거 없이 입력을 받고 출력하는 행위를 하는 것을 말하는 것 같다

```

- 해딩 문구 --- title, date, tags --- 필수입니다

<br/>
<br/>

4. 문서 작성 후에 git commit, push를 해주세요.

<br/>

5. github Utterances에 들어가서 MetaData를 저장한 레포에 설치를 해주세요
   [참고](https://ansohxxn.github.io/blog/utterances/)

   <br/>

6. .env.tmp 파일을 .env.local or .env 로 바꿔줍니다

<br/>

7. .env파일에 value들을 입력해주세요

```bash
NEXT_PUBLIC_GITHUB_TOKEN="<github 에서 발급받은 토큰>"
NEXT_PUBLIC_GITHUB_REPO="<레포주소(ex: gulee/repo)>"
NEXT_PUBLIC_UTTERANCES_REPO="<Utterances를 적용할 레포주소(ex: gulee/repo)>"
NEXT_PUBLIC_UTTERANCES_ISSUE_TERM="<Utterances 원하는 이슈 옵션>"
NEXT_PUBLIC_BLOG_TITLE="<블로그 타이틀>"
NEXT_PUBLIC_BLOG_IMAGE="https://user-images.githubusercontent.com/86397600/236520751-cbe5955c-0ec5-46d8-bc42-130ef3c62a1f.png"
NEXT_PUBLIC_BLOG_URL="<블로그 주소>" /* ex: https://9utty.world */


```

<br/>

- 저는 참고로 ISSUE_TERM을 "pathname"으로 했습니다.

<br />
<br />
<br />
<br />

# 배포

1. 배포는 vercel 또는 AWS Amplify를 추천합니다

- Amplify, vercel로 배포시 프로젝트 대시보드에서 환경변수를 추가할 수 있습니다. 여기에 .evn 파일에 작성하신 환경변수 값들을 넣어주세요!(반드시 키 벨류 형식이여야 합니다.)

2. 배포시 npm run build를 실행할때 sitemap도 같이 생성됩니다

3. 생성된 sitemap URL을 GoogleSearchConsol에 등록할 수 있습니다
