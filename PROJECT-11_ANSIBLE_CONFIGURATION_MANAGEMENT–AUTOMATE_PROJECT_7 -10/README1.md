# INSTALL AND CONFIGURE ANSIBLE ON EC2 INSTANCE

1. Update `Name` tag on your `Jenkins` EC2 Instance to `Jenkins-Ansible`. We will use this server to run playbooks.
   
2. In your GitHub account create a new repository and name it ansible-config-mgt.
   
3. Install ***Ansible*** in the Jenkins-Ansible instance
   
```
    sudo apt update

    sudo apt install ansible
```

Check your Ansible version by running `ansible --version`

  ![Ansible Version](images/ansible_version.png)

4. Configure Jenkins build job to save your repository content every time you change it – this will solidify your Jenkins configuration skills acquired in `Project 9`.
   - Create a new Freestyle project `ansible` in Jenkins and point it to your `ansible-config-mgt` github repository.
         - login to ansible
         - click on New Item
         - Enter a name
         - Select FreeStyle
         - Under Source Code Management, Select `Git`
         - Enter the github repository url(i.e Copy from Github)
         - Under `Branches to build`, make sure it is according to the branch you want to build eg `*/master`, `*/main`, `*/test` as the case maybe
         - Enter the credentials
         - Under Build Triggers, select `GitHub hook trigger for GITScm polling`
         - Under Post-Build Actions, select `Archive the Artifact`
         - The in `Files to archive`, enter `**`
         - Click on `Apply`, `Save`
         - Click `Build Now`
         - NOTE: If any error, go to the `Console output` by clicking the arror beside the `Build Number #`
         - NOTE: To reconfigure go to `Configure`
   - Configure Webhook in GitHub and set webhook to trigger `ansible` build.
        - Goto github and select Settings, Webhook
        - Click on Add Webhook, then confirm your credentials
        - Under Payload Url, enter the jenkins url including the port number eg `http://3.144.97.242:8080/github-webhook/`. Note the `github-webhook/` must be added
        - Under Content type, select `application/json`
        - select `Just the push event`
        - Click `OK` or `Add Webhook`

   - Configure a Post-build job to save all (`**`) files, like you did it in `Project 9`.

5. Test your setup by making some change in `README.MD` file in `master` branch and make sure that builds starts automatically and Jenkins saves the files (build artifacts) in following folder

```
ls /var/lib/jenkins/jobs/ansible/builds/<build_number>/archive/
cat /var/lib/jenkins/jobs/ansible/builds/<build_number>/archive/
```
***Note:*** Trigger Jenkins project execution only for /main (master) branch.

Now your setup will look like this:

 ![Jenkins_Ansible](images/jenkins_ansible.png)

***Tip:*** Every time you stop/start your `Jenkins-Ansible` server – you have to reconfigure GitHub webhook to a new IP address, in order to avoid it, it makes sense to allocate an [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) to your `Jenkins-Ansible` server (you have done it before to your LB server in ***Project 10***). Note that Elastic IP is free only when it is being allocated to an EC2 Instance, so do not forget to release Elastic IP once you terminate your EC2 Instance.

## Step 2 – Prepare your development environment using Visual Studio Code
1. First part of ‘DevOps’ is ‘Dev’, which means you will require to write some codes and you shall have proper tools that will make your coding and debugging comfortable – you need an [Integrated development environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment) or [Source-code Editor](https://en.wikipedia.org/wiki/Source-code_editor). There is a plethora of different IDEs and Source-code Editors for different languages with their own advantages and drawbacks, you can choose whichever you are comfortable with, but we recommend one free and universal editor that will fully satisfy your needs – [Visual Studio Code (VSC)](https://en.wikipedia.org/wiki/Visual_Studio_Code), you can get it [here](https://code.visualstudio.com/download).
   
2. After you have successfully installed VSC, configure it to [connect to your newly created GitHub repository](https://www.dareyio.com/docs/install-and-configure-ansible-on-ec2-instance/www.youtube.com/watch?v=3Tn58KQvWtU&t).
   
3. Clone down your ansible-config-mgt repo to your Jenkins-Ansible instance
```
    git clone <ansible-config-mgt repo link>
```


#
# Special Note:

- If you dont have `Remote Development(by Microsoft)` extension for vscode, make sure you install it.
- It lets you open any folder on a remote machine using SSH and take advantage of VS Code's full feature set.
- Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set.
- Open any folder in the Windows Subsystem for Linux (WSL) and take advantage of Visual Studio Code's full feature set.
- Connect to a remote machine through a Tunnel