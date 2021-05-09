
# 스토리북 주소
<https://wachsenhaus.github.io/storybook/?path=/story/ges-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B7%B8%EB%A6%B0%EC%9D%B4%ED%8E%99%ED%8A%B8%EC%86%94%EB%A3%A8%EC%85%98--page>


## 빌드별로 볼수있음 ( 개발자용 )
<https://www.chromatic.com/builds?appId=606120d768068700215f44bd>

# 스토리북의 사용 목적
1. React로 사고하기를 달성할 수 있는 `완벽히 분리된`, `재사용 가능한` 컴포넌트 단위의 작업이 가능해집니다. 
2. 수많은 컴포넌트가 가지고 있는 수많은 state를 개발자가 기억할 필요가 없어집니다. 
3. 프로그램을 실행하지 않고 독립적으로 state를 변경시키면서 컴포넌트를 확인 할 수 있습니다. 


## CI/CD
git push `브랜치명`으로 git push가 진행된다면 자동으로 CI가 진행됩니다.  
ex) git push origin master  
갱신이 완료되는 `소요시간`은 대략 `2~3`분 정도 소요됩니다.  

## 스토리북 주소 접속시 사용 방법
* 설명 1
  * ![storybook1](https://user-images.githubusercontent.com/59411545/112788717-6f326580-9096-11eb-9347-0420994b5fad.gif)
  * **빌드번호를 클릭합니다.**
  * *`View Storybook` 을 클릭하여 해당 빌드버전의 `컴포넌트`들을 확인합니다.*

## 상태가 변경될 때 변경되는 상태를 바로 확인 할 수 있다.
![state_change_test](https://user-images.githubusercontent.com/59411545/112790466-5926a400-909a-11eb-8649-299533695768.PNG)

