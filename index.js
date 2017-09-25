function getIssues() {
  const token = 'ae3728409752d5127ec515038057c8feafa84e8f';
  fetch('https://api.github.com/repos/jilli26/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}


function showIssues(json) {

}

function createIssue() {
  const postData = 'test body'
  const token = '';
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value

  fetch('https://api.github.com/repos/jilli26/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    body: JSON.stringify(postData),
  }).then(res => res.json()).then(json => console.log(json));
}


function showResults(json) {

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = '';

  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
  }


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = ''
  return ''
}

function showForkedRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  ('#results').append(`<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`)
}
