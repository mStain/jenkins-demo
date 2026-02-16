pipeline {
    agent any
    stages {
        stage('Deploy to EC2') {
            steps {
                sh '''
                scp -i /var/jenkins_home/.ssh/id_rsa index.html ubuntu@3.72.41.92:/tmp/index.html
                ssh -i /var/jenkins_home/.ssh/id_rsa ubuntu@3.72.41.92 "sudo mv /tmp/index.html /var/www/html/index.html && sudo systemctl restart nginx"
                '''
            }
        }
    }
}
