// workspace_study/javascript_study/exam_Page_03_03.js

const arr = [1, 2, 3];
// ReferenceError : alert is not defined (alert 함수는 브라우저 환경에서만 동작 = web API)
arr.forEach(alert);