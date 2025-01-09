pipeline{
    agent any
    tools{nodejs 'Node'}
    stages{
        stage('Instalar'){
            steps{
                sh 'npm install'
            }
        } 
        stage('Test'){
            steps{
                sh 'npm run test'
            }
        }
        stage ('Deploy') {
            steps{
                sh 'npm start'
            }
        }
    }
}