function kim(name) {
  return name === "Kim";
}

function solution(seoul) {
    var answer = '';
    var findKim = seoul.find(kim);
    var whereIsKim = seoul.indexOf(findKim);

    answer = `김서방은 ${whereIsKim}에 있다`;
    return answer;
}


solution(["Jane", "Kim"]);