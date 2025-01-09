pipeline {
    agent any
    tools { nodejs 'Node' }
    parameters {
        string(name: 'chatID', defaultValue: '123456789', description: 'Id del chat de Telegram') // Cambia el defaultValue si ya tienes el correcto.
        string(name: 'parametro1', defaultValue: 'true', description: 'Primer parámetro')
        string(name: 'parametro2', defaultValue: 'false', description: 'Segundo parámetro')
    }
    stages {
        stage('Ejecución') {
            steps {
                sh "npm install"
            }
        }
        stage('Parametro 1') {
            steps {
                script {
                    env.res_stage1 = sh(script: "node ./ScriptsJenkins/index.js '${params.parametro1}'", returnStatus: true)
                }
            }
        }
        stage('Parametro 2') {
            steps {
                script {
                    env.res_stage2 = sh(script: "node ./ScriptsJenkins/index.js '${params.parametro2}'", returnStatus: true)
                }
            }
        }
        stage('Resultados') {
            steps {
                script {
                    echo "Resultado de Parametro 1: ${env.res_stage1}"
                    echo "Resultado de Parametro 2: ${env.res_stage2}"

                    if (env.res_stage1 == 0 && env.res_stage2 == 0) {
                        env.result_message = "El proyecto va viento en popa!!!"
                        sh "echo '${env.result_message}'"
                    } else if (env.res_stage1 == 0 && env.res_stage2 == 1) {
                        env.result_message = "Això pinta molt mal"
                        sh "echo '${env.result_message}'"
                    } else {
                        env.result_message = "Alguna de las dos stages ha fallado"
                        sh "echo '${env.result_message}'"
                    }
                }
            }
        }
    }
    post {
        always {
            sh "npm install node-telegram-bot-api"
            sh "node ./ScriptsJenkins/sendTelegram.js '${env.result_message}' '${params.chatID}'"
        }
    }
}
