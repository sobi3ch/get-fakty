pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'echo \'dziala\''
        sleep 3
        mail(subject: 'Tu Jenkins', body: 'wita z dockera', from: 'jenkins@blueocean', to: 'piotr.sobieszczanski@gmail.com')
        sh '''echo \'skonczylem\'
uptime
whoami
uname -a
arch
date
pwd'''
      }
    }
    stage('test') {
      steps {
        sh '''echo \'Tu sie testuje...\'
sleep 3'''
      }
    }
  }
  environment {
    NAME = 'Sobi3ch'
  }
}