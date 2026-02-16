pipeline {
    agent any
    stages {
        stage('Pull Code') {
            steps {
                git branch: 'main', url: 'https://github.com/mStain/jenkins-demo'
            }
        }
        stage('Deploy to EC2') {
            steps {
                sh '''
                scp -i /var/jenkins_home/.ssh/id_rsa -r * ubuntu@3.72.41.92:/tmp/website
                ssh -i /var/jenkins_home/.ssh/id_rsa ubuntu@3.72.41.92
                    sudo rm -rf /var/www/html/*
                    sudo mv /tmp/website/* /var/www/html/
                    sudo systemctl restart nginx
                "
                '''
            }
        }
    }
}
