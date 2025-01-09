pipeline{
    agent any
    tools{nodejs 'Node'}
    parameters{
      string(name: 'persona_a_saludar', defaultValue: 'user', description: 'persona_a_saludar')   
      string(name: 'parametro1', defaultValue: 'true', description: 'primer parametro')
      string(name: 'parametro2', defaultValue: 'false', description: 'segundo parametro')
    }
    stages{
        stage('Ejecucion'){
            steps{
                sh "node index.js '${params.persona_a_saludar}'"
            }
        }
        stage('Parametro 1'){
            steps{
                script{
                env.res_stage1 = sh(script: "node ./jenkinsScripts/index.js '${params.parametro1}'", returnStatus: true)
                }
            }
        }
        stage('Parametro 2'){
            steps{
                script{
                env.res_stage2 = sh(script: "node ./jenkinsScripts/index.js '${params.parametro2}'", returnStatus: true)
                }
            }
        }
        stage('Resultados'){
            steps{
                script{
                    echo env.res_stage1
                    if (env.res_stage1 == 0 && env.res_stage2 == 0){
                        sh "echo 'El projecte va vent en popa!!!'"
                    }
                    else if (env.res_stage1 == 0 && env.res_stage2 == 1){
                        sh "echo 'Això pinta molt mal'"
                    }else{
                        sh "echo 'Alguna de les dues stages ha fallat'"
                    }
                }}}

    }
}
