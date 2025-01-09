pipeline{
    agent any
    tools{nodejs 'Node'}
    parameters{
        string(name: 'persona_a_saludar', defaultValue:'user', description: 'Persona a saludar')
    }
    stages{
        stage('Ejecucion'){
            steps{
                sh "node index.js '${params.persona_a_saludar}'"
            }
        }
    }
}