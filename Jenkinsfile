pipeline {
    agent any 
    stages {
        stage('build') {
            steps {
                bat 'npm --version'
                bat 'npm install'
                bat 'npm build'
                bat 'npm test'
            }
        }
    }
}
