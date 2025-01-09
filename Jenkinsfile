pipeline{
    agent any
    tools{nodejs 'Node'}
    parameters{
      string(name: 'persona_a_saludar', defaultValue: 'user', description: 'persona_a_saludar')    
    }
    stages{
        stage('Ejecucion'){
            steps{
                sh "node index.js '${params.persona_a_saludar}'"
            }
        }
        stage('Stage en paralelo'){
            parallel{
                stage('Stage 1'){
                    steps{
                        echo "Hola mundo desde stage 1"
                    }
            }
                stage('Stage 2'){
                    steps{
                        echo "Hola mundo desde stage 2"
                    }
                }
        }
    }
}
}