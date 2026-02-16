pipeline {
    agent any
    stages {
        stage('Install Nginx') {
            steps {
                sh '''
                sudo apt update
                sudo apt install nginx -y
                sudo systemctl start nginx
                sudo systemctl enable nginx
                '''
            }
        }
    }
}