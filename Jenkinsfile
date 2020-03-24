#!/usr/bin/groovy

library identifier: "pipeline-library@v1.5",
retriever: modernSCM(
  [
    $class: "GitSCMSource",
    remote: "https://github.com/redhat-cop/pipeline-library.git"
  ]
)

def version = ''

openshift.withCluster() {

  env.NAMESPACE = openshift.project()
  env.APP_NAME = "${env.APP_NAME}"
  env.BUILD = "${env.NAMESPACE}"
  env.DEV = "${env.DEV}"
  env.CMS_DEV_URL="${env.CMS_HOST_DEV}"
  env.CMS_TEST_URL="${env.CMS_HOST_TEST}"

  echo "Starting Pipeline for ${APP_NAME}..."

}


pipeline {
   agent { label 'jenkins-slave-npm' }
   environment {
     VUE_APP_CMSURL="${env.CMS_DEV_URL}"
   }
   stages {
    stage('Test') {
      steps{
        sh "npm install && npm run lint && npm run test:unit"
        script {
          version=sh(script: 'npm run version --silent', returnStdout: true).trim()
        }
      }
    }
    stage('Build'){
      steps{
        sh "echo ${version}"
        sh "npm run build"
      }
    }

    stage('Bake'){
      steps{
        script{
          openshift.withCluster () {
            def buildSelector = openshift.startBuild("${APP_NAME} --from-dir=dist")
            buildSelector.logs('-f')
          }
        }
      }
    }

    stage('Promote to Dev'){
      steps {
        tagImage(sourceImageName: env.APP_NAME, sourceImagePath: env.BUILD, toImagePath: env.DEV, toImageName: env.APP_NAME, toImageTag: version )
      }
    }

    stage('Deploy to Dev'){
      agent { label 'jenkins-slave-helm' }
      steps{
        sh "cd charts/open-practice-library-webapp && helm upgrade -f dev-values.yaml --set builds.created_image_tag=$version opl-fe ."
      }
    }
  }
}


