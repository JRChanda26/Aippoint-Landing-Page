pipeline {
  agent any

  tools {
    nodejs "nodejs"
  }

  stages {
    stage('Install Dependencies') {
      steps {
        script {
          sh 'npm install --legacy-peer-deps'
        }
      }
    }

    stage('Docker Login') {
      steps {
        sh "echo 'Dev45#iosys89\$' | docker login -u iosysdev --password-stdin"
      }
    }

   stage('Docker Build and Publish') {
  steps {
    script {
      // List files in the current directory
      sh 'ls -al'
      
      env.BUILD_NUMBER = env.BUILD_NUMBER.trim()
      
      // Build the Docker image with the versioned tag
      sh "docker build -t iosysdev/aippoint:${BUILD_NUMBER} ."
      
      // Add an additional 'latest' tag to the image
      sh "docker tag iosysdev/aippoint:${BUILD_NUMBER} iosysdev/aippoint:latest"
      
      // Push both the versioned tag and 'latest' tag
      sh "docker push iosysdev/aippoint:${BUILD_NUMBER}"
      sh "docker push iosysdev/aippoint:latest"
    }
  }
}
    stage('Deploy') {
      steps {
        script {
          def containerInfo = sh(script: 'docker ps --format "{{.ID}} {{.Ports}}"', returnStdout: true).trim()

          // Check if a container exposing port 3000 exists, then stop it
          if (containerInfo.contains('0.0.0.0:3000->')) {
            def containerId = containerInfo.tokenize("\n").find { it.contains('0.0.0.0:3000->') }?.tokenize(" ")[0]

            if (containerId) {
              sh "docker stop $containerId"
            } else {
              echo "No container found exposing port 3000"
            }
          }

          // Run the new Docker container with the specified port mapping
          sh "docker run -d -p 3000:3000 iosysdev/aippoint:${BUILD_NUMBER}"
        }
      }
    }
  }
}
