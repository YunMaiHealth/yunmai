def getServer(ip){
    def remote = [:]
    remote.name = "server-${ip}"
    remote.host = ip
    remote.port = 22
    remote.allowAnyHosts = true
    // 需要先在jenkins中创建一个id为cicd的凭据（用户名和密码）
    withCredentials([usernamePassword(credentialsId: "cicd", passwordVariable: "password", usernameVariable: "userName")]) {
    //withCredentials([sshUserPrivateKey(credentialsId: "ServiceServer", keyFileVariable: "identity", passphraseVariable: "", usernameVariable: "userName")]) {
        remote.user = "${userName}"
        remote.password = "${password}"
    }
    return remote
} 
// 此处使用参数化构建，需要在Jenkins的Job中指定构建参数deploy_host
def deploy_host="${params.deploy_host}"

def feiShu_webhook="https://open.feishu.cn/open-apis/bot/v2/hook/3fc1a923-3f8e-4224-b134-33774c7ef8cd"

pipeline {
  agent any
  options {
    parallelsAlwaysFailFast()  // https://stackoverflow.com/q/54698697/4480139
  }
  stages {
    stage("创建工作目录") {
      steps {
        sshCommand remote: getServer("${deploy_host}"), command: "rm -Rf ${JOB_NAME}" ,failOnError:false      
        sshCommand remote: getServer("${deploy_host}"), command: "mkdir ${JOB_NAME}"  
      }
    }
    stage("启动服务端") {
      parallel {
        stage("serve") {
          steps {
            sshPut remote: getServer("${deploy_host}"), from: "./server", into: "./${JOB_NAME}"
            sshCommand remote: getServer("${deploy_host}"), command: "ls -l  ./${JOB_NAME}"
            sshCommand remote: getServer("${deploy_host}"), command: "docker-compose -f ${JOB_NAME}/server/docker-compose.yml down --remove-orphans",failOnError:false       
            sshCommand remote: getServer("${deploy_host}"), command: "docker-compose -f ${JOB_NAME}/server/docker-compose.yml up -d"              
          }
        }
        stage("启动admin-ui") {
          steps {
            sh "sleep 30"
            sshPut remote: getServer("${deploy_host}"), from: "./admin-ui", into: "./${JOB_NAME}"
            sshCommand remote: getServer("${deploy_host}"), command: "ls -l  ./${JOB_NAME}/admin-ui"
            sshCommand remote: getServer("${deploy_host}"), command: "docker build --build-arg REACT_APP_SERVER_URL='${params.REACT_APP_SERVER_URL}' -t ccict/${JOB_NAME} ${JOB_NAME}/admin-ui",failOnError:false  
            sshCommand remote: getServer("${deploy_host}"), command: "docker stop ${JOB_NAME} &&  docker rm ${JOB_NAME}",failOnError:false                
            sshCommand remote: getServer("${deploy_host}"), command: "docker run -d -p ${params.ADMIN_PORT}:80  --name ${JOB_NAME} --restart=always  ccict/${JOB_NAME} ",failOnError:false              
          }
          // https://open.feishu.cn/open-apis/bot/v2/hook/3fc1a923-3f8e-4224-b134-33774c7ef8cd
          //  https://jenkinsci.github.io/dingtalk-plugin/guide/pipeline.html
          post {
            success {
                FeiShu(webhook:"${feiShu_webhook}",proxy:'',type:'MARKDOWN',msg:{title:"你有新的构建消息",text:["[${BUILD_DISPLAY_NAME}](${BUILD_URL})","${currentBuild.duration} ms"]},atAll:false)  
            }
//             failure {
//                 FeiShu(webhook:'${feiShu_webhook}',proxy:'',type:'MARKDOWN',msg:{title:'${JOB_NAME}](${JOB_URL})',text:['[${BUILD_DISPLAY_NAME}](${BUILD_URL})','${currentBuild.duration} ms']},atAll:false)  
//             }
//             aborted {
//                 FeiShu(webhook:'${feiShu_webhook}',proxy:'',type:'MARKDOWN',msg:{title:'${JOB_NAME}](${JOB_URL})',text:['[${BUILD_DISPLAY_NAME}](${BUILD_URL})','${currentBuild.duration} ms']},atAll:false)  
            }
          }            
        }
      }
    }
  }

  post { 
    always {
        sshCommand remote: getServer("${deploy_host}"), command: "echo 全部任务任务执行完毕！"              
        // sshCommand remote: getServer("${deploy_host}"), command: "docker-compose down"        
    }
  }
}


//           post {
//                 success {
//                     feiShuTalk (
//                         robot: "f72aa1bb-0f0b-47c7-8387-272d266dc25c",
//                         type: "INTERACTIVE",
//                         title: "📢 Jenkins 构建通知",
//                         text: [
//                             "📋 **任务名称**：[${JOB_NAME}](${JOB_URL})",
//                             "🔢 **任务编号**：[${BUILD_DISPLAY_NAME}](${BUILD_URL})",
//                             "🌟 **构建状态**: <font color='green'>成功</font>",
//                             "🕐 **构建用时**: ${currentBuild.duration} ms",
//                             "👤 **执  行 者**: Started by user anonymous",
//                             "<at id=all></at>"
//                         ],
//                         buttons: [
//                            [
//                               title: "更改记录",
//                               url: "${BUILD_URL}changes"
//                            ],
//                            [
//                               title: "控制台",
//                               type: "danger",
//                               url: "${BUILD_URL}console"
//                            ]
//                         ]
//                     )
//                 }
//           }      
//         }
