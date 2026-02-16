pipeline {
    agent any
    stages {
        stage('Deploy Full Website') {
            steps {
                sh '''
                # Copy all website files to /tmp/website
                scp -i /var/jenkins_home/.ssh/id_rsa -r Jenkinsfile index.html script.js style.css ubuntu@3.72.41.92:/tmp/website

                # Move files to /var/www/html and restart nginx
                ssh -i /var/jenkins_home/.ssh/id_rsa ubuntu@3.72.41.92 '
                  sudo cp -r /tmp/website/* /var/www/html/ &&
                  sudo systemctl restart nginx
                '
                '''
            }
        }
    }
}
