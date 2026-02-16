pipeline {
    agent any
    stages {
        stage('Pull Code') {
            steps {
                git 'https://github.com/mStain/jenkins-demo.git'
            }
        }
        stage('Deploy to EC2') {
            steps {
                sh '''
                scp -i /var/jenkins_home/.ssh/id_rsa index.html ubuntu@3.72.41.92:/var/www/html/index.html
                ssh -i /var/jenkins_home/.ssh/id_rsa ubuntu@3.72.41.92 "sudo systemctl restart nginx"
                '''
            }
        }
    }
}
